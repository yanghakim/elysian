import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import "../sass/login.sass";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      loginClass: "login",
      exit: false
    };
  }

  handleLogin = () => {
    this.setState({
      loginClass: "login exit"
    });

    setTimeout(() => {
      this.setState({
        exit: true
      });
    }, 1000);
  };

  render() {
    if (this.state.exit) {
      return <Redirect push to="/menu" replace />;
    }

    return (
      <div className={this.state.loginClass}>
        <p className="login-title">elysian</p>
        <div className="login__form">
          <p className="login-subtitle">login to elysian</p>
          <input className="login-input" type="email" placeholder="email" />
          <input
            className="login-input"
            type="password"
            placeholder="password"
          />
          <button className="login-login" onClick={this.handleLogin}>
            Login
          </button>
        </div>
      </div>
    );
  }
}

export default Login;
