import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Form, Input, Button, message } from "antd";
import "./SignIn.css";
import { setToken } from "../../helper/utils";
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

const SignIn = ({ isGlobalLoading, handleGlobalLoading }) => {
  const OnFinish = (values) => {
    handleGlobalLoading(true);

    axios
      .post("https://pet-api-store.herokuapp.com/login", {
        Name: values.name,
        Password: values.password,
      })
      .then(function (response) {
        setToken(response.data);
        window.location.href = "/";
      })
      .catch(function (error) {
        console.log(error.message);
        handleGlobalLoading(false);
        message.error(error.message);
      });
  };

  const OnFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return isGlobalLoading ? (
    <Loading />
  ) : (
    <div className="container-signin">
      <div className="wrapp-login">
        <span className="title-login">Login</span>
        {/* Form Sign In */}
        <Form
          {...layout}
          className="form"
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={OnFinish}
          onFinishFailed={OnFinishFailed}
        >
          {/* Name Input */}
          <Form.Item
            label="Name"
            name="name"
            rules={[
              {
                required: true,
                message: "Please input your name!",
              },
            ]}
            className="width-70prcnt"
          >
            <Input placeholder="Name" />
          </Form.Item>
          {/* Password Input */}
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            className="width-70prcnt"
          >
            <Input.Password placeholder="Password" />
          </Form.Item>
          {/* Submit Button */}
          <Form.Item {...tailLayout} className="width-70prcnt">
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>

          <div className="sign-up">
            <span className="margin-right-5px">Create an account?</span>

            <Link to="/signup">Sign up</Link>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default SignIn;
