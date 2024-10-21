import React from "react";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import ShopDescription from "./components/ShopDescription";
function App() {
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

export default App;
