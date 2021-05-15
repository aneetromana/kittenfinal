import React from 'react';
import styled from 'styled-components';

const PicturesCont = styled.div`
   display:inline-flex;
   background-color:${props=>props.bg};
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

 
const Pictures = ({
   subtext="Luna.",
   bgcolor="#"
}) => {
 
    function Pictures({
        url="https://cdn130.picsart.com/280413913011211.png?type=webp&to=min&r=640"
    }){
        return <div>
        <img style ={{
            width:250,
            height:400,
            objectFit:"cover"
        } } src ={url} />
    </div>
    }
   return <PicturesCont bg={bgcolor}>
       <Pictures></Pictures>
   
       <PicturesText>{subtext}</PicturesText>
   </PicturesCont>
}
 
export default Pictures;