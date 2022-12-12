import React from "react";
import { Button, Checkbox, Form, Input, InputNumber } from "antd";
import { useDispatch } from "react-redux";
import { dangKyTaiKhoan } from "../../redux/action/QuanLyNguoiDungAction";

const Register = () => {
  const dispatch = useDispatch();
  const onFinish = (values) => {
    console.log("Success:", values);
    const action = dangKyTaiKhoan(values);
    dispatch(action);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      className="mt-[10%]"
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Full Name/Họ tên:"
        name="hoTen"
        rules={[
          {
            required: true,
            message: "Please input your Name!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="username/Tài khoản :"
        name="taiKhoan"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password/Mật khẩu:"
        name="matKhau"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="email:"
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your email!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="NumberPhone/Số điện thoại"
        name="soDt"
        width="100%"
        rules={[
          {
            required: true,
            message: "Please input your Number Phone!",
          },
        ]}
      >
        <Input type="number" />
      </Form.Item>
      <Form.Item
        label="IdGroup/Mã nhóm:"
        name="maNhom"
        rules={[
          {
            required: true,
            message: "Please input your IdGroup!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <button
          type="submit"
          className="bg-blue-600 text-white py-1 px-10 rounded-xl"
        >
          Đăng ký
        </button>
      </Form.Item>
    </Form>
  );
};

export default Register;
