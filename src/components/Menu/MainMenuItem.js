import React, { Component } from "react";
import PropTypes from "prop-types";

import asMenuItem from "./MenuItem";

class MainMenuItem extends Component {
  render() {
    const { match, children } = this.props;
    return (
      <li className={match ? "active" : ""}>
        <div className="caret" />
        {children}
      </li>
    );
  }
}

MainMenuItem.propTypes = {
  match: PropTypes.object,
  childrens: PropTypes.object
};

export default asMenuItem(MainMenuItem);
