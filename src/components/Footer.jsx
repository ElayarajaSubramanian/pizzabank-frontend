import React from "react";
import NavItem from "./NavItem";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillLinkedin,
  AiFillInstagram
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="flex items-center justify-between w-11/12 m-auto mt-32 mb-10">
      <img src="/images/pizza-bank.png" alt="logo" style={{ width: "200px" }} />
      <NavItem />
      <div className="flex justify-between">
        <AiFillFacebook className="w-8 h-8 ml-2 text-blue-600" />
        <AiFillTwitterSquare className="w-8 h-8 ml-2 text-red" />
        <AiFillLinkedin className="w-8 h-8 ml-2 text-blue-400" />
        <AiFillInstagram className="w-8 h-8 ml-2 text-purple-900" />
      </div>
    </div>
  );
};

export default Footer;
