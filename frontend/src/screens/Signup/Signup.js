import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Content from "../../components/Content/Content";
import SignupForm from "../../components/SignupForm/SignupForm";

const Signup = () => {

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

  export default Signup;