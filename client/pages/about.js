import React, { Component } from "react";

import Back from "../components/SVG/Back";
import Mission from "../components/SVG/Mission";
import Careers from "../components/SVG/Careers";
import Nav from "../components/Nav";
import Signup from "../components/Signup";

import Profile from "../styles/img/profile.png";

import "../styles/Main.scss";

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
            <h3>About Surgo</h3>
            <div className="about-bg"></div>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet mi
                volutpat, praesent sem venenatis. Ut neque ornare porta
                sollicitudin donec. Mauris nisl integer auctor suspendisse diam
                sed iaculis. At amet, sed nibh vitae a vitae urna malesuada
                augue. A curabitur tellus suscipit turpis mus diam faucibus
                tortor, sagittis. Scelerisque purus aliquam adipiscing imperdiet
                vel pellentesque maecenas. Eget amet faucibus facilisis euismod
                sit sed quis. Volutpat id aliquet tristique tincidunt.
              </p>
              <p>
                Dolor nibh a tortor, pharetra interdum. Commodo elit ipsum
                porttitor orci tellus arcu. Neque vel lectus nulla nibh volutpat
                sed euismod lectus. Id amet amet ut vulputate proin lorem urna.
                Lorem sed ut ornare nisl, sed quis mi. Eget magna tellus proin
                sollicitudin. Non suspendisse vulputate odio senectus eleifend
                odio maecenas imperdiet odio.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Amet mi volutpat, praesent sem
                venenatis. Ut neque ornare porta sollicitudin donec. Mauris nisl
                integer auctor suspendisse diam sed iaculis. At amet, sed nibh
                vitae a vitae urna malesuada augue. A curabitur tellus suscipit
                turpis mus diam faucibus tortor, sagittis. Scelerisque purus
                aliquam adipiscing imperdiet vel pellentesque maecenas. Eget
                amet faucibus facilisis euismod sit sed quis. Volutpat id
                aliquet tristique tincidunt.
              </p>
              <p>
                Dolor nibh a tortor, pharetra interdum. Commodo elit ipsum
                porttitor orci tellus arcu. Neque vel lectus nulla nibh volutpat
                sed euismod lectus. Id amet amet ut vulputate proin lorem urna.
                Lorem sed ut ornare nisl, sed quis mi. Eget magna tellus proin
                sollicitudin. Non suspendisse vulputate odio senectus eleifend
                odio maecenas imperdiet odio.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Amet mi volutpat, praesent sem
                venenatis. Ut neque ornare porta sollicitudin donec. Mauris nisl
                integer auctor suspendisse diam sed iaculis. At amet, sed nibh
                vitae a vitae urna malesuada augue. A curabitur tellus suscipit
                turpis mus diam faucibus tortor, sagittis. Scelerisque purus
                aliquam adipiscing imperdiet vel pellentesque maecenas. Eget
                amet faucibus facilisis euismod sit sed quis. Volutpat id
                aliquet tristique tincidunt
              </p>
            </div>
            <div>
              <h3>Our Mission</h3>
              <Mission />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet mi
                volutpat, praesent sem venenatis. Ut neque ornare porta
                sollicitudin donec. Mauris nisl integer auctor suspendisse diam
                sed iaculis. At amet, sed nibh vitae a vitae urna malesuada
                augue. A curabitur tellus suscipit turpis mus diam faucibus
                tortor, sagittis. Scelerisque purus aliquam adipiscing imperdiet
                vel pellentesque maecenas. Eget amet faucibus facilisis euismod
                sit sed quis. Volutpat id aliquet tristique tincidunt.
              </p>
              <p>
                Dolor nibh a tortor, pharetra interdum. Commodo elit ipsum
                porttitor orci tellus arcu. Neque vel lectus nulla nibh volutpat
                sed euismod lectus. Id amet amet ut vulputate proin lorem urna.
                Lorem sed ut ornare nisl, sed quis mi. Eget magna tellus proin
                sollicitudin. Non suspendisse vulputate odio senectus eleifend
                odio maecenas imperdiet odio..
              </p>
            </div>
            <div>
              <h3>Meet the team bringing Surgo to life</h3>
              <div className="team">
                <div>
                  <img alt="Alex Byfield - Managing Director" src={Profile} />
                  <h4>Alex Byfield</h4>
                  <p>Managing Director</p>
                </div>
                <div>
                  <img alt="Christina McGrath - Head of Sports" src={Profile} />
                  <h4>Christina McGrath</h4>
                  <p>Head of Sports</p>
                </div>
                <div>
                  <img alt="Gareth Sissons - Creative Director" src={Profile} />
                  <h4>Gareth Sissons</h4>
                  <p>Creative Director</p>
                </div>
              </div>
              <div className="careers">
                <h4>Career Openings</h4>
                <p>
                  There are no positions available currently at Surgo - however
                  we may be hiring soon so keep tabs on us, sign up to the
                  newsletter or follow our social media accounts as we will post
                  about position openings there!
                </p>
                <Careers />
              </div>
            </div>
          </div>
          <div className="signup-container">
            <h4>Keep up to date with what’s going on at Surgo</h4>
            <Signup light={true} />
          </div>
        </div>
        <Nav />
      </React.Fragment>
    );
  }
}

export default About;
