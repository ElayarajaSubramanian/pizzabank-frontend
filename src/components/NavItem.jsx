import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = () => {
  return (
    <nav className="flex justify-between">
      <NavLink
        to="/"
        className={(navData) => (navData.isActive ? "text-red mx-4" : "mx-4")}
      >
        Why Pizza bank?
      </NavLink>
      <NavLink
        to="/menu"
        className={(navData) => (navData.isActive ? "text-red mx-4" : "mx-4")}
      >
        Menu
      </NavLink>
      <NavLink
        to="/stores"
        className={(navData) => (navData.isActive ? "text-red mx-4" : "mx-4")}
      >
        Stores
      </NavLink>
      <NavLink
        to="/contact"
        className={(navData) => (navData.isActive ? "text-red mx-4" : "mx-4")}
      >
        Contact
      </NavLink>
    </nav>
  );
};

export default NavItem;
