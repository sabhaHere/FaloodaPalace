import React from "react";
import Navbar from "../../components/Navbar";
import MenuItems from "../../components/MenuItems";
import Footer from "../../components/Footer";

function MenuPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <MenuItems />
      </div>

      <Footer />
    </>
  );
}

export default MenuPage;
