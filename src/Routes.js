import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './pages/Home'
import Profile from './pages/Profile'
import CreateProfile from './pages/CreateProfile'

class Routes extends Component {
  render() {
    return (
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/new/">Create a new Profile</Link>
            </li>
            <li>
              <Link to={`/profile/rohan/`}>Profile</Link>
            </li>
          </ul>
        </nav>
  
        <Route path="/" exact component={Home} />
        <Route path="/new" exact component={CreateProfile} />
        <Route path="/profile/:name" component={Profile} />
      </div>
    </Router>
    );
  }
}

export default Routes
