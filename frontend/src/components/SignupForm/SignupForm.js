import React, {useState} from "react";
import { Link } from "react-router-dom";
import ApiCaller from "../../Utilis/ApiCaller"

const SignupForm = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  // const [status, setStatus] = setState("");
  // const [uexist, setUexist] = setState("");
  // const [eexist, setEexist] = setState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("username: ", username);
    console.log("password: ", password);
    console.log("email: ", email);
    console.log("fname: ", fname);
    console.log("lname: ", lname);

    ApiCaller("post", "/signUp", { username, password, email, fname, lname })
      .then(res => {
        console.log("signup res ", res.data);
        // if (res.data === "username exist") {
        //   setUexist(res.data);
        // } else if (res.data === "email exist") {
        //   setEexist(res.data);
        // } else {
        //   setStatus(res.data);
        // }
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
              {/* <li>
                <h6 style={{ color: "red" }}>{status}</h6>
              </li> */}
              <li>
                <span>Username</span>
                {/* <p style={{ color: "red" }}>{uexist}</p> */}
                <input
                  // style={
                  //   uexist === "username exist"
                  //     ? { border: "1px solid red" }
                  //     : {}
                  // }
                  type="text"
                  name="username"
                  placeholder="Enter your username"
                  value={username}
                  onChange={e => setUsername(e.target.value)}
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
                  onChange={e => setPassword(e.target.value)}
                  required
                />
              </li>
              <li>
                <span>Email</span>
                {/* <p style={{ color: "red" }}>{eexist}</p> */}
                <input
                  // style={
                  //   eexist === "email exist"
                  //     ? { border: "1px solid red" }
                  //     : {}
                  // }
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  ovalue={email}
                  onChange={e => setEmail(e.target.value)}
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
                  onChange={e => setFname(e.target.value)}
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
                  onChange={e => setLname(e.target.value)}
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

export default SignupForm;