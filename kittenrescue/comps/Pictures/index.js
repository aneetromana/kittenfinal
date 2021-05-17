import React from 'react';
import styled from 'styled-components';

const PicturesCont = styled.div`
   display:inline-flex;
   background-color:${props=>props.bg};
   padding:5px;
   max-width: 600px;
   height: 340px;
   width: 300px;
   border: 2px solid pink;
   &>* {
       color:#000000;
   }
`;
 
   const PicturesText = styled.h3`
   padding:5px;
`;

 
const Pictures = ({
   subtext="Luna.",
   bigtext="Female.",
   bgcolor="#FFD7F1",
}) => {
 
    function Pictures({
        url="https://i.redd.it/2ci0qavph5h11.jpg"
    }){
        return <div>
        <img style ={{
            width:240,
            height:340,
            objectFit:"cover"
        } } src ={url} />
    </div>
    }
   return <PicturesCont  bg={bgcolor}>
       <Pictures>{bigtext}</Pictures>
   
       <PicturesText>{subtext}</PicturesText>
   </PicturesCont>
}
 
export default Pictures;