import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Form from "../../components/LoginForm/LoginForm";
import Content from "../../components/Content/Content";

export default function Login(props) {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="content">
            <Form {...props} />
            <Content />
          </div>
        </div>
        <div className="clear" />
        <Footer />
      </div>
    );
}
