import React, { Component } from "react";

import Login from "./Login";
import Sidebar from "./Sidebar";
import Section from "./Section";
import Settings from "./Settings";

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
      case "devotionals/articles/podcasts":
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
        {this.state.section === "settings" && <Settings />}
        {!this.state.section && <Login switchSections={this.switchSections} />}
        {this.state.section !== "settings" && (
          <Section section={this.state.section} />
        )}
      </div>
    );
  }
}

export default Elysian;
