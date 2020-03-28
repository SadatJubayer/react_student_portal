import React, { useState, useEffect } from "react";
import shortid from "shortid";
import { initialStudents } from "./data";

import StudentViews from "./views";
import StudentFrom from "./forms";
import SearchBox from "./forms/search";
import Filter from "./forms/filters";
import Sort from "./forms/sorting";

const App = () => {
  const [students, setStudents] = useState(initialStudents);
  const [editable, setEditable] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const [searchText, setSearchText] = useState("");
  const [filterText, setFilterText] = useState("");

  const handleEdit = id => {
    setEditable(true);
    setSelectedStudent(id);
  };

  const handleDelete = id => {
    const newStudents = students.filter(s => s.id !== id);
    setStudents(newStudents);
    if (selectedStudent === id) {
      setEditable(false);
      setSelectedStudent(null);
    }
  };

  const createStudent = student => {
    student.id = shortid.apply();
    const newStudents = [student, ...students];
    setStudents(newStudents);
    handleReset();
  };

  const updateStudent = (student, id) => {
    const newStudents = [...students];
    students.forEach(s => {
      if (s.id === id) {
        s.name = student.name;
        s.dept = student.dept;
      }
    });

    setStudents(newStudents);
    handleReset();
  };

  const handleReset = () => {
    setEditable(false);
    setSelectedStudent(null);
  };

  // Search Handler
  const handleSearch = searchText => {
    setSearchText(searchText);
  };
  const performSearch = () => {
    if (searchText)
      return students.filter(
        student =>
          student.name.toLowerCase().includes(searchText.toLowerCase()) ||
          student.dept.toLowerCase().includes(searchText.toLowerCase())
      );
    else return students;
  };

  const handleFilter = filterText => {
    setFilterText(filterText);
  };

  const performFilter = (students = []) => {
    if (filterText) return students.filter(s => s.dept === filterText);
    return students;
  };

  // Check Editable
  let editableStudent = null;
  if (editable) {
    editableStudent = students.find(student => student.id === selectedStudent);
  }

  let viewableStudents = performSearch();
  viewableStudents = performFilter(viewableStudents);

  return (
    <div className="container">
      <StudentFrom
        editable={editable}
        editableStudent={editableStudent}
        createStudent={createStudent}
        updateStudent={updateStudent}
        handleReset={handleReset}
      />

      <div className="row mb-4">
        <div className="col-sm-6">
          <div className="border border-secondary  mx-3">
            <div className="alert alert-warning text-center">
              Search & Filter
            </div>
            <SearchBox searchText={searchText} handleSearch={handleSearch} />
            <Filter handleFilter={handleFilter} filterText={filterText} />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="border border-secondary mx-3">
            <div className="alert alert-success text-center">Sorting</div>
            <Sort />
          </div>
        </div>
      </div>

      <StudentViews
        students={viewableStudents}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default App;
