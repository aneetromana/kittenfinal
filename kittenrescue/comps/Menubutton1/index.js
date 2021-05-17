import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';


const StartInput = styled.button`
background-color:#FFD7F1;
border-radius:  5px;
font-size:20px;
color: white;
border: none;
font-family: Didot;

`;
const MenuButton1 = ({
}) => {
    const router = useRouter();
    return <StartInput onClick={()=>router.push("/homepage")}>
   Homepage
</StartInput>
    {/*<button style={{
   backgroundColor:"#FFD7F1",
   color:"#FFF"
    }}> Start</button>*/}
    

}
   


export default MenuButton1;