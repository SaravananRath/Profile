import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import CreateProfile from "./pages/CreateProfile";

class Routes extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/" exact render={props => <Home {...props} />} />
            <Route
              path="/new"
              exact
              render={props => <CreateProfile {...props} />}
            />
            <Route path="/:name" render={props => <Profile {...props} />} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Routes;
