import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';

const ButtonCont = styled.div`
border: none;
border-radius:  5px;
`

const ButtonInput = styled.button`
background-color:${props=>props.bg};
background-color:#FFD7F1;
border-radius:  5px;
font-size:25px;
color: white;
border: none;

`;
const Start = ({
    text="test",
    bgcolor="#FFD7F1",
    routeTo="/results",
    onClick=()=>{}
}) => {
    const router = useRouter();
    return <ButtonCont onClick={onClick}>
        <ButtonInput bg={bgcolor}>
            {text}

        </ButtonInput>
</ButtonCont>
    {/*<button style={{
   backgroundColor:"#FFD7F1",
   color:"#FFF"
    }}> Start</button>*/}
    

}



export default Start;