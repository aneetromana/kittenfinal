import styled from 'styled-components';
import Button from '../Menubutton';
import {FiMenu} from 'react-icons/fi';
import React, {useState} from 'react';

const MenuCont = styled.div`
`
const MenuIcon = styled.div``;
const MenuItems = styled.div``;
const Menu = ({

}) => {
    const [open, setOpen] = useState(false);
    return <MenuCont>
       <MenuIcon>
       <FiMenu/>
       </MenuIcon>
        <MenuItems>
        <Button
        text="open me"
        bgcolor="blue"
        />
        </MenuItems>
    </MenuCont>
}

export default Menu;