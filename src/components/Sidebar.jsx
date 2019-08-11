import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import MediaQuery from "react-responsive";

import settings from "../assets/settings.png";
import bible from "../assets/bible.png";
import book from "../assets/book.png";
import article from "../assets/article.png";
import praying from "../assets/praying.png";
import sermon from "../assets/sermon.png";
import photo from "../assets/photo.png";
import poetry from "../assets/poetry.png";
import guitar from "../assets/guitar.png";
import meetup from "../assets/meetup.png";
import friend from "../assets/friend.png";
import family from "../assets/family.png";

import cart from "../assets/cart.png";
import key from "../assets/key.png";

import "../sass/sidebar.sass";

class Sidebar extends Component {
  constructor() {
    super();

    this.state = {
      renderCheckout: false
    };
  }

  toCheckout = () => {
    this.setState({
      renderCheckout: true
    });
  };

  render() {
    if (this.state.renderCheckout) {
      return <Redirect push to={{ pathname: "/checkout" }} replace />;
    }

    return (
      <div className={this.props.sidebarClass}>
        <div className="sidebar__items">
          <MediaQuery query="(max-device-width: 700px)">
            <h1 className="sidebar-title">e</h1>
          </MediaQuery>
          <MediaQuery query="(min-device-width: 700px)">
            <h1 className="sidebar-title">elysian</h1>
          </MediaQuery>

          <img
            style={{ marginTop: "-20px", marginBottom: "20px" }}
            src={settings}
            height="18"
            width="18"
            alt="settings"
            onClick={() => this.props.switchSections("settings")}
          />
          <p
            className="sidebar-item name"
            onClick={() => this.props.switchSections("settings")}
          >
            yangha kim
          </p>

          <img
            src={bible}
            height="18"
            width="18"
            alt="bible"
            onClick={() => this.props.switchSections("bible")}
          />
          <p
            className="sidebar-item"
            onClick={() => this.props.switchSections("bible")}
          >
            bible
          </p>

          <img
            src={praying}
            height="18"
            width="18"
            alt="praying"
            onClick={() => this.props.switchSections("quiet times")}
          />
          <p
            className="sidebar-item"
            onClick={() => this.props.switchSections("quiet times")}
          >
            quiet times
          </p>

          <img
            src={article}
            height="18"
            width="18"
            alt="article"
            onClick={() =>
              this.props.switchSections("devotionals/articles/podcasts")
            }
          />
          <p
            className="sidebar-item"
            onClick={() =>
              this.props.switchSections("devotionals/articles/podcasts")
            }
          >
            devotionals/
            <br />
            articles/
            <br />
            podcasts
          </p>

          <img
            src={book}
            height="18"
            width="18"
            alt="book"
            onClick={() => this.props.switchSections("books/novels")}
          />
          <p
            className="sidebar-item"
            onClick={() => this.props.switchSections("books/novels")}
          >
            books/novels
          </p>

          <img
            src={sermon}
            height="18"
            width="18"
            alt="sermon"
            onClick={() => this.props.switchSections("sermons")}
          />
          <p
            className="sidebar-item"
            onClick={() => this.props.switchSections("sermons")}
          >
            sermons
          </p>

          <img
            src={photo}
            height="18"
            width="18"
            alt="photography"
            onClick={() => this.props.switchSections("photography/snapshots")}
          />
          <p
            className="sidebar-item"
            onClick={() => this.props.switchSections("photography/snapshots")}
          >
            photography/
            <br />
            snapshots
          </p>

          <img
            src={poetry}
            height="18"
            width="18"
            alt="poetry"
            onClick={() => this.props.switchSections("poems")}
          />
          <p
            className="sidebar-item"
            onClick={() => this.props.switchSections("poems")}
          >
            poems
          </p>

          <img
            src={guitar}
            height="18"
            width="18"
            alt="guitar"
            onClick={() => this.props.switchSections("songs/lyrics")}
          />
          <p
            className="sidebar-item"
            onClick={() => this.props.switchSections("songs/lyrics")}
          >
            songs/lyrics
          </p>

          <img
            src={meetup}
            height="18"
            width="18"
            alt="meetup"
            onClick={() => this.props.switchSections("meetups")}
          />
          <p
            className="sidebar-item"
            onClick={() => this.props.switchSections("meetups")}
          >
            meet ups
          </p>

          <img
            src={friend}
            height="18"
            width="18"
            alt="friend"
            onClick={() => this.props.switchSections("relationships")}
          />
          <p
            className="sidebar-item"
            onClick={() => this.props.switchSections("relationships")}
          >
            relationships
          </p>

          <img
            src={family}
            height="18"
            width="18"
            alt="family"
            onClick={() => this.props.switchSections("family")}
          />
          <p
            className="sidebar-item"
            onClick={() => this.props.switchSections("family")}
          >
            family
          </p>

          <p className="sidebar-item separator" />

          <img src={bible} height="0" width="0" alt="todos" />
          <p className="sidebar-item">todos</p>

          <img src={bible} height="0" width="0" alt="reminders" />
          <p className="sidebar-item">reminders</p>
        </div>
        <div className="sidebar__footer">
          <img
            src={cart}
            className="sidebar__footer-img"
            width="18"
            height="18"
            onClick={this.toCheckout}
          />
          <p className="sidebar__footer-text" onClick={this.toCheckout}>
            checkout
          </p>
          <img
            src={key}
            className="sidebar__footer-img"
            width="18"
            height="18"
            onClick={this.handleLogout}
          />
          <p className="sidebar__footer-text" onClick={this.handleLogout}>
            logout
          </p>
        </div>
      </div>
    );
  }
}

export default Sidebar;
