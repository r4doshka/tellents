import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import logoImage from "../../assets/images/logo.png";

class Logo extends Component {
  render() {
    const { image } = this.props;
    return (
      <div className="logo">
        <Link className="logo-link" to="/">
          <img src={image || logoImage} height="39" width="auto" alt="Logo" />
        </Link>
      </div>
    );
  }
}

Logo.propTypes = {
  image: PropTypes.string
};

export default Logo;
