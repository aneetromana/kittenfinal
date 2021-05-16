import styled from 'styled-components';
import Button from '../Button1';
import {GiHamburgerMenu} from 'react-icons/ri'
import React, {useState} from 'react';

const MenuCont = styled.div`
`
const MenuIcon = styled.icon`
`;
const Button1 = styled.div`
`;
const Menu = ({

}) => {
    const [open, setOpen]= useState(false);
    return <MenuCont>
<MenuIcon>
<GiHamburgerMenu></GiHamburgerMenu>
</MenuIcon>
<Button1 ></Button1>
text="Menu"
bgcolor="blue"
/>
    </MenuCont>
}

export default Menu;