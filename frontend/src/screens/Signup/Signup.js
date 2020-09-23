import React from "react";
import SignupForm from "../../components/SignupForm/SignupForm";
import Content from "../../components/Content/Content";

const Signup = () => {

    return (
      <div>
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