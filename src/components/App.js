import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Welcome from "./Welcome";
import Checkout from "./Checkout";
import Elysian from "./Elysian";

import "../sass/App.sass";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Welcome} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/elysian" component={Elysian} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
