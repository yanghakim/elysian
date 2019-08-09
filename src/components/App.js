import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Checkout from "./Checkout";
import Elysian from "./Elysian";
import Settings from "./Settings";

import "../sass/App.sass";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" exact component={Elysian} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/settings" component={Settings} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
