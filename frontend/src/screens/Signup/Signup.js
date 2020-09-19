import React from "react";
import Base from "../../components/SignupForm/SignupFormBase";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Content from "../../components/Content/Content";
import SignupForm from "../../components/SignupForm/SignupForm";

export default class Signup extends Base {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="content">
            <SignupForm />
            <Content />
          </div>
        </div>
        <div className="clear" />
        <Footer />
      </div>
    );
  }
}
