import React from 'react';
import styled from 'styled-components';


const CatinfoInput = styled.div`
background-color:#CDF2FB;
border-radius:  5px;
font-size:20px;
color: black;
border: none;
width: 300px;
height: 100px;
`;
const Malebuttonpicker = () => {
    return <div>
        {/*<button style={{
       backgroundColor:"#FFD7F1",
       color:"#FFF"
        }}> Start</button>*/}
        <CatinfoInput>
        Show Cat Gender
        </CatinfoInput>
    </div>
}

export default Malebuttonpicker;