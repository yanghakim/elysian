import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

import "../sass/login.sass";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      view: "login",
      loginClass: "login",
      subtitleText: "login to elysian",
      exit: false,
      email: null,
      password: null,
      conPassword: null
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

  handleConPasswordChange = e => {
    this.setState({
      conPassword: e.target.value
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
      subtitleText: user.data.message
    });

    if (user.data.success) {
      this.setState({
        loginClass: "login exit"
      });

      setTimeout(() => {
        this.setState({
          exit: true
        });
      }, 1000);
    }

    console.log(user.data);
  };

  handleRegister = async e => {
    const { email, password, conPassword } = this.state;

    e.preventDefault();

    const user = await axios.post("/api/register", {
      email: email,
      password: password,
      vpassword: conPassword
    });

    this.setState({
      subtitleText: user.data.message
    });

    console.log(user.data);

    if (user.data.success) {
      this.setState({
        loginClass: "login exit"
      });

      setTimeout(() => {
        this.setState({
          exit: true
        });
      }, 1000);
    }
  };

  render() {
    if (this.state.exit) {
      return <Redirect push to="/menu" replace />;
    }

    return (
      <div className={this.state.loginClass}>
        <span className="login-bg" />
        <p className="login-title">elysian</p>

        <div className="login__form">
          <p className="login__form-subtitle">{this.state.subtitleText}</p>
          <div className="login__form-toggle">
            <p
              className="login__form-toggle-item"
              onClick={() =>
                this.setState({
                  view: "login",
                  subtitleText: "login to elysian"
                })
              }
            >
              {"login"}
            </p>
            <p
              className="login__form-toggle-item register"
              onClick={() =>
                this.setState({
                  view: "register",
                  subtitleText: "register with elysian"
                })
              }
            >
              {"register"}
            </p>
          </div>

          <input
            className="login__form-input"
            type="email"
            value={this.email}
            onChange={this.handleEmailChange}
            placeholder="email"
          />
          <input
            className="login__form-input"
            type="password"
            value={this.password}
            onChange={this.handlePasswordChange}
            placeholder="password"
          />
          {this.state.view === "register" && (
            <input
              className="login__form-input"
              type="password"
              value={this.conPassword}
              onChange={this.handleConPasswordChange}
              placeholder="confirm password"
            />
          )}
          <div className="login__form__btns">
            <a className="login__form__btns-google" href="/auth/google"></a>
            {this.state.view === "login" && (
              <button
                className="login__form__btns-login"
                onClick={this.handleLogin}
              ></button>
            )}
            {this.state.view === "register" && (
              <button
                className="login__form__btns-login register"
                onClick={this.handleRegister}
              ></button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
