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
      section: "bible",
      sidebarClass: "sidebar",
      viewSidebar: true
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

  toggleSideBar = () => {
    if (this.state.sidebarClass === "sidebar") {
      this.setState({
        sidebarClass: "sidebar exit"
      });
      let mediaQuery = window.matchMedia("(max-width: 900px)");
      if (mediaQuery.matches) {
        this.setState({
          viewSidebar: false
        });
      } else {
        setTimeout(() => {
          this.setState({
            viewSidebar: false
          });
        }, 500);
      }
    } else if (this.state.sidebarClass === "sidebar exit") {
      this.setState({
        sidebarClass: "sidebar",
        viewSidebar: true
      });
    }
  };

  render() {
    return (
      <div className="elysian">
        {this.state.viewSidebar && (
          <Sidebar
            switchSections={this.switchSections}
            sidebarClass={this.state.sidebarClass}
          />
        )}

        <span className="elysian-toggleSide" onClick={this.toggleSideBar} />
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
