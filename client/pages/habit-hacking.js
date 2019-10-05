import React, { Component } from "react";
import Nav from '../components/Nav';
import Button from '../components/Button';
import Signup from '../components/Signup';
import Chevron from '../components/SVG/Chevron';

import '../styles/Main.scss';

class HabitHacking extends Component {
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
              <h2 className="green-text book-font">The problem is
              Esports athletes currently develope unhealthy habits that  hinder their success as an ath-lete dramatically</h2>
            </div>
            <div className="next green-bg book-font">
              <div className="next-container">
                <p>How we solve this</p>
                <Chevron />
                <div className="next-text">
                  <p>Habit Hacking</p>
                  <hr></hr>
                  <h4>We create healthy habits to replace the old ones.</h4>
                  <p>As a starting point.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="middle book-font">
            <h2>How does this help players</h2>
            <span>
              <h3>Happy players</h3>
              <p>Bad habits, don't just stop you being good, they stop you feeling good. By rebuilding new habits, players feel more confident in their ability to correct mistakes.</p>
            </span>
            <span>
              <h3>Better problem solvers</h3>
              <p>Players become better problem solves - once they know how to actively fix habits outside of the game. They learn to apply this knowledge inside the game.</p>
            </span>
            <span>
              <h3>Better communicators</h3>
              <p>Players are able to comfortably navigate the communication & cultural barriers that once effected their performance.</p>
            </span>
            <span>
              <h3>Precision focus</h3>
              <p>Players become more focused allowing them to retain more information from practice and apply it in game more efficiently.
            </p>
            </span>
            <div className="black">
              <p className="green-text book-font">
              Accountability is designed to give players full control over their lives by training them to structure it more efficiently.
            </p>
              <p className="green-text book-font">Players who account for their actions see a dramatic improvement in their in-game performance within
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
            <div className="signup green-bg">
            <Signup />
            </div>
            <div className="bottom-footer">
              <p className="green-text">Did this section help at all?</p>
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

export default HabitHacking;
