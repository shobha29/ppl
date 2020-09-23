var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var cors = require("cors");

var AuthRoute = require("./Route/AuthRoute");
var DashRoute = require("./Route/DashRoute");

var app = express();

mongoose.connect("mongodb://localhost:27017/ppl", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/auth", AuthRoute);
app.use("/dash", DashRoute);

app.listen(8000, function () {
  console.log("server is working");
});
