import React, { Component } from "react";

import Add from "./Add";

import "../sass/section.sass";

class Section extends Component {
  render() {
    return (
      <div className="section">
        <p className="section-title">bible</p>
        <div className="section__form">
          <Add />
          <textarea
            className="section__form-input"
            type="text"
            placeholder="reflections/notes"
          />
        </div>
      </div>
    );
  }
}

export default Section;
