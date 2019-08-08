import React, { Component } from "react";

import Add from "./Add";

import cart from "../assets/cart.png";

import "../sass/section.sass";

class Section extends Component {
  constructor() {
    super();

    this.state = {
      title: "",
      titlePlaceholder: "TITLE",
      text: "",
      bibleText: "",
      qtText: "",
      devoText: "",
      bookText: "",
      sermonText: "",
      photoText: "",
      poemText: "",
      songText: "",
      meetupText: "",
      relationshipText: "",
      familyText: "",
      date: ""
    };
  }

  componentDidMount() {
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = today.getFullYear();

    this.setState({
      date: mm + "/" + dd + "/" + yyyy
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.section !== this.props.section) {
      switch (prevProps.section) {
        case "bible":
          this.setState({
            bibleText: this.state.text
          });
          break;
        case "quiet times":
          this.setState({
            qtText: this.state.text
          });
          break;
        case "devotionals/articles":
          this.setState({
            devoText: this.state.text
          });
          break;
        case "books/novels":
          this.setState({
            bookText: this.state.text
          });
          break;
        case "sermons":
          this.setState({
            sermonText: this.state.text
          });
          break;
        case "photography/snapshots":
          this.setState({
            photoText: this.state.text
          });
          break;
        case "poems":
          this.setState({
            poemText: this.state.text
          });
          break;
        case "songs/lyrics":
          this.setState({
            songText: this.state.text
          });
          break;
        case "meetups":
          this.setState({
            meetupText: this.state.text
          });
          break;
        case "relationships":
          this.setState({
            relationshipText: this.state.text
          });
          break;
        case "family":
          this.setState({
            familyText: this.state.text
          });
          break;
        default:
      }

      this.setState({
        text: ""
      });

      switch (this.props.section) {
        case "bible":
          this.setState({
            text: this.state.bibleText,
            titlePlaceholder: "TITLE"
          });
          break;
        case "quiet times":
          this.setState({
            text: this.state.qtText,
            titlePlaceholder: "TITLE"
          });
          break;
        case "devotionals/articles":
          this.setState({
            text: this.state.devoText,
            titlePlaceholder: "TITLE"
          });
          break;
        case "books/novels":
          this.setState({
            text: this.state.bookText,
            titlePlaceholder: "TITLE"
          });
          break;
        case "sermons":
          this.setState({
            text: this.state.sermonText,
            titlePlaceholder: "TITLE"
          });
          break;
        case "photography/snapshots":
          this.setState({
            text: this.state.photoText,
            titlePlaceholder: "TITLE"
          });
          break;
        case "poems":
          this.setState({
            text: this.state.poemText,
            titlePlaceholder: "TITLE"
          });
          break;
        case "songs/lyrics":
          this.setState({
            text: this.state.songText,
            titlePlaceholder: "TITLE"
          });
          break;
        case "meetups":
          this.setState({
            text: this.state.meetupText,
            titlePlaceholder: "NAME"
          });
          break;
        case "relationships":
          this.setState({
            text: this.state.relationshipText,
            titlePlaceholder: "NAME"
          });
          break;
        case "family":
          this.setState({
            text: this.state.familyText,
            titlePlaceholder: "NAME"
          });
          break;
        default:
      }
    }
  }

  handleTextChange = e => {
    this.setState({
      text: e.target.value
    });
  };

  setText = () => {
    switch (this.props.section) {
      case "bible":
        this.setState({
          bibleText: this.state.text
        });
        break;
      case "quiet times":
        this.setState({
          qtText: this.state.text
        });
        break;
      case "devotionals/articles":
        this.setState({
          devoText: this.state.text
        });
        break;
      case "books/novels":
        this.setState({
          bookText: this.state.text
        });
        break;
      case "sermons":
        this.setState({
          sermonText: this.state.text
        });
        break;
      case "photography/snapshots":
        this.setState({
          photoText: this.state.text
        });
        break;
      case "poems":
        this.setState({
          poemText: this.state.text
        });
        break;
      case "songs/lyrics":
        this.setState({
          songText: this.state.text
        });
        break;
      case "meetups":
        this.setState({
          meetupText: this.state.text
        });
        break;
      case "relationships":
        this.setState({
          relationshipText: this.state.text
        });
        break;
      case "family":
        this.setState({
          familyText: this.state.text
        });
        break;
      default:
    }
  };

  render() {
    return (
      <div className="section">
        <p className="section-header">{this.props.section}</p>
        <p className="section-date">{this.state.date}</p>

        <input
          className="section-title"
          type="text"
          value={this.state.title}
          onChange={this.handleTitleChange}
          placeholder={this.state.titlePlaceholder}
        />
        <div className="section__form">
          <Add />

          <textarea
            className="section__form-input"
            type="text"
            value={this.state.text}
            onChange={this.handleTextChange}
            placeholder="reflections/notes"
          />
        </div>
      </div>
    );
  }
}

export default Section;
