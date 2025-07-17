import Styles from "./Card.module.css";
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import Button from "./Button";
import Githubimg from "./images/github-mark-white.png"
import CodeImage from "./images/icons8-code.gif"


function Card({ image, title, description, demoLink, codeLink }) {
  const [show, setShown] = useState(false);

  const props3 = useSpring({
    transform: show ? "scale(1.03)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 100%)"
      : "0 2px 10px rgb(0 0 0 / 10%)"
  });
  return (
    <animated.div
      className={Styles.card}
      id="carditem"
      style={props3}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
      <img src={image} alt={title} className="card-img" />
      <div className={Styles.cardContent}>
        <h3 className={Styles.cardTitle}>{title}</h3>
        <p className={Styles.cardDesc}>{description}</p>
      </div>
      {/* adding button in card */}
      <div className={Styles.btnn}>
        <div className={Styles.col6}>
          <a href={demoLink} target="_self" rel="noopener noreferrer" className="nav-link">
            <Button text="Demo" iconimg={Githubimg} />
          </a>
        </div>
        <div className={Styles.col6}>
          <a href={codeLink} target="_blank" rel="noopener noreferrer">
            <Button text="Code" iconimg={CodeImage} />
          </a>
        </div>
      </div>
    </animated.div >
  );
}

export default Card;
