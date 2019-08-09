import React, { Component } from "react";
import TextareaAutosize from "react-autosize-textarea";

import Add from "./Add";

import cart from "../assets/cart.png";

import "../sass/section.sass";

class Section extends Component {
  constructor() {
    super();

    this.state = {
      title: "",
      titlePlaceholder: "TITLE",
      numOfSections: 1,
      text: [""],
      newText: [""],
      deletedText: "",
      deletedIndex: null,
      showDeletedNotif: false,
      undoClass: "section-undobtn",
      linkValue: "",
      linkPlaceholder: "link to passage",
      linkBibleText: "",
      linkDevoText: "",
      linkBookText: "",
      linkSermonText: "",
      linkPoemText: "",
      linkSongText: "",
      bibleText: [""],
      qtText: [""],
      devoText: [""],
      bookText: [""],
      sermonText: [""],
      photoText: [""],
      poemText: [""],
      songText: [""],
      meetupText: [""],
      relationshipText: [""],
      familyText: [""],
      date: ""
    };
  }

  /**
   * Setting today's date
   **/
  componentDidMount() {
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = today.getFullYear();

    this.setState({
      date: mm + "/" + dd + "/" + yyyy
    });
  }

  /**
   * Handling SAVING text when leaving a section,
   * RETREIVING text when returning to a section,
   * and RESETING text input when appropriate
   **/
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.section !== this.props.section) {
      switch (prevProps.section) {
        case "bible":
          this.setState({
            bibleText: this.state.text,
            linkBibleText: this.state.linkValue
          });
          break;
        case "quiet times":
          this.setState({
            qtText: this.state.text
          });
          break;
        case "devotionals/articles/podcasts":
          this.setState({
            devoText: this.state.text,
            linkDevoText: this.state.linkValue
          });
          break;
        case "books/novels":
          this.setState({
            bookText: this.state.text,
            linkBookText: this.state.linkValue
          });
          break;
        case "sermons":
          this.setState({
            sermonText: this.state.text,
            linkSermonText: this.state.linkValue
          });
          break;
        case "photography/snapshots":
          this.setState({
            photoText: this.state.text
          });
          break;
        case "poems":
          this.setState({
            poemText: this.state.text,
            linkPoemeText: this.state.linkValue
          });
          break;
        case "songs/lyrics":
          this.setState({
            songText: this.state.text,
            linkSongText: this.state.linkValue
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
        text: "",
        linkValue: ""
      });

      switch (this.props.section) {
        case "bible":
          this.setState({
            text: this.state.bibleText,
            titlePlaceholder: "TITLE",
            linkPlaceholder: "link to passage",
            linkValue: this.state.linkBibleText
          });
          break;
        case "quiet times":
          this.setState({
            text: this.state.qtText,
            titlePlaceholder: "TITLE",
            linkPlaceholder: null
          });
          break;
        case "devotionals/articles/podcasts":
          this.setState({
            text: this.state.devoText,
            titlePlaceholder: "TITLE",
            linkPlaceholder: "link to devotional/article/podcasts",
            linkValue: this.state.linkDevoText
          });
          break;
        case "books/novels":
          this.setState({
            text: this.state.bookText,
            titlePlaceholder: "TITLE",
            linkPlaceholder: "link to ebook",
            linkValue: this.state.linkBookText
          });
          break;
        case "sermons":
          this.setState({
            text: this.state.sermonText,
            titlePlaceholder: "TITLE",
            linkPlaceholder: "link to sermon",
            linkValue: this.state.linkSermonText
          });
          break;
        case "photography/snapshots":
          this.setState({
            text: this.state.photoText,
            titlePlaceholder: "TITLE",
            linkPlaceholder: null,
            linkValue: this.state.linkPhotoText
          });
          break;
        case "poems":
          this.setState({
            text: this.state.poemText,
            titlePlaceholder: "TITLE",
            linkPlaceholder: "link to poem",
            linkValue: this.state.linkPoemText
          });
          break;
        case "songs/lyrics":
          this.setState({
            text: this.state.songText,
            titlePlaceholder: "TITLE",
            linkPlaceholder: "link to song",
            linkValue: this.state.linkSongText
          });
          break;
        case "meetups":
          this.setState({
            text: this.state.meetupText,
            titlePlaceholder: "NAME",
            linkPlaceholder: null
          });
          break;
        case "relationships":
          this.setState({
            text: this.state.relationshipText,
            titlePlaceholder: "NAME",
            linkPlaceholder: null
          });
          break;
        case "family":
          this.setState({
            text: this.state.familyText,
            titlePlaceholder: "NAME",
            linkPlaceholder: null
          });
          break;
        default:
      }
    }
  }

  /**
   * Handling TITLE and BODY text changes
   **/
  handleTitleChange = e => {
    this.setState({
      title: e.target.value
    });
  };

  handleTextChange = e => {
    const index = e.target.attributes.getNamedItem("index").value;
    this.state.text[index] = e.target.value;
    this.forceUpdate();
  };

  /**
   * Rendering TEXT AREA, adding and subtracting lines when appropriate
   **/
  renderTextAreas = () => {
    let num = this.state.text;
    let length = num.length;

    return (
      <div>
        {num.map((text, index) => {
          return (
            <div className="section__form">
              {length === 1 && <button style={{ opacity: 0 }}>-</button>}
              {length > 1 && (
                <button
                  className="section__form-subtract"
                  index={index}
                  onClick={this.subtractSection}
                >
                  -
                </button>
              )}
              <Add />
              <TextareaAutosize
                className="section__form-input"
                type="text"
                index={index}
                value={this.state.text[index]}
                onChange={this.handleTextChange}
                placeholder="reflections/notes"
              />
            </div>
          );
        })}
      </div>
    );
  };

  /**
   * Handle ADDING and SUBTRACTING sections
   * Substracting handles rendering UNDO notification,
   * and caching recent deletion
   **/
  addSection = () => {
    this.setState(prevState => {
      return {
        text: [...this.state.text, this.state.newText],
        numOfSections: prevState.numOfSections + 1
      };
    });
  };

  subtractSection = e => {
    const index = e.target.attributes.getNamedItem("index").value;
    this.setState({
      deletedText: this.state.text[index],
      deletedIndex: index,
      showDeletedNotif: true
    });
    setTimeout(() => {
      this.setState({
        undoClass: "section-undobtn exit"
      });
    }, 10000);
    setTimeout(() => {
      this.setState({
        showDeletedNotif: false
      });
    }, 10500);
    setTimeout(() => {
      this.setState({
        undoClass: "section-undobtn"
      });
    }, 10600);
    this.state.text.splice(index, 1);
    this.forceUpdate();
  };

  /**
   * Handles UNDOING deletions
   **/
  undoDeletion = () => {
    console.log(this.state.deletedIndex, this.state.deletedText);
    this.state.text.splice(this.state.deletedIndex, 0, this.state.deletedText);
    this.forceUpdate();

    this.setState({
      showDeletedNotif: false
    });
    setTimeout(() => {
      this.setState({
        undoClass: "section-undobtn"
      });
    }, 100);
  };

  handleLinkChange = e => {
    this.setState({
      linkValue: e.target.value
    });
  };

  render() {
    return (
      <div className="dynamicContainer">
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
          {this.props.section === "photography/snapshots" && (
            <button className="section-btn">open Google photos</button>
          )}
          {this.props.section === "photography/snapshots" && (
            <button className="section-btn">open iCloud photos</button>
          )}
          {this.state.linkPlaceholder && (
            <input
              className="section-link"
              placeholder={this.state.linkPlaceholder}
              value={this.state.linkValue}
              onChange={this.handleLinkChange}
            />
          )}
          {this.props.section === "songs/lyrics" && (
            <button className="section-btn">search song/lyrics</button>
          )}
          {this.renderTextAreas()}
          <button className="section__form-newline" onClick={this.addSection}>
            add another section
          </button>
          {this.state.showDeletedNotif && (
            <button
              className={this.state.undoClass}
              onClick={this.undoDeletion}
            >
              undo delete?
            </button>
          )}
          <button className="section-savebtn">save</button>
        </div>
      </div>
    );
  }
}

export default Section;
