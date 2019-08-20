import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Login from "./Login";
import Menu from "./Menu";
import Elysian from "./Elysian";
import Checkout from "./Checkout";
import Settings from "./Settings";

import "../sass/App.sass";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" exact component={Login} />
          <Route path="/menu" exact component={Menu} />
          <Route path="/home" exact component={Elysian} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
