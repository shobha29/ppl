import React from "react";
// import axios from "axios";
import ApiCaller from "../../Utilis/ApiCaller";

export default class SignupBase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
      fname: "",
      lname: "",
      status: "",
      uexist: "",
      eexist: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    console.log("this.state ", this.state);

    // const { username, password, email, fname, lname } = this.state;

    // ApiCaller("post", "/signUp", { username, password, email, fname, lname })
    //   .then(res => {
    //     console.log("signup res ", res.data);
    //     if (res.data === "username exist") {
    //       this.setState({ uexist: res.data });
    //     } else if (res.data === "email exist") {
    //       this.setState({ eexist: res.data });
    //     } else {
    //       this.setState({ status: res.data });
    //     }
    //   })
    //   .catch(err => {
    //     console.log("signup err ", err);
    //   });

    // axios
    //   .post("http://localhost:8000/signUp", this.state)
    //   .then(res => {
    // console.log("res.data ", res.data);
    // if (res.data === "username exist") {
    //   this.setState({ uexist: res.data });
    // } else if (res.data === "email exist") {
    //   this.setState({ eexist: res.data });
    // } else {
    //   this.setState({ status: res.data });
    // }
    //   })
    //   .catch(err => {
    //     console.log("err ", err);
    //   });
  };

  handleChange = (event) => {
    this.setState({ eexist: "", uexist: "", status: "" });
    this.setState({ [event.target.name]: event.target.value });
  };
}
