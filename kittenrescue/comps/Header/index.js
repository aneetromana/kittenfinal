import styled from 'styled-components';
import Button from '../Menubutton';
import Button2 from '../Menubutton1';
import Button3 from '../Menubutton2';
import Button4 from '../Menubutton3';
import {FiMenu, FiVolumeX} from 'react-icons/fi';
import React, {useState} from 'react';
import {useRouter} from 'next/router';
 
const Header1Cont = styled.header`
   display:inline-flex;
   background-color:${props=>props.bg};
   border-radius:0px;
   text-align: left;
   font-size: 40px;
   width: 400px;
   height:110px;
   font-family: Didot;
   &>* {
       color:#FFF;
   }
`;
 
  
   const Header1Text = styled.header`
   padding:5px;
`;

const MenuIcon = styled.div``;

const MenuItems = styled.div`
display:flex;
flex-direction:column;
max-width:${props=>props.width}px;
max-height:${props=>props.width}pxpx;
overflow:hidden;
transition:max-width 0.5s, max-height 0.5s;

`;

 
const Header1 = ({
   bigtext="Kitten Finder",
   bgcolor="#FFD7F1",
  
}) => {
   const [open, setOpen] = useState(true);
   var width = 0, height= 0;
   if(open){
       width=170;
       height=100;
   }
   const router = useRouter();

   
    
 
 
   return <Header1Cont bg={bgcolor}>
     
       <Header1Text>{bigtext}</Header1Text>
       <MenuIcon onClick={()=>setOpen(!open)}
       >
       <FiMenu/>
       </MenuIcon>
        <MenuItems width={width} height={height}>
        <Button onClick={()=>router.push("/gallery")}>
        text="open me"
        bgcolor="blue" 
        />
        </Button>
        <Button2 onClick={()=>router.push("/homepage")}>
       
        />
        </Button2>
        <Button3 onClick={()=>router.push("/options/type")}>
        text="open me"
        bgcolor="blue" 
        />
        </Button3>
        <Button4 onClick={()=>router.push("/aboutus")}>
        text="open me"
        bgcolor="blue" 
        />
        </Button4>
        
        
        </MenuItems>
   </Header1Cont>
}
 
export default Header1;







   



