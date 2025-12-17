import React from 'react';
import './Education.css';

const Education = () => {
  const keyStrengths = [
    { icon: '🎯', title: 'Object-Oriented Programming (OOP)' },
    { icon: '📊', title: 'Data Structures & Algorithms' },
    { icon: '🔀', title: 'Version Control (Git & GitHub)' },
    { icon: '📋', title: 'Requirement Gathering & Analysis' },
    { icon: '🎨', title: 'UML & Software Design Patterns' }
  ];

  return (
    <section id="education" className="education-section">
      <div className="education-container">
        <div className="section-header">
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">
            Building expertise through structured academic learning and hands-on experience
          </p>
        </div>

        <div className="education-bento">
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

          <div className="strengths-wrapper">
            {keyStrengths.map((strength, index) => (
              <div 
                key={index} 
                className="bento-card strength-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="strength-icon">{strength.icon}</span>
                <span className="strength-title">{strength.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
