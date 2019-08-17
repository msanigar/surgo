import React from 'react';
import { Link } from "react-router-dom";

import { ReactComponent as Strategy } from '../../Styles/SVG/strategy.svg';
import { ReactComponent as Habit } from '../../Styles/SVG/habithacking.svg';
import { ReactComponent as Accountability } from '../../Styles/SVG/accountability.svg';

import './Home.scss';

const Home = () => {
  return (
    <div>

      <div className="home home-1">
        <h2>There is <span>more</span> to Esports than just <span>winning</span> games.</h2>
      </div>

      <div className="home home-2">
        <h3 className="home-title">Surgo means</h3>
        <hr />
        <h2>To rise up, to climb, to move upwards</h2>
        <p>Our programmes provide teams with the knowledge, tools and support they need to develop their players into professional athletes.</p>
        <div className="btn-container">
          <Link className="btn" to={"/about"}>
            About Surgo
          </Link>
        </div>
      </div>

      <div className="home home-3">
        <h3 className="home-title">Go further than ever before.</h3>
        <div className="tile">

        <Strategy />

        <h4 className="tile-title">Performance Strategy</h4>
        <p>High performance brains requires high performance diets, we engineer and implement this into your day-to-day routine.
        Fall in love with the right foods!</p>

        <button className="btn">
        Learn more</button>

        </div>
        <div className="tile">

        <Accountability />

        <h4 className="tile-title">Accountability</h4>
        <h4 className="tile-title">Performance Strategy</h4>
        <p>High performance brains requires high performance diets, we engineer and implement this into your day-to-day routine.
        Fall in love with the right foods!</p>

        <button className="btn">
        Learn more</button>
        
        </div>
        <div className="tile">

        <Habit />

        <h4 className="tile-title">Habit Hacking</h4>
        <h4 className="tile-title">Performance Strategy</h4>
        <p>High performance brains requires high performance diets, we engineer and implement this into your day-to-day routine.
        Fall in love with the right foods!</p>

        <button className="btn">
        Learn more</button>

        </div>
      </div>

      <div className="home home-4">
        <div className="container">
          <h4>Endorsed by</h4>
          <h4 className="company">Company&Co.</h4>
          <hr></hr>
          <h4 className="company">Company&Co.</h4>
          <hr></hr>
          <h4 className="company">Company&Co.</h4>
          <hr></hr>
          <h4 className="company">Company&Co.</h4>
        </div>
      </div>

      <div className="home home-5">
        <div className="home-beta">
          <h3 className="home-beta-title">Join the beta</h3>
          <input placeholder="Enter your email address here" id="email" type="text" className="validate" />
    
          <div className="btn-container">
            <button className="btn">
              Sign up
            </button>
          </div>
        </div>
      </div>

      <div className="home home-6">
        <p className="top">Looks like you've hit rock bottom.</p>
        <h2 className="middle">Now it's time to take action.</h2>
        <p className="bottom">Scroll up to start the climb.</p>
      </div>
    </div>
  )
}

export default Home;