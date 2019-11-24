import React, { Component } from "react";
import fetch from "isomorphic-unfetch";

import Back from "../components/SVG/Back";

import Nav from "../components/Nav";
import Post from "../components/Post";

import "../styles/Main.scss";

class Blog extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // due to funkly race condition
    if (document.body.classList.contains("noscroll")) {
      document.body.classList.remove("noscroll");
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="blog-filters"></div>
        <div className="blog-container">
          <div className="posts">
            {this.props.wpData.posts.map((post, i) => {
              let newDate = new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric"
              });
              return <Post key={i} date={newDate} post={post} />;
            })}
          </div>
        </div>
        <Nav theme={"dark"} />
      </React.Fragment>
    );
  }
}

Blog.getInitialProps = async function() {
  const pageRes = await fetch("https://api.surgo.gg/wp-json/wp/v2/posts");
  const pageData = await pageRes.json();
  let wpData = {};
  let arr = [];

  pageData.forEach(post => {
    arr.push(post);
    return (wpData = {
      ...wpData,
      posts: arr
    });
  });

  return { wpData };
};

export default Blog;
