import React from 'react';
import './Education.css';

const Education = () => {
  const keyStrengths = [
    'Object-Oriented Programming (OOP)',
    'Data Structures & Algorithms',
    'Version Control (Git & GitHub)',
    'Requirement Gathering & Analysis',
    'UML & Software Design Patterns'
  ];

  return (
    <section id="education" className="education-section">
      <div className="education-background"></div>
      <div className="education-container">
        <div className="section-header">
          <h2 className="section-title">🎓 Education</h2>
          <p className="section-subtitle">
            Currently pursuing my Bachelor's degree with a focus on core software engineering concepts.
          </p>
        </div>

        <div className="education-card-wrapper">
          <div className="education-card">
            <div className="card-decoration"></div>
            <div className="card-content">
              <div className="education-header">
                <div className="icon-wrapper">
                  <span className="education-icon">🎓</span>
                </div>
                <div className="education-info">
                  <h3 className="degree-title">Bachelor of Software Engineering</h3>
                  <p className="degree-year">2023 - Present</p>
                </div>
              </div>

              <div className="institution-info">
                <p className="institution-label">🏛️ Institution:</p>
                <p className="institution-name">
                  National University of Computer and Emerging Sciences (NUCES - FAST)
                </p>
              </div>

              <div className="strengths-section">
                <h4 className="strengths-title">💡 Key Strengths:</h4>
                <div className="strengths-grid">
                  {keyStrengths.map((strength, index) => (
                    <div 
                      key={index} 
                      className="strength-item"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <span className="check-mark">✓</span>
                      <span className="strength-text">{strength}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
