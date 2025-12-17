import React from 'react';
import './Contact.css';

const Contact = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: '💼',
      url: 'https://www.linkedin.com/in/hafiz-muhammad-rizwan-862484335/',
      color: '#0a66c2',
      gradient: 'linear-gradient(135deg, rgba(10, 102, 194, 0.15), rgba(10, 102, 194, 0.05))'
    },
    {
      name: 'WhatsApp',
      icon: '💬',
      url: 'https://wa.me/+923229603359',
      color: '#25D366',
      gradient: 'linear-gradient(135deg, rgba(37, 211, 102, 0.15), rgba(37, 211, 102, 0.05))'
    },
    {
      name: 'GitHub',
      icon: '🐙',
      url: 'https://github.com/Hafiz-Muhammad-Rizwan',
      color: '#667eea',
      gradient: 'linear-gradient(135deg, rgba(102, 126, 234, 0.15), rgba(102, 126, 234, 0.05))'
    },
    {
      name: 'Email',
      icon: '📧',
      url: 'https://mail.google.com/mail/?view=cm&fs=1&to=hafizmuhammadrizwan359@gmail.com',
      color: '#EA4335',
      gradient: 'linear-gradient(135deg, rgba(234, 67, 53, 0.15), rgba(234, 67, 53, 0.05))'
    }
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="contact-background"></div>
      <div className="contact-glow"></div>
      <div className="contact-container">
        <div className="section-header">
          <h2 className="section-title">Let's Connect! 🤝</h2>
          <p className="section-subtitle">
            Feel free to reach out for collaborations or just a friendly chat
          </p>
        </div>

        <div className="social-links-grid">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-card"
              style={{ 
                background: social.gradient,
                animationDelay: `${index * 0.1}s`
              }}
            >
              <span className="social-icon">{social.icon}</span>
              <span className="social-name">{social.name}</span>
              <div 
                className="social-hover-effect"
                style={{ 
                  boxShadow: `0 15px 40px ${social.color}40`
                }}
              ></div>
            </a>
          ))}
        </div>

        <div className="footer-text">
          <p>© 2025 Hafiz Muhammad Rizwan. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
