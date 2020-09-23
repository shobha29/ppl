var express = require("express");
var router = express.Router();
var Api = require("../Api/AuthApi");

router.post("/login", async (req, resp) => {
  console.log("login post is working");
  console.log('req.data', req.body);
  const call = await Api.login(req.body);
  resp.send(call);
});

router.post("/signUp", async (req, resp) => {
  console.log("sign up post is working");
  console.log("sign up post req.body ", req.body);
  const call = await Api.signup(req.body);
  resp.send(call);
});
module.exports = router;
