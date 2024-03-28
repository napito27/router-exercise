import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className='card'>
      <div className='links'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
          <li>
            <Link to='/profile'>Profile</Link>
          </li>
        </ul>
      </div>
      <h1>About Component</h1>
    </div>
  );
}

export default About;
