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
  description: function (req, file, cb) {
    cb(null, req.body.description);
  },
  category: function (req, file, cb) {
    cb(null, req.body.category);
  },
});

var upload = multer({ storage: storage });

router.post("/uploadpost", upload.single("avatar"), async (req, resp) => {
  console.log("upload is working");
  req.body["filename"] = req.file.filename;
  req.body["path"] = req.file.path;
  console.log("req.body", req.body);
  const call = await dash.uploadPost(req.body);
  resp.send(call);
});

module.exports = router;