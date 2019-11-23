import React, { Component } from "react";
import Nav from "../components/Nav";
import Button from "../components/Button";
import Signup from "../components/Signup";
import Chevron from "../components/SVG/Chevron";

import "../styles/Main.scss";

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
              <h2 className="yellow-text book-font">
                Esports athletes see their inconsistent performance solely as a
                gameplay issue.
              </h2>
            </div>
            <div className="next yellow-bg book-font">
              <div className="next-container">
                <p>How we solve this</p>
                <Chevron />
                <div className="next-text">
                  <p>Performance Strategy</p>
                  <hr></hr>
                  <h4>
                    We comprehend-sively diagnose each players bodily needs.
                  </h4>
                  <p>As a starting point.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="middle book-font">
            <h2>How does this help players</h2>
            <span>
              <h3>Dietary needs</h3>
              <p>
                Everyone is different, so by understanding the players
                inspanidually and their bodies needs. We can develop guidelines
                that are easy for every player.
              </p>
            </span>
            <span>
              <h3>Travelling efficiently</h3>
              <p>
                Long travel days have a profound effect on the body - often
                aggravating symptoms of Stress induced Anxiety which effect a
                players ability to communicate and focus in game.{" "}
              </p>
            </span>
            <span>
              <h3>Caffeine Consumption</h3>
              <p>
                Whilst caffeine stimulates brain activity, used incorrectly can
                have an adverse effect on the body - prolonging the stress your
                body feels.
              </p>
            </span>
            <span>
              <h3>Motivation</h3>
              <p>
                Motivation is a psychological phenomenon that is directly
                influenced by our dietary needs, sleeping habits, body image and
                more.
              </p>
            </span>
            <div className="black">
              <p className="yellow-text book-font">
                Our performance strategy is designed to turn what we think, say
                and motivates us into real, productive results.
              </p>
              <p className="yellow-text book-font">
                Players who follow our performance strategy see a dramatic
                improvement in their in-game performance within 3-6 months.
              </p>
            </div>
            <div>
              <h3>Our Case Studies</h3>
              <span>
                <p>June 2019</p>
                <h4>The World of Caffeine</h4>
                <div className="btn-container">
                  <Button theme="dark" text="Read study" />
                </div>
              </span>
              <span>
                <p>June 2019</p>
                <h4>Essential Oils</h4>
                <div className="btn-container">
                  <Button theme="dark" text="Read study" />
                </div>
              </span>
              <span>
                <p>June 2019</p>
                <h4>Sleep vs. Esports</h4>
                <div className="btn-container">
                  <Button theme="dark" text="Read study" />
                </div>
              </span>
            </div>
          </div>
          <div className="bottom">
            <div className="signup yellow-bg">
              <Signup />
            </div>
            <div className="bottom-footer">
              <p className="yellow-text">Did this section help at all?</p>
              <h3>
                If you still have questions - check out our FAQ or contact us.
              </h3>
              <div
                className="btn-container"
                onClick={() => window.history.back()}
              >
                <Button text="Go back" theme="light" />
              </div>
            </div>
          </div>
        </div>
        <Nav />
      </React.Fragment>
    );
  }
}

export default PerformanceStrategy;
