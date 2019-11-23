import React, { Component, Fragment } from "react";

import Button from "../Button";

class Cookies extends Component {
  constructor(props) {
    super(props);

    this.hideBanner = this.hideBanner.bind(this);
    this.showBanner = this.showBanner.bind(this);
    this.openPrefs = this.openPrefs.bind(this);
    this.closePrefs = this.closePrefs.bind(this);
    this.optOut = this.optOut.bind(this);

    this.state = {
      bannerVisible: false,
      prefsVisible: false
    };
  }

  hideBanner() {
    this.setState({
      bannerVisible: false
    });
    localStorage.setItem("hideBanner", true);
  }

  showBanner() {
    this.setState({
      bannerVisible: true
    });
  }

  openPrefs() {
    this.setState({
      prefsVisible: true
    });
  }

  closePrefs() {
    this.setState({
      prefsVisible: false,
      bannerVisible: false
    });
  }

  optOut() {
    window.gaOptout();
  }

  componentDidMount() {
    // cookie banner is hidden by default, then we show if no flag set
    window && localStorage.getItem("hideBanner") && this.hideBanner();
    window && !localStorage.getItem("hideBanner") && this.showBanner();
  }

  render() {
    const classes = this.state.bannerVisible
      ? `cookie-banner`
      : `cookie-banner hidden`;
    return (
      <div className={classes}>
        {this.state.bannerVisible == true && this.state.prefsVisible == false && (
          <Fragment>
            <h3>Our website uses Cookies:</h3>
            <p>
              Go to preferences to change your cookie settings, or if you are
              happy to continue to press fuck off.
            </p>
            <div>
              <Button
                text={"Preferences"}
                clickFunc={this.openPrefs}
                theme={"dark"}
              />
              <Button
                text={"Fuck off."}
                clickFunc={this.hideBanner}
                theme={"dark"}
              />
            </div>
          </Fragment>
        )}

        {this.state.bannerVisible == true && this.state.prefsVisible == true && (
          <Fragment>
            <p className="cookie-preferences">
              We use Google Analytics and Google Tag Manager cookies to ensure
              you get the best experience on our website.
            </p>
            <p>
              You can opt-out by clicking{" "}
              <span className="cookie-link" onClick={this.optOut}>
                here
              </span>
              .
            </p>
            <div>
              <Button
                text={"Got it!"}
                theme={"dark"}
                clickFunc={this.closePrefs}
              />
            </div>
          </Fragment>
        )}

        {this.state.bannerVisible == false && (
          <span className="show-cookie-prefs" onClick={this.showBanner}>
            {" "}
            Cookies Preferences{" "}
          </span>
        )}
      </div>
    );
  }
}

export default Cookies;
