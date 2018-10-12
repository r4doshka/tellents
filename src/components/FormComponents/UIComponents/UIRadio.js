import React, { Component } from "react";
import PropTypes from "prop-types";
import uuid from "uuid/v4";

class UIRadio extends Component {
  handleChange = () => {
    const { item, onChange, valueKey, selectedKey } = this.props;

    const equal = selectedKey[0] === item[valueKey];
    !equal ? onChange(item[valueKey]) : onChange();
  };

  render() {
    // eslint-disable-next-line
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
          <span className="checkbox-text">{item.label || item[0].label}</span>
        </label>
      </div>
    );
  }
}

UIRadio.propTypes = {
  onChange: PropTypes.func,
  onBlure: PropTypes.func,
  type: PropTypes.string,
  name: PropTypes.string,
  selected: PropTypes.bool,
  valueKey: PropTypes.string,
  item: PropTypes.object,
  selectedKey: PropTypes.any
};

export default UIRadio;
