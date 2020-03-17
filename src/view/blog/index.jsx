import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { EXCHANGE_RATES } from "../../qraphql/querys/post";
import Wrapper from "../../qraphql/provider";

//Components
import NavCQ from "../../components/nav";
import BlogsCQ from "../../components/blog/blogsCQ";

function StudioBlog() {
  const { data, loading, error } = useQuery(EXCHANGE_RATES);
  console.log("data,", data);
  return (
    <>
      <NavCQ imgAlt="wulpers" imgUrl="/" links={[]} bgNav="#635FFC" />
      {data && data.posts.length > 0 ? (
        <BlogsCQ blogs={data.posts} bgLink="#635FFC" title="Blog de Studio" />
      ) : null}
    </>
  );
}

export default Wrapper(StudioBlog);
