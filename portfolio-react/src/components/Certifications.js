import React from 'react';
import './Certifications.css';

const Certifications = () => {
  const certifications = [
    {
      title: 'Java Spring Boot',
      issuer: 'EDUCBA',
      platform: 'via Coursera',
      date: 'Issued Dec 2025',
      skills: ['Java', 'Spring Boot', 'Backend'],
      link: 'https://coursera.org/verify/NS3IOWV0QZIB',
      icon: 'https://raw.githubusercontent.com/Hafiz-Muhammad-Rizwan/Portfolio/main/Images/Spring%20Boot.png'
    },
    {
      title: 'Python for Data Science, AI & Development',
      issuer: 'IBM',
      platform: 'via Coursera',
      date: 'Issued Oct 2025',
      skills: ['Python', 'Data Science', 'AI'],
      link: 'https://coursera.org/verify/L920C94VN3ZV',
      icon: 'https://raw.githubusercontent.com/Hafiz-Muhammad-Rizwan/Portfolio/main/Images/Python.png'
    },
    {
      title: 'AI For Everyone',
      issuer: 'DeepLearning.AI',
      platform: 'via Coursera',
      date: 'Issued Aug 2025',
      skills: ['AI Strategy', 'Machine Learning'],
      link: 'https://coursera.org/verify/CTIOH9F2A7D5',
      icon: 'https://raw.githubusercontent.com/Hafiz-Muhammad-Rizwan/Portfolio/main/Images/AI%20Logo.png'
    },
    {
      title: 'Advanced JavaScript Concepts',
      issuer: 'Packt',
      platform: 'via Coursera',
      date: 'Issued Jul 2025',
      skills: ['JavaScript', 'ES6+', 'Async/Await'],
      link: 'https://coursera.org/verify/O6ADC3W0RHEF',
      icon: 'https://raw.githubusercontent.com/Hafiz-Muhammad-Rizwan/Portfolio/main/Images/Java%20Script.png'
    },
    {
      title: 'Flutter and Dart: Developing iOS, Android, and Mobile Apps',
      issuer: 'IBM',
      platform: 'via Coursera',
      date: 'Issued Jun 2025',
      skills: ['Flutter', 'Dart', 'State Management', 'Android', 'iOS'],
      link: 'https://coursera.org/verify/G335TBGX2GKW',
      icon: 'https://raw.githubusercontent.com/Hafiz-Muhammad-Rizwan/Portfolio/main/Images/Flutter.png'
    }
  ];

  return (
    <section id="certifications" className="certifications-section">
      <div className="certifications-container">
        <div className="section-header fade-in">
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle">
            Professional certifications and continuous learning achievements
          </p>
        </div>

        <div className="certifications-grid fade-in" style={{ animationDelay: '0.2s' }}>
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bento-card certification-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="cert-header">
                <div className="cert-icon">
                  <img src={cert.icon} alt={cert.title} className="cert-icon-img" />
                </div>
                <div className="cert-badge">
                  <img 
                    src="https://www.coursera.org/favicon.ico" 
                    alt="Coursera" 
                    className="coursera-badge"
                  />
                </div>
              </div>

              <div className="cert-content">
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-issuer">
                  {cert.issuer} <span className="cert-platform">{cert.platform}</span>
                </p>
                <p className="cert-date">{cert.date}</p>

                <div className="cert-skills">
                  {cert.skills.map((skill, idx) => (
                    <span key={idx} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-verify-link"
              >
                Verify Certificate →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
