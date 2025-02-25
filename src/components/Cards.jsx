
import React from "react";
import PropTypes from "prop-types";

function Cards({item} ) {
  return (
    <div className="">
      <div className="card shadow-xl h-96 hover:scale-105 duration-200">
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


// ✅ Add PropTypes for validation
Cards.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    title: PropTypes.string,
    price: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};
export default Cards;
