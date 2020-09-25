var uploadb = require("../schemas/postschema");

module.exports = {
  uploadPost: (data) => {
    return new Promise((resolve, reject) => {
      // console.log("data in dashApi ", data);

      uploadb.create(data, function (err, newUpload) {
        if (err) {
          // console.log("error while uploading", err);
          reject('something went wrong');
        } else {
          // console.log("file uploaded");
          resolve("file uploaded");
        }
      });
    });
  },
  allPost: () => {
    return new Promise((resolve, reject) => {
      // console.log('showPost is working');
      // console.log('data: ',data);
      uploadb.find((err, result) => {
        if(err){
          // console.log("error while allpost", err);
          reject('something went wrong');
        }else{
          // console.log("allpost done", result);
          resolve(result);
        }
      })
    })
  },
  myPost: (data) => {
    // console.log("data in mypost dashApi", data);
    return new Promise((resolve, reject) => {
      // console.log('myPost is working');
      // console.log('data: ',data);
      uploadb.find({email: data.email}, (err, result) => {
        if(err){
          // console.log("error while mypost", err);
          reject('something went wrong');
        }else{
          // console.log("mypost done", result);
          resolve(result);
        }
      })
    })
  },
  singlePost: (data) => {
    console.log("data in singlepost dashApi", data);
    return new Promise((resolve, reject) => {
      // console.log('singlepost is working');
      // console.log('data: ',data);
      uploadb.findById(data, (err, result) => {
        if(err){
          console.log("error while singlepost", err);
          reject('something went wrong');
        }else{
          console.log("singlepost done", result);
          resolve(result);
        }
      })
    })
  }
};
