import React, { Fragment, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Tabs } from "antd";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { layDanhSachHeThongRapAction } from "../../redux/action/QuanLyRapAction";

const HomeMenu = () => {
  const dispatch = useDispatch();
  const { TabPane } = Tabs;

  useEffect(async () => {
    dispatch(layDanhSachHeThongRapAction());
  }, []);

  const { heThongRapChieu } = useSelector((state) => state.QuanLyRapReducer);

  //  Render hệ thống rạp

  const renderHeThongRap = () => {
    return heThongRapChieu?.map((item, index) => {
      return (
        <TabPane
          tab={<img src={item.logo} className="rounded-full" width="50"></img>}
          key={index}
        >
          <Tabs tabPosition={tabPosition}>{renderCumRap(item)}</Tabs>
        </TabPane>
      );
    });
  };

  // Render Cụm rạp

  const renderCumRap = (item) => {
    return item.lstCumRap?.map((cumRap, index) => {
      return (
        <TabPane
          tab={
            <div className="flex">
              <img
                src={item.logo}
                className="rounded-full"
                width="80"
                height="80"
              ></img>
              <div className="ml-2">
                <h2 className="text-xl font-bold text-left m-0">
                  {cumRap.tenCumRap}
                </h2>
                <div className="text-left m-0">
                  {cumRap.diaChi.length > 50 ? (
                    <span>{cumRap.diaChi.slice(0, 50)}...</span>
                  ) : (
                    <span>{cumRap.diaChi}</span>
                  )}
                </div>
                <div className="mt-2 flex justify-start">
                  <i className="fa-solid fa-calendar-days text-blue-700 self-center mr-2"></i>
                  <p
                    className="text-blue-700 text-left italic content-center m-0"
                    s
                  >
                    Lịch phim
                  </p>
                </div>
              </div>
              <hr />
            </div>
          }
          key={index}
        >
          {cumRap.danhSachPhim?.slice(0, 5).map((phim, index) => {
            return (
              <Fragment key={index}>
                <div className="flex">
                  <div>
                    <img
                      className="my-3"
                      src={phim.hinhAnh}
                      alt={phim.tenPhim}
                      style={{ height: 100, width: 100 }}
                    />
                  </div>
                  <div>
                    <span className="mr-1 font-bold bg-red-600 px-2 py-1 rounded-lg text-white text-sm ml-3">
                      C18
                    </span>
                    <h1 className="text-xl font-bold ml-1 inline-block mt-2 mb-2">
                      {phim.tenPhim}
                    </h1>
                    <div className="grid grid-cols-5 gap-0.5">
                      {phim.lstLichChieuTheoPhim
                        ?.slice(0, 5)
                        .map((lichChieu, index) => {
                          return (
                            <NavLink
                              className="ml-3 border border-2 border-black rounded-xl py-1 bg-orange-300 text-black m-0 hover:bg-orange-400 hover:text-black text-center font-bold"
                              to={`/checkout/${lichChieu.maLichChieu}`}
                              key={index}
                            >
                              {moment(lichChieu.ngayChieuGioChieu).format(
                                "hh:mm A"
                              )}
                            </NavLink>
                          );
                        })}
                    </div>
                  </div>
                </div>
                <hr />
              </Fragment>
            );
          })}
        </TabPane>
      );
    });
  };

  const [tabPosition, setTabPosition] = useState("left");
  const changeTabPosition = (e) => {
    setTabPosition(e.target.value);
  };
  return (
    <div
      className="mx-36 mt-[3%]"
      style={{ boxShadow: "0 35px 60px -15px rgba(0, 0, 0, 0.5)" }}
    >
      <Tabs tabPosition={tabPosition}>{renderHeThongRap()}</Tabs>
    </div>
  );
};

export default HomeMenu;
