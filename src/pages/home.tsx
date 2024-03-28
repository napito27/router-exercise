import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleNavigateToContact = () => {
    navigate("/contact");
  };
  return (
    <div className='card'>
      <nav className='links'>
        <ul>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
          <li>
            <Link to='/profile'>Profile</Link>
          </li>
        </ul>
      </nav>
      <h1>Home Component</h1>

      <button className='home-comp-btn' onClick={handleNavigateToContact}>
        Contact
      </button>
    </div>
  );
}

export default Home;
