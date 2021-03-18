import React from "react";
import { NavLink } from "react-router-dom";
import "./SiteWideNavBar.css";

/**
 * Component for navigating to each page in app. Displayed on all pages.
 * @returns JSX code to render site-wide navbar
 */
const SiteWideNavBar = () => {
  return (
    <div className="SiteWideNavBar">
      <NavLink exact to="/">VENDING MACHINE</NavLink>
      <NavLink exact to="/soda">SODA</NavLink>
      <NavLink exact to="/chips">CHIPS</NavLink>
      <NavLink exact to="/sardines">SARDINES</NavLink>
    </div>
  );
};

export default SiteWideNavBar;