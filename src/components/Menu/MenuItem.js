import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

const asMenuItem = WrappedComponent =>
  class WrappedMenuItem extends Component {
    render() {
      const { link, label } = this.props;
      return (
        <Route
          path={link}
          exact={true}
          children={({ match }) => {
            return (
              <WrappedComponent match={match}>
                <Link to={link}>{label}</Link>
              </WrappedComponent>
            );
          }}
        />
      );
    }
  };

export default asMenuItem;
