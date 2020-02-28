import React, { Component } from 'react';
class StudentForm extends Component {
  state = {
    name: '',
    dept: ''
  };
  render() {
    const { editable, editableStudent } = this.props;
    return <div>{editable ? 'New Studnet' : 'Update'}</div>;
  }
}

export default StudentForm;
