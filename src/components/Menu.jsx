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

import "../sass/menu.sass";

class Menu extends Component {
  constructor() {
    super();

    this.state = {
      menuClass: "menu",
      choice: null
    };
  }

  choose = choice => {
    this.setState({
      menuClass: "menu exit"
    });

    setTimeout(() => {
      this.setState({ choice });
    }, 1000);
  };

  render() {
    if (this.state.choice) {
      return (
        <Redirect
          push
          to={{ pathname: "/home", state: { section: this.state.choice } }}
          replace
        />
      );
    }

    return (
      <div className={this.state.menuClass}>
        <p className="menu-title">what's your intention?</p>
        <div className="menu__choices">
          <div
            className="menu__choices-item"
            onClick={() => this.choose("bible")}
          >
            <img src={bible} height="18" width="18" alt="bible" />
            <p>bible</p>
          </div>
          <div
            className="menu__choices-item"
            onClick={() => this.choose("quiet times")}
          >
            <img src={praying} height="18" width="18" alt="praying" />
            <p>quiet times</p>
          </div>

          <div
            className="menu__choices-item"
            onClick={() => this.choose("devotionals/articles/podcasts")}
          >
            <img src={article} height="18" width="18" alt="article" />
            <p>
              devotionals/
              <br />
              articles/
              <br />
              podcasts
            </p>
          </div>

          <div
            className="menu__choices-item"
            onClick={() => this.choose("books/novel")}
          >
            <img src={book} height="18" width="18" alt="book" />
            <p>books/novels</p>
          </div>
          <div
            className="menu__choices-item"
            onClick={() => this.choose("sermons")}
          >
            <img src={sermon} height="18" width="18" alt="sermon" />
            <p>sermons</p>
          </div>

          <div
            className="menu__choices-item"
            onClick={() => this.choose("photography/snapshots")}
          >
            <img src={photo} height="18" width="18" alt="photography" />
            <p>
              photography/
              <br />
              snapshots
            </p>
          </div>

          <div
            className="menu__choices-item"
            onClick={() => this.choose("songs/lyrics")}
          >
            <img src={guitar} height="18" width="18" alt="guitar" />
            <p>songs/lyrics</p>
          </div>
          <div
            className="menu__choices-item"
            onClick={() => this.choose("meet ups")}
          >
            <img src={meetup} height="18" width="18" alt="meetup" />
            <p>meet ups</p>
          </div>

          <div
            className="menu__choices-item"
            onClick={() => this.choose("relationships")}
          >
            <img src={friend} height="18" width="18" alt="friend" />
            <p>relationships</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
