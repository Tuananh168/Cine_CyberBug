import React from "react";
import { Route, Routes } from "react-router-dom";
import Checkout from "../page/Checkout/Checkout";
import DetailFilm from "../page/DetailFilm/DetailFilm";
import Home from "../page/home/Home";
import Footer from "./footer/Footer";
import Header from "./header/Header";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<DetailFilm />} />
          <Route path="/checkout/:id" element={<Checkout />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
