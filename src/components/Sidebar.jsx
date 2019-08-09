import React, { Component } from "react";
import { Redirect } from "react-router-dom";

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
      <div className="sidebar">
        <div className="sidebar__items">
          <h1 className="sidebar-title">elysian</h1>

          <img
            className="sidebar-item name"
            src={settings}
            height="18"
            width="18"
            alt="settings"
          />
          <p
            className="sidebar-item name"
            onClick={() => this.props.switchSections("settings")}
          >
            yangha kim
          </p>

          <img src={bible} height="18" width="18" alt="bible" />
          <p
            className="sidebar-item"
            onClick={() => this.props.switchSections("bible")}
          >
            bible
          </p>

          <img src={praying} height="18" width="18" alt="praying" />
          <p
            className="sidebar-item"
            onClick={() => this.props.switchSections("quiet times")}
          >
            quiet times
          </p>

          <img src={article} height="18" width="18" alt="article" />
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

          <img src={book} height="18" width="18" alt="book" />
          <p
            className="sidebar-item"
            onClick={() => this.props.switchSections("books/novels")}
          >
            books/novels
          </p>

          <img src={sermon} height="18" width="18" alt="sermon" />
          <p
            className="sidebar-item"
            onClick={() => this.props.switchSections("sermons")}
          >
            sermons
          </p>

          <img src={photo} height="18" width="18" alt="photography" />
          <p
            className="sidebar-item"
            onClick={() => this.props.switchSections("photography/snapshots")}
          >
            photography/
            <br />
            snapshots
          </p>

          <img src={poetry} height="18" width="18" alt="poetry" />
          <p
            className="sidebar-item"
            onClick={() => this.props.switchSections("poems")}
          >
            poems
          </p>

          <img src={guitar} height="18" width="18" alt="guitar" />
          <p
            className="sidebar-item"
            onClick={() => this.props.switchSections("songs/lyrics")}
          >
            songs/lyrics
          </p>

          <img src={meetup} height="18" width="18" alt="meetup" />
          <p
            className="sidebar-item"
            onClick={() => this.props.switchSections("meetups")}
          >
            meet ups
          </p>

          <img src={friend} height="18" width="18" alt="friend" />
          <p
            className="sidebar-item"
            onClick={() => this.props.switchSections("relationships")}
          >
            relationships
          </p>

          <img src={family} height="18" width="18" alt="family" />
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
        <div className="sidebar__checkout" onClick={this.toCheckout}>
          <img
            src={cart}
            className="sidebar__checkout-img"
            width="30"
            height="30"
          />
          <p className="sidebar__checkout-text">checkout</p>
        </div>
      </div>
    );
  }
}

export default Sidebar;
