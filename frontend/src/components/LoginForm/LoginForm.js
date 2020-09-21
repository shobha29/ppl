import React, {useState} from "react";
import { Link } from "react-router-dom";
import ApiCaller from '../../Utilis/ApiCaller';

export default function Profile (props) {

  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [status, setstatus] = useState('');

  const handleSubmit= (e) =>{
    e.preventDefault();

    console.log("email: ", email);
    console.log("password: ", password);

    ApiCaller("post", "/loginCheck", { email, password })
      .then(res => {
        console.log("login api working ", res.data);
        setstatus(res.data)

        if(res.data === 'welcome'){
          console.log("props.history ", props.history);
          localStorage.setItem("email", email);
          props.history.push('/timeline')
        }
      })
      .catch(err => {
        console.log("login api error ", err);
      });
  }

    return (
      <div className="content_rgt">
        <div className="login_sec">
          <h1>Log In</h1>
          <form onSubmit={handleSubmit}>
            {/* <h4 style={{ color: "red" }}>{status}</h4> */}
            <ul>
              <li>
                <span>Email-ID</span>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={e => setemail(e.target.value)}
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
                  onChange={e => setpassword(e.target.value)}
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
