import React, { Component } from "react";
import PropTypes from "prop-types";
import uuid from "uuid/v4";

class UICheckox extends Component {
  handleChange = () => {
    const { onChange, valueKey, item, input, multy } = this.props;
    multy ? onChange(item[valueKey]) : onChange(!input.value);
  };

  render() {
    const { onBlure, type, name, item, selected } = this.props;
    const id = uuid();

    return (
      <div className="checkbox-block">
        <input
          onChange={this.handleChange}
          onBlur={onBlure}
          type={type}
          id={id}
          name={name}
          checked={selected && "checked"}
        />
        <label htmlFor={id}>
          <span className="filter-checkbox">
            <span className="icon icon-check-mark" />
          </span>
          <span className="checkbox-text">
            {item.label || item.name || item[0].label}
          </span>
        </label>
      </div>
    );
  }
}

UICheckox.propTypes = {
  onChange: PropTypes.func,
  onBlure: PropTypes.func,
  type: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  selected: PropTypes.bool,
  valueKey: PropTypes.string,
  multy: PropTypes.bool,
  item: PropTypes.object,
  input: PropTypes.object
};

export default UICheckox;
