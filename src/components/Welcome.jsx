import React, { Component } from "react";

import "../sass/welcome.sass";

class Welcome extends Component {
  constructor() {
    super();

    this.state = {
      welcomeClass: "welcome"
    };
  }

  handleLogin = () => {
    this.setState({
      welcomeClass: "welcome exit"
    });

    setTimeout(() => {
      this.props.switchSections("bible");
    }, 1000);
  };

  render() {
    return (
      <div className={this.state.welcomeClass}>
        <p className="welcome-title">elysian</p>
        <form className="welcome__form">
          <input
            className="welcome__form-input"
            type="email"
            placeholder="email"
          />
          <input
            className="welcome__form-input"
            type="password"
            placeholder="password"
          />
        </form>
        <div className="welcome__btns">
          <button className="welcome__btns-google">Google</button>
          <button className="welcome__btns-login" onClick={this.handleLogin}>
            Login
          </button>
        </div>
      </div>
    );
  }
}

export default Welcome;
