import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

/**
 * Component to display navigation from vending machine to snacks
 * @returns JSX code to render navbar
 */
const NavBar = () => {
  return (
    <div className="NavBar">
      <Link to="/soda">SODA</Link>
      <Link to="/chips">CHIPS</Link>
      <Link to="/sardines">SARDINES</Link>
    </div>
  );
};

export default NavBar;