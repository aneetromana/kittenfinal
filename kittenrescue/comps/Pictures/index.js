import React from 'react';
import styled from 'styled-components';

const PicturesCont = styled.div`
   display:inline-flex;
   background-color:${props=>props.bg};
   flex-direction:column;
   padding:5px;
   max-width: 600px;
   height: 340px;
   width: 300px;
   border: 1px solid black;
   &>* {
       color:#000000;
   }
`;
 
   const PicturesText = styled.h3`
   padding:5px;
`;
const Picturessquare = styled.div`
   display:inline-flex;
   background-color:${props=>props.bg};
   flex-direction:column;
   padding:5px;
   max-width: 230px;
   height: 250px;
   width: 300px;
   border: 1px solid black;
   &>* {
       color:#000000;
   }
`;
 
const Pictures = ({
   subtext="Luna.",
   bgcolor="#"
}) => {
 
 
   return <PicturesCont bg={bgcolor}>
      
       <Picturessquare></Picturessquare>
       <PicturesText>{subtext}</PicturesText>
   </PicturesCont>
}
 
export default Pictures;