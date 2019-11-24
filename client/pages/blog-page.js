import React, { Component } from "react";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import Back from "../components/SVG/Back";
import Nav from "../components/Nav";

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
      <React.Fragment>
        <div className="blog-page-container">
          <div className="blog-page-top">
            <div className="blog-page-title">
              <h2> {post.title.rendered} </h2>
            </div>
            <div className="blog-page-meta">
              <div>
                <p>
                  Post Category: <br />
                  <em>{post._embedded["wp:term"][0][0].name}</em>
                </p>
              </div>
              <div>
                <p>
                  Posted by: <br />
                  <em>{post._embedded.author[0].name}</em>
                </p>
              </div>
              <div>
                <p>
                  Date: <br />
                  <em>{date}</em>
                </p>
              </div>
            </div>
          </div>
          <div className="blog-page-wrapper">
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
        </div>
        <Nav theme={"dark"} />
      </React.Fragment>
    );
  }
}

Post.getInitialProps = async function({ query }) {
  const pageRes = await fetch(
    `https://api.surgo.gg/wp-json/wp/v2/posts?slug=${query.slug}&_embed=1`
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
