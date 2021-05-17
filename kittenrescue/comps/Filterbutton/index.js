import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';

const ButtonCont = styled.span`
margin:5px;
`;

const ButtonInput = styled.button`
background-color:${props=>props.bg};
border-radius:  5px;
font-size:20px;
border: none;
width: 60px;
height: 40px;
font-family:Didot;
`;
const Button = ({
    text="Male",
    bcolor="#AFCF68",
    onClick=()=>{},
}) => {
    const router = useRouter();
    return <ButtonCont onClick={onClick}>
 <ButtonInput >
  {text}

    </ButtonInput>
    </ButtonCont>
    
   

}

   

   


export default Button;