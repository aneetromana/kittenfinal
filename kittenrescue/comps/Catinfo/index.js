import React from 'react';
import styled from 'styled-components';


const CatinfoInput = styled.div`
background-color:#CDF2FB;
border-radius:  5px;
font-size:20px;
color: black;
border: none;
width: 300px;
height: 200px;
`;
const Catinfo = () => {
    return <div>
        {/*<button style={{
       backgroundColor:"#FFD7F1",
       color:"#FFF"
        }}> Start</button>*/}
        <CatinfoInput>
        Age: Approx 2 years 
Dislikes: Small Spaces 
Likes: Independance 
Medical Concerns: None   

        </CatinfoInput>
    </div>
}

export default Catinfo;