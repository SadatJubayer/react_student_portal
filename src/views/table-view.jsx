import React from "react";

function TableView({ students, handleEdit, handleDelete }) {
  if (students.length < 1) {
    return <div>No data found</div>;
  } else {
    return (
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
          {students.map(({ id, name, dept }) => {
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

export default TableView;

//   sortByName = () => {
//     const sortedStudents = [...this.state.students];
//     sortedStudents.sort((a, b) => {
//       return a.name.localeCompare(b.name);
//     });
//     this.setState({
//       students: sortedStudents
//     });
//   };

//   sortByDepartment = () => {
//     const sortedStudents = [...this.state.students];
//     sortedStudents.sort((a, b) => {
//       return a.dept.localeCompare(b.dept);
//     });
//     this.setState({
//       students: sortedStudents
//     });
//   };
