import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <h1>
        <Link to="/">
          <i className="text-secnd fas fa-code"></i>
        </Link>
        Dev Connector
      </h1>
      <ul>
        <li>
          <Link to="!#">Developers</Link>
        </li>
        <li>
          <Link to="/register">Regsiter</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
