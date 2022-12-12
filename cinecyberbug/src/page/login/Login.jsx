import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { dangNhapAction } from "../../redux/action/QuanLyNguoiDungAction";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const onFinish = (values) => {
    console.log("Success:", values);
    const action = dangNhapAction(values);
    dispatch(action);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <p>
        Vui lòng đăng nhập trước khi mua vé để tích luỹ điểm, cơ hội nhận thêm
        nhiều ưu đãi từ chương trình thành viên
      </p>
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
          label="username"
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
          label="Password"
          name="matKhau"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
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
            Đăng nhập
          </button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Login;
