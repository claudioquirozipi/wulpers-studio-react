import React from 'react';
import {withRouter} from 'react-router-dom';
import {
    baseURL
} from '../../config/url';
// Styled-Components
import {
    BlogsContainer,
    TitleBlog
} from './styled';

function BlogsCQ(props) {
    const {history, blogs, title, bgLink} = props;
    function historyPush(url) {
        history.push(url)
        window.scrollTo(0,0)
    }
    console.log("continue", blogs)
    return(
        <>
            <TitleBlog>{title}</TitleBlog>
            <BlogsContainer bgLink={bgLink}>
                {blogs.map((blog) => {
                    return(
                        <div key={blog.id}>
                            <img src={baseURL + blog.image[0].url} alt=""/>
                            <h2>{blog.title}</h2>
                            <p>{blog.description}</p>
                            <span onClick={()=>historyPush(`blog/${blog.url}/${blog.id}`)}>Go to</span>
                        </div>
                    )})
                }
                
            </BlogsContainer>
        </>
    )
}

export default withRouter(BlogsCQ);