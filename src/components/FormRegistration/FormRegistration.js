import React, { Component } from "react";
import { Form, Field } from "react-final-form";
import { FormTextInput } from "../FormComponents";
import PropTypes from "prop-types";

class FormRegistration extends Component {
  render() {
    const { onSubmit } = this.props;

    return (
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, pristine, invalid }) => (
          <div className="modal-form">
            <form name="form" className="">
              <div className="input-wrapper">
                <Field
                  name="first_name"
                  placeholder="First Name"
                  component={FormTextInput}
                />
              </div>
              <div className="input-wrapper">
                <Field
                  name="last_name"
                  placeholder="Last Name"
                  component={FormTextInput}
                />
              </div>
              <div className="input-wrapper">
                <Field
                  name="email"
                  placeholder="Email"
                  component={FormTextInput}
                />
              </div>
              <div className="input-wrapper">
                <Field
                  type="password"
                  name="password"
                  placeholder="Choose Password"
                  component={FormTextInput}
                />
              </div>
              <button
                className="btn btn-blue btn-with-icon"
                disabled={pristine || invalid}
                onClick={handleSubmit}
              >
                <span className="button-content">
                  <span className="icon icon-right-arrow" />
                  START NOW
                </span>
              </button>
              <button className="btn btn-link">
                Already have an account?<br /> Please SignIn
              </button>
            </form>
          </div>
        )}
      />
    );
  }
}

FormRegistration.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default FormRegistration;
