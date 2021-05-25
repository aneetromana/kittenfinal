import Button from '../../comps/Button1';
import {useRouter} from 'next/router';

var options = {
    fruits:null,
    coins:null,
    colors:null,
};

var buttontexts = {
    option1:"",
    option2:"",
    option3:"",
}

export default function Options(){

const router = useRouter();
const {type} = router.query;

if(type === "fruits"){
    buttontexts.option1 = "Everyday";
    buttontexts.option2 =  "Threedays";
    buttontexts.option3 = "Twodays";
}
if(type === "coins"){
    buttontexts.option1 = "Yes";
    buttontexts.option2 = "No";
    buttontexts.option3 = "Kindof";

}

if(type === "colors"){
    buttontexts.option1 = "Calm";
    buttontexts.option2 = "Adventurous ";
    buttontexts.option3 = "Independent";
}


    const HandleClick = (text) =>{
       // alert(text);
        if(type === "fruits"){
            options.fruits = text;
        }
        if(type === "coins"){
            options.coins = text;
        }
        if(type === "colors"){
            options.colors = text;
        }
    }
    const HandleEnd = () =>{
        console.log(options);
        
    //alert(fruits);
    //sessionStorage.setItem("options", fruits);
    sessionStorage.setItem("options", JSON.stringify(options));
    router.push("/resultss")
    }


    return <div>
        <div>
        <Button bgcolor="#FAD" text="how often are you home?" onClick={()=>router.push("/options/fruits")}/>
        <Button bgcolor="#DAD" text="are you comfortable with cats" onClick={()=>router.push("/options/coins")}/>
        <Button bgcolor="#ADD" text="what kind of cat are you looking for?" onClick={()=>router.push("/options/colors")}/>
        </div>
    Options
    <Button text={buttontexts.option1} onClick={()=>HandleClick(buttontexts.option1)}/>
    <Button text={buttontexts.option2} onClick={()=>HandleClick(buttontexts.option2)}/>
    <Button text={buttontexts.option3} onClick={()=>HandleClick(buttontexts.option3)}/>
    <Button bgcolor="blue" text="end" onClick={HandleEnd}/>


    </div>
}