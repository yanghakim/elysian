import React, { Component } from "react";

import "../sass/login.sass";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      loginClass: "login"
    };
  }

  handleLogin = () => {
    this.setState({
      loginClass: "login exit"
    });

    setTimeout(() => {
      this.props.switchSections("bible");
    }, 1000);
  };

  render() {
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
