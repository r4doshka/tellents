import React, { Component } from "react";
import PropTypes from "prop-types";
const defaultAvatar =
  "https://s3.amazonaws.com/wll-community-production/images/no-avatar.png";

class Avatar extends Component {
  render() {
    const { image, name, handleClick } = this.props;
    return (
      <div
        className="user"
        onClick={() => {
          handleClick();
        }}
      >
        <div className="user-photo">
          <img
            src={image || defaultAvatar}
            className="img-circle img-responsive"
            alt=""
          />
        </div>
        <div className="user-name">{name}</div>
      </div>
    );
  }
}

Avatar.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  handleClick: PropTypes.func
};

export default Avatar;
