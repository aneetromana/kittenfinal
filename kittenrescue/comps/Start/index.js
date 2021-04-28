import React from 'react';
import styled from 'styled-components';


const StartInput = styled.button`
background-color:#FFD7F1;
border-radius:  5px;
font-size:30px;
color: white;
`;
const Start = () => {
    return <div>
        {/*<button style={{
       backgroundColor:"#FFD7F1",
       color:"#FFF"
        }}> Start</button>*/}
        <StartInput>
            Start
        </StartInput>
    </div>
}

export default Start;