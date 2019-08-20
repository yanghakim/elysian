import React, { Component } from "react";
import axios from "axios";

import { BIBLE_API } from "../keys.js";

import "../sass/add.sass";

class Add extends Component {
  constructor() {
    super();

    this.state = {
      minimized: true,
      hiddenClass: "add__hidden hide",
      buttonClass: "add-btn",
      searchVerseClass: "add__hidden-item",
      resultsVerseClass: "add__hidden-item hide",
      copyAlertClass: "copy hide",
      bibleVersionID: "06125adad2d5898a-01",
      abbreviation: "ESV",
      verseQuery: "",
      verseResults: ""
    };
  }

  toggleView = () => {
    if (this.state.buttonClass === "add-btn") {
      this.setState({
        hiddenClass: "add__hidden",
        buttonClass: "add-btn active"
      });
    } else {
      this.setState({
        hiddenClass: "add__hidden exit"
      });

      setTimeout(() => {
        this.setState({
          hiddenClass: "add__hidden hide",
          buttonClass: "add-btn"
        });
      }, 500);
    }
  };

  handleVerseQuery = e => {
    if (e.target.value === "") {
      this.setState({
        searchVerseClass: "add__hidden-item"
      });
    } else {
      this.setState({
        verseQuery: e.target.value,
        searchVerseClass: "add__hidden-item searching"
      });
    }
  };

  renderExpandedView = () => {
    return (
      <div className={this.state.hiddenClass}>
        <a
          className="add__hidden-item"
          href="https://www.biblegateway.com/"
          target="__blank"
        >
          open Bible
        </a>
        <p className="add__hidden-item translation">ESV</p>
        <input
          className="add__hidden-item input"
          placeholder="search verse by reference"
          onChange={this.handleVerseQuery}
          autoFocus="autofocus"
        />
        <p className={this.state.searchVerseClass} onClick={this.getResults}>
          search
        </p>

        <p className={this.state.copyAlertClass}>
          hover and click text to copy
        </p>
        <div className={this.state.resultsVerseClass}>
          <p
            className="add__hidden-item"
            onClick={this.copyToClipboard}
            dangerouslySetInnerHTML={{ __html: this.state.verseResults }}
          />
        </div>
      </div>
    );
  };

  copyToClipboard = e => {
    const textField = document.createElement("textarea");
    textField.innerText = e.target.innerText;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };

  getResults = async () => {
    if (this.state.verseQuery === "") {
      this.setState({
        verseResults: "No Results.",
        resultsVerseClass: "add__hidden-item results"
      });
    } else {
      const bibleVerse = await axios.get(
        `https://api.esv.org/v3/passage/text/`,
        {
          params: {
            q: this.state.verseQuery,
            "include-headings": false,
            "include-footnotes": false,
            "include-verse-numbers": false,
            "include-short-copyright": false,
            "include-passage-references": false
          },
          headers: {
            Authorization: "Token " + BIBLE_API
          }
        }
      );

      console.log(bibleVerse.data.passages);

      if (bibleVerse.data.passages.length === 0) {
        this.setState({
          verseResults: "No Results.",
          resultsVerseClass: "add__hidden-item results"
        });
      } else {
        this.setState({
          verseResults: bibleVerse.data.passages,
          resultsVerseClass: "add__hidden-item results",
          copyAlertClass: "copy"
        });
      }
    }
  };

  render() {
    return (
      <div className="add undraggable">
        <button className={this.state.buttonClass} onClick={this.toggleView}>
          +
        </button>
        {this.renderExpandedView()}
      </div>
    );
  }
}

export default Add;
