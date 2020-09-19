import React from "react";
import Base from "./SignupBase";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export default class Signup extends Base {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="content">
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
                        type="username"
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
                        type="fname"
                        name="fname"
                        placeholder="Enter your first name"
                        onChange={this.handleChange}
                        required
                      />
                    </li>
                    <li>
                      <span>Last Name</span>
                      <input
                        type="lname"
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
              <img src="images/img_9.png" alt="" />{" "}
            </div>
          </div>
        </div>
        <div className="clear" />
        <Footer />
      </div>
    );
  }
}
