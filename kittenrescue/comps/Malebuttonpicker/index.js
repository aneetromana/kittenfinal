import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';

const ButtonCont = styled.span`
margin:5px;
`
const ButtonInput = styled.button`
background-color:${props=>props.bg}; 
border-radius:  5px;
font-size:20px;
color: black;
border: none;
width: 300px;
height: 100px;
`;
const Button = ({
    text="male",
    bgcolor="#CDF2FB",
    routeTo="/home",
    onClick=()=>{}
}) => {
    const router= useRouter();
     return <ButtonCont onClick={onClick}>
<ButtonInput bg={bgcolor}>
    claud and fern are male cats 
</ButtonInput>
     </ButtonCont>
}

export default Button;