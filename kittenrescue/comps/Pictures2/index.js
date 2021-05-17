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

 
const Pictures2 = ({
   subtext="Claud.",
   bigtext="Male",
   bgcolor="#FFD7F1",
}) => {
 
    function Pictures({
        url="https://spcabc.b-cdn.net/wp-content/uploads/news-kitten-tabby-carrier-e1590014634322-825x756.jpg"
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
       <Pictures>{bigtext}</Pictures>
   
       <PicturesText>{subtext}</PicturesText>
   </PicturesCont>
}
 
export default Pictures2;