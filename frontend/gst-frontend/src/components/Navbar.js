import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <ul className="navbar-list">
        <li>
          <Link to="/create-category" className="nav-button">
            Create Category
          </Link>
        </li>
        <li>
          <Link to="/create-product" className="nav-button">
            Create Product
          </Link>
        </li>
        <li>
          <Link to="/create-sale" className="nav-button">
            Create Sale
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
