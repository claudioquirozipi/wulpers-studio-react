import React from 'react';
import { useQuery } from "@apollo/react-hooks";
import { FIND_ID_POST } from "../../qraphql/querys/post";
import Wrapper from "../../qraphql/provider";
//Components
import BlogCQ from '../../components/blog/blogCQ';
import NavCQ from '../../components/nav';
import ReactMarkdown from 'react-markdown';


function StudioBlog1({props}) {
    const {id} = props;
    const { data, loading, error } = useQuery(FIND_ID_POST(id));
    console.log("data",data);
    console.log("id", id);
    return(
        <>
            <NavCQ imgAlt="wulpers" imgUrl="/" 
                bgNav="#635FFC"
                    links={[
                        {text: "Blog", url:"/blog"}
                    ]}
                />
            <BlogCQ>
                {data ? <ReactMarkdown  source={data.post.article} />: null}
            </BlogCQ>
        </>
    )
}

export default Wrapper(StudioBlog1);