import React from 'react';
import { useScrollAnimation } from './useScrollAnimation';
import './Education.css';

const Education = () => {
  const [headerRef, headerVisible] = useScrollAnimation();
  const [cardRef, cardVisible] = useScrollAnimation();

  return (
    <section id="education" className="education-section">
      <div className="education-container">
        <div 
          ref={headerRef}
          className={`section-header fade-in ${headerVisible ? 'visible' : ''}`}
        >
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">
            Building expertise through structured academic learning and hands-on experience
          </p>
        </div>

        <div className="education-bento">
          <div 
            ref={cardRef}
            className={`bento-card main-education-card scroll-fade-in ${cardVisible ? 'visible' : ''}`}
          >
            <div className="education-header">
              <span className="education-icon">🎓</span>
              <div className="education-info">
                <h3 className="degree-title">Bachelor of Software Engineering</h3>
                <p className="institution-name">
                  National University of Computer and Emerging Sciences (NUCES - FAST)
                </p>
                <p className="degree-year">2023 - Present</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
