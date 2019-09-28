import React, { Component } from "react";
import Home from '../components/Home';
import fetch from "isomorphic-unfetch";

import '../styles/Main.scss';

class Index extends Component {
  constructor(props) {
    super(props);
  }

  render() {
   return (
      <React.Fragment>
        <Home latest={this.props.wpData} />
      </React.Fragment>
    )
  }
}

Index.getInitialProps = async function () {
  const pageRes = await fetch(
    "https://api.surgo.gg/wp-json/wp/v2/posts"
  );
  const pageData = await pageRes.json();
  let wpData = {};
  let arr = [];

  pageData.forEach(post => {
    // only return latest 3
    arr.length < 3 && arr.push(post)
    return (wpData = {
      ...wpData,
      posts: arr
    });
  });

  return { wpData };
};

export default Index;
