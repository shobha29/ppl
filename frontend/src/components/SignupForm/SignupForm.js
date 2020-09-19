import React from "react";
import { Link } from "react-router-dom";
import Base from "./SignupFormBase";

export default class SignupForm extends Base {
  render() {
    return (
      <div className="content_rgt">
        <div className="register_sec">
          <h1>Create An Account</h1>
          <form onSubmit={this.handleSubmit}>
            <ul>
              <li>
                <h6 style={{ color: "red" }}>{this.state.status}</h6>
              </li>
              <li>
                <span>Username</span>
                <p style={{ color: "red" }}>{this.state.uexist}</p>
                <input
                  style={
                    this.state.uexist === "username exist"
                      ? { border: "1px solid red" }
                      : {}
                  }
                  type="text"
                  name="username"
                  placeholder="Enter your username"
                  onChange={this.handleChange}
                  required
                />
              </li>
              <li>
                <span>Password</span>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  onChange={this.handleChange}
                  required
                />
              </li>
              <li>
                <span>Email</span>
                <p style={{ color: "red" }}>{this.state.eexist}</p>
                <input
                  style={
                    this.state.eexist === "email exist"
                      ? { border: "1px solid red" }
                      : {}
                  }
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  onChange={this.handleChange}
                  required
                />
              </li>
              <li>
                <span>First Name</span>
                <input
                  type="text"
                  name="fname"
                  placeholder="Enter your first name"
                  onChange={this.handleChange}
                  required
                />
              </li>
              <li>
                <span>Last Name</span>
                <input
                  type="text"
                  name="lname"
                  placeholder="Enter your last name"
                  onChange={this.handleChange}
                  required
                />
              </li>
              <li>
                <input type="checkbox" required />I agree to Term &amp;
                Conditions
              </li>
              <li>
                <input type="submit" defaultValue="Register" />
              </li>
            </ul>
          </form>
          <div className="addtnal_acnt">
            I already have an account.
            <Link to="/login">Login My Account !</Link>
          </div>
        </div>
      </div>
    );
  }
}
