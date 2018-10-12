import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import uuid from "uuid/v4";
import { UICheckox } from "./UIComponents";

const valueKey = "name";

class FormSelectMulty extends Component {
  state = {
    isOpen: false
  };

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

  optionsRender(options) {
    const { input } = this.props;
    return options.map(option => {
      const isSelected = input.value.includes(`${option[valueKey]}`);
      return (
        <UICheckox
          key={uuid()}
          type="checkbox"
          input={input}
          item={option}
          valueKey={valueKey}
          selected={isSelected}
          onChange={this.handleChange}
          multy
        />
      );
    });
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
                {subTitle} {counter && length}
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

FormSelectMulty.propTypes = {
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

export default FormSelectMulty;
