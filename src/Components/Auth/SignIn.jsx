import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Form, Input, Button, message } from "antd";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./SignIn.css";
import Loading from "../../helper/Loading";
import actions from "../../actions";

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

class SignIn extends Component {
  componentDidMount = () => {
    const { signin } = this.props;

    if (signin.signedIn) {
      window.location.href = "/";
    } else if (signin.error) {
      message.error(signin.error.message);
    }
  };

  handleOnFinish = (values) => {
    const { fetchSignIn } = this.props;

    const objData = {
      Name: values.name,
      Password: values.password,
    };

    fetchSignIn(objData);
  };

  handleOnFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  render() {
    const { signin } = this.props;

    return signin.signedIn ? (
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
            onFinish={this.handleOnFinish}
            onFinishFailed={this.handleOnFinishFailed}
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
  }
}

SignIn.propTypes = {
  fetchSignIn: PropTypes.func.isRequired,
  signin: PropTypes.object,
};

const mapStateToProps = (state) => ({
  signin: state.signin,
});

const mapDispatchToProps = (dispatch) => ({
  fetchSignIn: (data) => dispatch(actions.fetchSignIn(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
