import React from 'react';
import {
  Link
} from "react-router-dom";
import { Form, Input, Button, Checkbox } from 'antd';
import './SignIn.css';

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

const SignIn = () => {
  const onFinish = values => {
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="container-signin">
      <div className="wrapp-login">
        <span className="title-login">
          Login
        </span>

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
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your email!',
              },
            ]}
            className="width-70prcnt"
          >
            <Input placeholder="Email" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
            className="width-70prcnt"
          >
            <Input.Password placeholder="Password" />
          </Form.Item>

          <Form.Item {...tailLayout} name="remember" valuePropName="checked" className="width-70prcnt">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item {...tailLayout} className="width-70prcnt">
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>

          <div className="sign-up">
            <span className="margin-right-5px">
              Create an account?
            </span>

            <Link to="/signup">Sign up</Link>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default SignIn;