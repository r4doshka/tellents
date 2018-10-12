import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { UICheckox } from "./UIComponents";
import { FormCheckboxGroup } from "./";

class FormCheckbox extends Component {
  handleChange = key => {
    const { input, onSubmit } = this.props;
    const { value } = input;
    let newValues = [];

    if (value.includes(key)) {
      newValues = value.filter(value => value !== key);
    } else {
      newValues = [...value, key];
    }
    input.onChange(newValues);
    onSubmit();
  };

  render() {
    const { input, meta, question } = this.props;
    const { options, title, type } = question;
    return (
      <Fragment>
        <div className="filter-title">{title}:</div>
        <div className="checkbox-list-block clearfix">
          {options.length > 1 ? (
            <FormCheckboxGroup
              type={type}
              input={input}
              options={options}
              onChange={this.handleChange}
              selected={input.value}
              valueKey="label"
              labelKey="name"
              multy
            />
          ) : (
            <UICheckox
              name={input.name}
              value={input.value}
              onBlur={input.onBlur}
              onChange={input.onChange}
              type={type}
              item={options}
            />
          )}
          {meta.submitError && (
            <div>
              {meta.submitError.map((error, index) => (
                <p key={index.toString()}>{error}</p>
              ))}
            </div>
          )}
        </div>
      </Fragment>
    );
  }
}

FormCheckbox.propTypes = {
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

export default FormCheckbox;
