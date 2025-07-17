import React from 'react';
import { v4 as uuidv4 } from "uuid";
import Card from "./Card";
import Carousel from "./Carousel";
import ResumeBuilderImg from './images/resume.png';
import LandingPageImg from './images/landingPage.png';
import VideoPlayerImg from './images/videoplayer.png';
import ClockTimerImg from './images/digital-clock.png';
import PalindromeCheckerImg from './images/palindrome.png';

const Projects = () => {
  const cards = [
    {
      key: uuidv4(),
      content: (
        <Card
          image={ResumeBuilderImg}
          title="📄 Professional Resume Builder"
          description=" Responsive and visually structured resume built with HTML and CSS. Supports mobile viewing and cross-browser compatibility."
          demoLink="https://namratashirsatresume.netlify.app/"
          codeLink="https://github.com/Namrata-1487/resume-namrata-shirsat"
        />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card
          image={LandingPageImg}
          title="🚀 Responsive Landing Page UI"
          description="Clean and modern UI for a landing page with intuitive layout and optimized visuals."
          demoLink="https://your-demo-link.com"
          codeLink="https://github.com/your-username/resume-project"
        />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card
          image={VideoPlayerImg}
          title="🎥 Custom Video Player Interface"
          description="Interactive video player with volume control, progress bar, fullscreen mode, and modern UI."
          demoLink="https://your-demo-link.com"
          codeLink="https://github.com/your-username/resume-project"
        />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card
          image={ClockTimerImg}
          title="⏱️ Circular Clock Timer"
          description="Real-time animated circular clock timer with separate colors for hours, minutes, and seconds."
          demoLink="https://your-demo-link.com"
          codeLink="https://github.com/your-username/resume-project"
        />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card
          image={PalindromeCheckerImg}
          title="🔁  Palindrome Checker App"
          description="Tool to check palindromes with real-time feedback, case insensitivity, and responsive design."
          demoLink="https://your-demo-link.com"
          codeLink="https://github.com/your-username/resume-project"
        />
      )
    }
  ];
  return (
    <div className="section carousel-section" id='projects'>
      <div className="carousel-wrapper">
        <Carousel
          cards={cards}
          offset={2}
          showArrows={true}
        />
      </div>
    </div>
  );
}

export default Projects