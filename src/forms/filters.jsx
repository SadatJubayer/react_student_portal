import React, { useState } from "react";
import { DEPT } from "../data";

function Filter({ filterText, handleFilter }) {
  return (
    <div className="mb-4 mx-5">
      <select
        className="form-control"
        value={filterText}
        onChange={e => handleFilter(e.target.value)}
      >
        <option value="" selected>
          Choose Department
        </option>
        {DEPT.map(dept => (
          <option key={dept} value={dept}>
            {dept}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Filter;
