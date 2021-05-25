import styled from 'styled-components';
import Header from '../comps/Header';
import Gallery from '../comps/Gallery';




const HomeCont = styled.div`
.main {
    background-color:#FFE3F6;
    width:300px;
    height:700px;
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
  .header {
    display:flex;
    justify-content:left;
  }
  
`;


export default function Home() {
  return <HomeCont>
  
    <div className="main">

    
    <div className="header"><Header ></Header> </div>

    <Gallery></Gallery>
  
    </div>

    
      
  </HomeCont>
}



