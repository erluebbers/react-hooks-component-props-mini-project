import React from "react"
import blogData from "../data/blog";
import Article from "./Article"

function ArticleList(props) {
  const blogPosts = blogData.posts.map(post => (
    <Article 
    id={post.id}
    title={post.title}
    date={post.date}
    preview={post.preview}
    minutes={post.minutes}
    />
  ))
 return (
  <main>
    {blogPosts}
  </main>
 );
}

export default ArticleList