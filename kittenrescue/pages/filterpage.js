import styled from 'styled-components';
import Filter from '../comps/Filterbutton';
import Show from '../comps/Malebuttonpicker';
import React, {useState} from 'react';


export default function Items(){
    const [sub,setSub] = useState("female cats");
    const [big,setBig] = useState("female male");

    const HandleApple = () =>{
        setSub("luna paws");
        setBig("boy cats");
    }
   
   return <div>
        <Filter
        onAppleClick={HandleApple} />
        <Show
        subtext={sub}
        bigtext={big}
        />

    </div>
}