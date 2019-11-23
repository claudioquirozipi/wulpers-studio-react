import React from 'react';
import {withRouter} from 'react-router-dom';
//Styled-Components
import {
    NavContainer
} from './styled';

//Assets
import imgHome from './img/home.svg';

function NavCQ(props) {
    const {history, bgNav, imgNav, imgAlt, imgUrl, links} = props;
    const myImg = imgNav ? imgNav : imgHome; 
    function historyPush(url) {
        history.push(url)
        window.scrollTo(0,0)
    }
    return(
        <NavContainer bgNav={bgNav}>
            <span onClick={()=>historyPush(imgUrl)}>
                <img src={myImg} alt={imgAlt}/>
            </span>
            <ul>
                {links.map((link, i) => {
                    return(
                        <li key={i}><span onClick={()=>historyPush(link.url)}>{link.text}</span></li>
                    )
                })}
            </ul>
        </NavContainer>
    )
}

export default withRouter(NavCQ);