import React, { Component } from "react";
import PropTypes from "prop-types";
import { UITextInput } from "./UIComponents";

class FormTextInput extends Component {
  render() {
    const { input, meta, label, placeholder, type, name } = this.props;
    return (
      <div>
        {label && <p>{label}</p>}
        <UITextInput
          name={name}
          value={input.value}
          invalid={!!meta.submitError}
          onBlur={input.onBlur}
          onChange={input.onChange}
          placeholder={placeholder}
          type={type}
        />
        {meta.submitError && (
          <div>
            {meta.submitError.map((error, index) => (
              <p key={index.toString()}>{error}</p>
            ))}
          </div>
        )}
      </div>
    );
  }
}

FormTextInput.propTypes = {
  secure: PropTypes.bool,
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string
};

UITextInput.defaultProps = {
  type: "text"
};

export default FormTextInput;
