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

 
const Pictures3 = ({
   subtext="Fern.",
   bgcolor="#FFD7F1",
}) => {
 
    function Pictures({
        url="https://photos.citybeat.com/wp-content/uploads/2020/09/Riggs.jpg"
    }){
        return <div>
        <img style ={{
            width:240,
            height:340,
            objectFit:"cover"
        } } src ={url} />
    </div>
    }
   return <PicturesCont bg={bgcolor}>
       <Pictures></Pictures>
   
       <PicturesText>{subtext}</PicturesText>
   </PicturesCont>
}
 
export default Pictures3;