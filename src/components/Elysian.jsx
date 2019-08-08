import React, { Component } from "react";

import Sidebar from "./Sidebar";
import Section from "./Section";

import "../sass/elysian.sass";

class Elysian extends Component {
  render() {
    return (
      <div className="elysian">
        <Sidebar />
        <Section />
      </div>
    );
  }
}

export default Elysian;
