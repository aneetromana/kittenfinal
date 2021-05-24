import styled from 'styled-components';
import Malebuttonpicker from '../comps/Malebuttonpicker';
import Menu from '../comps/Menu';
import {useRouter} from 'next/router';

const subtexts = {
    apple:{
        sub:"malecats",
    },
    apple:{
        sub:"malecats",
    },
}

export default function Items2(){
    const sub = "nothing sub";
    
    return <div>
        <Menu>

        </Menu>
        <Malebuttonpicker
        subtext={sub}/>
            

       
    </div>
}