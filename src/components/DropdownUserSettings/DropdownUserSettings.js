import React, { Component } from "react";
import PropTypes from "prop-types";

class DropdownUserSettings extends Component {
  render() {
    const { active, handleClick, logout } = this.props;
    return (
      <div
        className="user-box-nav dropdown"
        onClick={() => {
          handleClick();
        }}
      >
        <span className="caret" />
        <ul
          className="dropdown-menu ng-scope"
          style={{ display: active ? "block" : "none" }}
        >
          <li>
            <a href="">User Settings</a>
          </li>
          <li>
            <a href="">Payment Account</a>
          </li>
          <li>
            <a
              // eslint-disable-next-line
              href="javascript:"
              onClick={() => {
                logout();
              }}
            >
              Log Out
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

DropdownUserSettings.propTypes = {
  active: PropTypes.bool,
  handleClick: PropTypes.func,
  logout: PropTypes.func
};

export default DropdownUserSettings;
