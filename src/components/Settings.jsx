import React, { Component } from "react";

import "../sass/settings.sass";

class Settings extends Component {
  constructor() {
    super();

    this.state = {
      googleText: "link to Google Photos",
      icloudText: "link to iCloud Photos",
      evernoteText: "link to Evernote",
      spotifyText: "link to Spotify",
      itunesText: "link to iTunes",
      googleClass: "settings__links-button",
      icloudClass: "settings__links-button",
      evernoteClass: "settings__links-button",
      spotifyClass: "settings__links-button",
      itunesClass: "settings__links-button"
    };
  }

  linkAccount = type => {
    switch (type) {
      case "Google":
        return this.setState({
          googleText: "linked to yanghakim0@gmail.com",
          googleClass: "settings__links-button linked"
        });
      case "iCloud":
        return this.setState({
          icloudText: "linked to yanghakim@icloud.com",
          icloudClass: "settings__links-button linked"
        });
      case "Evernote":
        return this.setState({
          evernoteText: "linked to yanghakim0@gmail.com",
          evernoteClass: "settings__links-button linked"
        });
      case "Spotify":
        return this.setState({
          spotifyText: "linked to yanghakim0@gmail.com",
          spotifyClass: "settings__links-button linked"
        });
      case "iTunes":
        return this.setState({
          itunesText: "linked to yanghakim@apple.com",
          itunesClass: "settings__links-button linked"
        });
      default:
        break;
    }
  };

  render() {
    return (
      <div className="settings">
        <div className="settings__view">
          <p className="settings-title">Settings</p>
          <form className="settings__form">
            <p className="settings__form-title">Change Your Password</p>
            <input
              type="password"
              className="settings__form-input"
              placeholder="old password"
            />
            <input
              type="password"
              className="settings__form-input"
              placeholder="new password"
            />
            <input
              type="password"
              className="settings__form-input"
              placeholder="confirm new password"
            />
            <button className="settings__form-submit">submit changes</button>
          </form>

          <div className="settings__links">
            <p className="settings__links-title">Link Your Accounts</p>
            <button
              className={this.state.googleClass}
              onClick={() => this.linkAccount("Google")}
            >
              {this.state.googleText}
            </button>
            <button
              className={this.state.icloudClass}
              onClick={() => this.linkAccount("iCloud")}
            >
              {this.state.icloudText}
            </button>
            <button
              className={this.state.evernoteClass}
              onClick={() => this.linkAccount("Evernote")}
            >
              {this.state.evernoteText}
            </button>
            <button
              className={this.state.spotifyClass}
              onClick={() => this.linkAccount("Spotify")}
            >
              {this.state.spotifyText}
            </button>
            <button
              className={this.state.itunesClass}
              onClick={() => this.linkAccount("iTunes")}
            >
              {this.state.itunesText}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Settings;
