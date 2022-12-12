import React, { useEffect } from "react";
import { Carousel } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { layDanhSachBannerAction } from "../../redux/action/QuanLyPhimAction";

const HomeCarousel = () => {
  const dispatch = useDispatch();

  useEffect(async () => {
    dispatch(layDanhSachBannerAction());
  }, []);

  const { listBanner } = useSelector((state) => state.quanLyPhimReducer);

  const contentStyle = {
    height: "800px",
    color: "#fff",
    lineHeight: "140px",
    textAlign: "center",
    background: "#364d79",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
  };

  const renderCarousel = () => {
    return listBanner.map((item, index) => {
      console.log("item", item);
      return (
        <>
          <div
            key={index}
            style={{ ...contentStyle, backgroundImage: `url(${item.hinhAnh})` }}
          ></div>
        </>
      );
    });
  };
  return (
    <Carousel effect="fade" style={{ position: "relative", zIndex: 1 }}>
      {renderCarousel()}
    </Carousel>
  );
};

export default HomeCarousel;
