import React from "react";
import { Link } from "react-router-dom";
import { isAuthenticated, logout } from "../../helper/utils";

const LoginWrapper = () => (
  <div className="login-wrapper">
    {isAuthenticated() ? (
      <Link to="/signin" onClick={() => logout()} className="login">
        logout
      </Link>
    ) : (
      <Link to="/signin" className="login">
        login
      </Link>
    )}

    <div className="login">cart (0)</div>
  </div>
);

export default LoginWrapper;
