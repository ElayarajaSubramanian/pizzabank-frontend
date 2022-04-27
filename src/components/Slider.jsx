import React from "react";

const Slider = () => {
  return (
    <div className="w-full p-8 text-white bg-red">
      <div className="w-11/12 m-auto">
        <h1 className="text-3xl font-semibold">Best Selling Pizza</h1>
        <p className="my-4">
          Right now, these food are best selling among our customer.
        </p>
        <p>For this reason, we give extra discount to our customer.</p>
        <div className="flex justify-between w-full my-8">
          <img
            src="/images/pizza-1.png"
            alt="pizza"
            className="p-2 bg-white rounded-md"
          />
          <img
            src="/images/pizza-2.png"
            alt="pizza"
            className="p-2 bg-white rounded-md"
          />
          <img
            src="/images/pizza-3.png"
            alt="pizza"
            className="p-2 bg-white rounded-md w-80"
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;
