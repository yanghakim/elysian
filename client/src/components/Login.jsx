import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

import "../sass/login.sass";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      loginClass: "login",
      exit: false,
      email: "",
      password: ""
    };
  }

  handleEmailChange = e => {
    this.setState({
      email: e.target.value
    });
  };

  handlePasswordChange = e => {
    this.setState({
      password: e.target.value
    });
  };

  handleLogin = async e => {
    const { email, password } = this.state;

    e.preventDefault();

    const user = await axios.post("/api/login", {
      email: email,
      password: password
    });

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
          <input
            className="login-input"
            type="email"
            value={this.email}
            onChange={this.handleEmailChange}
            placeholder="email"
          />
          <input
            className="login-input"
            type="password"
            value={this.password}
            onChange={this.handlePasswordChange}
            placeholder="password"
          />
          <a className="login-login" href="/auth/google">
            Login with Google
          </a>
          <button className="login-login" onClick={this.handleLogin}>
            Login
          </button>
        </div>
      </div>
    );
  }
}

export default Login;
