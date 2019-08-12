import React, { Component } from "react";
import GridLayout from "react-grid-layout";

import "../css/react-grid-layout.css";
import "../css/react-resizable.css";

import Add from "./Add";

import "../sass/home.sass";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      section: props.section,
      gridWidth: document.body.clientWidth - 640,
      title: "",
      titlePlaceholder: "TITLE",
      numOfSections: 1,
      text: [""],
      newText: [""],
      deletedText: "",
      deletedIndex: null,
      showDeletedNotif: false,
      undoClass: "home-undobtn",
      date: ""
    };
  }

  /**
   * Setting today's date
   * Listen to screen size change and change widths of components
   **/
  componentDidMount() {
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = today.getFullYear();

    this.setState({
      date: mm + "/" + dd + "/" + yyyy
    });

    this.resize();
    window.addEventListener("resize", () => {
      this.resize();
    });

    const header = document.getElementById("header");
    header.value = this.state.section;
  }

  resize = () => {
    const width = document.getElementsByClassName("home-title")[0].offsetWidth;
    this.setState({ gridWidth: width });
  };

  /**
   * Handling SECTION changes
   **/
  changeSection = e => {
    this.setState({
      section: e.target.value
    });
  };

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

    return num.map((text, index) => {
      return (
        <div
          className="home__form"
          key={index}
          data-grid={{ x: 0, y: index + 2, w: 12, h: 2, minW: 3, minH: 2 }}
        >
          <div className="home__form__top">
            <button className="home__form__top-subtract">=</button>
            <Add />
            {length === 1 && <button style={{ opacity: 0 }}>-</button>}
            {length > 1 && (
              <button
                className="home__form__top-subtract undraggable"
                index={index}
                onClick={this.subtractSection}
              >
                -
              </button>
            )}
          </div>

          <textarea
            className="home__form-input undraggable"
            type="text"
            index={index}
            value={this.state.text[index]}
            onChange={this.handleTextChange}
            placeholder="reflections/notes"
          />
        </div>
      );
    });
  };

  /**
   * Handle ADDING and SUBTRACTING homes
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
        undoClass: "home-undobtn exit"
      });
    }, 10000);
    setTimeout(() => {
      this.setState({
        showDeletedNotif: false
      });
    }, 10500);
    setTimeout(() => {
      this.setState({
        undoClass: "home-undobtn"
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
        undoClass: "home-undobtn"
      });
    }, 100);
  };

  render() {
    return (
      <div className="home">
        <div className="home__top">
          <select
            className="home__top-header"
            id="header"
            onChange={this.changeSection}
          >
            <option value="bible">bible</option>
            <option value="quiet times">quiet times</option>
            <option value="devotionals/articles/podcasts">
              devotionals/articles/podcasts
            </option>
            <option value="sermons">sermons</option>
            <option value="photography/snapshots">photography/snapshots</option>
            <option value="songs/lyrics">songs/lyrics</option>
            <option value="meet ups">meet ups</option>
            <option value="relationships">relationships</option>
          </select>
          <p className="home__top-date">{this.state.date}</p>
        </div>
        <input
          className="home-title"
          type="text"
          value={this.state.title}
          onChange={this.handleTitleChange}
          placeholder={this.state.titlePlaceholder}
          autofocus
        />
        {this.state.section === "photography/snapshots" && (
          <button className="home-btn">open Google photos</button>
        )}
        {this.state.section === "photography/snapshots" && (
          <button className="home-btn">open iCloud photos</button>
        )}
        {this.state.section === "songs/lyrics" && (
          <button className="home-btn">search song/lyrics</button>
        )}

        <GridLayout
          className="layout"
          draggableCancel=".undraggable"
          cols={12}
          rowHeight={30}
          width={this.state.gridWidth}
        >
          {this.renderTextAreas()}
        </GridLayout>
        <button className="home__form-newline" onClick={this.addSection}>
          add another home
        </button>
        {this.state.showDeletedNotif && (
          <button className={this.state.undoClass} onClick={this.undoDeletion}>
            undo delete?
          </button>
        )}
      </div>
    );
  }
}

export default Home;
