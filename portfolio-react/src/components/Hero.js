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
      "Flutter Developer",
      "Full-Stack Developer"
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

  const copyEmail = () => {
    navigator.clipboard.writeText('hafizmuhammadrizwan359@gmail.com');
    const button = document.querySelector('.copy-email-btn');
    button.textContent = '✓ Copied!';
    setTimeout(() => {
      button.textContent = 'Copy Email';
    }, 2000);
  };

  return (
    <section id="home" className="hero-section">
      <div className="bento-grid">
        {/* Hero Card - Large 2x2 */}
        <div className="bento-card hero-card">
          <div className="hero-content-wrapper">
            <div className="hero-image-container">
              <img 
                src="https://raw.githubusercontent.com/Hafiz-Muhammad-Rizwan/Portfolio/main/Images/cropped_image.png" 
                alt="Hafiz Muhammad Rizwan"
                className="hero-profile-image"
              />
              <div className="status-indicator">
                <span className="status-dot"></span>
                <span className="status-text">Available for work</span>
              </div>
            </div>
            <div className="hero-text-content">
              <h1 className="hero-main-title">
                Hafiz Muhammad Rizwan
              </h1>
              <p className="hero-tagline">
                I build <span className="accent-text">accessible</span>, <span className="accent-text">pixel-perfect</span> web experiences.
              </p>
              <div className="hero-role">
                <span className="role-prefix">Currently:</span>
                <span className="typed-text">{text}</span>
                <span className="cursor">|</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats Card */}
        <div className="bento-card stats-card">
          <div className="stats-content">
            <div className="stat-item">
              <div className="stat-number">1+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">15+</div>
              <div className="stat-label">Projects Built</div>
            </div>
          </div>
        </div>

        {/* Connect Card with Copy Email */}
        <div className="bento-card connect-card">
          <h3 className="card-title">Let's Connect</h3>
          <button className="copy-email-btn" onClick={copyEmail}>
            Copy Email
          </button>
          <div className="social-links-mini">
            <a href="https://github.com/Hafiz-Muhammad-Rizwan" target="_blank" rel="noopener noreferrer" className="social-icon-link">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/hafiz-muhammad-rizwan-862484335/" target="_blank" rel="noopener noreferrer" className="social-icon-link">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Location Card */}
        <div className="bento-card location-card">
          <div className="location-icon">📍</div>
          <div className="location-text">
            <div className="location-city">Faisalabad</div>
            <div className="location-country">Pakistan</div>
          </div>
          <div className="location-time">
            {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
