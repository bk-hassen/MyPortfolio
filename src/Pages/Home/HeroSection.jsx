import React, { useState, useEffect } from 'react';
import { Link } from "react-scroll";

export default function HeroSection() {
  const titles = ["JS Developer", "UX/UI Designer"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let textIndex = 0;
    let timeout;

    const updateText = () => {
      const currentTitle = titles[currentIndex];
      if (textIndex <= currentTitle.length) {
        setDisplayedText(currentTitle.slice(0, textIndex));
        textIndex++;
        timeout = setTimeout(updateText, 100); // Speed of displaying letters
      } else {
        setTimeout(() => {
          textIndex = 0;
          setDisplayedText('');
          setCurrentIndex((currentIndex + 1) % titles.length);
        }, 1000); // Delay before starting the next phrase
      }
    };

    updateText();

    return () => clearTimeout(timeout);
  }, [currentIndex]);

  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm BEN KHALIFA HASSEN</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">{displayedText}</span>{" "}
          </h1>
          <p className="hero--section-description">
            CODE WITH CREATIVITY, DESIGN WITH PRECISION.
          </p>
        </div>
        <div className="hero--section-btn">
          <Link
           smooth={true}
           duration={500}
           to="Contact"
           className="btn btn-primary"
           style={{marginRight:'20px'}}
           >
           Get In Touch
          </Link>
           
          <a href="./img/BkHassenResume.pdf" download className="btn btn-primary">Download CV</a>
        </div> 
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
