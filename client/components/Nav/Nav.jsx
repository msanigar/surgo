import React, { Component } from "react";
import NavButton from "../NavButton";
import Menu from "../Menu";

class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navOpen: false
    };

    this.toggleNav = this.toggleNav.bind(this);
  }

  // kinda hacky, if we navigate while menu open
  // state changes but nothing calls the remove class on body
  // > left unable to scroll

  componentDidMount() {
    this.intervalId = setInterval(() => {
      if (!this.state.navOpen && document.body.classList.contains("noscroll")) {
        document.body.classList.remove("noscroll");
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  toggleNav = () => {
    // bit of a race condition here..
    // check the state before we change it

    if (!this.state.navOpen) {
      document.body.classList.add("noscroll");
    } else {
      document.body.classList.remove("noscroll");
    }

    setTimeout(() => {
      this.setState({
        navOpen: !this.state.navOpen
      });
    }, 25);
  };

  render() {
    return (
      <div className="app-container">
        <NavButton toggle={this.toggleNav} />
        <Menu hide={this.toggleNav} show={this.state.navOpen} />
      </div>
    );
  }
}

export default Nav;
