import React from 'react';
import styled from 'styled-components';


const CatinfoInput = styled.div`
background-color:#CDF2FB;
border-radius:  5px;
font-size:18px;
color: black;
border: none;
width: 300px;
height: 300px;
font-family: Didot;
`;
const About = () => {
    return <div>
        {/*<button style={{
       backgroundColor:"#FFD7F1",
       color:"#FFF"
        }}> Start</button>*/}
        <CatinfoInput>
  About us: This app was created to help minimize the amount of stray cats within the streets on Vancouver. Our goal is to find comfortable and loving animals for these cats.

<div>Why Adopt? There is a very wide range of cats and kittens requiring homes within Vancouver. Not only is it super affordable to adopt a cat, it also prevents them from getting euthanized.</div>
        </CatinfoInput>
    </div>
}

export default About;