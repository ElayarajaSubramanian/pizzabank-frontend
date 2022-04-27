import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex items-center justify-between w-11/12 m-auto">
      <div>
        <h1
          className="font-bold capitalize text-7xl"
          style={{ lineHeight: "5rem" }}
        >
          Fastest <br />
          <span className="text-red">Pizza Delivery</span>
          <br /> in your city
        </h1>
        <Link
          to="/signin"
          className="block px-6 py-4 mt-4 text-white rounded-md bg-red w-fit"
        >
          Order now
        </Link>
      </div>
      <img src="/images/pizza-delivery.png" alt="delivery" className="w-6/12" />
    </div>
  );
};

export default Hero;
