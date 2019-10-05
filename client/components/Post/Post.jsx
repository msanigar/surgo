import React from 'react'
import Link from "next/link";

const Post = ({i, date, post}) => {
  return (
    <div className="blog-post" key={i}>
      <span className="meta book-font"><em>{ date }</em></span>
      <h2 className="book-font"> {post.title.rendered} </h2>
      <span className="content book-font" dangerouslySetInnerHTML={{ __html: post.content.rendered }}></span>
      <Link href={'/blog'}><a className="text-link">read more</a></Link>
    </div>
  )
}

export default Post
