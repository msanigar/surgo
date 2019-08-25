import React, { Component } from "react";
import Home from '../components/home';
import Nav from '../components/Nav';
import Menu from '../components/Menu';

import '../styles/Main.scss';

class Index extends Component {
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
      <React.Fragment>
        <Home />
        <div className="app-container">
          <Nav toggle={this.toggleNav} />
          <Menu hide={this.toggleNav} show={this.state.navOpen} />
        </div>
      </React.Fragment>
    )
  }
}

export default Index;
