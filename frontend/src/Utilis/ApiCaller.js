import axios from "axios";
import BaseUrl from "../config/index";

function ApiCaller(method, url, data) {
  let option = {
    method,
    url: BaseUrl + url,
    data,
    headers: {
      "content-type": "application/json",
      Accept: "application/json"
    }
  };
  return new Promise((resolve, reject) => {
    console.log("option", option);
    axios({ ...option })
      .then(res => {
        resolve(res);
        console.log("response ", res.data);
      })
      .catch(err => {
        reject(err);
        console.log("err is ", err);
      });
  });

  // axios
  //   .post(BaseUrl + url, data)
  //   .then(res => {
  //     console.log("axios working ");
  //   })
  //   .catch(err => {
  //     console.log("axios err ", err);
  //   });
}

export default ApiCaller;
