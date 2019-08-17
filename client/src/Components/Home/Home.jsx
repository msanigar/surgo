import React from 'react';
import { Link } from "react-router-dom";

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

        <h4 className="tile-title">Performance Strategy</h4>
        <p>High performance brains requires high performance diets, we engineer and implement this into your day-to-day routine.
        Fall in love with the right foods!</p>

        <button className="btn">
        Learn more</button>

        </div>
        <div className="tile">
        <h4 className="tile-title">Accountability</h4>
        <h4 className="tile-title">Performance Strategy</h4>
        <p>High performance brains requires high performance diets, we engineer and implement this into your day-to-day routine.
        Fall in love with the right foods!</p>

        <button className="btn">
        Learn more</button>
        
        </div>
        <div className="tile">
        <h4 className="tile-title">Habit Hacking</h4>
        <h4 className="tile-title">Performance Strategy</h4>
        <p>High performance brains requires high performance diets, we engineer and implement this into your day-to-day routine.
        Fall in love with the right foods!</p>

        <button className="btn">
        Learn more</button>
        
        </div>
      </div>
    </div>
  )
}

export default Home;