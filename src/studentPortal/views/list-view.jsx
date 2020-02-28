import React from 'react';
const ListView = ({ students, handleEdit, handleDelete }) => {
  return (
    <ul className="list-group">
      {students.map(({ id, name, dept }) => {
        return (
          <li key={id} className="list-group-item">
            {<span>{id}</span>}
            <div>
              <h4>{name}</h4>
              <h6>{dept}</h6>
            </div>
            <div className="ml-auto">
              <button
                className="btn btn-success"
                onClick={() => handleEdit(id)}
              >
                Edit
              </button>
              <button
                className="btn btn-danger"
                onClick={() => handleDelete(id)}
              >
                Delete
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default ListView;
