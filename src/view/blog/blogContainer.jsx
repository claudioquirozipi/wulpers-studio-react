import React from 'react';

//Components
import StudioBlog1 from './blog';

function BlogContainer({match}) {
    let id = match.params.id;
    console.log("id container", id);
    return(<StudioBlog1 id={id}/>);
}

export default BlogContainer;