import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../page/home/Home";
import Header from "./header/Header";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
};

export default MainLayout;
