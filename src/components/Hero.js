import React from 'react';
import { ReactTyped } from 'react-typed';
import { FaGithub, FaEnvelope } from 'react-icons/fa';

const Hero = () => (
  <section className="hero" id="hero">
    <h1>🧝‍♀️ Namrata SHIRSAT</h1>
    <ReactTyped
      strings={[
        'Front-End Developer 💻',
        'Manual Testing Specialist 🔍',
        'Creative Problem Solver ✨'
      ]}
      typeSpeed={50}
      backSpeed={30}
      loop
    />
    <div className="hero-links">
      <a href="https://github.com/Namrata-1487" ><FaGithub /> GitHub</a>
      <a href="mailto:namrata.shirsaat@gmail.com"><FaEnvelope /> Email</a>
    </div>
  </section>
);
export default Hero;
