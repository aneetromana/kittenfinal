import React, {useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import Button from '../comps/Button1';
import Card from '../comps/Menu';

const results = {
    wrong:"fern",
    correct:"claud",
    EverydayYesCalm:"paws",
    ThreedaysKindofIndependent:"luna"
}



export default function Results(){

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

            var obj = JSON.parse(o);
            var key = obj.fruits+obj.coins+obj.colors;
            console.log(key);
            if(results[key]){
                setText(results.[key]);
            } else {
                setText(results.wrong);
            }
           
        }
        
     },[]);
    return <div>
        <Button text="Back" onClick={()=>router.push("/options/all")}/>
       {/*
results -
<p />{options.fruits}
<p />{options.coins}
       <p />{options.colors*/}
<div>
       
       <Card subtext="Results" bigtext={text} />
       </div>
        </div>
       


}