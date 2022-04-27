import React from "react";
import { IoIosArrowDroprightCircle } from "react-icons//io";

const pizzaList = [
  {
    id: 1,
    image: "/images/pizza-1.png",
    name: "PEPPER BARBECUE CHICKEN",
    ingredients: "Pepper Barbecue Chicken | Cheese"
  },
  {
    id: 2,
    image: "/images/pizza-2.png",
    name: "CHICKEN SAUSAGE",
    ingredients: "Chicken Sausage | Cheese"
  },
  {
    id: 3,
    image: "/images/pizza-3.png",
    name: "CHICKEN GOLDEN DELIGHT",
    ingredients: "Barbeque chicken with extra cheese."
  },
  {
    id: 4,
    image: "/images/pizza-1.png",
    name: "NON VEG SUPREME",
    ingredients: "Grilled Mushrooms | BBQ Chicken"
  },
  {
    id: 5,
    image: "/images/pizza-2.png",
    name: "CHICKEN DOMINATOR",
    ingredients: "Peri-Peri Chicken | Chicken Tikka"
  },
  {
    id: 6,
    image: "/images/pizza-1.png",
    name: "PEPPER BARBECUE CHICKEN",
    ingredients: "Pepper Barbecue Chicken | Cheese"
  },
  {
    id: 7,
    image: "/images/pizza-2.png",
    name: "CHICKEN SAUSAGE",
    ingredients: "Chicken Sausage | Cheese"
  },
  {
    id: 8,
    image: "/images/pizza-3.png",
    name: "CHICKEN GOLDEN DELIGHT",
    ingredients: "Barbeque chicken with extra cheese."
  },
  {
    id: 9,
    image: "/images/pizza-1.png",
    name: "NON VEG SUPREME",
    ingredients: "Grilled Mushrooms | BBQ Chicken"
  },
  {
    id: 10,
    image: "/images/pizza-2.png",
    name: "CHICKEN DOMINATOR",
    ingredients: "Peri-Peri Chicken | Chicken Tikka"
  }
];

const Menu = () => {
  return (
    <div className="grid w-11/12 grid-cols-4 gap-8 mx-auto my-20 text-white">
      {pizzaList.map((pizza) => {
        return (
          <div className="flex flex-col justify-center gap-4 p-4 text-center rounded-md bg-red">
            <img
              src={pizza.image}
              alt="pizza"
              className="w-full h-full p-4 bg-white rounded-md justify-self-center"
            />
            <h5 className="font-semibold">{pizza.name}</h5>
            <p>{pizza.ingredients}</p>
            <button className="flex items-center justify-center gap-3 font-semibold text-center">
              Order now <IoIosArrowDroprightCircle className="w-6 h-6" />{" "}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
