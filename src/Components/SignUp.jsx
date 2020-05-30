import React from 'react';
import { Form, Input, Button } from 'antd';
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

const SignUp = () => {
  const onFinish = values => {
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="container-signup">
      <div className="wrapp-login">
        <span className="title-login">
          Sign Up
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
            label="Full Name"
            name="full name"
            rules={[
              {
                required: true,
                message: 'Please input your full name!',
              },
            ]}
            className="width-90prcnt"
          >
            <Input placeholder="Full Name" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your email!',
              },
            ]}
            className="width-90prcnt"
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
            className="width-90prcnt"
          >
            <Input.Password placeholder="Password" />
          </Form.Item>

          <Form.Item
            label="Confirm Password"
            name="confirm password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
            className="width-90prcnt"
          >
            <Input.Password placeholder="Confirm Password" />
          </Form.Item>

          <Form.Item {...tailLayout} className="width-90prcnt">
            <Button type="secondary" htmlType="submit">
              Sign Up
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default SignUp;