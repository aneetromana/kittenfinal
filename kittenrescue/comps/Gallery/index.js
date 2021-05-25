import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';


const MenuInput = styled.button`
background-color:#FFD7F1;
border-radius:  5px;
font-size:18px;
color: white;
border: none;
display:flex;
flex-direction:column;

`;
const MenuInput2 = styled.button`
background-color:#FFD7F1;
border-radius:  5px;
font-size:18px;
color: white;
border: none;

`;
const MenuInput3 = styled.button`
background-color:#FFD7F1;
border-radius:  18px;
font-size:18px;
color: white;
border: none;

`;
const MenuInput4 = styled.button`
background-color:#FFD7F1;
border-radius:  18px;
font-size:18px;
color: white;
border: none;

`;
const MenuInput1 = styled.button`
background-color:#FFD7F1;
border-radius:  18px;
font-size:18px;
color: white;
border: none;

`;
const Image = styled.image`
width:50px;
width:50px;

`;


const MenuButton = ({
}) => {
    
    const router = useRouter();
    
    return <MenuInput>
        Gallery
<MenuInput1 onClick={()=>router.push("/results2")}>
Claud <Image>
<img src="https://spcabc.b-cdn.net/wp-content/uploads/news-kitten-tabby-carrier-e1590014634322-825x756.jpg" width="100" height="100"></img>
    </Image> 
</MenuInput1>
 <MenuInput2 onClick={()=>router.push("/results")}>
Luna <Image>
<img src=" https://i.redd.it/2ci0qavph5h11.jpg" width="100" height="100"></img>
    </Image> 
 </MenuInput2 >

 <MenuInput3 onClick={()=>router.push("/results3")}>
Fern <Image>
<img src="https://photos.citybeat.com/wp-content/uploads/2020/09/Riggs.jpg" width="100" height="100"></img>
    </Image> 
 </MenuInput3 >
 <MenuInput4 onClick={()=>router.push("/results4")}>
Paws <Image >
<img src="https://images.squarespace-cdn.com/content/v1/555050d2e4b06f76bea1ba86/1619487853183-610JKBXHN34AXKQS2JU3/ke17ZwdGBToddI8pDm48kMWEZq_gY96oTnfTxFhT-q5Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIRZr1GU22pratkUh_xQO2GPbif1nTWWhjyNc8a-ms63UKMshLAGzx4R3EDFOm1kBS/maggie2_2021.jpg"width="100" height="100" ></img>
    </Image> 
 </MenuInput4 >
    
</MenuInput>

    
    

}
   


export default MenuButton;







