import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { DEPT } from "../data";

function StudentForm({
  createStudent,
  editable,
  editableStudent,
  updateStudent
}) {
  const { register, handleSubmit, errors, reset } = useForm();
  const onSubmit = data => {
    editable ? updateStudent(data, editableStudent.id) : createStudent(data);
    reset();
  };

  return (
    <div className="m-5 pt-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          name="name"
          defaultValue={editable ? editableStudent.name : ""}
          className={`mb-2 form-control ${errors.name ? "is-invalid" : ""}`}
          placeholder="Student Name"
          ref={register({
            required: "Name is Required",
            maxLength: {
              value: 20,
              message: "Name have to less than 20 characters"
            }
          })}
        />
        {errors.name && (
          <span className="invalid-feedback"> {errors.name.message} </span>
        )}

        <select
          name="dept"
          className={`form-control ${errors.dept ? "is-invalid" : ""}`}
          ref={register({ required: "You must select a department" })}
        >
          {editable ? (
            <option value={editableStudent.dept} selected>
              {editableStudent.dept}
            </option>
          ) : (
            <option value="" selected disabled>
              Select a Dept..
            </option>
          )}

          {DEPT.map(dept => (
            <option key={dept} value={dept}>
              {dept}
            </option>
          ))}
        </select>
        {errors.dept && (
          <span className="invalid-feedback"> {errors.dept.message} </span>
        )}
        <input
          type="submit"
          value={editable ? "Update Student" : "Add Student"}
          className="btn btn-success btn-block mt-2"
        />
      </form>
    </div>
  );
}

export default StudentForm;
