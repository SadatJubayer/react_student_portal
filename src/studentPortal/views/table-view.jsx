import React from 'react';

const TableView = ({ students, handleEdit, handleDelete }) => {
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
};

export default TableView;
