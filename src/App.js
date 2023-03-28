import './App.css';
import { Navbar } from './component/Navbar';
import MainRoute from './component/MainRoute';
import styled from "styled-components";

function App() {
  return (
    <DIV >
      <Navbar />
      <MainRoute />
    </DIV>
  );
}

export default App;

const DIV = styled.div`
    background: #080808; 
     color: #fff;
    border:5px solid blue;
    width: 100%;
    overflow-x: hidden;
    -webkit-font-feature-smotthing: antialiased;
    position: relative;

    /* div{
      border:2px solid red;
      width: 90%;
      margin:auto;
    } */
`;