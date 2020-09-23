var mongoose = require("mongoose");

var postSchema = mongoose.Schema(
  {
    filename: { type: String },
    path: { type: String },
    username: { type: String },
    category: { type: String },
    // date: Date.now(),
    description: { type: String },
    image: { type: String },
    likes: [],
    comments: [],
    Flag: []
  },
  { versionKey: false }
);

module.exports = mongoose.model("upload", postSchema);
