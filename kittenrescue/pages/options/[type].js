import Button from '../../comps/Button1';

export default function Options(){

    const HandleClick = (text) =>{
    alert(text);
    fruits = text;
    }
    const HandleEnd = () =>{

    }


    return <div>
    Options
    <Button text="kitten" onClick={()=>HandleClick("kitten")}/>
    <Button text="less than 6 years old" onClick={()=>HandleClick("less than 6 years old")}/>
    <Button text="senior cat" onClick={()=>HandleClick("senior cat")}/>
    <Button bgcolor="pink" text="end" onClick={HandleEnd}/>


    </div>
}