import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const phrases = [
      "Software Engineer",
      "expert in C++ | Dart | Flutter | SQL"
    ];
    const handleType = () => {
      const i = loopNum % phrases.length;
      const fullText = phrases[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 100);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section id="home" className="hero-section">
      <div className="hero-background"></div>
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="greeting">
              <span className="wave">👋</span>
              <span>Hi There? I am <strong>Hafiz Muhammad Rizwan</strong></span>
            </div>
            <h1 className="hero-title">
              I'm a <span className="typed-text">{text}</span>
              <span className="cursor">|</span>
            </h1>
            <p className="hero-description">
              Transforming Ideas into Innovative Software Solutions.
            </p>
            <a 
              href="https://www.linkedin.com/in/hafiz-muhammad-rizwan-862484335/" 
              className="contact-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact me
              <span className="btn-icon">→</span>
            </a>
          </div>
          <div className="hero-image">
            <div className="image-wrapper">
              <img 
                src="https://raw.githubusercontent.com/Hafiz-Muhammad-Rizwan/Portfolio/main/Images/cropped_image.png" 
                alt="Hafiz Muhammad Rizwan"
                className="profile-image"
              />
              <div className="image-glow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
