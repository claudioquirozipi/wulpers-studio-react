import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


//Components
import Cases from '../view/cases';
import Studio from '../view/studio';
import StudioBlog from '../view/blog';
import SingleBlog from '../view/blog/blogContainer';
import StudioProjects from '../view/projects';
import Error404 from '../view/error404';

function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/cases" component={Cases} /> 
                <Route exact path="/" component={Studio} /> 
                <Route exact path="/blog/:url/:id" component={SingleBlog} />
                <Route path="/blog" component={StudioBlog} />  
                <Route path="/projects" component={StudioProjects} /> 
                <Route component={Error404} /> 
            </Switch> 
      </BrowserRouter>
    )
}

export default Routes;