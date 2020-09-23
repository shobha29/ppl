import React, { useState } from "react";
import { Link } from "react-router-dom";
import ApiCaller from "../../Utilis/ApiCaller";

export default function LoginForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("email: ", email);
    console.log("password: ", password);

    ApiCaller("post", "/auth/login", { email, password })
      .then((res) => {
        console.log("login api working ", res.data);
        setStatus(res.data);

        if (res.data === "welcome") {
          console.log("props.history ", props.history);

          localStorage.setItem("email", email);
          props.history.push("/timeline");
        }
      })
      .catch((err) => {
        console.log("login api error ", err);
      });
  };

  return (
    <div className="content_rgt">
      <div className="login_sec">
        <h1>Log In</h1>
        <form onSubmit={handleSubmit}>
          <p style={{ color: "red" }}>{status}</p>
          <ul>
            <li>
              <span>Email-ID</span>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => {setEmail(e.target.value); setStatus('') }}
                required
              />
            </li>
            <li>
              <span>Password</span>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => {setPassword(e.target.value); setStatus('')}}
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
          <Link to="/signup">Create My Account Now !</Link>
        </div>
      </div>
    </div>
  );
}
