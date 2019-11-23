import React, {useState} from 'react';
import {withRouter} from 'react-router-dom';

//Styled-Components
import {
    NavContainer,
    HamburgerContainer,
    ToggleHamburger
} from './styled';

//Assets
import imgHome from './img/home.svg';

//Functions
function handleBurger(viewBurger, setViewBurger) {
    setViewBurger(!viewBurger);
}

function Nav2CQ(props) {
    const {history, bgNav, imgNav, imgAlt, imgUrl, links} = props;
    const myImg = imgNav ? imgNav : imgHome; 
    const [viewBurger, setViewBurger] = useState(false);
    function historyPush(url) {
        history.push(url)
        window.scrollTo(0,0)
    }
    return(
        <NavContainer bgNav={bgNav}>
            <Link to={imgUrl}>
                <img src={myImg} alt={imgAlt}/>
            </Link>
            <HamburgerContainer>
                <div onClick={()=> handleBurger(viewBurger ,setViewBurger)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M2 15.5v2h20v-2H2zm0-5v2h20v-2H2zm0-5v2h20v-2H2z" fill="white"/><path d="M0 0h24v24H0z" fill="none"/></svg>
                </div>
                <ToggleHamburger viewToggle={viewBurger}>
                    {links.map((link, i) => {
                        return(
                            <li key={i}><a onClick={()=>historyPush(link.url)}>{link.text}</a></li>

                        )
                    })}
                </ToggleHamburger>
            </HamburgerContainer>
        </NavContainer>
    )
}

export default withRouter(Nav2CQ);