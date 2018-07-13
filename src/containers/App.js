import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import Landing from "./landing-page.js";
import Skills from "../routes/Skills.js";
import Search from "../routes/Search.js";
import "../App.css";
import "../assets/bootstrap/css/bootstrap.min.css";
import "../assets/styles/landing-styles.css";
import "../assets/styles/landing-media.css";
import "../assets/styles/media.css";
import "../assets/styles/modals.css";

import { currentUserSelector } from "../selectors";

class App extends Component {
  render() {
    console.log(this.props.currentUserSelector);
    return (
      <div className="App">
        <Switch>
          <Route path="/" component={Landing} />
          <Route path="/skills" component={Skills} />
          <Route path="/search" component={Search} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isUserAuthenticated: currentUserSelector(state)
});

export default connect(mapStateToProps)(App);
