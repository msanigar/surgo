import React from 'react'

const Post = ({i, date, post}) => {
  return (
    <div className="blog-post" key={i}>
      <span className="meta book-font"><em>{ date }</em></span>
      <h2> {post.title.rendered} </h2>
      <span className="content book-font" dangerouslySetInnerHTML={{ __html: post.content.rendered }}></span>
    </div>
  )
}

export default Post
