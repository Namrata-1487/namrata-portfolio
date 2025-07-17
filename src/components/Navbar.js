import React from 'react';
import './Navbar.css';

const Navbar = () => (
  <nav className="game-navbar">
    <ul>
      <li><a href="#home"><span>🧝 Hero</span></a></li>
      <li><a href="#about"><span>🎓 Profile</span></a></li>
      <li><a href="#projects"><span>⚔️ Projects</span></a></li>
      <li><a href="#skills"><span>🎮 Skills</span></a></li>
      <li><a href="#experience"><span>📜 Experience</span></a></li>
      <li><a href="#achievements"><span>🏆 Achievements</span></a></li>
      <li><a href="#interests"><span>🎨 Hobbies</span></a></li>
      <li><a href="#contact"><span>📨 Contact Me</span></a></li>
    </ul>
  </nav>
);

export default Navbar;