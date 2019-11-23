import React, {useState} from 'react';
import {withRouter } from 'react-router-dom';
import {baseURL} from '../../../config/url';

//Styled Components
import {
    ContainerSlyder,
    Container1,
    ContainerSlyderButton,
    ButtonSC,
    Container2,
    SlyderSC,
    Container3,
    Container4,
    SubTitle
} from './styled';



function Slyder(props) {
    console.log("constante", process.env.STRAPI_HOST )
    const { history, blogs } = props;
    console.log("blogs", blogs[0].id)
    const lastBlog = blogs.length;
    const valorInicial = [
        {
            titulo: blogs[(lastBlog - 1)].title,
            parrafo: blogs[(lastBlog - 1)].description,
            positionX: "0%",
            button1: true,
            button2: false,
            button3: false
        },
        {
            titulo: blogs[(lastBlog - 2)].title,
            parrafo: blogs[(lastBlog - 2)].description,
            positionX: "-100%",
            button1: false,
            button2: true,
            button3: false
        },
        {
            titulo: blogs[(lastBlog - 3)].title,
            parrafo: blogs[(lastBlog - 3)].description,
            positionX: "-200%",
            button1: false,
            button2: false,
            button3: true
        }
    ]
    const [valor, cambiarValor] = useState(valorInicial[0]);
    function Button1() { cambiarValor(valorInicial[0]) }
    function Button2() { cambiarValor(valorInicial[1]) }
    function Button3() { cambiarValor(valorInicial[2]) }
    function historyPush(url) {
        history.push(url)
        window.scrollTo(0,0)
    }
  
    return(
        <ContainerSlyder>
            <Container1>
                <div>
                    <h2>{valor.titulo}</h2>
                    <p>{valor.parrafo}</p>
                </div>
                <ContainerSlyderButton>
                    <ButtonSC onClick={Button1} colorSC={valor.button1}/>
                    <ButtonSC onClick={Button2} colorSC={valor.button2}/>
                    <ButtonSC onClick={Button3} colorSC={valor.button3}/>
                </ContainerSlyderButton>
            </Container1>
            <Container2>
                <SlyderSC left={valor.positionX}>
                    <span onClick={()=> historyPush(`blog/${blogs[(lastBlog - 1)].url}/${blogs[(lastBlog - 1)].id}`)} ><img src={baseURL + blogs[lastBlog - 1].image[0].url} alt=""/></span> 
                    <span onClick={()=> historyPush(`blog/${blogs[(lastBlog - 2)].url}/${blogs[(lastBlog - 2)].id}`)} ><img src={baseURL + blogs[lastBlog - 2].image[0].url} alt=""/></span> 
                    <span onClick={()=> historyPush(`blog/${blogs[(lastBlog - 3)].url}/${blogs[(lastBlog - 3)].id}`)} ><img src={baseURL + blogs[lastBlog - 3].image[0].url} alt=""/></span> 
                </SlyderSC>
            </Container2>
            <Container3>
                <img src={baseURL + blogs[lastBlog - 4].image[0].url} alt=""/>
                <SubTitle>{blogs[lastBlog -4].title}</SubTitle>
            </Container3>
            <Container4>
                <img src={baseURL + blogs[lastBlog - 5].image[0].url} alt=""/>
                <SubTitle>{blogs[lastBlog -5].title}</SubTitle>
            </Container4>
        </ContainerSlyder>
    );
}

export default  withRouter(Slyder);