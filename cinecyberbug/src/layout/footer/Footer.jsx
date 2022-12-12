import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { layDanhSachHeThongRapAction } from "../../redux/action/QuanLyRapAction";
const Footer = () => {
  const dispatch = useDispatch();
  useEffect(async () => {
    dispatch(layDanhSachHeThongRapAction());
  }, []);
  const { heThongRapChieu } = useSelector((state) => state.QuanLyRapReducer);

  const arrHeThongRap = _.map(heThongRapChieu, (heThongRap) =>
    _.pick(heThongRap, ["maHeThongRap", "tenHeThongRap", "logo"])
  );
  return (
    <div>
      <footer className="py-6 mt-10 dark:bg-gray-800 dark:text-gray-50 bg-gray-800 text-white">
        <div className="px-20 mx-auto space-y-6 divide-y divide-gray-400 md:space-y-12 divide-opacity-50">
          <div className="grid grid-cols-12">
            <div className="pb-6 col-span-full md:pb-0 md:col-span-5">
              <img
                src="https://cyberlearn.vn/wp-content/uploads/2020/03/cyberlearn-min-new-opt2.png"
                alt="Cyberlearn.edu.vn"
              />
            </div>
            <div className="col-span-4 text-center md:text-left md:col-span-2">
              <p className="pb-1 text-lg font-medium text-white text-center">
                PARTNER
              </p>
              <div className="grid grid-cols-3 gap-1">
                {arrHeThongRap.map((item, index) => {
                  return (
                    <div className="text-center" key={index}>
                      <img
                        src={item.logo}
                        alt={item.tenHeThongRap}
                        className="w-[35px] m-auto"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="col-span-4 text-center md:text-left md:col-span-2">
              <p className="pb-1 text-lg font-medium text-white text-center">
                MOBIE APP
              </p>
              <div className="text-center">
                <i className="fa-brands fa-apple mr-3 text-2xl"></i>
                <i className="fa-brands fa-android text-2xl"></i>
              </div>
            </div>
            <div className="col-span-4 text-center md:text-left md:col-span-2">
              <p className="pb-1 text-lg font-medium text-white text-center">
                SOCIAL
              </p>
              <div className="text-center">
                <i className="fa-brands fa-facebook mr-3 text-2xl"></i>
                <i className="fa-brands fa-twitter text-2xl"></i>
              </div>
            </div>
          </div>
          <div className="grid justify-center pt-6 lg:justify-between">
            © 2022 All rights reserved
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
