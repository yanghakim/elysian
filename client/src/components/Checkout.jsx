import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import preview from "../assets/journal.svg";

import "../sass/checkout.sass";

class Checkout extends Component {
  render() {
    return (
      <div className="checkout">
        <div className="checkout__top">
          <div className="checkout__top__heading">
            <p className="checkout__top__heading-title">elysian</p>
            <p className="checkout__top__heading-header">checkout</p>
          </div>
          <p className="checkout__top__img-header" id="preview">
            preview exterior:
          </p>
          <img
            className="checkout__top__img-image"
            src={preview}
            width="200"
            height="200"
          />
          <span className="checkout__top-expandbtn" />
        </div>
        <div className="checkout__interior">
          <p className="checkout__interior-header" id="preview">
            preview interior
          </p>
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
            <p className="checkout__interior-journal-text">
              8/2/19 desiring god article
            </p>
            <p className="checkout__interior-journal-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p className="checkout__interior-journal-text">
              8/2/19 meetup with Dan
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
            <p className="checkout__interior__checkout-header" id="preview">
              checkout
            </p>
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
