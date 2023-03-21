import {Route , Routes} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import Skills from "./Skills";
import Resume from "./Resume";

function MainRoute(){
  return (
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/project" element={<Projects/>}></Route>
        <Route path="/resume" element={<Resume/>}></Route>
        <Route path="/skill" element={<Skills/>}></Route>
    </Routes>
  ) 
}


export default MainRoute