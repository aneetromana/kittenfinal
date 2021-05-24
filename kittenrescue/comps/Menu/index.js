import React from 'react'
import styled from 'styled-components';

 
const InfoCont = styled.header`
   display:inline-flex;
   border-radius:9px;
   text-align: left;
   font-size: 20px;
   width: 300px;
   height:300px;
   &>* {
       color:#FFF;
   }
`;
 
  


 
const Menu = ({
   
   bgcolor="#FFD7F1",
}) => {
 
 
   return <InfoCont>
     click a button
   </InfoCont>
}
 
export default Menu;