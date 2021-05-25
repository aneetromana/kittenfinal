import styled from 'styled-components';
import Malebuttonpicker from '../comps/Malebuttonpicker';
import Menu from '../comps/Menu';
import {useRouter} from 'next/router';

const subtexts = {
    apple:{
        sub:"malecats",
    },
   apple:{
        sub:"femalecats",
    },
}

export default function Items2(){
    const router = useRouter();
    const {fruits} = router.query;
    const sub = "nothing sub";
    if (fruits==="apple"){
        sub = subtexts.apple.sub;
        big = subtexts.apple.big;
    }
    return <div>
        <Menu
        subtext={sub}
        bigtext={big}
        />
        
        <Malebuttonpicker/>
       
            

       
    </div>
}