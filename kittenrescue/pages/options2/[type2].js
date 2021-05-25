import styled from 'styled-components';
import Button from '../../comps/Button1';
import Header from '../../comps/Header';
import {useRouter} from 'next/router';

const HomeCont = styled.div`
.main {
  z-index:-1;
  width:400px;
  height:660px;
  background-color:#DAFFD7;
}`;
var options2 = {
    fruits:null,
    coins:null,
    colors:null,
};

var buttontexts = {
    option1:"",
    option2:"",
    option3:"",
}

export default function Options2(){

const router = useRouter();
const {type2} = router.query;

if(type2 === "fruits"){
    buttontexts.option1 = "Everyday";
    buttontexts.option2 = "Twodays";
    buttontexts.option3 = "Threedays";
}
if(type2 === "coins"){
    buttontexts.option1 = "Yes";
    buttontexts.option2 = "No";
    buttontexts.option3 = "Kindof";

}

if(type2 === "colors"){
    buttontexts.option1 = "Calm";
    buttontexts.option2 = "Adventurous ";
    buttontexts.option3 = "Independent";
}


    const HandleClick = (text) =>{
       // alert(text);
        if(type2 === "fruits"){
            options2.fruits = text;
        }
        if(type2 === "coins"){
            options2.coins = text;
        }
        if(type2 === "colors"){
            options2.colors = text;
        }
    }
    const HandleEnd = () =>{
        console.log(options2);
        
    //alert(fruits);
    //sessionStorage.setItem("options", fruits);
    sessionStorage.setItem("options2", JSON.stringify(options2));
    router.push("/resultsss")
    }


    return <div className="main">
        
          <HomeCont></HomeCont>
          <Header></Header>
         
         
        <div>
        <Button bgcolor="#FAD" text="How often are you home?" onClick={()=>router.push("/options2/fruits")}/>
        <Button bgcolor="#DAD" text="Have you been around cats alot" onClick={()=>router.push("/options2/coins")}/>
        <Button bgcolor="#ADD" text="What kind of cat do you want?" onClick={()=>router.push("/options2/colors")}/>
        </div>
    
    Options2
    <Button text={buttontexts.option1} onClick={()=>HandleClick(buttontexts.option1)} />
    <Button text={buttontexts.option2} onClick={()=>HandleClick(buttontexts.option2)} />
    <Button text={buttontexts.option3} onClick={()=>HandleClick(buttontexts.option3)} />
    <Button bgcolor="blue" text="end" onClick={HandleEnd}/>

          </div>
      
          
}