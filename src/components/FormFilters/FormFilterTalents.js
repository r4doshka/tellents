import React, { Component, Fragment } from "react";
import { Form, Field } from "react-final-form";
import arrayMutators from "final-form-arrays";
import PropTypes from "prop-types";
import { FieldArray } from "react-final-form-arrays";
import { FormCheckbox, FormRadio, FormSelectMulty } from "../FormComponents";

const FIELD_BY_TYPE = {
  checkbox: FormCheckbox,
  radio: FormRadio,
  selectMulty: FormSelectMulty
};

class FormFilterTalents extends Component {
  handleSubmit = values => {
    const { onSubmit } = this.props;
    onSubmit(values);
  };

  render() {
    const { entries, initialValues, formName } = this.props;

    return (
      <Form
        onSubmit={this.handleSubmit}
        validate={values => {}}
        initialValues={initialValues}
        mutators={{
          ...arrayMutators
        }}
        keepDirtyOnReinitialize
        render={({
          handleSubmit,
          mutators: { push, pop },
          pristine,
          reset,
          submitting,
          values
        }) => {
          return (
            <div className="panel panel-default">
              <Fragment>
                <FieldArray name={formName}>
                  {({ fields }) => {
                    return fields.map((name, index) => {
                      return (
                        <div key={name} className="filter-block">
                          <Field
                            onSubmit={e => {
                              handleSubmit(e);
                            }}
                            name={`${name}.answer`}
                            question={entries[index]}
                            index={index + 1}
                            component={FIELD_BY_TYPE[entries[index].type]}
                          />
                        </div>
                      );
                    });
                  }}
                </FieldArray>
              </Fragment>
            </div>
          );
        }}
      />
    );
  }
}

FormFilterTalents.propTypes = {
  entries: PropTypes.array,
  onSubmit: PropTypes.func,
  initialValues: PropTypes.object,
  setFilterState: PropTypes.func,
  formName: PropTypes.string
};

export default FormFilterTalents;
