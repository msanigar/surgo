import React, { Component } from "react";
import fetch from "isomorphic-unfetch";
import Select from "react-select";

import Nav from "../components/Nav";
import Post from "../components/Post";

import "../styles/Main.scss";

class Blog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: [
        {
          value: "",
          label: "All",
        },
      ],
      wpData: this.props.wpData,
    };

    this.changed = this.changed.bind(this);
  }

  componentDidMount() {
    // due to funkly race condition
    if (document.body.classList.contains("noscroll")) {
      document.body.classList.remove("noscroll");
    }

    let options = [
      {
        value: "",
        label: "All",
      },
    ];

    {
      this.state.wpData.cats.map((cat, i) => {
        return options.push({ value: cat.id, label: cat.name });
      });
    }

    this.setState({
      options: options,
    });
  }

  changed(e) {
    let arr = [];
    fetch(`https://api.myles.im/wp-json/wp/v2/posts?categories=${e.value}`)
      .then((response) => response.json())
      .then((data) =>
        data.forEach((post) => {
          arr.push(post);
          this.setState({ wpData: { posts: arr } });
        })
      );
  }

  render() {
    return (
      <React.Fragment>
        <div className='blog-filters'>
          <div className='blog-filters-wrapper'>
            <Select
              instanceId={"0"}
              className='react-select-container'
              classNamePrefix='react-select'
              options={this.state.options}
              onChange={this.changed}
            />
          </div>
        </div>
        <div className='blog-container'>
          <div className='posts'>
            {this.state.wpData.posts.map((post, i) => {
              let newDate = new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
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

Blog.getInitialProps = async function () {
  const pageRes = await fetch("https://api.myles.im/wp-json/wp/v2/posts");
  const catRes = await fetch("https://api.myles.im/wp-json/wp/v2/categories");
  const catData = await catRes.json();
  const pageData = await pageRes.json();
  let wpData = {};
  let arr = [];

  pageData.forEach((post) => {
    arr.push(post);
    return (wpData = {
      ...wpData,
      cats: catData,
      posts: arr,
    });
  });

  return { wpData };
};

export default Blog;
