import React, { Component } from "react";
import Home from "../components/Home";
class Index extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Home />
      </React.Fragment>
    );
  }
}

export default Index;
