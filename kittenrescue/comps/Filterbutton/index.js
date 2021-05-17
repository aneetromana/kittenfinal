import React from 'react';
import styled from 'styled-components';


const CatinfoInput = styled.div`
background-color:#CDF2FB;
border-radius:  5px;
font-size:20px;
color: black;
border: none;
width: 60px;
height: 40px;
font-family:Didot;
`;
const FilterButton = () => {
    return <div>
        {/*<button style={{
       backgroundColor:"#FFD7F1",
       color:"#FFF"
        }}> Start</button>*/}
        <CatinfoInput>
       Male

        </CatinfoInput>
    </div>
}
   


export default FilterButton;