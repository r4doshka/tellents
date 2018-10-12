import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { FormRadioGroup } from "./";

class FormSelectOnce extends Component {
  state = {
    isOpen: false
  };

  handleChange = key => {
    const { input, onSubmit } = this.props;
    input.onChange([key]);
    onSubmit();
  };

  optionsRender(options) {
    const { input } = this.props;
    return (
      <FormRadioGroup
        name={input.name}
        options={options}
        onChange={this.handleChange}
        onFocus={input.onFocus}
        onBlur={input.onBlure}
        selectedKey={input.value}
        valueKey="label"
        labelKey="name"
        type="radio"
      />
    );
  }

  render() {
    const { question, input } = this.props;
    const { options, title, subTitle, counter } = question;
    const { isOpen } = this.state;

    const length = `(${input.value.length > 0 ? input.value.length : "All"})`;
    return (
      <Fragment>
        <div className="filter-title">{title}:</div>
        <div className={`filter-dropdown-block clearfix ${isOpen && "open"}`}>
          <button
            type="button"
            className="btn btn-default dropdown-toggle"
            onClick={() => {
              this.setState({ isOpen: !isOpen });
            }}
          >
            <div className="flexbox justify-space-between">
              <span className="text">
                {input.value[0] || subTitle} {counter && length}
              </span>
              <span className="icon icon-down-arrow" />
            </div>
          </button>
          <div className="dropdown-list">
            <div className="caret-block">
              <span className="caret-top" />
            </div>
            <div className="dropdown-list-wrapper">
              <div className="checkbox-list-block">
                {this.optionsRender(options)}
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

FormSelectOnce.propTypes = {
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

export default FormSelectOnce;
