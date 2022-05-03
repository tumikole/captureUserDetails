import React from 'react'
import Navbar from './Navbar';

function DisplayList(props) {


    const {userList} = props 
  return (
    <div>
        <Navbar />
        <h2>User List</h2>
         <div className="cardContainer">
      {userList.map((item, key) => {
        
        return (
          <div key={key} className="card">
            <p>Name: {item.name}</p> <p>Surname: {item.surname}</p>
            <p>Date of birth: {item.dateOfBirth}</p>
            <p>Grade: {item.grade}</p>
          </div>
        );
      })}
      </div>
    </div>
  )
}

export default DisplayList