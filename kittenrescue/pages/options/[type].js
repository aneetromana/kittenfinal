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
    buttontexts.option2 = "Thirtydays";
    buttontexts.option3 = "Onceyear";
}
if(type === "coins"){
    buttontexts.option1 = "$500";
    buttontexts.option2 = "$1000";
    buttontexts.option3 = "Depends";

}

if(type === "colors"){
    buttontexts.option1 = "Yes";
    buttontexts.option2 = "No ";
    buttontexts.option3 = "Notsure";
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


    return <div className="main">
        
          <HomeCont></HomeCont>
          <Header></Header>
         
         
        <div>
        <Button bgcolor="#FAD" text="how often do cats need to be bathed?" onClick={()=>router.push("/options/fruits")}/>
        <Button bgcolor="#DAD" text="how much does an average cat cost yearly" onClick={()=>router.push("/options/coins")}/>
        <Button bgcolor="#ADD" text="do you understand the responsibility of a cat" onClick={()=>router.push("/options/colors")}/>
        </div>
    
    Options
    <Button text={buttontexts.option1} onClick={()=>HandleClick(buttontexts.option1)} />
    <Button text={buttontexts.option2} onClick={()=>HandleClick(buttontexts.option2)} />
    <Button text={buttontexts.option3} onClick={()=>HandleClick(buttontexts.option3)} />
    <Button bgcolor="blue" text="end" onClick={HandleEnd}/>

          </div>
      
          
}