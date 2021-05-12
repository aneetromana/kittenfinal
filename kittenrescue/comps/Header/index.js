import React from 'react'
import styled from 'styled-components';
 
const Header1Cont = styled.header`
   display:inline-flex;
   background-color:${props=>props.bg};
   border-radius:0px;
   text-align: center;
   font-size: 40px;
   width: 400px;
   height:50px;
   &>* {
       color:#FFF;
   }
`;
 
  
   const Header1Text = styled.header`
   padding:5px;
`;
 
const Header1 = ({
   bigtext="Kitten Finder",
   bgcolor="#FFD7F1",
}) => {
    
 
 
   return <Header1Cont bg={bgcolor}>
     
       <Header1Text>{bigtext}</Header1Text>
   </Header1Cont>
}
 
export default Header1;
