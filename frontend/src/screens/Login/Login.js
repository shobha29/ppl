import React from "react";
import Base from "./LoginBase";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export default class Login extends Base {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="content">
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
            <div className="content_lft">
              <h1>Welcome from PPL!</h1>
              <p className="discrptn">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text.{" "}
              </p>
              <img src="images/img_9.png" alt="" />
            </div>
          </div>
        </div>
        <div className="clear" />
        <Footer />
      </div>
    );
  }
}
