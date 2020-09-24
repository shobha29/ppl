var uploadb = require("../schemas/postschema");

module.exports = {
  uploadPost: (data) => {
    return new Promise((resolve, reject) => {
      console.log("data in dashApi ", data);

      uploadb.create(data, function (err, newUpload) {
        if (err) {
          console.log("error while uploading", err);
          reject('something went wrong');
        } else {
          console.log("file uploaded");
          resolve("file uploaded");
        }
      });
    });
  },
  showPost: (data) => {
    return new Promise((resolve, reject) => {
      console.log('showPost is working');
      console.log('data: ',data);
      uploadb.find({email: data.email}, (err, result) => {
        if(err){
          console.log("error while showpost", err);
          reject('something went wrong');
        }else{
          // console.log("show post done", result);
          resolve(result);
        }
      })
    })
  }
};
