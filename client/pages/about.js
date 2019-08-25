import React, { Component } from "react";

import Back from '../components/SVG/Back';
import Jobs from '../components/SVG/Jobs';
import Nav from '../components/Nav';

import Alex from '../styles/img/alex.png';
import Gareth from '../styles/img/gareth.png';
import Christina from '../styles/img/christina.png';


import '../styles/Main.scss';

class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <div className="about">
          <div className="container">
            <div
              className="back light-font"
              onClick={() => window.history.back()}
            >
              <Back />
            </div>
            <h3>About <br /> Surgo</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec enim vitae est aliquet facilisis. Maecenas ullamcorper massa enim, quis fringilla erat aliquam nec. Aenean mi enim, convallis at justo quis, tristique dignissim mauris. </p>
            <h3>Our <br />Mission</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec enim vitae est aliquet facilisis. Maecenas ullamcorper massa enim, quis fringilla erat aliquam nec. Aenean mi enim, convallis at justo quis, tristique dignissim mauris. </p>
            <h3>Meet <br />The Team</h3>
            <div className="team">
              <img alt="Alex Byfield - Managing Director" src={Alex} />
              <h4>Alex Byfield</h4>
              <p>Managing Director</p>
              <img alt="Christina McGrath - Head of Sports" src={Christina} />
              <h4>Christina McGrath</h4>
              <p>Head of Sports</p>
              <img alt="Gareth Sissons - Creative Director" src={Gareth} />
              <h4>Gareth Sissons</h4>
              <p>Creative Director</p>
            </div>
            <div className="careers">
              <Jobs />
              <h4>Career Openings</h4>
              <p>We're not employing now but we will be soon.</p>
              <p>Make sure that you sign up to our Newsletter to find out what's going on and when.
         </p>
            </div>
          </div>
          <div className="signup">
            <h3 className="menu-beta">Join the beta</h3>
            <input placeholder="Enter your email address here" id="email" type="text" className="validate" />

            <div className="btn-container">
              <button className="btn">
                Sign up
         </button>
            </div>
          </div>
        </div>
        <Nav />
      </React.Fragment>

    )
  }
}

export default About;
