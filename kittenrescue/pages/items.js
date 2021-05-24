import styled from 'styled-components';

import Menu from '../comps/Menu';

import Filter from '../comps/Filterbutton';
import React, {useState} from 'react';

export default function Items(){
    const [sub, setSub] = useState("claud");
    const [big, setBig] = useState("fern");

    const HandleButton = () =>{
        setSub("subtexts.claud.sub");
        setBig("this is a male cat");
    }

    return <div>
        <Menu onButtonClick={HandleButton}
        />
  
        <Menu>


        </Menu>
        <Filter  onButtonClick={HandleButton}>

        </Filter>
        
    </div>
}