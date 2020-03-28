import React, { useState } from "react";

function Sort({ filterText, handleFilter }) {
  return (
    <div className="mb-4 mx-5">
      <select
        className="form-control"
        value={filterText}
        onChange={e => handleFilter(e.target.value)}
      >
        <option value="name">Name</option>
        <option value="dept">Department</option>
      </select>

      <select name="" id="" className="form-control my-2">
        <option value="asc">Ascending</option>
        <option value="dsc">Descending</option>
      </select>
    </div>
  );
}

export default Sort;
