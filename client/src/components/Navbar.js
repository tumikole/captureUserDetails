import React from 'react'
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <Link to='/'>Form</Link>
  <Link to='/user_display'>Users</Link>
  </nav>
    </div>
  )
}

export default Navbar