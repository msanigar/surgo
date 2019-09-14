import React, { Component } from "react";
import fetch from "isomorphic-unfetch";

import "../styles/main.scss";

class Blog extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="blog-container">
        { this.props.wpData.posts.map((post, i) => {
          return (
            <div className="blog-post" key={i}>
            { console.log(post)}
            <h1> {post.title.rendered} </h1>
            <span dangerouslySetInnerHTML={{ __html: post.content.rendered }}></span>
            <p> { post.author_meta.user_nicename } </p>
            </div>
          )
        })}
      </div>
    );
  }
}

Blog.getInitialProps = async function() {
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
