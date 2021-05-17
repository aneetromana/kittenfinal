import styled from 'styled-components';
import Button from '../Menubutton';
import Button2 from '../Menubutton1';
import Button3 from '../Menubutton2';
import Button4 from '../Menubutton3';
import {FiMenu, FiVolumeX} from 'react-icons/fi';
import React, {useState} from 'react';
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

}) => {
    const [open, setOpen] = useState(true);
    var width = 0, height= 0;
    if(open){
        width=170;
        height=100;
    }
    const router = useRouter();
    return <MenuCont>
       <MenuIcon onClick={()=>setOpen(!open)}>
       <FiMenu/>
       </MenuIcon>
        <MenuItems width={width} height={height}>
        <Button onClick={()=>router.push("/gallery")}>
        text="open me"
        bgcolor="blue" 
        />
        </Button>
        <Button2 onClick={()=>router.push("/homepage")}>
        text="open me"
        bgcolor="blue" 
        />
        </Button2>
        <Button3 onClick={()=>router.push("/page")}>
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
    </MenuCont>
}

export default Menu;


