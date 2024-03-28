import React from "react";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <div className='card'>
      <nav className='links'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
      <h1>Profile component</h1>
    </div>
  );
}

export default Profile;
