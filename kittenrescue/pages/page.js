import Header1 from '../comps/Header';
import Catinfo from '../comps/Catinfo';
import styled from 'styled-components';

const HomeCont = styled.div`
.header {
  display:flex;
  just
}
`;

export default function Home() {
  return <HomeCont>
    <div className="header"></div>
    <div className="bottom">
    <div className="left"></div>
    <div className="right"></div>
    </div>

    <Header1 />
      <Catinfo />
  </HomeCont>
}
