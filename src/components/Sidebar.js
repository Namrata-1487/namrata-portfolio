// Sidebar.js
import React, { useState } from "react";
import './Sidebar.css';

const navItems = [
 { name: "Home", icon: "home-outline", href: "#hero"},
 { name: "About", icon: "person-outline", href: "#about" },
 { name: "Projects", icon: "rocket-outline", href: "#projects" },
 { name: "Skills", icon: "bar-chart-outline", href: "#skills" },
 { name: "Experience", icon: "briefcase-outline", href: "#experience" },
 { name: "Achievements", icon: "trophy-outline", href: "#achievements" },
 { name: "Interests", icon: "star-outline", href: "#interests" },
 { name: "Contact", icon: "mail-outline", href: "#contact" }
];

function Sidebar() {
 const [activeIndex, setActiveIndex] = useState(0);

 return (
  <div className="vertical-navigation">
   <ul className="d-flex">
    {navItems.map((item, index) => (
     <li
      key={item.name}
      className={activeIndex === index ? "active" : ""}
      onClick={() => setActiveIndex(index)}
     >
      <a href={item.href} title={item.name} className="nav-link fw-bold">
       <span className="icon">
        <ion-icon name={item.icon}></ion-icon>
       </span>
      </a>
     </li>
    ))}
    <div
     className="indicator"
     style={{ transform: `translateY(calc(70px * ${activeIndex}))` }}
    >
     <span></span>
    </div>
   </ul>
  </div>
 );
}

export default Sidebar;
