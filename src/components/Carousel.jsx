import React, { useEffect, useState, useRef } from "react";

const Carousel = () => {
  const [items, setItems] = useState([
    { id: 1, image: "../../public/photo1.jpg", name: "Coffee" },
    { id: 2, image: "../../public/photo2.jpg", name: "Ice Creams" },
    { id: 3, image: "../../public/photo3.jpg", name: "Faloodas" },

    { id: 4, image: "../../public/photo17.jpg", name: "Juices" },
    { id: 5, image: "../../public/photo11.jpg", name: "Mojitos" },
    { id: 6, image: "../../public/photo12.jpg", name: "Pizza" },

    { id: 7, image: "../../public/photo14.jpg", name: "Burger" },
    { id: 8, image: "../../public/photo17.jpg", name: "Juices" },
    { id: 9, image: "../../public/photo17.jpg", name: "Juices" },
    { id: 10, image: "../../public/photo17.jpg", name: "Juices" },
    { id: 11, image: "../../public/photo17.jpg", name: "Juices" },
  ]);

  const timeRunning = 3000;
  const timeAutoNext = 7000;
  const listRef = useRef(null);
  const runningTimeRef = useRef(null);
  const [runNextAuto, setRunNextAuto] = useState(null);
  const [runTimeOut, setRunTimeOut] = useState(null);

  useEffect(() => {
    startAutoSlide();
    return () => {
      clearTimeout(runNextAuto);
      clearTimeout(runTimeOut);
    };
  }, []);

  const resetTimeAnimation = () => {
    runningTimeRef.current.style.animation = "none";
    runningTimeRef.current.offsetHeight; // Trigger reflow
    runningTimeRef.current.style.animation = "runningTime 7s linear 1 forwards";
  };

  const showSlider = (type) => {
    const sliderItemsDom = listRef.current.querySelectorAll(".item");

    if (type === "next") {
      listRef.current.appendChild(sliderItemsDom[0]);
    } else {
      listRef.current.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
    }

    clearTimeout(runTimeOut);
    setRunTimeOut(
      setTimeout(() => {
        listRef.current.classList.remove("next");
        listRef.current.classList.remove("prev");
      }, timeRunning)
    );

    clearTimeout(runNextAuto);
    setRunNextAuto(
      setTimeout(() => {
        showSlider("next");
      }, timeAutoNext)
    );

    resetTimeAnimation();
  };

  const startAutoSlide = () => {
    setRunNextAuto(
      setTimeout(() => {
        showSlider("next");
      }, timeAutoNext)
    );
    resetTimeAnimation();
  };

  return (
    <div className="carousel">
      <div className="list" ref={listRef}>
        {items.map((item, index) => (
          <div
            key={index}
            className="item"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="content p-5">
              <div className="title ">Palooda Palace</div>
              <div className="name">{item.name}</div>
              <div className="des">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Officiis culpa similique consequuntur, reprehenderit dicta
                repudiandae.
              </div>
              <div className="">
                <button className="btn btn-outline btn-success">
                  Order Now
                </button>
                {/* <button>Subscribe</button> */}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Next and Prev buttons */}
      <div className="arrows">
        <button className="prev" onClick={() => showSlider("prev")}>
          &lt;
        </button>
        <button className="next" onClick={() => showSlider("next")}>
          &gt;
        </button>
      </div>

      {/* Time running animation */}
      <div className="timeRunning" ref={runningTimeRef}></div>
    </div>
  );
};

export default Carousel;
