import React from "react";
import SignupForm from "../../components/SignupForm/SignupForm";
import Content from "../../components/Content/Content";
import Header from "../../components/Header/Header";

const Signup = () => {

    return (
      <div>
        <Header value='' />
        <div className="container">
          <div className="content">
            <SignupForm />
            <Content />
          </div>
        </div>
        <div className="clear" />
      </div>
    );
  }

  export default Signup;