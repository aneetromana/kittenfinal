import React from 'react';
import styled from 'styled-components';


const Button1Input = styled.button`
background-color:#FFD7F1;
border-radius:  5px;
font-size:30px;
color: white;
border: none;
`;
const Button1 = () => {
    return <div>
        {/*<button style={{
       backgroundColor:"#FFD7F1",
       color:"#FFF"
        }}> Start</button>*/}
        <Button1Input>
            Young cat
        </Button1Input>
    </div>
}

export default Button1;