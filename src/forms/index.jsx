import React, { Component } from "react";
import { Formik, Field, Form } from "formik";

import { DEPT } from "../data";

class StudentForm extends Component {
  state = {
    searchString: ""
  };

  render() {
    const {
      editable,
      editableStudent,
      createStudent,
      updateStudent
    } = this.props;

    // Initial values
    const initialValues = { name: "", dept: "" };

    if (editable) {
      initialValues.name = editableStudent.name;
      initialValues.dept = editableStudent.dept;
    }

    return (
      <div className="border border-primary p-5 mt-2">
        <div className="alert alert-success text-center">
          {editable ? "Update Student" : "Add Student"}
        </div>
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

              <div className="row">
                <div className="col-sm-6">
                  {" "}
                  <button
                    type="submit"
                    className="btn btn-success btn-block m-2"
                  >
                    {editable ? "Update" : "Create "}
                  </button>
                </div>
                <div className="col-sm-6">
                  {" "}
                  <button
                    type="reset"
                    className="btn btn-danger btn-block m-2"
                    onClick={this.props.handleReset}
                  >
                    Reset
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
        <input
          type="text"
          name="search"
          className="form-control"
          value={this.state.searchString}
          placeholder="Search Here..."
          onChange={e => this.setState({ searchString: e.target.value })}
          onKeyUp={() => this.props.handleSearch(this.state.searchString)}
        />
      </div>
    );
  }
}

export default StudentForm;
