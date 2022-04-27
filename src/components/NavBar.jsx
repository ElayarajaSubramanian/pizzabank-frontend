import React from "react";
import NavItem from "./NavItem";
import { FaSearch } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between w-11/12 m-auto mt-3">
      <Link to="/">
        {" "}
        <img
          src="/images/pizza-bank.png"
          alt="logo"
          style={{ width: "200px" }}
        />
      </Link>
      <NavItem />
      <div className="flex items-center gap-5">
        <FaSearch />
        <AiOutlineShoppingCart />
        <Link
          to="/signin"
          className="px-3 py-1 border-2 border-solid rounded-lg border-red"
        >
          Sign in
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
