import React, { Component } from 'react';

import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/scss/alice-carousel.scss";

import Strategy from '../SVG/Strategy/Strategy';
import Back from '../SVG/Back';
import Nav from '../Nav';
import Post from '../Post';
import Button from '../Button'
import Signup from '../Signup'
import Cookies from '../Cookies'

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
        <Cookies />
        <div className="home home-1">
          <div>
            <h1>Time to rise.</h1>
            <h2>Surgo is a pioneer in Health & Wellbeing in Esports.</h2>
          </div>
          <div>
            <h3>Scroll down and learn more </h3> <Back />
          </div>
        </div>
        <Nav></Nav>
        <div className="home home-2">
          <h3 className="home-title">Surgo means</h3>
          <hr />
          <h2 className="home-surgo-means">To rise, to lift yourself, to climb up, to move upwards.</h2>
          <div className="btn-container">
            <Button link={'about'} text={'About us'} />
          </div>
        </div>

        <div className="home home-3">
          <h3 className="home-title">Going further than we ever have before.</h3>
          <p className="book-font contain-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor dictumst enim, nisl lectus nulla vitae praesent elementum neque. Non nisl consectetur tincidunt elementum nisi nec, parturient. Dictum eget felis tincidunt ut. Volutpat sit diam dictumst consectetur purus. Dui sit mattis sit imperdiet sollicitudin eu. Ut tincidunt iaculis tristique morbi et neque. Tincidunt consequat congue nisl, sagittis in adipiscing ornare euismod eleifend. </p>
          <div className="tile">

            <Strategy />

            <div>
              <h4 className="tile-title">Performance Strategy</h4>
              <p className="book-font">High performance brains requires high performance diets, we engineer and implement this into your day-to-day routine.
          Fall in love with the right foods!</p>

              <div className="btn-container">
                <Button text={'Learn more'} link={'performance-strategy'} theme={'dark'} />
              </div>
            </div>

          </div>
          <div className="tile">

            <Strategy />

            <div>
              <h4 className="tile-title">Accountability</h4>
              <p className="book-font">High performance brains requires high performance diets, we engineer and implement this into your day-to-day routine.
          Fall in love with the right foods!</p>

              <div className="btn-container">
                <Button text={'Learn more'} link={'accountability'} theme={'dark'} />
              </div>
            </div>
          </div>
          <div className="tile">

            <Strategy />

            <div>
              <h4 className="tile-title">Habit Hacking</h4>
              <p className="book-font">High performance brains requires high performance diets, we engineer and implement this into your day-to-day routine.
          Fall in love with the right foods!</p>

              <div className="btn-container">
                <Button text={'Learn more'} link={'habit-hacking'} theme={'dark'} />
              </div>
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
