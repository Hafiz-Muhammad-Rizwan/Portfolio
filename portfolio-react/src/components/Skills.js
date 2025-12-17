import React, { useEffect, useState, useRef } from 'react';
import './Skills.css';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const programmingSkills = [
    { name: 'C++', icon: '💻', percentage: 95, color: '#667eea' },
    { name: 'C#', icon: '🔷', percentage: 80, color: '#f093fb' },
    { name: 'Dart', icon: '🎯', percentage: 90, color: '#4facfe' },
    { name: 'Flutter', icon: '🦋', percentage: 92, color: '#43e97b' },
    { name: 'Bash', icon: '⚡', percentage: 70, color: '#fa709a' },
    { name: 'C', icon: '⚙️', percentage: 75, color: '#667eea' },
    { name: 'SQL', icon: '🗄️', percentage: 90, color: '#f093fb' },
    { name: 'HTML', icon: '🌐', percentage: 90, color: '#4facfe' },
    { name: 'CSS', icon: '🎨', percentage: 90, color: '#43e97b' },
    { name: 'JavaScript', icon: '⚡', percentage: 70, color: '#fa709a' }
  ];

  const otherSkills = [
    { name: 'Software Requirement Analysis', icon: '✓' },
    { name: 'Software Requirement Gathering', icon: '✓' },
    { name: 'GitHub', icon: '✓' },
    { name: 'Agile Methodologies', icon: '✓' },
    { name: 'RESTful APIs', icon: '✓' },
    { name: 'State Management', icon: '✓' },
    { name: 'App Development', icon: '✓' },
    { name: 'Firebase', icon: '✓' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section id="skills" className="skills-section" ref={sectionRef}>
      <div className="skills-background"></div>
      <div className="skills-container">
        <div className="section-header">
          <h2 className="section-title">My Technical Skills</h2>
          <p className="section-subtitle">
            Proficiency in modern programming languages, tools, and methodologies.
          </p>
        </div>

        <div className="programming-skills">
          {programmingSkills.map((skill, index) => (
            <div 
              key={index} 
              className="skill-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="skill-header">
                <span className="skill-icon">{skill.icon}</span>
                <h3 className="skill-name">{skill.name}</h3>
              </div>
              <div className="progress-bar-container">
                <div 
                  className="progress-bar"
                  style={{
                    width: isVisible ? `${skill.percentage}%` : '0%',
                    background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)`
                  }}
                >
                  <span className="progress-text">{skill.percentage}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="other-skills-section">
          <h3 className="subsection-title">Other Proficiencies</h3>
          <div className="other-skills-grid">
            {otherSkills.map((skill, index) => (
              <div 
                key={index} 
                className="other-skill-card"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <span className="check-icon">{skill.icon}</span>
                <span className="other-skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
