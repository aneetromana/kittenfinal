import styled from 'styled-components';
import Button from '../Menubutton';
import {FiMenu, FiVolumeX} from 'react-icons/fi';
import React, {useState} from 'react';

const MenuCont = styled.div`
`
const MenuIcon = styled.div``;

const MenuItems = styled.div`
display:flex;
flex-direction:column;
max-width:${props=>props.width}px;
max-height:${props=>props.width}pxpx;
overflow:hidden;
transition:max-width 0.5s, max-height:0.5s;
`;

const Menu = ({

}) => {
    const [open, setOpen] = useState(true);
    var width = 0, height= 0;
    if(open){
        width=120;
        height=100;
    }
    return <MenuCont>
       <MenuIcon onClick={()=>setOpen(!open)}>
       <FiMenu/>
       </MenuIcon>
        <MenuItems width={width} height={height}>
        <Button
        text="open me"
        bgcolor="blue" 
        />
        <Button
        text="open me"
        bgcolor="blue"
        />
        </MenuItems>
    </MenuCont>
}

export default Menu;