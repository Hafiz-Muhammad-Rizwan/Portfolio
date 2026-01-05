import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = ({ toggleTheme, isDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <span className="logo-text">Portfolio</span>
        </div>
        
        <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <a href="#home" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
          <a href="#skills" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Skills</a>
          <a href="#education" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Education</a>
          <a href="#certifications" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Certifications</a>
          <a href="#portfolio" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Portfolio</a>
          <a href="#contact" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
          
          <button 
            className="theme-toggle-btn" 
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            <div className="theme-toggle-icon">
              {isDarkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5"/>
                  <line x1="12" y1="1" x2="12" y2="3"/>
                  <line x1="12" y1="21" x2="12" y2="23"/>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                  <line x1="1" y1="12" x2="3" y2="12"/>
                  <line x1="21" y1="12" x2="23" y2="12"/>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                </svg>
              )}
            </div>
          </button>
          
          <a 
            href="https://github.com/Hafiz-Muhammad-Rizwan/Portfolio/raw/119b84e7de8bb8ee7abd80cd50ef2142e44d2bc8/bootstrap-5.3.5-dist/Hafiz-Muhammad-Rizwan_Software-Engineer.pdf" 
            className="download-cv-btn"
            download="Hafiz Muhammad Rizwan.pdf"
          >
            Download CV
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
