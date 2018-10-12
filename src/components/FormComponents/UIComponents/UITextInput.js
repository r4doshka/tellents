import React, { Component } from "react";
import PropTypes from "prop-types";

class UITextInput extends Component {
  render() {
    const { onChange, placeholder, value, onBlure, invalid, type } = this.props;
    return (
      <input
        className={invalid ? "form-control form-control_error" : "form-control"}
        onChange={onChange}
        onBlur={onBlure}
        placeholder={placeholder}
        value={value}
        type={type}
      />
    );
  }
}

UITextInput.propTypes = {
  onChange: PropTypes.func,
  onBlure: PropTypes.func,
  value: PropTypes.any,
  placeholder: PropTypes.string,
  invalid: PropTypes.bool,
  type: PropTypes.string
};

export default UITextInput;
