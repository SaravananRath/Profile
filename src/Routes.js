import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from './pages/Home'
import Profile from './pages/Profile'
import CreateProfile from './pages/CreateProfile'

class Routes extends Component {
  render() {
    return (
      <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/new" exact component={CreateProfile} />
          <Route path="/:name" component={Profile} />
        </Switch>
      </div>
    </Router>
    );
  }
}

export default Routes
