import React, { Component } from "react";

import Back from '../components/SVG/Back';
import Nav from '../components/Nav';


import '../styles/Main.scss';

class Contact extends Component {
  constructor(props) {
    super(props);

    this.selectablePeople = this.selectablePeople.bind(this)
  }

  selectablePeople() {

  }

  render() {
    return (
      <React.Fragment>
        <div className="contact">
          <div className="container">
            <div
              className="back light-font"
              onClick={() => window.history.back()}
            >
              <Back />
            </div>
            <h3>Contact <br /> Surgo</h3>
            <p>Who are you contacting? </p>
            <ul className="people-list">
            <li onClick={() => this.selectablePeople('Alex')}>Alex</li>
            <li onClick={() => this.selectablePeople('Christina')}>Christina</li>
            <li onClick={() => this.selectablePeople('Gareth')}>Gareth</li>
            </ul>
            <textarea maxLength="1000" cols="30" rows="5"></textarea>
            <div className="btn-container">
              <button className="btn">
                Send Message
            </button>
            </div>
          </div>

        </div>
        <Nav />
      </React.Fragment>

    )
  }
}

export default Contact;
