import React from "react";

function ShopDescription() {
  return (
    <div className="flex flex-col  md:flex-row items-center bg-offer bg-cover  p-8 md:p-16 rounded-lg shadow-lg  position:relative">
      {/* Description Section */}

      <div className="md:w-1/2 text-center md:text-left p-4 md:p-8 animate-fade-in-left">
        <h2 className="text-4xl font-bold text-pink-700 mb-4">
          Delicious Desserts
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Indulge in the most decadent desserts crafted with love and care. From
          rich chocolate cakes to creamy cheesecakes, we have something sweet
          for every craving. Enjoy the perfect balance of flavor and sweetness
          with each bite!
        </p>
        <button className="bg-pink-500 hover:bg-pink-700 text-white font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out shadow-lg hover:shadow-xl">
          Order Now
        </button>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center md:justify-end p-4 md:p-8 animate-fade-in-right">
        <img
          src="../../public/photo12.jpg"
          alt="Delicious Dessert"
          className="rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300"
        />
      </div>
    </div>
  );
}

export default ShopDescription;
