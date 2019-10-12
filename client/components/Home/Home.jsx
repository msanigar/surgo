import React, { Component } from 'react';

import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/scss/alice-carousel.scss";

import Strategy from '../SVG/Strategy/Strategy';
import Habit from '../SVG/Habithacking/Habithacking';
import Accountability from '../SVG/Accountability';
import Nav from '../Nav';
import Post from '../Post';
import Button from '../Button'
import Signup from '../Signup'

class Home extends Component {
  constructor(props) {
    super(props);

    this.handleOnSlideChange = this.handleOnSlideChange.bind(this)
    this.scrollUp = this.scrollUp.bind(this)

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

  scrollUp() {
    let cosParameter = window.scrollY / 2,
      scrollCount = 0,
      oldTimestamp = performance.now();
    const step = (newTimestamp) => {
      scrollCount += Math.PI / (1000 / (newTimestamp - oldTimestamp));
      if (scrollCount >= Math.PI) window.scrollTo(0, 0);
      if (window.scrollY === 0) return;
      window.scrollTo(0, Math.round(cosParameter + cosParameter * Math.cos(scrollCount)));
      oldTimestamp = newTimestamp;
      window.requestAnimationFrame(step);
    }
    window.requestAnimationFrame(step);
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
            <Button link={'about'} text={'About Surgo'} />
          </div>
        </div>

        <div className="home home-3">
          <h3 className="home-title">Go further than ever before.</h3>
          <div className="tile">

            <Strategy />

            <h4 className="tile-title">Performance Strategy</h4>
            <p className="book-font">High performance brains requires high performance diets, we engineer and implement this into your day-to-day routine.
          Fall in love with the right foods!</p>

          <div className="btn-container">
          <Button text={'Learn more'} link={'performance-strategy'} theme={'dark'} />
          </div>
          
          </div>
          <div className="tile">

            <Accountability />

            <h4 className="tile-title">Accountability</h4>
            <p className="book-font">High performance brains requires high performance diets, we engineer and implement this into your day-to-day routine.
          Fall in love with the right foods!</p>

          <div className="btn-container">
          <Button text={'Learn more'} link={'accountability'} theme={'dark'} />
          </div>

          </div>
          <div className="tile">

            <Habit />

            <h4 className="tile-title">Habit Hacking</h4>
            <p className="book-font">High performance brains requires high performance diets, we engineer and implement this into your day-to-day routine.
          Fall in love with the right foods!</p>

          <div className="btn-container">
          <Button text={'Learn more'} link={'habit-hacking'} theme={'dark'} />
          </div>

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
            <Signup />
          </div>
          <div className="home-latest">
            <h3>News from the team</h3>
            <div className="home-blogs-container">
              {this.props.latest.posts.map((post, i) => {
                let newDate = (new Date(post.date)).toLocaleDateString("en-US", { month: 'long', day: 'numeric', year: 'numeric' });
                return (
                  <Post key={i} date={newDate} post={post} />
                )
              })}
            </div>
          </div>
        </div>

        <div className="home home-6">
          <p className="top">Looks like you've hit rock bottom.</p>
          <h2 className="middle">Now it's time to take action.</h2>
          <div className="btn-container">
          <Button clickFunc={this.scrollUp} text={'start the climb'} />
          </div>

        </div>
      </div>
    )
  }
}

export default Home;
