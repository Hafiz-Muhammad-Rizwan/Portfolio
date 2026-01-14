import React from 'react';
import { FaReact, FaJava, FaGitAlt, FaNodeJs, FaMobileAlt } from 'react-icons/fa';
import { SiFlutter, SiDart, SiNextdotjs, SiSpringboot, SiMongodb, SiFirebase } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const categories = [
    {
      title: 'Mobile App Dev',
      icon: <FaMobileAlt className="category-icon" />,
      skills: [
        { name: 'Flutter', icon: <SiFlutter /> },
        { name: 'Dart', icon: <SiDart /> },
      ]
    },
    {
      title: 'Frontend',
      icon: <FaReact className="category-icon" />,
      skills: [
        { name: 'React', icon: <FaReact /> },
        { name: 'Next.js', icon: <SiNextdotjs /> },
      ]
    },
    {
      title: 'Backend',
      icon: <FaNodeJs className="category-icon" />,
      skills: [
        { name: 'Node.js', icon: <FaNodeJs /> },
        { name: 'Spring Boot', icon: <SiSpringboot /> },
        { name: 'Java', icon: <FaJava /> },
      ]
    },
    {
      title: 'Tools/Database',
      icon: <FaGitAlt className="category-icon" />,
      skills: [
        { name: 'Git', icon: <FaGitAlt /> },
        { name: 'MongoDB', icon: <SiMongodb /> },
        { name: 'Firebase', icon: <SiFirebase /> },
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <div className="section-header fade-in">
          <h2 className="section-title">Tech Stack</h2>
          <p className="section-subtitle">
            Technologies and tools I work with daily
          </p>
        </div>

        <div className="skills-grid">
          {categories.map((category, index) => (
            <div key={index} className="skill-category-card fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="category-header">
                {category.icon}
                <h3 className="category-title">{category.title}</h3>
              </div>
              <div className="skills-list">
                {category.skills.map((skill, listIndex) => (
                  <div key={listIndex} className="skill-chip">
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
