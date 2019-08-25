import React, { Component } from "react";
import Nav from '../components/Nav';

import Chevron from '../components/SVG/Chevron';

import '../styles/Main.scss';

class PerformanceStrategy extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <React.Fragment>
        <div className="advice-container">
          <div className="top">
            <div className="text">
              <p>The problem is</p>
              <h2 className="yellow-text">Esports athletes see their inconsistent performance solely as a gameplay issue.</h2>
            </div>
            <div className="next yellow-bg">
              <div className="next-container">
                <p>How we solve this</p>
                <Chevron />
              </div>
            </div>
          </div>
        </div>
        <Nav />
      </React.Fragment>
    )
  }
}

export default PerformanceStrategy;
