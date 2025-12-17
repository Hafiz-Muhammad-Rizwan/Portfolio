import React from 'react';
import './Skills.css';

const Skills = () => {
  const techStack = [
    { name: 'C++', category: 'Language' },
    { name: 'C#', category: 'Language' },
    { name: 'Java', category: 'Language' },
    { name: 'Dart', category: 'Language' },
    { name: 'Flutter', category: 'Framework' },
    { name: 'React', category: 'Framework' },
    { name: 'TypeScript', category: 'Language' },
    { name: 'JavaScript', category: 'Language' },
    { name: 'Node.js', category: 'Runtime' },
    { name: 'SQL', category: 'Database' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'Firebase', category: 'Backend' },
    { name: 'Git', category: 'Tool' },
    { name: 'REST APIs', category: 'Architecture' },
    { name: 'HTML5', category: 'Markup' },
    { name: 'CSS3', category: 'Style' }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <div className="section-header">
          <h2 className="section-title">Tech Stack</h2>
          <p className="section-subtitle">
            Technologies and tools I work with daily
          </p>
        </div>

        {/* Marquee Stack Card */}
        <div className="bento-card stack-card-large">
          <div className="marquee-wrapper">
            <div className="marquee-content">
              {[...techStack, ...techStack].map((tech, index) => (
                <div key={index} className="tech-badge-large">
                  <span className="tech-name">{tech.name}</span>
                  <span className="tech-category">{tech.category}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Expertise Grid */}
        <div className="expertise-grid">
          <div className="bento-card expertise-card">
            <div className="expertise-icon">⚡</div>
            <h3 className="expertise-title">Performance</h3>
            <p className="expertise-desc">Building fast, optimized applications</p>
          </div>

          <div className="bento-card expertise-card">
            <div className="expertise-icon">🎨</div>
            <h3 className="expertise-title">UI/UX Design</h3>
            <p className="expertise-desc">Pixel-perfect, accessible interfaces</p>
          </div>

          <div className="bento-card expertise-card">
            <div className="expertise-icon">🔧</div>
            <h3 className="expertise-title">Clean Code</h3>
            <p className="expertise-desc">Maintainable, scalable solutions</p>
          </div>

          <div className="bento-card expertise-card">
            <div className="expertise-icon">🚀</div>
            <h3 className="expertise-title">Deployment</h3>
            <p className="expertise-desc">CI/CD and cloud infrastructure</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
