import styled from 'styled-components';
import Header from '../comps/Header';
import Menu from '../comps/Menu';
import Gallery from '../comps/Gallery';



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
  .header {
    display:flex;
    justify-content:left;
  }
  .menu {
    display:flex;
    justify-content:left;
    z-index:2;
  }
`;


export default function Home() {
  return <HomeCont>
  
    <div className="main">

    
    <div className="header"><Header ></Header> </div>
    <div className="menu"><Menu></Menu></div>
    <Gallery></Gallery>
    </div>

    
      
  </HomeCont>
}



