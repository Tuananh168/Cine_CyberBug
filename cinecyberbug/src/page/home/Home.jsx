import React from "react";
import MutilRow from "../../component/React_Slick/MutilRow";
import HomeCarousel from "../../layout/HomeCarousel/HomeCarousel";
import HomeMenu from "../../layout/HomeMenu/HomeMenu";

const Home = () => {
  return (
    <div>
      <HomeCarousel />
      <MutilRow />
      <HomeMenu />
    </div>
  );
};

export default Home;
