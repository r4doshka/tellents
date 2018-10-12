import React, { Component } from "react";
import PropTypes from "prop-types";
import { UIRadio } from "./UIComponents";

class FormRadioGroup extends Component {
  onChange = key => {
    const { onChange } = this.props;
    onChange(key);
  };

  renderOptions() {
    const { options } = this.props;
    return options.map((option, index) => {
      const { labelKey, valueKey, selectedKey, name, type } = this.props;
      const isSelected = selectedKey[0] === option[valueKey];

      return React.cloneElement(<UIRadio key={index} />, {
        selectedKey: selectedKey,
        name: name,
        item: option,
        onChange: this.onChange,
        selected: isSelected,
        labelKey: labelKey,
        valueKey: valueKey,
        type: type
      });
    });
  }

  render() {
    return this.renderOptions();
  }
}

FormRadioGroup.propTypes = {
  options: PropTypes.array,
  onChange: PropTypes.func,
  selectedKey: PropTypes.any,
  valueKey: PropTypes.string,
  labelKey: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string
};

export default FormRadioGroup;
