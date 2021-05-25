import {useRouter, Router} from 'next/router';
import Button from '../comps/Button1';
var fruits = null;

if(process.browser){
fruits = sessionStorage.getItem("options");
}


export default function Results(){
    return <div>
        <Button text="back" onClick={()=>router.push("options/all")}/>
        results
        {fruits}
        </div>

}