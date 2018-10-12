import React, { Component } from "react";
import PropTypes from "prop-types";
import { TopMenu } from "../Menu";
import Logo from "../Logo/Logo";
import SearchBox from "../SearchBox/SearchBox";
import Avatar from "../Avatar/Avatar";
import DropdownUserSettings from "../DropdownUserSettings/DropdownUserSettings";

class Header extends Component {
  state = {
    userSettings: false
  };
  render() {
    const { user, logout } = this.props;
    return (
      <nav className="main-top-nav flexbox justify-space-between">
        <Logo />
        <div type="button" className="humburger-icon">
          <button type="button" className="btn btn-bg-transparent">
            <span className="icon icon-menu" />
          </button>
        </div>
        <section className="nav-mobile flexbox justify-space-between">
          <section className="nav-tablet flexbox justify-space-center">
            <SearchBox />
            <TopMenu />
          </section>
          <div className="user-box">
            <div className="notifications">
              <div className="notifications-icon" />
            </div>
            <Avatar
              name={user ? user.full_name : "unknow"}
              handleClick={() => {
                this.setState({ userSettings: !this.state.userSettings });
              }}
            />
            <DropdownUserSettings
              active={this.state.userSettings}
              handleClick={() => {
                this.setState({ userSettings: !this.state.userSettings });
              }}
              logout={logout}
            />
          </div>
        </section>
      </nav>
    );
  }
}

Header.propTypes = {
  user: PropTypes.object,
  logout: PropTypes.func
};

export default Header;
