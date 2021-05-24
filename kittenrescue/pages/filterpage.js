import styled from 'styled-components';
import Filter from '../comps/Filterbutton';
import Info from '../comps/Malebuttonpicker';
import Menu from '../comps/Menu';
import React, {useState} from 'react';

const subtexts = {
    apple:{
        sub:"claud and fern boy cats",
        big:"female cats"
    },
}

export default function Items(){
    const [sub, setSub] = useState("female cats");
    const [big, setBig] = useState("male cats ");

    const HandleApple = () =>{
        setSub(subtexts.apple.sub);
        setBig(subtexts.apple.big);
    }
   
   return <div>
       <Menu/>
       <Filter
        onAppleClick={HandleApple} />
        <Info
        subtext={sub}
        bigtext={big}
        />

      
       
    </div>
}