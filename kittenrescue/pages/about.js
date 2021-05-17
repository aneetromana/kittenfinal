import Header1 from '../comps/Header';
import About from '../comps/About';
import styled from 'styled-components';

const HomeCont = styled.div`
.header {
  display:flex;
  justify-content:left;
}

.right {
  display:flex;
  margin-top:30px;
  margin-right:20px;
}

.background {
  z-index:-1;
  width:400px;
  height:660px;
  background-color:#DAFFD7;
  margin-top:-450px;
}
`;

export default function Home() {
  return <HomeCont>
    <div className="header"><Header1 /></div>
    <div className="right"><About /></div>
    <div className="background"> </div>
 

    
      
  </HomeCont>
}
