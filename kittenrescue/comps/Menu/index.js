import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';

const ButtonCont = styled.span`
margin:5px;
`;

const ButtonInput = styled.div`
background-color:${props=>props.bg};
color:#FFF;
border-radius:  5px;
font-size:20px;
border: none;
width: 60px;
height: 40px;
font-family:Didot;
`;
const Menu = ({
    text="Male",
    bgcolor="#AFCF68",
    onClick=()=>{},
}) => {
    const router = useRouter();
    return <ButtonCont >
 <ButtonInput 
 onClick={onClick}>
  

    </ButtonInput>
    </ButtonCont>
    
   

}

   

   export default Menu;