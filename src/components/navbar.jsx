import React from "react";

import { NavLink } from "react-router-dom";

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand m-2" href="/">
        NavBar
      </a>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          {/* <li className="nav-item">
            <NavLink className="nav-link" to="/home">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact">
              Contact Us
            </NavLink>
          </li> */}
          <li className="nav-item">
            <NavLink className="nav-link" to="/menu">
              Menu
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/cart">
              Shopping Cart
            </NavLink>
          </li>
        </ul>
      </div>
      <span className="badge text-bg-primary m-2">
        {" "}
        <span style={{ color: "white" }}>
          <i className="fa-solid fa-cart-plus"></i>
        </span>
        {props.productsCount}
      </span>
    </nav>
  );
};

export default NavBar;
