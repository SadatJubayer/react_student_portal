import React from 'react';

import ListView from './list-view';
import TableView from './table-view';

export default class StudentViews extends React.Component {
  state = {
    isListView: false,
    view: 'list'
  };

  generateViews = () => {
    const { students, handleEdit, handleDelete } = this.props;
    if (this.state.isListView) {
      return (
        <ListView
          students={students}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      );
    } else {
      return (
        <TableView
          students={students}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      );
    }
  };

  handleChange = e => {
    this.setState({
      view: e.target.value,
      isListView: e.target.value === 'list'
    });
  };

  render() {
    return (
      <div>
        <h4>Student List</h4>
        <div>
          Switch View:
          <input
            type="radio"
            name="view"
            checked={this.state.isListView}
            value="list"
            onChange={this.handleChange}
          />
          List View
          <input
            type="radio"
            name="table"
            checked={!this.state.isListView}
            value="table"
            onChange={this.handleChange}
          />
          Table View
        </div>

        {this.generateViews()}
      </div>
    );
  }
}

// export default function StudentViews({ students }) {
//   console.log(students);
//   return (
//     <div>
//       <h4>List View</h4>
//       <ListView students={students} />

//       <h4>Table View</h4>
//       <TableView students={students} />
//     </div>
//   );
// }
