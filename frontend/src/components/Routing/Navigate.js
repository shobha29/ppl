import React from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import Login from '../../screens/Login/Login';
import Signup from '../../screens/Signup/Signup';
import Timeline from '../../screens/Timeline/Timeline';
import SinglePost from '../../screens/SinglePost/SinglePost';

export default function Navigate() {
    return(
        <Router>
          <Switch>
            <PublicRoute path="/" exact component={Login} />
            <PublicRoute path="/signup" exact component={Signup} />
            <PrivateRoute path="/timeline" exact component={Timeline} />
            <PrivateRoute path="/singlepost" exact component={SinglePost} />
          </Switch>
      </Router>
    )
}