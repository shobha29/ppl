import React, {useState} from "react";
import { Link } from "react-router-dom";
import ApiCaller from "../../Utilis/ApiCaller"
import {withRouter} from 'react-router';

const SignupForm = (props) => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("username: ", username);
    console.log("password: ", password);
    console.log("email: ", email);
    console.log("fname: ", fname);
    console.log("lname: ", lname);

    ApiCaller("post", "/auth/signUp", { username, password, email, fname, lname })
      .then(res => {
        console.log("signup res ", typeof(res.data), res.data);
        if(res.data == 1){
          props.history.push("/");
        }else{
          setStatus(res.data);
          console.log('status', status);
        }
      })
      .catch(err => {
        console.log("signup err ", err);
      });
  }

    return (
      <div className="content_rgt">
        <div className="register_sec">
          <h1>Create An Account</h1>
          <form onSubmit={handleSubmit}>
            <ul>
              <li>
                <span>Username</span>
                {status === 'userexist' ? <p style={{ color: "red" }}>Username exist</p> : ''}
                <input
                  style={
                    status === "userexist"
                      ? { border: "1px solid red" }
                      : {}
                  }
                  type="text"
                  name="username"
                  placeholder="Enter your username"
                  value={username}
                  onChange={e => {setUsername(e.target.value); setStatus('')}}
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
                  onChange={e => {setPassword(e.target.value); setStatus('')}}
                  required
                />
              </li>
              <li>
                <span>Email</span>
                {status === 'emailexist' ? <p style={{ color: "red" }}>email exist</p> : ''}
                <input
                  style={
                    status === "emailexist"
                      ? { border: "1px solid red" }
                      : {}
                  }
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  ovalue={email}
                  onChange={e => {setEmail(e.target.value); setStatus('')}}
                  required
                />
              </li>
              <li>
                <span>First Name</span>
                <input
                  type="text"
                  name="fname"
                  placeholder="Enter your first name"
                  value={fname}
                  onChange={e => {setFname(e.target.value); setStatus('')}}
                  required
                />
              </li>
              <li>
                <span>Last Name</span>
                <input
                  type="text"
                  name="lname"
                  placeholder="Enter your last name"
                  value={lname}
                  onChange={e => {setLname(e.target.value); setStatus('')}}
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
            <Link to="/">Login My Account !</Link>
          </div>
        </div>
      </div>
    );
 
}

export default withRouter(SignupForm);