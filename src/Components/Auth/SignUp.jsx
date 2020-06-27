import React from "react";
import { Form, Input, Button, Checkbox, message } from "antd";
import axios from "axios";
import "./SignIn.css";
import { generateUniqueString } from "../../helper/utils";
import Loading from "../../helper/Loading";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const SignUp = ({ isGlobalLoading, handleGlobalLoading }) => {
  const onFinish = (values) => {
    handleGlobalLoading(true);

    axios
      .post("https://pet-api-store.herokuapp.com/signup", {
        Id: generateUniqueString("usrid"),
        Name: values.fullname,
        Email: values.email,
        is_Admin: values.isAdmin,
        Password: values.password,
      })
      .then(function (response) {
        if (response.status === 200) {
          window.location.href = "/signin";
        }
      })
      .catch(function (error) {
        console.log(error.message);
        handleGlobalLoading(false);
        message.error(error.message);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return isGlobalLoading ? (
    <Loading />
  ) : (
    <div className="container-signup">
      <div className="wrapp-login">
        <span className="title-login">Sign Up</span>
        {/* Form SignUp */}
        <Form
          {...layout}
          className="form"
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          {/* Input FullName */}
          <Form.Item
            label="Full Name"
            name="fullname"
            rules={[
              {
                required: true,
                message: "Please input your full name!",
              },
            ]}
            className="width-90prcnt"
          >
            <Input placeholder="Full Name" />
          </Form.Item>
          {/* Input Email */}
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
            ]}
            className="width-90prcnt"
          >
            <Input placeholder="Email" />
          </Form.Item>
          {/* Input Password */}
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            className="width-90prcnt"
          >
            <Input.Password placeholder="Password" />
          </Form.Item>
          {/* Input Confirm Password */}
          <Form.Item
            label="Confirm Password"
            name="confirm password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }

                  return Promise.reject(
                    "The two passwords that you entered do not match!"
                  );
                },
              }),
            ]}
            className="width-90prcnt"
          >
            <Input.Password placeholder="Confirm Password" />
          </Form.Item>
          {/* IsAdmin Checkbox */}
          <Form.Item
            {...tailLayout}
            name="isAdmin"
            valuePropName="checked"
            className="width-70prcnt"
          >
            <Checkbox>Admin</Checkbox>
          </Form.Item>
          {/* SingUp Button */}
          <Form.Item {...tailLayout} className="width-90prcnt">
            <Button type="secondary" htmlType="submit">
              Sign Up
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
