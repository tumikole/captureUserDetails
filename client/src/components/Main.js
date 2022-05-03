import React, {useState, useEffect} from "react";
import UserForm from "./UserForm";
import axios from 'axios'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import DisplayList from "./DisplayList";

function Main() {
  const [myForm, setMyForm] = useState({
    name: "",
    surname: "",
    dateOfBirth: "",
    grade: "",
  });

  const [userList, setUserList] = useState([]);


  useEffect(() => {
    getUsers();
  }, []);

  const handleInputs = (e) => {
    setMyForm({
      ...myForm,
      [e.target.name]: e.target.value,
    });
    console.log("e.target.value", e.target.value);
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const saveUser = await axios.post(
        "http://localhost:4000/save_user",
        myForm
      );
      getUsers();
      alert('User added successfully')
      return saveUser;
    } catch (error) {
      console.log("error", error);
    }
  };

  const getUsers = async () => {
    await axios
      .get("http://localhost:4000/get_users")
      .then((response) => {
        const data = response.data;
        setUserList(data);
      })
      .catch(() => {
        alert("error retrieving data");
      });
  };


  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" exact element={<UserForm handleInputs={handleInputs} handleSubmit={handleSubmit}/>} />
          <Route path="/user_display" element={<DisplayList userList={userList} getUsers={getUsers}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default Main;
