import React from "react";
import homeimage from "../../public/homeimage.jpg";
function Banner() {
  return (
    <div className="mx-auto md:px-20 px-4 flex flex-col md:flex-row space-x-3">
      <div className="w-full md:w-1/2 mt-12  md:mt-32 bg-blend-multiply">
        <div className=" space-y-12">
          <h1 className="text-4xl font-bold">
            Hello , welcome to the{" "}
            <span className="text-pink-500">World of Food</span>
          </h1>

          <p className="text-xl">
            our ultimate destination for mouthwatering delights! Indulge in our
            creamy, handcrafted ice creams, refreshing shakes, juicy burgers,
            and freshly squeezed juices. Whether you're craving a sweet treat or
            a hearty meal, we have something to satisfy every taste bud.
          </p>
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input type="text" className="grow" placeholder="Email" />
          </label>
        </div>
        <button className="btn mt-6  btn-secondary">Secondary</button>
      </div>
      <div className="w-full md:w-1/2 bg-blend-multiply">
        <div className="w-auto">
          <img src={homeimage}></img>
        </div>
      </div>
    </div>
  );
}

export default Banner;
