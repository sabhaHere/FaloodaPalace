import React from "react";

function Cards({ item }) {
  return (
    <div className="">
      <div className="card shadow-xl h-96">
        <figure>
          <img src={item.image} alt="Shoes" />
        </figure>
        <div className="card-body ">
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary">{item.category}</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline hover:bg-green-600 hover:text-white duration-200 rounded-full border-[2px] px-5 py-4">
              INR {item.price}
            </div>
            <div className="badge badge-outline text-green-700 hover:bg-green-600 hover:text-white duration-200 rounded-full hover:border-none px-5 py-4">
              Buy Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
