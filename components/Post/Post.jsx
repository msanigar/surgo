import React from "react";
import Link from "next/link";
import Back from "../SVG/Back";

const Post = ({ i, date, post }) => {
  return (
    <div className="blog-post" key={i}>
      <span className="meta book-font">
        <em>{date}</em>
      </span>
      <h2 className="book-font"> {post.title.rendered} </h2>
      <span
        className="content book-font"
        dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
      ></span>
      <Link href={{ pathname: "/", query: { slug: post.slug } }}>
        <a className="text-link">
          Read <Back />
        </a>
      </Link>
    </div>
  );
};

export default Post;
