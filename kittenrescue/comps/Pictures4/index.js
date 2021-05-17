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

 
const Pictures4 = ({
   subtext="Paws.",
   bgcolor="#FFD7F1",
   bigtext="Female.",
}) => {
 
    function Pictures({
        url="https://images.squarespace-cdn.com/content/v1/555050d2e4b06f76bea1ba86/1619487853183-610JKBXHN34AXKQS2JU3/ke17ZwdGBToddI8pDm48kMWEZq_gY96oTnfTxFhT-q5Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIRZr1GU22pratkUh_xQO2GPbif1nTWWhjyNc8a-ms63UKMshLAGzx4R3EDFOm1kBS/maggie2_2021.jpg"
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
 
export default Pictures4;