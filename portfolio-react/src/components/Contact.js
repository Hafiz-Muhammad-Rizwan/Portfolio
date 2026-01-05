import React from 'react';
import './Contact.css';

const Contact = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: 'LinkedinLogo.png',
      url: 'https://raw.githubusercontent.com/Hafiz-Muhammad-Rizwan/Portfolio/main/Images/LinkedinLogo.png',
      label: 'Professional Network'
    },
    {
      name: 'WhatsApp',
      icon: 'watsappLogo.png',
      url: 'https://raw.githubusercontent.com/Hafiz-Muhammad-Rizwan/Portfolio/main/Images/watsappLogo.png',
      label: 'Quick Chat'
    },
    {
      name: 'GitHub',
      icon: 'GihubLogo.png',
      url: 'https://raw.githubusercontent.com/Hafiz-Muhammad-Rizwan/Portfolio/main/Images/GihubLogo.png',
      label: 'Code Repository'
    },
    {
      name: 'Email',
      icon: 'GmailLogo.png',
      url: 'https://raw.githubusercontent.com/Hafiz-Muhammad-Rizwan/Portfolio/main/Images/GmailLogo.png',
      label: 'Direct Message'
    }
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="section-header">
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle">
            Open for collaborations, opportunities, and conversations
          </p>
        </div>

        <div className="social-links-grid">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bento-card social-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img 
                src={`/Images/${social.icon}`} 
                alt={social.name}
                className="social-icon-img"
              />
              <div className="social-info">
                <span className="social-name">{social.name}</span>
                <span className="social-label">{social.label}</span>
              </div>
              <span className="arrow-icon">→</span>
            </a>
          ))}
        </div>

        <div className="footer-text">
          <p>Built with React • Designed with attention to detail</p>
          <p className="copyright">© 2025 Hafiz Muhammad Rizwan</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
