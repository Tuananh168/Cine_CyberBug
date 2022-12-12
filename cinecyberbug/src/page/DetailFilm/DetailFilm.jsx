import { Tabs } from "antd";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { layThongTinChiTietPhim } from "../../redux/action/QuanLyRapAction";
import { NavLink } from "react-router-dom";
import "../../assets/style_circle/circle.css";

const DetailFilm = () => {
  const [tabPosition, setTabPosition] = useState("left");
  const changeTabPosition = (e) => {
    setTabPosition(e.target.value);
  };
  const { TabPane } = Tabs;

  const dispatch = useDispatch();
  const params = useParams();
  console.log("params: ", params);

  const { filmDetail } = useSelector((state) => state.QuanLyRapReducer);
  console.log("filmDetail: ", filmDetail);

  useEffect(() => {
    dispatch(layThongTinChiTietPhim(params.id));
  }, []);
  return (
    <div
      style={{
        backgroundImage: `url(${filmDetail.hinhAnh})`,
        minHeight: "100vh",
        backgroundSize: "100%",
        backgroundPosition: "center",
      }}
      className="bg-no-repeat w-full"
    >
      <>
        <div className="grid grid-cols-12">
          <div className="col-span-3 col-start-3">
            <img
              src={filmDetail.hinhAnh}
              style={{ width: 300, height: 400 }}
              alt="123"
            />
          </div>
          <div className="col-start-6 col-end-9" style={{ marginTop: "10%" }}>
            <p className="text-sm text-white">
              Ngày chiếu :{" "}
              {moment(filmDetail.ngayKhoiChieu).format("DD-MM-YYYY")}
            </p>
            <h1 className="text-white text-2xl">{filmDetail.tenPhim}</h1>
            <p className="text-white text-sm">{filmDetail.moTa}</p>
            <div style={{ marginTop: "20%" }}>
              <a
                href={filmDetail.trailer}
                target="_blank"
                className="text-white text-lg"
              >
                <i className="fa-brands fa-youtube" /> Xem trailer
              </a>
              <button className="text-white text-lg ml-2">
                <i className="fa-solid fa-ticket" /> Mua vé Ngay
              </button>
            </div>
          </div>
          <div
            className={`c100 p${filmDetail.danhGia * 10} col-start-10`}
            style={{ marginTop: "50%" }}
          >
            <span>{filmDetail.danhGia * 10}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
            <span className="text-yellow-500" style={{ marginTop: "70%" }}>
              Đánh giá phim
            </span>
          </div>
        </div>
        <div
          className="mt-[100px] w-2/3 mx-auto rounded-lg bg-white"
          style={{ minHeight: 500 }}
        >
          <Tabs tabPosition={"top"}>
            <TabPane
              tab={
                <p className="text-red-600 text-xl flex justify-center items-center">
                  Lịch Chiếu
                </p>
              }
              key={"1"}
            >
              <Tabs tabPosition={"left"}>
                {filmDetail.heThongRapChieu?.map((item, index) => {
                  return (
                    <TabPane
                      tab={
                        <div className="grid gird-cols-2">
                          <img src={item.logo} alt={item.logo} width={50} />
                          <div className="col-start-2 ml-2 text-xl text-black flex self-center">
                            {item.tenHeThongRap}
                          </div>
                        </div>
                      }
                      key={index}
                    >
                      {item.cumRapChieu?.map((cumRap, index) => {
                        return (
                          <div>
                            <div className="flex mt-4">
                              <img
                                className="mr-2"
                                src={item.logo}
                                alt={item.logo}
                                width={50}
                              />
                              <div className="leading-[2px]">
                                <h2
                                  className="text-xl font-bold text-left"
                                  key={index}
                                >
                                  {cumRap.tenCumRap}
                                </h2>
                                <p style={{ fontSize: 12 }}>{cumRap.diaChi}</p>
                              </div>
                            </div>
                            <div className="grid grid-cols-4 mt-2">
                              {cumRap.lichChieuPhim?.map((lichChieu, index) => {
                                return (
                                  <NavLink
                                    to={`/checkout/${lichChieu.maLichChieu}`}
                                    key={index}
                                    className="col-span-1 ml-3 border border-2 border-black rounded-xl py-1 bg-orange-300 text-black m-0 hover:bg-orange-400 hover:text-black w-1/3 text-center font-bold"
                                  >
                                    {moment(lichChieu.ngayChieuGioChieu).format(
                                      "hh:mm A"
                                    )}
                                  </NavLink>
                                );
                              })}
                            </div>
                            <hr />
                          </div>
                        );
                      })}
                    </TabPane>
                  );
                })}
              </Tabs>
            </TabPane>
            <TabPane
              tab={<p className="text-red-600 text-xl">Thông Tin</p>}
              key={"2"}
            >
              Thông tin phim
            </TabPane>
            <TabPane
              tab={<p className="text-red-600 text-xl">Đánh Giá</p>}
              key={"3"}
            >
              Đánh Giá
            </TabPane>
          </Tabs>
        </div>
      </>
    </div>
  );
};

export default DetailFilm;
