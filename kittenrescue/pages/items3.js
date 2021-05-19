import styled from 'styled-components';
import Malebuttonpicker from '../comps/Malebuttonpicker';
import Menu from '../comps/Menu';
import React, {useState} from 'react';

export default function Items(){
    const [sub, setSub] = useState("nothing");
    const [big, setBig] = useState("nothing");
    
    const HandleApple = () =>{
        setSub("male");
        setBig("female");
    }
    return <div>
        <Menu 
        onAppleClick={HandleApple}
        />
        <Malebuttonpicker
        subtext={sub}
        bigtext={big}
        />
    </div>
}