import React, { Component } from "react";
import { Form, Field } from "react-final-form";
import { FormTextInput } from "../FormComponents";
import PropTypes from "prop-types";

class FormLogin extends Component {
  render() {
    const { onSubmit } = this.props;
    return (
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, pristine, invalid, submitError }) => {
          return (
            <div className="form-signin user-signin">
              <Field
                placeholder="Email Adress"
                name="email"
                type="email"
                component={FormTextInput}
              />
              <Field
                placeholder="Password (8 or more characters)"
                type="password"
                name="password"
                component={FormTextInput}
              />
              {submitError && <div className="error">{submitError}</div>}
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <button
                      onClick={handleSubmit}
                      className="btn btn-lg btn-primary login"
                      disabled={pristine || invalid}
                    >
                      Log In
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      />
    );
  }
}

FormLogin.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default FormLogin;
