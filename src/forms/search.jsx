import React, { useState } from "react";

function SearchBox({ searchText, handleSearch }) {
  return (
    <div className="mb-2 mx-5">
      <input
        className="form-control"
        placeholder="Search Student..."
        type="text"
        value={searchText}
        onChange={e => handleSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBox;
