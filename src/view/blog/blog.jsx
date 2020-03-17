import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { FIND_URL_POST } from "../../qraphql/querys/post";
import Wrapper from "../../qraphql/provider";
//Components
import BlogCQ from "../../components/blog/blogCQ";
import NavCQ from "../../components/nav";
import ReactMarkdown from "react-markdown";
import Seo from "../../components/seo";
import { baseURL } from "../../config/url";
function StudioBlog1({ props }) {
  const { id, url } = props;
  const { data, loading, error } = useQuery(FIND_URL_POST("blog1"));

  console.log("data", data);
  console.log("id", id, url);
  let keywords = [];
  if (data) {
    try {
      data.postByUrl.tags.map(tag => {
        keywords.push(tag);
      });
    } catch {
      console.log(
        "ocurrió un error con los tags, posiblemen el usuario no los agregó bien"
      );
      keywords = [];
    }
  }
  return (
    <>
      {data ? (
        <Seo
          title={data.postByUrl.title}
          description={data.postByUrl.description}
          img={baseURL + data.postByUrl.image[0].url}
          keywords={keywords}
        />
      ) : null}
      <NavCQ
        imgAlt="wulpers"
        imgUrl="/"
        bgNav="#635FFC"
        links={[{ text: "Blog", url: "/blog" }]}
      />
      <BlogCQ>
        {data ? <ReactMarkdown source={data.postByUrl.article} /> : null}
      </BlogCQ>
    </>
  );
}

export default Wrapper(StudioBlog1);
