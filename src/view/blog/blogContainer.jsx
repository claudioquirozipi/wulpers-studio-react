import React from "react";

//Components
import StudioBlog1 from "./blog";

function BlogContainer({ match }) {
  let { id, url } = match.params.id;
  console.log("id container", id);
  return <StudioBlog1 id={id} url={url} />;
}

export default BlogContainer;
