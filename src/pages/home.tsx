import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleNavigateToContact = () => {
    navigate("/contact");
  };
  return (
    <div className="card">
      <nav className="links">
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/user/:id">User</Link>
          </li>
        </ul>
      </nav>
      <h1>Home Component</h1>

      <button
        className="home-comp-btn"
        onClick={handleNavigateToContact}
      >
        Contact
      </button>

      <div className="info">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus at
          temporibus a? Quisquam voluptatem alias amet, omnis quasi maiores
          reprehenderit porro numquam distinctio sequi aliquam impedit quaerat
          sunt corporis laborum voluptatibus fuga doloribus mollitia nihil
          blanditiis necessitatibus! Repudiandae, quis sint? Vitae ex nobis vel
          ullam sed magni corporis id dicta!
        </p>
      </div>
    </div>
  );
}

export default Home;
