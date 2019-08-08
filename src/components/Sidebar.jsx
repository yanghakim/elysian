import React, { Component } from "react";

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

import "../sass/sidebar.sass";

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="sidebar__items">
          <h1 className="sidebar-title">elysian</h1>

          <img src={bible} height="18" width="18" alt="bible" />
          <p className="sidebar-item">bible</p>

          <img src={praying} height="18" width="18" alt="praying" />
          <p className="sidebar-item">quiet times</p>

          <img src={article} height="18" width="18" alt="article" />
          <p className="sidebar-item">
            devotionals/
            <br />
            articles
          </p>

          <img src={book} height="18" width="18" alt="book" />
          <p className="sidebar-item">books/novels</p>

          <img src={sermon} height="18" width="18" alt="sermon" />
          <p className="sidebar-item">sermons</p>

          <img src={photo} height="18" width="18" alt="photography" />
          <p className="sidebar-item">
            photography/
            <br />
            snapshots
          </p>

          <img src={poetry} height="18" width="18" alt="poetry" />
          <p className="sidebar-item">poems</p>

          <img src={guitar} height="18" width="18" alt="guitar" />
          <p className="sidebar-item">songs/lyrics</p>

          <img src={meetup} height="18" width="18" alt="meetup" />
          <p className="sidebar-item">meet ups</p>

          <img src={friend} height="18" width="18" alt="friend" />
          <p className="sidebar-item">relationships</p>

          <img src={family} height="18" width="18" alt="family" />
          <p className="sidebar-item">family</p>

          <p className="sidebar-item separator">-----------------</p>

          <img src={bible} height="0" width="0" alt="todos" />
          <p className="sidebar-item">todos</p>

          <img src={bible} height="0" width="0" alt="reminders" />
          <p className="sidebar-item">reminders</p>
        </div>
      </div>
    );
  }
}

export default Sidebar;
