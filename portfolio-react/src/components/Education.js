import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <section id="education" className="education-section">
      <div className="education-container">
        <div className="section-header fade-in">
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">
            Building expertise through structured academic learning and hands-on experience
          </p>
        </div>

        <div className="education-bento fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="bento-card main-education-card">
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
