import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect
} from "react-router-dom";
import Landing from "./landing-page.js";
import Skills from "../routes/Skills.js";
import Search from "./search-page.js";
import PropTypes from "prop-types";

import "../App.css";
import "../assets/bootstrap/css/bootstrap.min.css";
import "../assets/styles/base.css";
// eslint-disable-next-line
import { currentUserSelector, isUserAuthenticatedSelector } from "../selectors";

class App extends Component {
  render() {
    const { isUserAuthenticated, history } = this.props;
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/landing"
            render={() => (
              <Landing logged={isUserAuthenticated} history={history} />
            )}
          />
          <Route
            exact
            path="/search"
            render={() => (
              <Search logged={isUserAuthenticated} history={history} />
            )}
          />
          <Route path="/skills" component={Skills} />

          <Route
            path="/"
            render={() =>
              isUserAuthenticated ? (
                <Redirect to="/search" />
              ) : (
                <Redirect to="/landing" />
              )
            }
          />
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    isUserAuthenticated: isUserAuthenticatedSelector(state)
  };
};

App.propTypes = {
  history: PropTypes.object,
  isUserAuthenticated: PropTypes.bool
};
export default connect(mapStateToProps)(App);
