import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { layDanhSachPhim } from "../../redux/action/QuanLyPhimAction";
import Film from "../Film/Film";
import Slider from "react-slick";
import styleSlick from "./MutilRow.module.css";
import {
  SET_PHIM_DANG_CHIEU,
  SET_PHIM_SAP_CHIEU,
} from "../../redux/constant/QuanLyPhimConstant";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick["slick-next"]}`}
      style={{ ...style, display: "block", right: "30px" }}
      onClick={onClick}
    ></div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick["slick-prev"]}`}
      style={{ ...style, display: "block", left: "30px" }}
      onClick={onClick}
    ></div>
  );
}

const MutilRow = () => {
  const dispatch = useDispatch();
  useEffect(async () => {
    dispatch(layDanhSachPhim());
  }, []);
  const { arrPhim, dangChieu, sapChieu } = useSelector(
    (state) => state.quanLyPhimReducer
  );
  console.log("arrPhim: ", arrPhim);

  const settings = {
    className: "center variable-width",
    centerMode: true,
    infinite: true,
    centerPadding: "10px",
    slidesToShow: 3,
    speed: 500,
    rows: 2,
    slidesPerRow: 1,
    variableWidth: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const renderPhim = () => {
    return arrPhim.slice(0, 20).map((phim, index) => {
      return (
        <div>
          <div className="container" key={index}>
            <Film phim={phim} />
          </div>
        </div>
      );
    });
  };

  let classNameDC = dangChieu === true ? "active_Film" : "non_active_Film";
  let classNameSC = sapChieu === true ? "active_Film" : "non_active_Film";

  return (
    <div className="bg-orange-400">
      <div className="text-center">
        <button
          className={`${styleSlick[classNameDC]} px-8 py-3 font-semibold rounded bg-gray-500 text-white border-gray-900 mr-2`}
          onClick={() => {
            const action = { type: SET_PHIM_DANG_CHIEU };
            dispatch(action);
          }}
        >
          Đang chiếu
        </button>
        <button
          className={`${styleSlick[classNameSC]} px-8 py-3 font-semibold rounded bg-gray-500 text-white border-gray-900`}
          onClick={() => {
            const action = { type: SET_PHIM_SAP_CHIEU };
            dispatch(action);
          }}
        >
          Sắp chiếu
        </button>
      </div>
      <Slider {...settings}>{renderPhim()}</Slider>
    </div>
  );
};

export default MutilRow;
