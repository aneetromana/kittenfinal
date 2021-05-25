import React, {useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import Button from '../comps/Button1';
import Card from '../comps/Menu';
import Header from '../comps/Header';

const results = {
        wrong:"fern",
        correct:"claud",
        ThirtydaysDependsYes:"paws",
        ThreedaysKindofIndependent:"luna",
        TwodaysYesCalm:"paws",
        TwodaysNoCalm:"luna",
        ThreedaysNoAdventurous:"paws",
        ThreedaysYesCalm:"claud",
        TwodaysKindofIndependent:"paws",
        ThreedaysYesCalm:"claud",
        EverydayNoCalm:"luna",
        TwodaysKindofIndependent:"paws",
        EverydayKindofCalm:"claud",
        ThreedaysNoIndependant:"claud",
        TwodaysKindofIndependent:"luna",
        TwodaysKindofCalm:"paws",
        ThreedaysNofCalm:"claud",
        EverydayYesCalm:"claud",
        EverydayKindofIndependent:"claud",
        TwodaysKindofAdventurous:"luna",
        TwodaysYesAdventurous:"paws",
        EverydayKindofAdventurous:"claud",
        ThreedaysKindofCalm:"claud",
        ThreedaysKindofAdventurous:"claud",
        EverydayNoIndependent:"luna",
        TwodaysNoAdventurous:"paws",
        ThreedaysNofCalm:"claud",
        ThreedaysNoIndependent:"claud",
        ThreedaysYesIndependent:"paws",
        TwodaysNofCalm:"claud",
        EverydayYesIndependent:"claud",
        TwodaysYesIndependent:"luna",
        EverydayKindofIndependent:"paws",
        ThreedaysKindofCalm:"claud",
    
        
        
        

}



export default function Results(){

    const router = useRouter();
    const [options2, setOptions] = useState({
        fruits:null,
        coins:null,
        colors:null
    });

    const [text, setText] = useState(null);
    
    useEffect(()=>{
        if(process.browser){
            var o = sessionStorage.getItem("options2");

            var obj = JSON.parse(o);
            var key = obj.fruits+obj.coins+obj.colors;
            console.log(key);
            if(results[key]){
                setText(results[key]);
            } else {
                setText(results.wrong);
            }
           }
        
     },[]);
    return <div>
       <Header>

       </Header>
        <Button text="Back" onClick={()=>router.push("/options2/all")}/>
       
results -
<p />{options2.fruits}
<p />{options2.coins}
       <p />{options2.colors}
<div>
       
       <Card subtext="Results" bigtext={text} />
       </div>
        </div>
       


}