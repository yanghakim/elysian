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
      gridWidth: 1,
      headerChoicesClass: "home__top__header-choices",
      title: "",
      titlePlaceholder: "TITLE",
      fontSize: 1,
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
    window.addEventListener("resize", this.resize);

    const header = document.getElementById("header");
    header.value = this.state.section;
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.resize);
  }

  resize = () => {
    const width = document.getElementsByClassName("home-title")[0].offsetWidth;
    this.setState({ gridWidth: width + 20 });

    console.log(width);
  };

  /**
   * Handling SECTION changes
   **/
  changeSection = choice => {
    switch (choice) {
      case 1:
        this.setState({
          section: "bible"
        });
        break;
      case 2:
        this.setState({
          section: "quiet times"
        });
        break;
      case 3:
        this.setState({
          section: "devotionals/articles/podcasts"
        });
        break;
      case 4:
        this.setState({
          section: "sermons"
        });
        break;
      case 5:
        this.setState({
          section: "photography/snapshots"
        });
        break;
      case 6:
        this.setState({
          section: "songs/lyrics"
        });
        break;
      case 7:
        this.setState({
          section: "meet ups"
        });
        break;
      case 8:
        this.setState({
          section: "relationships"
        });
        break;
      default:
        this.setState(prevState => {
          if (prevState.headerChoicesClass === "home__top__header-choices") {
            return { headerChoicesClass: "home__top__header-choices show" };
          } else {
            return { headerChoicesClass: "home__top__header-choices" };
          }
        });
        break;
    }
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
   * Handling TEXT SIZE adjustments
   **/
  editTextSize = direction => {
    if (direction === "+") {
      this.setState(prevState => {
        return { fontSize: prevState.fontSize + 0.1 };
      });
    } else if (direction === "-") {
      this.setState(prevState => {
        return { fontSize: prevState.fontSize - 0.1 };
      });
    }
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
            <button className="home__form__top-move">=</button>
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
            <button
              className="home__form__top-biggertext undraggable"
              onClick={() => this.editTextSize("+")}
            >
              A
            </button>
            <button
              className="home__form__top-smallertext undraggable"
              onClick={() => this.editTextSize("-")}
            >
              A
            </button>
          </div>

          <textarea
            className="home__form-input undraggable"
            type="text"
            index={index}
            value={this.state.text[index]}
            onChange={this.handleTextChange}
            placeholder="reflections/notes"
            style={{ fontSize: this.state.fontSize + "em" }}
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
          <div className="home__top__header" id="header">
            <button
              className="home__top__header-choice"
              onClick={this.changeSection}
            >
              {this.state.section}
            </button>
            <div class={this.state.headerChoicesClass}>
              <button onClick={() => this.changeSection(1)}>bible</button>
              <button onClick={() => this.changeSection(2)}>quiet times</button>
              <button onClick={() => this.changeSection(3)}>
                devotionals/articles/podcasts
              </button>
              <button onClick={() => this.changeSection(4)}>sermons</button>
              <button onClick={() => this.changeSection(5)}>
                photography/snapshots
              </button>
              <button onClick={() => this.changeSection(6)}>
                songs/lyrics
              </button>
              <button onClick={() => this.changeSection(7)}>meet ups</button>
              <button onClick={() => this.changeSection(8)}>
                relationships
              </button>
            </div>
          </div>

          <p className="home__top-date">{this.state.date}</p>
        </div>
        <input
          className="home-title"
          type="text"
          value={this.state.title}
          onChange={this.handleTitleChange}
          placeholder={this.state.titlePlaceholder}
          autoFocus
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
          rowHeight={50}
          width={this.state.gridWidth}
        >
          {this.renderTextAreas()}
        </GridLayout>
        <button className="home__form-newline" onClick={this.addSection}>
          add another section
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
