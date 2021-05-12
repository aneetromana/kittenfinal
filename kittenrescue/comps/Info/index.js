import React from 'react'
import styled from 'styled-components';
 
const InfoCont = styled.header`
   display:inline-flex;
   background-color:${props=>props.bg};
   border-radius:9px;
   text-align: left;
   font-size: 20px;
   width: 300px;
   height:300px;
   &>* {
       color:#FFF;
   }
`;
 
  
   const InfoText = styled.header`
   padding:5px;
`;
 
const Info = ({
   bigtext="Who are we?",
   mediumtext=" This app was created to help minimize the amount of stray cats within the streets on Vancouver. Our goal is to find comfortable and loving animals for these cats.",
   bgcolor="#FFD7F1",
}) => {
 
 
   return <InfoCont bg={bgcolor}>
     
       <InfoText>{bigtext}{mediumtext}
       </InfoText>
   </InfoCont>
}
 
export default Info;