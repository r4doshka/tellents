import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { UITextInput } from "./UIComponents";

class FormRange extends Component {
  state = {
    min: 0,
    max: 1000
  };

  handleSubmit = () => {
    const { onSubmit } = this.props;
    const { min, max } = this.state;

    onSubmit(null, { range: { min, max } });
  };

  render() {
    const { input, meta, type } = this.props;
    const { min, max } = this.state;
    return (
      <Fragment>
        <div className="filter-inputs flexbox justify-space-between">
          <UITextInput
            value={min}
            invalid={!!meta.submitError}
            onBlur={input.onBlur}
            onChange={e => {
              this.setState({
                min: e.target.value
              });
            }}
            type={type}
          />
          <span>to</span>
          <UITextInput
            value={max}
            invalid={!!meta.submitError}
            onBlur={input.onBlur}
            onChange={e => {
              this.setState({
                max: e.target.value
              });
            }}
            type={type}
          />
        </div>
        <button
          style={{ width: "100%" }}
          className="btn btn-primary"
          onClick={() => {
            this.handleSubmit();
          }}
        >
          Find
        </button>
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

FormRange.propTypes = {
  secure: PropTypes.bool,
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  onSubmit: PropTypes.func
};

UITextInput.defaultProps = {
  type: "text"
};

export default FormRange;
