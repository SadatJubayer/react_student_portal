import React, { Component } from 'react';
import StudentViews from './views';
import StudentFrom from './forms';

import shortid from 'shortid';

import students from './data';

class StudentPortal extends Component {
  state = {
    students: students,
    editable: false,
    selectedStudent: null
  };

  handleEdit = id => {
    this.setState({
      editable: true,
      selectedStudent: id
    });
  };

  handleDelete = id => {
    const students = this.state.students.filter(s => s.id !== id);
    this.setState({ students });
    if (this.state.selectedStudent === id) {
      this.setState({
        editable: false,
        selectedStudent: null
      });
    }
  };

  createStudent = student => {
    student.id = shortid.apply();
    const students = [...this.state.students, student];
    this.setState({ students });
  };

  updateStudent = (student, id) => {
    console.log(id, student);
  };

  handleReset = () => {
    this.setState({
      editable: false,
      selectedStudent: null
    });
  };

  render() {
    const { students, editable, selectedStudent } = this.state;

    let editableStudent = null;
    if (editable) {
      editableStudent = students.find(
        student => student.id === selectedStudent
      );
    }

    return (
      <>
        <StudentFrom
          editable={this.state.editable}
          editableStudent={editableStudent}
          createStudent={this.createStudent}
          updateStudent={this.updateStudent}
          handleReset={this.handleReset}
        />
        <StudentViews
          students={students}
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}
        />
      </>
    );
  }
}

export default StudentPortal;
