import styled from 'styled-components';
import Button from '../Male1';
import Button2 from '../Male2';
import React, {useState} from 'react';
import Malebuttonpicker from '../Malebuttonpicker';
import {useRouter} from 'next/router';


const MenuCont = styled.div`
`
const MenuIcon = styled.div``;

const MenuItems = styled.div`
display:flex;
flex-direction:column;
max-width:${props=>props.width}px;
max-height:${props=>props.width}pxpx;
overflow:hidden;
transition:max-width 0.5s, max-height 0.5s;
`;

const Menu = ({
    onAppleClick=()=>{},
    onApple1Click=()=>{},
    onApple4Click=()=>{},

}) => {
    const [open, setOpen] = useState(false);
    var width = 0, height= 0;
    if(open){
        width=330;
        height=100;
    }
    return <MenuCont>
       <MenuIcon onClick={()=>setOpen(!open)}>
 
       <Malebuttonpicker 
       onClick={onAppleClick}
       />
       </MenuIcon>
        <MenuItems width={width} height={height}>
        <Button onClick={onApple4Click}>
        />
        </Button>
        <Button2 onClick={onApple1Click} >
        />
        </Button2>
       
        
        
        </MenuItems>
    </MenuCont>
}

export default Menu;


