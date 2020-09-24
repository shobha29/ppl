var mongoose = require("mongoose");

var postSchema = mongoose.Schema(
  {
    filename: { type: String },
    path: { type: String },
    email: { type: String },
    category: { type: String },
    description: { type: String },
    date: {type: Date},
    likes: [],
    comments: [],
    Flag: []
  },
  { versionKey: false }
);

module.exports = mongoose.model("upload", postSchema);
