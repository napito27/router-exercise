import React from "react";
import { Link, useParams } from "react-router-dom";

function User() {
  const { id } = useParams();

  const userId = id === ":id" ? "" : id;

  return (
    <div className="card">
      <nav className="links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </nav>
      <h1>User Component</h1>

      <div className="user-info">{id && <span>User id: {userId}</span>}</div>
    </div>
  );
}

export default User;
