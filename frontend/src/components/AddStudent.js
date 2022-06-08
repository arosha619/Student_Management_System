import React, { useState } from "react";
import axios from "axios";


function AddStudent() {

const [name,setName]=useState("");
const [age,setAge]=useState("");
const [gender,setGender]=useState("");

 function sendData(e){
   e.preventDefault();

   const newStudent={
     name,age,gender
   }
   
   axios.post("http://localhost:8080/student/add",newStudent).then(()=>{
     alert("student added!")
   }).catch((err)=>{
    alert(err)
   })
   

 }

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
            onChange={(e)=>{setName(e.target.value);}}
            required
          />
        </div>
        <div class="form-group">
          <label for="AddStudent">Student age</label>
          <input
            type="text"
            class="form-control"
            id="Student_age"
            placeholder="Enter Student age"
            onChange={(e)=>{setAge(e.target.value);}}
            required
          />
        </div>
        <div class="form-group">
          <label for="AddStudent">Gender</label>
          <input
            type="text"
            class="form-control"
            id="Student_gender"
            placeholder="Enter Student Gender"
            onChange={(e)=>{setGender(e.target.value);}}
            required
          />
        </div>

        <button type="submit" onClick={sendData} class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddStudent;
