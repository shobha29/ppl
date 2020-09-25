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
    // console.log("option", option);
    axios({...option })
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        console.log("err is ", err);
        reject(err);
      });
  });
}

export default ApiCaller;
