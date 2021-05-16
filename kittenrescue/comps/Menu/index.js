import styled from 'styled-components';
import Button1 from '../Button1';
import {GiHamburgerMenu} from 'react-icons/ri'
import React, {useState} from 'react';

const MenuCont = styled.div`
`
const Menu = ({

}) => {
    const [open, setOpen]= useState(false);
    return <MenuCont>
<GiHamburgerMenu></GiHamburgerMenu>
    </MenuCont>
}

export default Menu;