import React, { Component } from 'react';

import Link from "next/link";

import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/scss/alice-carousel.scss";

import Strategy from '../SVG/Strategy/Strategy';
import Habit from '../SVG/Habithacking/Habithacking';
import Accountability from '../SVG/Accountability';
import Nav from '../Nav';
import Post from '../Post';

class Home extends Component {
  constructor(props) {
    super(props);

    this.handleOnSlideChange = this.handleOnSlideChange.bind(this)

    this.state = {
      curr: 1,
      total: 5
    }
  }

  handleOnSlideChange(o) {
    this.setState({
      curr: o.slide + 1
    })
  }

  render() {

    const handleOnDragStart = e => e.preventDefault()

    return (
      <div>
  
        <div className="home home-1">
          <h2>There is <span>more</span> to Esports than just <span>winning</span> games.</h2>
        </div>
        <Nav></Nav>
        <div className="home home-2">
          <h3 className="home-title book-font">Surgo means</h3>
          <hr />
          <h2 className="book-font">To rise up, to climb, to move upwards</h2>
          <p className="book-font">Our programmes provide teams with the knowledge, tools and support they need to develop their players into professional athletes.</p>
          <div className="btn-container">
            <Link href={"/about"}>
              <span className="btn">About Surgo</span>
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
  
          <Link href={"/performance-strategy"}>
            <span className="btn">Learn more</span>
          </Link>
          </div>
          <div className="tile">
  
          <Accountability />
  
          <h4 className="tile-title">Accountability</h4>
          <h4 className="tile-title">Performance Strategy</h4>
          <p>High performance brains requires high performance diets, we engineer and implement this into your day-to-day routine.
          Fall in love with the right foods!</p>
  
          <Link href={"/accountability"}>
            <span className="btn">Learn more</span>
          </Link>
          
          </div>
          <div className="tile">
  
          <Habit />
  
          <h4 className="tile-title">Habit Hacking</h4>
          <h4 className="tile-title">Performance Strategy</h4>
          <p>High performance brains requires high performance diets, we engineer and implement this into your day-to-day routine.
          Fall in love with the right foods!</p>
  
          <Link href={"/habit-hacking"}>
            <span className="btn">Learn more</span>
          </Link>
  
          </div>
        </div>
  
        <div className="home home-4">
          <div className="container alice">
        <h4>Endorsed by</h4>
          <AliceCarousel mouseDragEnabled autoPlay autoPlayInterval={2500} dotsDisabled buttonsDisabled 
          onSlideChanged={this.handleOnSlideChange}>
            <div className="item"><h4 onDragStart={handleOnDragStart} className="company">Company&Co.</h4></div>
            <div className="item"><h4 onDragStart={handleOnDragStart} className="company">Company&Co.</h4></div>
            <div className="item"><h4 onDragStart={handleOnDragStart} className="company">Company&Co.</h4></div>
            <div className="item"><h4 onDragStart={handleOnDragStart} className="company">Company&Co.</h4></div>
            <div className="item"><h4 onDragStart={handleOnDragStart} className="company">Company&Co.</h4></div>
          </AliceCarousel>
          <h4>{`0${this.state.curr} | 0${this.state.total}`}</h4>
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
          <div className="home-latest">
            <h3>News from the team</h3>
            { this.props.latest.posts.map((post, i) => {
              let newDate = (new Date(post.date)).toLocaleDateString("en-US", { month: 'long', day: 'numeric', year: 'numeric' });
              return (
                <Post key={i} date={newDate} post={post} />
              )
            }) }
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
}

export default Home;
