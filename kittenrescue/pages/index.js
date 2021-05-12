import Header1 from '../comps/Header';
import Catinfo from '../comps/Catinfo';
import Pictures from '../comps/Pictures';
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
.right {
  display:flex;
  margin-top:30px;
}
.background {
  z-index:-1;
  width:400px;
  height:660px;
  background-color:#DAFFD7;
  margin-top:-580px;
}
`;

export default function Home() {
  return <HomeCont>
    <div className="header"><Header1 /></div>
    <div className="bottom">
    <div className="left"><Pictures/></div>
    <div className="right"><Catinfo /></div>
    <div className="background"> </div>
    </div>

    
      
  </HomeCont>
}
