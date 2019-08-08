import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import preview from "../assets/preview.png";

import "../sass/checkout.sass";

class Checkout extends Component {
  constructor() {
    super();

    this.state = {
      checkoutClass: "checkout",
      toMainMenu: false
    };
  }

  toMainMenu = () => {
    this.setState({
      checkoutClass: "checkout exit"
    });

    setTimeout(() => {
      this.setState({
        toMainMenu: true
      });
    }, 1000);
  };

  render() {
    if (this.state.toMainMenu) {
      return <Redirect push to="/" replace />;
    }

    return (
      <div className={this.state.checkoutClass}>
        <p className="checkout-back" onClick={this.toMainMenu}>
          back
        </p>
        <div className="checkout__heading">
          <p className="checkout__heading-title">elysian</p>
          <p className="checkout__heading-header">checkout</p>
        </div>
        <img className="checkout-img" src={preview} width="620" height="600" />
        <div className="checkout__interior">
          <p className="checkout__interior-header">preview interior</p>
          <div className="checkout__interior-journal">
            <p className="checkout__interior-journal-text">
              8/1/19 quiet times
            </p>
            <p className="checkout__interior-journal-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p className="checkout__interior-journal-text">
              8/1/19 sermon notes
            </p>
            <p className="checkout__interior-journal-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="checkout__interior__checkout">
            <p className="checkout__interior__checkout-header">checkout</p>
            <p className="checkout__interior__checkout-item">
              august'19 journal
            </p>
            <p className="checkout__interior__checkout-price">$30</p>
            <p className="checkout__interior__checkout-item">shipping</p>
            <p className="checkout__interior__checkout-price">$5</p>
            <p className="checkout__interior__checkout-item">total</p>
            <p className="checkout__interior__checkout-price total">$35</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Checkout;
