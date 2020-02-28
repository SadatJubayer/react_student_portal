import React, { Component } from 'react';
import { Formik, Field, Form } from 'formik';

import { DEPT } from '../data';

class StudentForm extends Component {
  render() {
    const {
      editable,
      editableStudent,
      createStudent,
      updateStudent
    } = this.props;

    // Initail values
    const initialValues = { name: '', dept: '' };

    if (editable) {
      initialValues.name = editableStudent.name;
      initialValues.dept = editableStudent.dept;
    }

    return (
      <div>
        {editable ? 'New Studnet' : 'Update'}

        <Formik
          initialValues={initialValues}
          enableReinitialize={true}
          onSubmit={(values, formmikBag) => {
            console.log(values);
            if (editable) {
              updateStudent(values, editableStudent.id);
            } else {
              createStudent(values);
              formmikBag.resetForm();
            }
          }}
        >
          {() => (
            <Form>
              <Field
                name="name"
                placeholder="Enter Name"
                className="form-control"
              />
              <Field as="select" name="dept" className="form-control">
                <option>Select Department</option>
                {DEPT.map(d => (
                  <option key={d}> {d} </option>
                ))}
              </Field>
              <button type="submit" className="btn btn-success">
                {editable ? 'Update' : 'Create '}
              </button>
              <button
                type="reset"
                className="btn btn-danger"
                onClick={this.props.handleReset}
              >
                REset
              </button>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

export default StudentForm;
