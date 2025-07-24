// Sidebar.js
import React, { useState } from "react";
import './Sidebar.css';

const navItems = [
 { name: "Home", icon: "home-outline", href: "#hero" },
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
   <ul className="d-flex h-100 justify-content-evenly m-0 align-items-center ">
    {navItems.map((item, index) => (
     <li
      key={item.name}
      className={activeIndex === index ? "active" : ""}
      onClick={() => setActiveIndex(index)}
     >
      <a href={item.href} title={item.name} className="nav-link fw-bold">
       <span className="icon fs-2 p-3">
        <ion-icon name={item.icon} className="ionicon"></ion-icon>
       </span>
      </a>
     </li>
    ))}
   </ul>
  </div>
 );
}

export default Sidebar;
