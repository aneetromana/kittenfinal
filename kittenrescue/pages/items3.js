import styled from 'styled-components';
import Catinfo from '../comps/Catinfo';
import Menu from '../comps/Menu';
import React, {useState} from 'react';

export default function Items(){
    const [sub, setSub] = useState("nothing");
    const [big, setBig] = useState("nothing");
    return <div>
        <Menu />
        <Catinfo 
        subtext={sub}
        bigtext={big}
        />
    </div>
}