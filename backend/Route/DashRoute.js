var express = require("express");
var router = express.Router();
var dash = require("../Api/DashApi");

var multer = require("multer");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now());
  },
  // description: function (req, file, cb) {
  //   cb(null, req.body.description);
  // },
  // category: function (req, file, cb) {
  //   cb(null, req.body.category);
  // },
});

var upload = multer({ storage: storage });

router.post("/uploadpost", upload.single("avatar"), async (req, resp) => {
  console.log("upload is working");
  const data = {
    filename: req.file.filename,
    path: req.file.path,
    email: req.body.email,
    category: req.body.category,
    description: req.body.description,
    date: new Date(),
  };
  try {
    const call = await dash.uploadPost(data);
    resp.send(call);
  } catch (err) {
    console.log("error while file upload", err);
    resp.send(err);
  }
});

router.post("/showPost", async (req, res) => {
  console.log("req.body in showpost", req.body);
  try{
    const call = await dash.showPost(req.body);
    // call = JSON.stringify(call)
    console.log('call', call);
    res.send(call);
  }
  catch (err) {
    res.send(err);
  }
});

module.exports = router;
