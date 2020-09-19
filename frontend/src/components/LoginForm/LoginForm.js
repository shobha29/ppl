import React from "react";
import { Link } from "react-router-dom";
import Base from "./LoginFormBase";

export default class Profile extends Base {
  render() {
    return (
      <div className="content_rgt">
        <div className="login_sec">
          <h1>Log In</h1>
          <form onSubmit={this.handleSubmit}>
            <h4 style={{ color: "red" }}>{this.state.status}</h4>
            <ul>
              <li>
                <span>Email-ID</span>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
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
                <input type="checkbox" />
                Remember Me
              </li>
              <li>
                <input type="submit" defaultValue="Log In" />
                <a href>Forgot Password</a>
              </li>
            </ul>
          </form>
          <div className="addtnal_acnt">
            I do not have any account yet.
            <Link to="/">Create My Account Now !</Link>
          </div>
        </div>
      </div>
    );
  }
}
