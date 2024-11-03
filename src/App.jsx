import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import MenuPage from "./assets/menu/Menu";
import MenuItems from "./components/MenuItems";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="MenuItems" element={<MenuPage />} />
      </Routes>
    </>
  );
}

export default App;
