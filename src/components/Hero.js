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

  const hueA = 20;
  const hueB = 40;
  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

  return (
    <div style={container}>
      <motion.div
        style={cardContainer}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ amount: 0.8 }}
      >
        <div style={{ ...splash, background }} />
        <motion.div style={card} variants={cardVariants} className="card">
          <img
            src={imageUrl}
            alt="Card visual"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "20px",
            }}
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

const hue = (h) => `hsl(${h}, 100%, 50%)`;

const container = {
  margin: "100px auto",
  maxWidth: 500,
  paddingBottom: 100,
  width: "100%",
};

const cardContainer = {
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  paddingTop: 20,
  marginBottom: -120,
};

const splash = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  clipPath:
    "path('M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z')",
};

const card = {
  width: 300,
  height: 430,
  borderRadius: 20,
  background: "#f5f5f5",
  boxShadow:
    "0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075)",
  transformOrigin: "10% 60%",
  overflow: "hidden",
};
