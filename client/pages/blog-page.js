import React, { Component } from "react";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import Back from "../components/SVG/Back";
import Nav from "../components/Nav";
import Post from "../components/Post";

import "../styles/Main.scss";

export default class BlogPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      wpData: this.props.wpData
    };
  }

  componentDidMount() {
    let arr = [];
    fetch(
      `https://api.surgo.gg/wp-json/wp/v2/posts?categories=${this.props.wpData.post._embedded["wp:term"][0][0].id}`
    )
      .then(response => response.json())
      .then(data =>
        data.forEach(post => {
          arr.push(post);
          console.log(arr);
          this.setState({ wpData: { relatedPosts: arr } });
        })
      );
    console.log(arr);
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
            <div
              className="content"
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            ></div>
            <Link href={{ pathname: "/blog", query: "" }}>
              <a className="text-link back">
                Back <Back />
              </a>
            </Link>
            <hr></hr>
            <div className="blog-related">
              <h3>Content that relates</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor
                dictumst enim, nisl lectus nulla vitae praesent elementum neque.
                Non nisl consectetur.
              </p>
              <h4>MOST RECENT</h4>
              <div className="posts">
                {typeof this.state.wpData.relatedPosts !== "undefined" &&
                  this.state.wpData.relatedPosts.map((post, i) => {
                    let newDate = new Date(post.date).toLocaleDateString(
                      "en-US",
                      {
                        month: "long",
                        day: "numeric",
                        year: "numeric"
                      }
                    );
                    return <Post key={i} date={newDate} post={post} />;
                  })}
              </div>
            </div>
          </div>
        </div>
        <Nav theme={"dark"} />
      </React.Fragment>
    );
  }
}

BlogPage.getInitialProps = async function({ query }) {
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
