var postdb = require("../schemas/postschema");

module.exports = {
  uploadPost: (data) => {
    return new Promise((resolve, reject) => {
      // console.log("data in dashApi ", data);

      postdb.create(data, function (err, newUpload) {
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
      postdb.find((err, result) => {
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
      postdb.find({email: data.email}, (err, result) => {
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
    // console.log("data in singlepost dashApi", data);
    return new Promise((resolve, reject) => {
      // console.log('singlepost is working');
      // console.log('data: ',data);
      postdb.findById(data, (err, result) => {
        if(err){
          // console.log("error while singlepost", err);
          reject('something went wrong');
        }else{
          // console.log("singlepost done", result);
          resolve(result);
        }
      })
    })
  },
  likes: (data) => {
    console.log("data in like dashApi", data);
    return new Promise((resolve, reject) => {
      // console.log('like is working');
      // console.log('data: ',data);
      if (data.isLike){
        console.log("in true");
        postdb.updateOne({_id: data.postId}, {$push: {likes: data.email}}, (err, result) => {
          if (err){
            console.log("error while likes", err);
          reject('something went wrong');
        }else{
          console.log("likes done", result);
          resolve(false);
        }
        })
      }
      else{
        console.log("in false");
        postdb.updateOne({_id: data.postId}, {$pull: {likes: data.email}}, (err, result) => {
          if (err){
            console.log("error while unlikes", err);
          reject('something went wrong');
        }else{
          console.log("unlikes done", result);
          resolve(true);
        }
        })
      }
    })
  },
  comments: (data) => {
    data.commentedOn = new Date()
    console.log("data in comments dashApi", data);
    return new Promise((resolve, reject) => {
      postdb.update({_id: data.postId}, {$push: {comments: {email: data.email, commentedOn: data.commentedOn, comment: data.comment}}}, (err, result) => {
        if(err){
          reject(err)
        }
        else{
          resolve(result);
          console.log("result", result)
        }
      })
    })
  }
};
