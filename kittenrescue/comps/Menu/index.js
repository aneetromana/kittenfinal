import React from 'react'
import styled from 'styled-components';
import Filter from '../comps/Filterbutton';
import Statement from '../comps/Info'
 
const InfoCont = styled.header`
   display:inline-flex;
   background-color:#AFCF6B;
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
     
       <Filter>
       </Filter>
       <Statement>

       </Statement>
   </InfoCont>
}
 
export default Menu;