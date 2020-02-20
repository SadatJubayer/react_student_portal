import React, { Component } from 'react';

const DEFAULT_VALUES = {
  id: '',
  name: '',
  department: ''
};

const InputElement = ({ name, type, value, placeholder, error, onChange }) => {
  return (
    <div className="form-group">
      <input
        type={type}
        className={`form-control ${error ? 'is-invalid' : ''}`}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

export default class StudentInputForm extends Component {
  state = {
    values: DEFAULT_VALUES,
    errors: {},
    students: [
      {
        id: 1,
        name: 'Sadat',
        department: 'CSE'
      },
      {
        id: 2,
        name: 'SSSSSadat',
        department: 'CSE'
      }
    ]
  };

  handleSubmit = e => {
    e.preventDefault();

    const { isValid, errors } = this.validateFrom();
    if (isValid) {
      console.log(this.state.values.id);

      const {
        values: { id, name, department },
        students
      } = this.state;

      // Check already exists for edit
      const oldStudent = students.find(student => student.id === id);

      // if this is not a old student, update it
      if (oldStudent) {
        students.forEach(student => {
          if (student.id === id) {
            student.id = id;
            student.department = department;
            student.name = name;
          }
        });
        this.setState({ students, values: DEFAULT_VALUES });
      }
      // if not, then add it
      else {
        const students = [...this.state.students, this.state.values];
        this.setState({ students, values: DEFAULT_VALUES });
      }
    } else {
      this.setState({ errors });
    }
  };

  handleChange = e => {
    this.setState({
      values: {
        ...this.state.values,
        [e.target.name]: e.target.value
      }
    });
  };

  handleEdit = id => {
    console.log(id);

    // Finding the student
    const student = this.state.students.find(s => s.id === id);

    // update the form values
    this.setState({
      values: student
    });

    console.log(student);
  };

  handleDelete = id => {
    const students = [...this.state.students];

    const newStudents = students.filter(student => student.id !== id);

    this.setState({
      students: newStudents
    });
  };

  validateFrom = () => {
    const { id, name, department } = this.state.values;
    const errors = {};
    if (!id) {
      errors.id = `ID can't be empty!`;
    }
    if (!name) {
      errors.name = `Name can't be empty!`;
    }

    if (!department) {
      errors.department = 'Select a department';
    }

    this.setState({ errors });
    return {
      errors,
      isValid: Object.keys(errors).length === 0
    };
  };

  render() {
    const {
      values: { id, name, department },
      errors
    } = this.state;

    return (
      <>
        <div className="row justify-content-sm-center">
          <div className="col-sm-6 m-5 p-3 border border-primary">
            <div className="alert alert-success text-center">
              Student Entry{' '}
            </div>
            <form onSubmit={this.handleSubmit}>
              <InputElement
                type="text"
                name="id"
                placeholder="Enter Student ID here"
                value={id}
                error={errors.id}
                onChange={this.handleChange}
              />

              <InputElement
                type="text"
                name="name"
                placeholder="Enter Student Name here"
                value={name}
                error={errors.name}
                onChange={this.handleChange}
              />

              <select
                name="department"
                value={department}
                className={`form-control ${
                  errors.department ? 'is-invalid' : ''
                }`}
                onChange={this.handleChange}
              >
                <option disabled hidden value="">
                  Select Department...
                </option>
                <option value="CSE"> CSE </option>
                <option value="EEE"> EEE </option>
                <option value="BBA"> BBA </option>
              </select>
              {errors.department && (
                <div className="invalid-feedback">{errors.department}</div>
              )}

              <button
                type="submit"
                className="btn btn-small btn-block btn-success mt-3"
              >
                Add Student
              </button>
            </form>
          </div>
        </div>
        <div className="row justify-content-sm-center">
          <div className="col-md-8">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Department</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {this.state.students.map(({ id, name, department }) => {
                  return (
                    <tr key={id}>
                      <td>{id}</td>
                      <td>{name}</td>
                      <td>{department}</td>
                      <td>
                        <button
                          onClick={() => this.handleEdit(id)}
                          className="btn btn-small btn-warning"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => this.handleDelete(id)}
                          className="btn btn-small ml-2 btn-danger"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
}
