import './App.css';
import {Navbar} from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Project from './Pages/Projects';
import Resume from './Pages/Resume';
// import {MainRoute} from './Pages/MainRoute';

function App() {
  return (
    <div>
     <Navbar/>
     <Home/>
      <About/>
      <Contact/>
      <Project/>
      <Resume/>
    </div>
  );
}

export default App;

