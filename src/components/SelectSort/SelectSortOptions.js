import React, { Component } from "react";
import PropTypes from "prop-types";

class SelectSortOptions extends Component {
  optionRender = () => {
    return this.props.options.map((item, index) => {
      return (
        <div
          className="radio"
          key={index}
          onClick={e => {
            this.props.onSelectOption(item.text);
          }}
        >
          <div className="option">
            <span className="radio-text">{item.text}</span>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="my-select-options">
        <div className="caret-block">
          <span className="caret-top" />
        </div>
        <div className="radio-block">{this.optionRender()}</div>
      </div>
    );
  }
}

SelectSortOptions.propTypes = {
  options: PropTypes.array,
  onSelectOption: PropTypes.func
};

export default SelectSortOptions;
