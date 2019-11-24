import React, { Component } from "react";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import Back from "../components/SVG/Back";

import "../styles/Main.scss";

export default class Post extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { post } = this.props.wpData;
    let date = new Date(post.date).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric"
    });
    return (
      <div className="blog-post">
        <span className="meta book-font">
          <em>{date}</em>
        </span>
        <h2 className="book-font"> {post.title.rendered} </h2>
        <span
          className="content book-font"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        ></span>
        <Link href={{ pathname: "/blog", query: "" }}>
          <a className="text-link">
            Back <Back />
          </a>
        </Link>
      </div>
    );
  }
}

Post.getInitialProps = async function({ query }) {
  const pageRes = await fetch(
    `https://api.surgo.gg/wp-json/wp/v2/posts?slug=${query.slug}`
  );
  const pageData = await pageRes.json();
  let wpData = {};

  pageData.forEach(post => {
    return (wpData = {
      ...wpData,
      post: post
    });
  });

  return { query, wpData };
};
