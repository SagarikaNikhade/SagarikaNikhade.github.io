import "./App.css";
import About from "./component/About Me/About";
import Introhome from "./component/Home/Introhome";
import { ColorfullCSS } from "./component/styles/styles";
import Skills from "./component/Skills/Skills";
import Experience from "./component/Experience/Experience";
import Navbar from "./component/Navbar/navbar";
import Contact from "./component/Contact/ContactMe";
import { Box } from "@chakra-ui/react";
import GitHub from "./component/GitHub/GitHub";
import Projects from "./component/Projects/Projects";

function App() {
  return (
    <Box className="App" bg={ColorfullCSS.Theme1} color="white">
      
      <Box className="box_shado">
        <Navbar />
        <Introhome />
        <About />
        <Skills />
        <Experience />
        <Projects /> 
        <GitHub />
       <Contact />
      </Box>
    </Box>
  );
}

export default App;
