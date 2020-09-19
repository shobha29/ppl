import React from "react";
import axios from "axios";
import ApiCaller from "../../Utilis/ApiCaller";

export default class TimelineBase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      description: "",
      category: "",
      username: "Shobha Shrivastava",
      date: new Date(),
      choose: false
    };
  }

  handleChoose = () => {
    console.log("handleChoose function is working");
    console.log("this.state.choose", this.state.choose);
    this.setState(this.state.choose ? { choose: false } : { choose: true });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);

    const formData = new FormData();
    formData.append("avatar", this.state.file);
    formData.append("category", this.state.category);
    formData.append("description", this.state.description);
    formData.append("date", this.state.date);
    formData.append("", this.state.description);

    console.log("formdata", formData);

    ApiCaller("post", "/uploadpost", formData)
      .then(res => {
        console.log("api working", res);
      })
      .catch(err => {
        console.log("api err ", err);
      });
  };

  handleChange = e => {
    if (e.target.name === "avatar") {
      this.setState({ file: e.target.files[0] });
      console.log(e.target.files[0]);
    } else this.setState({ [e.target.name]: e.target.value });
  };
}
