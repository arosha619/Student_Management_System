import React, { useState } from "react";

function AddStudent() {
  return (
    <div>
      <form>
        <div class="form-group">
          <label for="AddStudent">Student Name</label>
          <input
            type="text"
            class="form-control"
            id="Student_Name"
            placeholder="Enter Student Name"
          />
        </div>
        <div class="form-group">
          <label for="AddStudent">Student age</label>
          <input
            type="text"
            class="form-control"
            id="Student_age"
            placeholder="Enter Student age"
          />
        </div>
        <div class="form-group">
          <label for="AddStudent">Gender</label>
          <input
            type="text"
            class="form-control"
            id="Student_gender"
            placeholder="Enter Student Gender"
          />
        </div>

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddStudent;
