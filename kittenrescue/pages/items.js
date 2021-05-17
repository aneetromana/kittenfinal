import styled from 'styled-components';
import Pictures from '../comps/Pictures';
import Pictures2 from '../comps/Pictures2';
import Pictures3 from '../comps/Pictures3';
import Pictures4 from '../comps/Pictures4';
import Filter from '../comps/Filterbutton';
import React, {useState} from 'react';

export default function Filterbutton(){
    const [sub, setSub] = useState("");
    const [big, setBig] = useState("");

    return <div>
        <Filter></Filter>
        <Pictures 
        subtext={sub}
        subtext={big}/>
  
        <Pictures2 />
        <Pictures3 />
        <Pictures4 />
        
    </div>
}