import Header1 from '../comps/Header';
import Button1 from '../comps/Button1';
import styled from 'styled-components';

const HomeCont = styled.div`
.header {
  display:flex;
  justify-content:left;
  
}

.right {
  display:flex;
  margin-top:70px;
  font-family:Playfair;
}

.background {
  z-index:-1;
  width:400px;
  height:660px;
  background-color:#DAFFD7;
  margin-top:-180px;
}
.left {
  font-size: 20px;
  font-family: Didot;
  margin-top:30px;
}
`;


export default function Home() {
  return <HomeCont>
    <div className="header"><Header1 /></div>
    <div className="left">How often do you leave the house ?</div>
    <div className="right"><Button1 /></div>
    <div className="background"> </div>
 

    
      
  </HomeCont>
}
