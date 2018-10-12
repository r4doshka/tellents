import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { FormRadioGroup } from "./";

class FormRadio extends Component {
  handleChange = key => {
    const { input, onSubmit } = this.props;
    input.onChange([key]);
    onSubmit();
  };

  render() {
    const { input, meta, question } = this.props;
    const { options, title, type } = question;
    return (
      <Fragment>
        <div className="filter-title">{title}:</div>
        <div className="checkbox-list-block clearfix">
          <FormRadioGroup
            name={input.name}
            options={options}
            onChange={this.handleChange}
            onFocus={input.onFocus}
            onBlur={input.onBlure}
            selectedKey={input.value}
            valueKey="label"
            labelKey="name"
            type={type}
          />
        </div>

        {meta.submitError && (
          <div>
            {meta.submitError.map((error, index) => (
              <p key={index.toString()}>{error}</p>
            ))}
          </div>
        )}
      </Fragment>
    );
  }
}

FormRadio.propTypes = {
  input: PropTypes.object,
  meta: PropTypes.object,
  question: PropTypes.object,
  index: PropTypes.number,
  onSubmit: PropTypes.func
};

export default FormRadio;
