import React, { Component } from "react";
import PropTypes from "prop-types";
import { UICheckox } from "./UIComponents";

class FormCheckboxGroup extends Component {
  onChange = key => {
    const { onChange, input } = this.props;
    const range = input.value.range;

    onChange(key, { range });
  };
  renderOptions(options) {
    const { input, type, selected, valueKey, labelKey, multy } = this.props;
    return options.map((option, index) => {
      const isSelected = selected.filters
        ? selected.filters.includes(`${option[valueKey]}`)
        : selected.includes(`${option[valueKey]}`);

      return React.cloneElement(<UICheckox />, {
        key: index,
        onBlur: input.onBlur,
        onChange: this.onChange,
        type: type,
        selected: isSelected,
        labelKey: labelKey,
        valueKey: valueKey,
        item: option,
        input: input,
        name: input.name,
        multy: multy
      });
    });
  }

  render() {
    const { options } = this.props;
    return this.renderOptions(options);
  }
}

FormCheckboxGroup.propTypes = {
  input: PropTypes.object,
  meta: PropTypes.object,
  type: PropTypes.string,
  options: PropTypes.array,
  onChange: PropTypes.func,
  selected: PropTypes.any,
  valueKey: PropTypes.string,
  labelKey: PropTypes.string,
  multy: PropTypes.bool
};

export default FormCheckboxGroup;
