var express = require("express");
var app = express();
var cors = require("cors");

var mongoose = require("mongoose");
var userdb = require("./schema");
var uploadb = require("./postschema");

var multer = require("multer");

var bodyParser = require("body-parser");

mongoose.connect("mongodb://localhost:27017/userdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(cors());

var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function(req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now());
  },
  description: function(req, file, cb) {
    cb(null, req.body.description);
  },
  category: function(req, file, cb) {
    cb(null, req.body.category);
  }
});

var upload = multer({ storage: storage });

app.get("/postupload", (req, resp) => {
  resp.send("uploaded");
});

app.post("/uploadpost", upload.single("avatar"), function(req, resp) {
  console.log("upload is working");
  // console.log("req.body  ", req.body);
  req.body["filename"] = req.file.filename;
  req.body["path"] = req.file.path;
  console.log("req.file ", req.body);
  uploadb.create(req.body, function(err, newUpload) {
    if (err) {
      console.log("error while uploading", err);
    } else {
      console.log("file uploaded");
      resp.send("file uploaded");

      // console.log("file id ", newUpload);
      // uploadb.findByIdAndUpdate(newUpload.id, req.body, function(err, result) {
      //   if (err) {
      //     console.log("error while update", err);
      //   } else {
      //     console.log("updated");
      //     resp.send("file uploaded");
      //   }
      // });
    }
  });
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/sign", (req, resp) => {
  resp.send("sign in");
});

app.post("/signUp", (req, resp) => {
  console.log("sign up post is working");
  console.log("sign up post req.body ", req.body);

  userdb.find({ email: req.body.email }, function(err, result) {
    if (err) {
      console.log("error while checking email ", err);
    } else {
      if (result.length == 0) {
        userdb.find({ username: req.body.username }, function(err, result) {
          if (err) {
            console.log("error while checking username ", err);
          } else {
            if (result.length == 0) {
              userdb.create(req.body, function(err, newuser) {
                if (err) {
                  console.log("error while creation", err);
                } else {
                  // console.log("user is created successfully ", newuser);
                  resp.send("user is created successfully");
                }
              });
            } else {
              resp.send("username exist");
            }
          }
        });
      } else {
        resp.send("email exist");
        // console.log("user already exist");
      }
    }
  });
});

app.get("/log", (req, resp) => {
  console.log("login get is working");
  resp.send("done");
});

app.post("/loginCheck", (req, resp) => {
  console.log("login post is working");

  userdb.find(
    {
      email: req.body.email
    },
    function(err, result) {
      if (err) {
        console.log("error while login", err);
      } else {
        if (result.length == 0) {
          // console.log("user not exist");
          resp.send("user not exist, sign Up first");
        } else {
          userdb.find({ password: req.body.password }, function(err, result) {
            if (err) {
              console.log("error while checking password", err);
            } else {
              if (result.length == 0) {
                resp.send("email/password is incorrect");
              } else {
                resp.send(result[0].email);
                // console.log("successfully logged in");
              }
            }
          });
        }
      }
    }
  );
});

app.listen(8000, function() {
  console.log("server is working");
});
