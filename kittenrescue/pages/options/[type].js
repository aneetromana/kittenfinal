import Button from '../../comps/Button1';
import {useRouter, Router} from 'next/router';

var fruits = null;

export default function Options(){
const router = useRouter();
    const HandleClick = (text) =>{
       // alert(text);
        fruits = text;
    }
    const HandleEnd = () =>{
    alert(fruits);
    sessionStorage.setItem("options", fruits);
    router.push("/results")
    }


    return <div>
    Options
    <Button text="kitten" onClick={()=>HandleClick("kitten")}/>
    <Button text="less than 6 years old" onClick={()=>HandleClick("less than 6 years old")}/>
    <Button text="senior cat" onClick={()=>HandleClick("senior cat")}/>
    <Button bgcolor="blue" text="end" onClick={HandleEnd}/>


    </div>
}