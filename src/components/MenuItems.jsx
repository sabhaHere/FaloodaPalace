import React from "react";
import list from "../../public/list.json";
import Cards from "./Cards";
import { Link } from "react-router-dom";
function MenuItems() {
  console.log(list);
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl- font-semibold md:text-4xl">
            We are Delighted to have you {""}
            <span className="text-green-500">Here! :)</span>
          </h1>
          <p className="mt-12">
            Welcome to Sweet Haven, a delightful dessert shop where every treat
            is crafted to satisfy your sweetest cravings. Our menu features an
            array of delicious desserts, from rich, creamy cheesecakes and
            decadent chocolate brownies to light, airy macarons and delicate
            pastries. Each dessert is made fresh daily, ensuring a
            melt-in-your-mouth experience with every bite. Stop by and indulge
            in a world of sweetness!
          </p>
          <Link to={"/"}>
            <button className="btn btn-outline btn-success mt-6">Back</button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-3">
          {list.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default MenuItems;
