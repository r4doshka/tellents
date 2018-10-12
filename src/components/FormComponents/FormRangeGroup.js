import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { UITextInput } from "./UIComponents";
import { FormCheckboxGroup, FormRange } from "./";

class FormRangeGroup extends Component {
  state = {
    range: true
  };

  handleRangeVisibility = value => {
    const fixed = value.includes("Fixed Price");
    const hourly = value.includes("Hourly");

    if (fixed && !hourly) {
      this.setState({
        range: false
      });
    } else {
      this.setState({
        range: true
      });
    }
  };

  handleChange = (key, range = {}) => {
    const { input, onSubmit } = this.props;
    const { value } = input;
    let newValues = [];

    const values = value.filters ? value.filters : value;

    if (key === null) {
      newValues = [...values];
    } else {
      if (values.includes(key)) {
        newValues = values.filter(value => value !== key);
      } else {
        newValues = [...values, key];
      }
    }

    input.onChange({ filters: [...newValues], range: { ...range.range } });
    this.handleRangeVisibility(newValues);
    onSubmit();
  };

  render() {
    const { input, meta, question } = this.props;
    const { options } = question;
    const { range } = this.state;
    return (
      <Fragment>
        <div className="filter-title">{question.title}</div>
        <div className="checkbox-list-block clearfix">
          <FormCheckboxGroup
            type="checkbox"
            input={input}
            options={options}
            onChange={this.handleChange}
            selected={input.value}
            valueKey="label"
            labelKey="name"
            multy
          />
        </div>
        {range && (
          <FormRange
            input={input}
            meta={meta}
            type="text"
            onSubmit={this.handleChange}
          />
        )}
      </Fragment>
    );
  }
}

FormRangeGroup.propTypes = {
  secure: PropTypes.bool,
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  question: PropTypes.object,
  onSubmit: PropTypes.func
};

UITextInput.defaultProps = {
  type: "text"
};

export default FormRangeGroup;
