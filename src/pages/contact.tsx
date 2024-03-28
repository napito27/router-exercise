import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className='card'>
      <div className='links'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/profile'>Profile</Link>
          </li>
        </ul>
      </div>
      <h1>Contact Component</h1>
    </div>
  );
}

export default Contact;
