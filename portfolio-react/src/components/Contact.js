import React from 'react';
import { useScrollAnimation } from './useScrollAnimation';
import './Contact.css';

const SocialCard = ({ social, index }) => {
  const [cardRef, cardVisible] = useScrollAnimation();
  
  return (
    <a
      ref={cardRef}
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`bento-card social-card scroll-fade-in ${cardVisible ? 'visible' : ''}`}
    >
      <img 
        src={social.icon} 
        alt={social.name}
        className="social-icon-img"
      />
      <div className="social-info">
        <span className="social-name">{social.name}</span>
        <span className="social-label">{social.label}</span>
      </div>
      <span className="arrow-icon">→</span>
    </a>
  );
};

const Contact = () => {
  const [headerRef, headerVisible] = useScrollAnimation();
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: '/Images/Linked In Icon.png',
      url: 'https://www.linkedin.com/in/hafiz-muhammad-rizwan',
      label: 'Professional Network'
    },
    {
      name: 'WhatsApp',
      icon: '/Images/WatsApp Icon.png',
      url: 'https://wa.me/923229603359',
      label: 'Quick Chat'
    },
    {
      name: 'GitHub',
      icon: '/Images/Github Icon.png',
      url: 'https://github.com/Hafiz-Muhammad-Rizwan',
      label: 'Code Repository'
    },
    {
      name: 'Email',
      icon: '/Images/Gmail Logo Icon.png',
      url: 'mailto:your-email@gmail.com',
      label: 'Direct Message'
    }
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div 
          ref={headerRef}
          className={`section-header fade-in ${headerVisible ? 'visible' : ''}`}
        >
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle">
            Open for collaborations, opportunities, and conversations
          </p>
        </div>

        <div className="social-links-grid">
          {socialLinks.map((social, index) => (
            <SocialCard key={index} social={social} index={index} />
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
