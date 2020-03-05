import React from "react";

class TableView extends React.Component {
  state = {
    students: this.props.students
  };

  sortByName = () => {
    const sortedStudents = [...this.state.students];
    sortedStudents.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    this.setState({
      students: sortedStudents
    });
  };

  sortByDepartment = () => {
    const sortedStudents = [...this.state.students];
    sortedStudents.sort((a, b) => {
      return a.dept.localeCompare(b.dept);
    });
    this.setState({
      students: sortedStudents
    });
  };

  render() {
    const { handleEdit, handleDelete } = this.props;
    if (this.state.students.length < 1) {
      return <div>No data found</div>;
    } else {
      return (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col" onClick={this.sortByName}>
                Name
              </th>
              <th scope="col" onClick={this.sortByDepartment}>
                Department
              </th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.students.map(({ id, name, dept }) => {
              return (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{dept}</td>
                  <td>
                    <button
                      onClick={() => handleEdit(id)}
                      className="btn btn-small btn-warning"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(id)}
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
      );
    }
  }
}

export default TableView;
