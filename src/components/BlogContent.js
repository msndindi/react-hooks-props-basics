import React from "react";

function BlogContent(props) {
  return <div id="blog-content">{props.articleText}</div>;
}

export default BlogContent;



function BlogContent(props) {
  return <div>{props.articleText}</div>;
}

