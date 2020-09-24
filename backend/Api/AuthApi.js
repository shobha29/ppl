var userdb = require("../schemas/userSchema");

module.exports = {
  login: (data) => {
    console.log('data in AuthApi', data);
    return new Promise((resolve, reject) => {
      userdb.find(
        { $and: [{ email: data.email }, { password: data.password }] },
        function (err, result) {
          if (err) {
            console.log("error while login", err);
            reject('something went wrong');
          } else {
            if (result.length == 0) {
              reject("user not exist, sign Up first");
            } else {
              resolve("1");
            }
          }
        }
      );
    });
  },
  signup: (data) => {
    return new Promise((resolve, reject) => {
      userdb.find({ email: data.email }, function (err, result) {
        if (err) {
          console.log("error while checking email ", err);
          reject('something went wrong');
        } else {
          if (result.length == 0) {
            userdb.find({ username: data.username }, function (
              err,
              result
            ) {
              if (err) {
                console.log("error while checking username ", err);
                reject('something went wrong');
              } else {
                if (result.length == 0) {
                  userdb.create(data, function (err, newuser) {
                    if (err) {
                      console.log("error while creation", err);
                      reject('something went wrong');
                    } else {
                      // console.log("user is created successfully ", newuser);
                      resolve("1");
                    }
                  });
                } else {
                  reject("userexist");
                }
              }
            });
          } else {
            reject("emailexist");
            // console.log("user already exist");
          }
        }
      });
    });
  },
};
