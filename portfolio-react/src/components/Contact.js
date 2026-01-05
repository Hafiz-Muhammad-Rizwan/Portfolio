import React from 'react';
import './Contact.css';

const Contact = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: 'LinkedinLogo.png',
      url: 'https://www.linkedin.com/in/hafiz-muhammad-rizwan-862484335/',
      label: 'Professional Network'
    },
    {
      name: 'WhatsApp',
      icon: 'watsappLogo.png',
      url: 'https://wa.me/+923229603359',
      label: 'Quick Chat'
    },
    {
      name: 'GitHub',
      icon: 'GihubLogo.png',
      url: 'https://github.com/Hafiz-Muhammad-Rizwan',
      label: 'Code Repository'
    },
    {
      name: 'Email',
      icon: 'GmailLogo.png',
      url: 'https://mail.google.com/mail/?view=cm&fs=1&to=hafizmuhammadrizwan359@gmail.com',
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
