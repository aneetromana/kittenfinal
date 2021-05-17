import Header1 from '../comps/Header';
import Button1 from '../comps/Button1';
import Menu from '../comps/Menu';
import styled from 'styled-components';

const HomeCont = styled.div`
.header {
  display:flex;
  justify-content:left;
}

.right {
  display:flex;
  margin-top:70px;
}

.background {
  z-index:-1;
  width:400px;
  height:660px;
  background-color:#DAFFD7;
  margin-top:-180px;
}
`;

export default function Home() {
  return <HomeCont>
    <div className="header"><Menu></Menu><Header1 /></div>
    <div className="left">What kind of cat are you looking for?</div>
    <div className="right"><Button1 /></div>
    <div className="background"> </div>
 

    
      
  </HomeCont>
}
