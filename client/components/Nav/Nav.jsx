import React, { Component } from "react";
import NavButton from '../NavButton';
import Menu from '../Menu';

class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navOpen: false
    }

    this.toggleNav = this.toggleNav.bind(this)
  }

  toggleNav = () => {

    // bit of a race condition here..
    // check the state before we change it

    if (!this.state.navOpen) {
      document.body.classList.add('noscroll');
    } else {
      document.body.classList.remove('noscroll');
    }

    this.setState({
      navOpen: !this.state.navOpen
    })
  }

  render() {
    return (
        <div className="app-container">
          <NavButton toggle={this.toggleNav} />
          <Menu hide={this.toggleNav} show={this.state.navOpen} />
        </div>
    )
  }
}

export default Nav;
