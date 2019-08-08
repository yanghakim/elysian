import React, { Component } from "react";

import Welcome from "./Welcome";
import Sidebar from "./Sidebar";
import Section from "./Section";

import "../sass/elysian.sass";

class Elysian extends Component {
  constructor() {
    super();

    this.state = {
      section: "bible"
    };
  }

  switchSections = section => {
    this.setState({
      section
    });

    switch (section) {
      case "bible":
        break;
      case "quiet times":
        break;
      case "devotionals/articles":
        break;
      case "books/novels":
        break;
      case "sermons":
        break;
      case "photography/snapshots":
        break;
      case "poems":
        break;
      case "songs/lyrics":
        break;
      case "meetups":
        break;
      case "relationships":
        break;
      case "family":
        break;
      default:
    }
  };

  render() {
    return (
      <div className="elysian">
        <Sidebar switchSections={this.switchSections} />
        {!this.state.section && (
          <Welcome switchSections={this.switchSections} />
        )}
        {this.state.section && <Section section={this.state.section} />}
      </div>
    );
  }
}

export default Elysian;
