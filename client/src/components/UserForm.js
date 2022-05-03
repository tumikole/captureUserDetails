import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";


function UserForm(props) {
  const {handleInputs, handleSubmit, name, surname, dateOfBirth, grade } = props;
  return (
    <div>
      <Navbar />
      <h2>User Form</h2>
      <form
        onSubmit={handleSubmit}
        className="myForm"
        style={{ display: "grid", width: "20%", margin: "auto" }}
      >
        <div className="inputGroup">
          <label>Name </label>

          <input
            name="name"
            value={name}
            type="text"
            placeholder="Name"
            onChange={(e) => handleInputs(e)}
          />
        </div>
        <div className="inputGroup">
          <label>Surname </label>

          <input
            name="surname"
            value={surname}
            type="text"
            placeholder="Surname"
            onChange={(e) => handleInputs(e)}
          />
        </div>
        <div className="inputGroup">
          <label>Date of birth</label>

          <input
            name="dateOfBirth"
            value={dateOfBirth}
            type="date"
            onChange={(e) => handleInputs(e)}
          />
        </div>
        <div className="inputGroup">
          <label>Grade </label>
          <input
            name="grade"
            value={grade}
            type="number"
            placeholder="Grade"
            onChange={(e) => handleInputs(e)}
          />
        </div>
        <div className="inputGroup">
          <input type="submit" className="btn btn-outline-success" />

        </div>
      </form>


     
    </div>
  );
}

export default UserForm;
