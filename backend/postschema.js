var mongoose = require("mongoose");

var postSchema = mongoose.Schema(
  {
    filename: { type: String },
    path: { type: String },
    // username: { type: String },
    category: { type: String },
    // date: { type: String },
    description: { type: String }
    // image: { type: String },
    // likes: { type: Number },
    // comments: { type: String },
    // Flag: { type: String }
  },
  { versionKey: false }
);

module.exports = mongoose.model("upload", postSchema);
