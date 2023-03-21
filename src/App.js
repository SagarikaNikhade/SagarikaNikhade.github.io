import './App.css';
import {Navbar} from './component/Navbar';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Project from './component/Projects';
import Resume from './component/Resume';
import Skills from './component/Skills';

function App() {
  return (
    <div>
     <Navbar/>
     <Home/>
      <About/>
      <Contact/>
      <Project/>
      <Skills/>
      <Resume/>
    </div>
  );
}

export default App;

