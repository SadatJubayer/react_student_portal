import React from "react";
const ListView = ({ students, handleEdit, handleDelete }) => {
  return (
    <ul className="list-group container">
      <div className="row">
        {students.length < 1 ? (
          <div> No Data Found!</div>
        ) : (
          students.map(({ id, name, dept }) => {
            return (
              <div className="col-md-6 col-sm-12 mb-2">
                <li key={id} className="list-group-item">
                  {<span className="badge badge-secondary">{id}</span>}
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
                      className="btn btn-danger ml-1"
                      onClick={() => handleDelete(id)}
                    >
                      Delete
                    </button>
                  </div>
                </li>
              </div>
            );
          })
        )}
      </div>
    </ul>
  );
};

export default ListView;
