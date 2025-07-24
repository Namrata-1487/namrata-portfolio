// import React from 'react';
// import { ReactTyped } from 'react-typed';
// import { FaGithub, FaEnvelope } from 'react-icons/fa';

// const Hero = () => (
//   <section className="hero" id="hero">
//     <h1>🧝‍♀️ Namrata SHIRSAT</h1>
//     <ReactTyped
//       strings={[
//         'Front-End Developer 💻',
//         'Manual Testing Specialist 🔍',
//         'Creative Problem Solver ✨'
//       ]}
//       typeSpeed={50}
//       backSpeed={30}
//       loop
//     />
//     <div className="hero-links">
//       <a href="https://github.com/Namrata-1487" ><FaGithub /> GitHub</a>
//       <a href="mailto:namrata.shirsaat@gmail.com"><FaEnvelope /> Email</a>
//     </div>
//   </section>
// );
// export default Hero;
import { motion } from "framer-motion";
import "./Hero.css"; // If using external CSS for card styling

export default function Hero() {
  const imageUrl = "https://images.unsplash.com/photo-1526034332220-067b0f400e06?w=600&auto=format"; // Replace with your own
  return (
    <div  className="section container">
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ amount: 0.8 }}
        className="cardContainer"
      >
        <div className="splash" />
        <motion.div variants={cardVariants} className="card">
          <img
            src={imageUrl}  
            alt="Card visual"
      
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

const cardVariants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};





