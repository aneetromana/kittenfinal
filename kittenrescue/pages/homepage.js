import Homepage from '../comps/Homepage';
import Start from '../comps/Start';
import styled from 'styled-components';
import { hasBasePath } from 'next/dist/next-server/lib/router/router';

const HomeCont = styled.div`
.main {
    background-color:#FFE3F6;
    width:300px;
    height:600px;
    border-style: solid;
    border-width: 5px;
    border-color: rgb(177, 255, 229);
    border-radius: 15px;

  }

  .title {
    margin-top:20px;
    font-size: 45px;
    font-family: Didot;
    
  }

`;

export default function Home() {
  return <HomeCont>
  
    <div className="main">
    <div className="title">Kitten Finder</div>
    <Homepage></Homepage>
    <div className="header"><Start/></div>
    </div>

    
      
  </HomeCont>
}






