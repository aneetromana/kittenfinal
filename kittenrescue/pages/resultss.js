import React, {useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import Button from '../comps/Button1';
import Results from '../comps/Menu';

const results = {
    result1:"fern",
    result2:"claud"
}



export default function Resultss(){

    const router = useRouter();
    const [options, setOptions] = useState({
        fruits:null,
        coins:null,
        colors:null
    });

    const [text, setText] = useState(null);
    
    useEffect(()=>{
        if(process.browser){
            var o = sessionStorage.getItem("options");

           // setOptions(JSON.parse(o));
           var obj = JSON.parse(o);
           if(
               obj.fruits=== "Apple" 
           && obj.coins === "Nickel"
            && obj.colors === "Green"
            ){
               setText(results.result1);
           } else {
               setText(results.result2);
           } 
        }
    },[]);
    return <div>
        <Button text="Back" onClick={()=>router.push("/options/all")}/>
        results -
       <p />{options.fruits}
       <p />{options.coins}
       <p />{options.colors}
       <div>
       <Resultss subtext="Results" bigtext={text} />
       </div>
        </div>
       


}