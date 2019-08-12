import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import Home from "./Home";
import Settings from "./Settings";
import Checkout from "./Checkout";

import logo from "../assets/favicon.png";

import "../sass/elysian.sass";

class Elysian extends Component {
  constructor(props) {
    super(props);

    this.state = {
      section: props.location.state.section,
      toSettings: false,
      toCheckout: false,
      toHome: true,
      logout: false,
      logoDropdownClass: "elysian__sidebar__dropdown"
    };
  }

  /**
   * Handles toggling Logo Dropdown view
   **/
  toggleLogoDropdown = () => {
    if (this.state.logoDropdownClass === "elysian__sidebar__dropdown") {
      this.setState({
        logoDropdownClass: "elysian__sidebar__dropdown show"
      });
    } else {
      this.setState({
        logoDropdownClass: "elysian__sidebar__dropdown"
      });
    }
  };

  /**
   * Route handlers
   **/
  toSettings = () => {
    this.setState({
      toSettings: true,
      toCheckout: false,
      toHome: false
    });
  };

  toCheckout = () => {
    this.setState({
      toCheckout: true,
      toSettings: false,
      toHome: false
    });
  };

  toHome = () => {
    this.setState({
      toHome: true,
      toCheckout: false,
      toSettings: false
    });
  };

  handleLogout = () => {
    this.setState({
      logout: true
    });
  };

  render() {
    if (this.state.logout) {
      return <Redirect push to="/" replace />;
    }
    return (
      <div className="elysian">
        {this.state.toHome && <Home section={this.state.section} />}
        {this.state.toSettings && <Settings />}
        {this.state.toCheckout && <Checkout />}
        <div className="elysian__sidebar">
          <img
            src={logo}
            width="50"
            height="50"
            alt="logo"
            onClick={this.toggleLogoDropdown}
          />
          <div className={this.state.logoDropdownClass}>
            <button className="elysian__sidebar__dropdown-savebtn">save</button>
            <button
              className="elysian__sidebar__dropdown-btn"
              onClick={this.toHome}
            >
              home
            </button>
            <button
              className="elysian__sidebar__dropdown-btn"
              onClick={this.toSettings}
            >
              settings
            </button>
            <button
              className="elysian__sidebar__dropdown-btn"
              onClick={this.toCheckout}
            >
              purchase
            </button>

            <button
              className="elysian__sidebar__dropdown-btn"
              onClick={this.handleLogout}
            >
              logout
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Elysian;
