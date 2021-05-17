import styled from 'styled-components';
import Button from '../Male1';
import Button2 from '../Male2';
import Button3 from '../Male4';
import Button4 from '../Male4';
import React, {useState} from 'react';
import Filter from '../Filterbutton';
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
    onButtonClick=()=>{},
    onButton2Click=()=>{},
    onButton3Click=()=>{},
    onButton4Click=()=>{},

}) => {
    const [open, setOpen] = useState(false);
    var width = 0, height= 0;
    if(open){
        width=330;
        height=100;
    }
    return <MenuCont>
       <MenuIcon onClick={()=>setOpen(!open)}>
 
       <Filter onClick={onButtonClick}
       />
       </MenuIcon>
        <MenuItems width={width} height={height}>
        <Button onClick={onButton2Click}>
        />
        </Button>
        <Button2 onClick={onButton3Click} >
        />
        </Button2>
        <Button3 onClick={onButton4Click}>
        />
        </Button3>
        <Button4 onClick={onButton4Click}
      >
        />
        </Button4>
        
        
        </MenuItems>
    </MenuCont>
}

export default Menu;


