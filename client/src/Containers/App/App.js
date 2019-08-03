import React, { Component } from 'react';
import './App.scss';

import Nav from '../../Components/Nav'
import Home from '../../Components/Home'
import Menu from '../../Components/Menu'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      navOpen: false
    }

    this.toggleNav = this.toggleNav.bind(this)
  }

  toggleNav = () => {
    this.setState({
      navOpen: !this.state.navOpen
    })
  }

  render () {
    return (
      <div className="app-container">
        <Home />
        <Nav toggle={this.toggleNav} />
        <Menu hide={this.toggleNav} show={this.state.navOpen} />
      </div>
    );
  }
}

export default App

