import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
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
