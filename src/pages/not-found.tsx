import React from "react";

import { Link } from "react-router-dom";

import notFound from "../images/not-found.png";

function NotFound() {
  return (
    <div className='not-found'>
      <div className='not-found-img'>
        <img src={notFound} alt='not found' />
      </div>
      <div className='not-found-info'>
        <h1>Oops! </h1>
        <h2>We couldn't find that page.</h2>
        <h3>Maybe you can find what you need here?</h3>
        <nav>
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
        </nav>
      </div>
    </div>
  );
}

export default NotFound;
