import React from "react";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Menu from "../components/Menu";
import ShopDescription from "../components/ShopDescription";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Carousel />
      <Menu />
      <ShopDescription />
      <Footer />
    </>
  );
}

export default Home;
