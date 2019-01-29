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
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/new/">Create a new Profile</Link>
            </li>
            <li>
              <Link to={`/rohan/`}>Profile</Link>
            </li>
          </ul>
        </nav>
      </div>
    </Router>
    );
  }
}

export default Routes
