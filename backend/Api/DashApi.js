var uploadb = require("../schemas/postschema");

module.exports = {
  uploadPost: (data) => {
    return new Promise((resolve, reject) => {
      console.log("data in dashApi ", data);

      uploadb.create(data, function (err, newUpload) {
        if (err) {
          console.log("error while uploading", err);
          reject("error")
        } else {
          console.log("file uploaded");
          resolve("file uploaded");
        }
      });
    });
  },
};
