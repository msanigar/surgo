import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Nav from '../../Components/Nav'
import Home from '../../Components/Home'
import Menu from '../../Components/Menu'
import About from '../../Components/About'

import './App.scss';

class App extends Component {
  constructor(props) {
    super(props)

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
      <Fragment>
        <Router>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <div className="app-container">
            <Nav toggle={this.toggleNav} />
            <Menu hide={this.toggleNav} show={this.state.navOpen} />
          </div>
        </Router>
      </Fragment>
    );
  }
}

export default App

