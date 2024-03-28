import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="card">
      <div className="links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/user/:id">User</Link>
          </li>
        </ul>
      </div>
      <h1>Contact Component</h1>

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

export default Contact;
