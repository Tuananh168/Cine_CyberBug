import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import _ from "lodash";
import { Drawer, Space, Tabs, Dropdown } from "antd";
import { ACCESSTOKEN, USER_LOGIN } from "../../utils/setting/Config";
import Register from "../../page/register/Register";
import Login from "../../page/login/Login";
import { DownOutlined, LogoutOutlined } from "@ant-design/icons";

const items = [
  {
    label: <NavLink>Thông tin cá nhân</NavLink>,
    key: "0",
  },
  {
    label: (
      <NavLink
        onClick={() => {
          localStorage.removeItem(USER_LOGIN);
          localStorage.removeItem(ACCESSTOKEN);
        }}
        to="/"
      >
        <LogoutOutlined />
        <p
          className="ml-2 mt-2 flex items-center"
          style={{ display: "inline" }}
        >
          Đăng xuất
        </p>
      </NavLink>
    ),
    key: "1",
  },
];

const Header = () => {
  const navigate = useNavigate();
  const { userLogin } = useSelector((state) => state.dangKyTaiKhoanReducer);

  const renderLogin = () => {
    if (_.isEmpty(userLogin)) {
      return (
        <Space>
          <NavLink type="primary" onClick={showLargeDrawer}>
            Đăng Nhập
          </NavLink>
        </Space>
      );
    }
    return (
      <Dropdown
        menu={{
          items,
        }}
      >
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            Xin chào {userLogin.taiKhoan}
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>
    );
  };

  const { TabPane } = Tabs;

  const [open, setOpen] = useState(false);

  const showLargeDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const tabStyle = {
    color: "black",
    fontStyle: "50px",
    textAlign: "center",
  };
  return (
    <div>
      <header className="p-4 text-white bg-black bg-opacity-40 fixed w-full z-10">
        <div className="container px-28 text-center flex justify-between h-16 mx-auto">
          <NavLink
            to="/"
            rel="noopener noreferrer"
            href="#"
            aria-label="Back to homepage"
            className="flex items-center p-2"
          >
            <img
              src="https://cyberlearn.vn/wp-content/uploads/2020/03/cyberlearn-min-new-opt2.png"
              alt=""
            />
          </NavLink>
          <ul className="items-stretch hidden space-x-3 lg:flex">
            <li className="flex">
              <NavLink
                to="/"
                className="flex items-center px-4 -mb-1 dark:border-transparent text-white text-xl hover:text-orange-500"
              >
                Trang Chủ
              </NavLink>
            </li>
            <li className="flex">
              <button className="flex items-center px-4 -mb-1 dark:border-transparent text-white text-xl hover:text-orange-500">
                Liên hệ
              </button>
            </li>
            <li className="flex">
              <NavLink
                rel="noopener noreferrer"
                className="flex items-center px-4 -mb-1 dark:border-transparent text-white text-xl hover:text-orange-500"
              >
                Tin tức
              </NavLink>
            </li>
          </ul>
          {renderLogin()}
          <Drawer placement="right" width={500} onClose={onClose} open={open}>
            <Tabs tabPosition={"top"} tabBarStyle={tabStyle}>
              <TabPane key={"1"} tab={<div>Đăng Nhập</div>}>
                <Login />
              </TabPane>

              <TabPane key={"2"} tab={<div>Đăng ký</div>}>
                <Register />
              </TabPane>
            </Tabs>
          </Drawer>

          <button className="p-4 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 dark:text-gray-100"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
