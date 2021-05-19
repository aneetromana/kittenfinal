import React from 'react';
import styled from 'styled-components';

const CatinfoCont = styled.span`
margin:5px;
`;
const CatinfoInput = styled.button`
background-color:${props=>props.bg};
border-radius:  5px;
font-size:20px;
color: black;
border: none;
width: 300px;
height: 100px;
`;
const Male1 = ({
    text="show cats",
    bgcolor="#CDF2FB",
    onClick=()=>{}
}) => {
    return <div>
    {/*<button style={{
   backgroundColor:"#FFD7F1",
   color:"#FFF"
    }}> Start</button>*/}
    <CatinfoCont onClick={onClick}>
        <CatinfoInput bg={bgcolor}>
            {text}
            
        </CatinfoInput>
   Claud and Fern
<Male1>
    Claud and Fern
</Male1>
    </CatinfoCont>
</div>
}

export default Male1;