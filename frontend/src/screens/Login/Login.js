import React from "react";
import Form from "../../components/LoginForm/LoginForm";
import Content from "../../components/Content/Content";

export default function Login(props) {
    return (
      <div>
        <div className="container">
          <div className="content">
            <Form {...props} />
            <Content />
          </div>
        </div>
        <div className="clear" />
      </div>
    );
}
