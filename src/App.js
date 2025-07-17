import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar.js';

import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Interests from './components/Interests';
import Contact from './components/Contact';
import './App.css';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="container-fluid p-0 m-auto">
      <div className="row justify-content-center w-100">
        <div className="col-lg-1 col-3">
          <Sidebar />
        </div>
        <div className="col-lg-11 col-9 p-3">
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Experience />
          <Achievements />
          <Interests />
          <Contact />
        </div>
      </div>
    </div>
  );

}
export default App;