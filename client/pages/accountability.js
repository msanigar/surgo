import React, { Component } from "react";
import Nav from '../components/Nav';
import Button from '../components/Button';
import Signup from '../components/Signup';
import Chevron from '../components/SVG/Chevron';

import '../styles/Main.scss';

class Accountability extends Component {
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
              <h2 className="red-text book-font">The problem is
              Esports athletes are not actively trying to take control of their hectic schedule.</h2>
            </div>
            <div className="next red-bg book-font">
              <div className="next-container">
                <p>How we solve this</p>
                <Chevron />
                <div className="next-text">
                  <p>Accountability</p>
                  <hr></hr>
                  <h4>We give players
                  the tools and knowledge to
                  take control.</h4>
                  <p>As a starting point.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="middle book-font">
            <h2>How does this help players</h2>
            <span>
              <h3>Staying in control</h3>
              <p>Our holistic philosophy helps players find their own way to balance sleep, practice, eating and exercise. </p>
            </span>
            <span>
              <h3>Healthy body</h3>
              <p>Having accountability allows players to learn what works for them, allowing them to maximize their game time without compromising their bodies.</p>
            </span>
            <span>
              <h3>Keep record</h3>
              <p>Players make it a habit to keep track of their dietary intake , exercise and active schedule so they never feel like they are forgetting something.</p>
            </span>
            <span>
              <h3>SoS Meetings</h3>
              <p>When things take an unexpected turn - our SoS meetings will help players compartmentalise problems into easy to tackle chunks - making them more efficient.

            </p>
            </span>
            <div className="black">
              <p className="red-text book-font">
                Accountability is designed to give players full control over their lives by training them to structure it more efficiently.
            </p>
              <p className="red-text book-font">Players who account for their actions see a dramatic improvement in their in-game performance within
              3-6 months.

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
            <div className="signup red-bg">
              <Signup />
            </div>
            <div className="bottom-footer">
              <p className="red-text">Did this section help at all?</p>
              <h3>If you still have questions - check out our FAQ or contact us.</h3>
              <div className="btn-container"
                onClick={() => window.history.back()}
                >
                <Button text="Go back" theme="light" />
              </div>
            </div>
          </div>
        </div>
        <Nav />
      </React.Fragment>
    )
  }
}

export default Accountability;
