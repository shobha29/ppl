import React, { Component } from "react";
import Login from "./screens/Login/Login";
import Signup from "./screens/Signup/Signup";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Timeline from "./screens/Timeline/Timeline";
import SinglePost from "./screens/SinglePost/SinglePost";
// import Example from "./Example"

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <AuthRoute path="/" exact component={Signup} />
            <AuthRoute path="/login" component={Login} />
            <PrivateRoute path="/timeline" component={Timeline} />
            <PrivateRoute path="/singlepost" component={SinglePost} />
          </Switch>
        </div>
      </Router>
    );
  }
}

function PrivateRoute({component: Component, ...rest}) {
  return (
    <Route {...rest} render={props => (
        localStorage.getItem('email') ?
            <Component {...props} />
        : <Redirect to="/login" />
    )} />
);

}

function AuthRoute({component: Component, ...rest}) {
  return (
    <Route {...rest} render={props => (
        !localStorage.getItem('email') ?
            <Component {...props} />
        : <Redirect to="/timeline" />
    )} />
);

}