import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';


const StartInput = styled.button`
background-color:#FFD7F1;
border-radius:  5px;
font-size:30px;
color: white;
border: none;
margin-left:100px;

`;
const Start = ({
}) => {
    const router = useRouter();
    return <StartInput onClick={()=>router.push("/page")}>
    Start
</StartInput>
    {/*<button style={{
   backgroundColor:"#FFD7F1",
   color:"#FFF"
    }}> Start</button>*/}
    

}
   


export default Start;