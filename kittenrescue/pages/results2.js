import Header1 from '../comps/Header';
import Catinfo from '../comps/Catinfo';
import Pictures2 from '../comps/Pictures2';
import Startover from '../comps/Startover';
import styled from 'styled-components';

const HomeCont = styled.div`
.header {
  display:flex;
  justify-content:left;
}

.right {
  display:flex;
  margin-top:30px;
}
.background {
  z-index:-2;
  width:400px;
  height:750px;
  background-color:#DAFFD7;
  margin-top:-650px;
}
`;

export default function Home() {
  return <HomeCont>
    <div className="header"><Header1 /></div>
    <div className="left"><Pictures2/></div>
    <div className="right"><Catinfo /></div>
    <Startover></Startover>
    <div className="background"> </div>
  

    
      
  </HomeCont>
}
