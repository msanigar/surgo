import React, { Component } from "react";
import Home from '../components/Home';
import Nav from '../components/Nav';

import '../styles/Main.scss';

class Index extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <React.Fragment>
        <Home />
        <Nav />
      </React.Fragment>
    )
  }
}

export default Index;
