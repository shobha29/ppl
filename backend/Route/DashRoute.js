var express = require("express");
var router = express.Router();
var dash = require("../Api/DashApi");

var multer = require("multer");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, new Date + '.jpeg');
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

  // console.log("upload is working",req.body);
  const data = {
    filename: req.file.filename,
    path: req.file.path,
    email: req.body.email,
    category: req.body.category,
    description: req.body.description,
    date: new Date,
  };
  try {
    const call = await dash.uploadPost(data);
    resp.send(call);
  } catch (err) {
    // console.log("error while file upload", err);
    resp.send(err);
  }
});

router.post("/allPost", async (req, res) => {
  // console.log("req.body in allpost");
  try{
    const call = await dash.allPost();
    // console.log('call', call);
    res.send(call);
  }
  catch (err) {
    res.send(err);
  }
});

router.post("/myPost", async (req, res) => {
  // console.log("req.body in mypost", req.body);
  try{
    const call = await dash.myPost(req.body);
    // console.log('call', call);
    res.send(call);
  }
  catch (err) {
    res.send(err);
  }
});

router.get("/singlepost/:id", async (req, res) => {
  // console.log("req.body in singlepost",  req.params.id);
  try{
    const call = await dash.singlePost(req.params.id);
    console.log('call', call);
    res.send(call);
  }
  catch (err) {
    res.send(err);
  }
});

module.exports = router;
