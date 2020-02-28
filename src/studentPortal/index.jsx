import React, { Component } from 'react';
import StudentViews from './views';
import StudentFrom from './forms';

class StudentPortal extends Component {
  state = {
    students: [
      { id: 'sdfsd', name: 'sadat', dept: 'CSE' },
      { id: 'dfsdfsd', name: 'sadat', dept: 'CSE' }
    ],
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
