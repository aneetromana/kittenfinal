import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';


const MenuInput = styled.button`
background-color:#FFD7F1;
border-radius:  5px;
font-size:30px;
color: white;
border: none;

`;
const MenuButton2 = ({
}) => {
    const router = useRouter();
    return <MenuInput onClick={()=>router.push("/page")}>
    Quiz
</MenuInput>
    {/*<button style={{
   backgroundColor:"#FFD7F1",
   color:"#FFF"
    }}> Start</button>*/}
    

}
   


export default MenuButton2;