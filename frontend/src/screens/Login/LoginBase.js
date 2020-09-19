import React from "react";
// import axios from "axios";
import ApiCaller from "../../Utilis/ApiCaller";

class LoginBase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      email: "",
      status: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    console.log("this.state ", this.state);

    // let options = {
    //   method: "post",
    //   url: "http://localhost:8000",
    //   data: { name: "asdd" },
    //   headers: { accept: "application/json", token: "xjljbvd" }
    // };

    // axios({...options}).then().catch()
    // CallApi("post","",data,headers).then().catch()
    const { email, password } = this.state;

    ApiCaller("post", "/loginCheck", { email, password })
      .then(res => {
        console.log("login api working ", res.data);
        this.setState({ status: res.data });
      })
      .catch(err => {
        console.log("login api error ", err);
      });

    // axios
    //   .post("http://localhost:8000/loginCheck", { email, password })
    //   .then(res => {
    //     console.log("res.data ", res.data);
    //     this.setState({ status: res.data });
    //   })
    //   .catch(err => {
    //     console.log("err ", err);
    //   });
  };

  handleChange = event => {
    this.setState({ status: "" });
    this.setState({ [event.target.name]: event.target.value });
  };
}
export default LoginBase;
