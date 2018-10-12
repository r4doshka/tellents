import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import Landing from "../routes/Landing";
import { authUser } from "../redux/actions/auth-user-actions";
import { registrationUser } from "../redux/actions/registration-user-action";

class LandingContainer extends Component {
  static propTypes = {
    logged: PropTypes.bool,
    history: PropTypes.object
  };

  componentWillMount = () => {
    const { logged, history } = this.props;
    logged && history.push("/search");
  };

  render() {
    return <Landing {...this.props} checkAuth={this.checkAuth} />;
  }
}

LandingContainer.defaultProps = {
  logged: false
};

const mapStateToProps = state => {
  return state;
  // isGlobalError: state.getIn(["errors", "isGlobalError"]),
  // globalError: state.getIn(["errors", "globalError"])
};

const mapDispatchToProps = {
  authUser,
  registrationUser
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(LandingContainer)
);
