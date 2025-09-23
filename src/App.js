import logo from './logo.svg';
import './App.css';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

function App() {
  return (
    <>
    {/* <Router> */}
        <Navbar/>
        <Home/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
      {/* <Routes>
        <Route/>
      </Routes>
    </Router> */}
  
    </>
  );
}

export default App;
