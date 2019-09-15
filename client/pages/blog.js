import React, { Component } from "react";
import fetch from "isomorphic-unfetch";

import Back from '../components/SVG/Back';
import Chevron from '../components/SVG/Chevron';

import "../styles/Main.scss";

class Blog extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="blog-container">
        <div className="top-section book-font">
          <h1>"At their highest level, all competitive disciplines become vehicles for the expression of one's human potential." - <span> @Thooorin</span></h1>
          <div
            className="back book-font"
            onClick={() => window.history.back()}
          >
            <Back />
          </div>
        </div>
        <div className="next book-font">
          <p>Read our blog</p>
          <Chevron />
          </div>
        {this.props.wpData.posts.map((post, i) => {
          let newDate = (new Date(post.date)).toLocaleString();
          let formattedDate = newDate.replace(', ', ' at ')
          return (
            <div className="blog-post" key={i}>
              {console.log(post)}
              <h2> {post.title.rendered} </h2>
              <span className="content book-font" dangerouslySetInnerHTML={{ __html: post.content.rendered }}></span>
              <span className="meta">Posted by <em>{post.author_meta.user_nicename}</em><br /> on <em>{ formattedDate }</em></span>
            </div>
          )
        })}
      </div>
    );
  }
}

Blog.getInitialProps = async function () {
  const pageRes = await fetch(
    "https://api.surgo.gg/wp-json/wp/v2/posts"
  );
  const pageData = await pageRes.json();
  let wpData = {};
  let arr = [];

  pageData.forEach(post => {
    arr.push(post)
    return (wpData = {
      ...wpData,
      posts: arr
    });
  });

  return { wpData };
};

export default Blog;
