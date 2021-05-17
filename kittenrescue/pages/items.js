import styled from 'styled-components';
import Pictures from '../comps/Male1';
import Menu from '../comps/Menu';
import Pictures2 from '../comps/Male2';
import Pictures3 from '../comps/Male3';
import Pictures4 from '../comps/Male4';
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
        <Pictures>

        </Pictures>
        <Pictures2>
            
            </Pictures2>
            <Pictures3>
            
            </Pictures3>
            <Pictures4>
            
            </Pictures4>
        <Menu onButtonClick={HandleButton}>

        </Menu>
        
    </div>
}