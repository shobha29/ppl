import React, { Component } from "react";
import Login from "./screens/Login/Login";
import Signup from "./screens/Signup/Signup";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Timeline from "./screens/Timeline/Timeline";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/" exact component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/timeline" component={Timeline} />
          </Switch>
        </div>
      </Router>
    );
  }
}
