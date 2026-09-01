'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => { if (window.innerWidth >= 768) setIsOpen(false); };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navItems = [
    { name: 'Home',           href: '#home'          },
    { name: 'About',          href: '#about'         },
    { name: 'Skills',         href: '#skills'        },
    { name: 'Experience',     href: '#experience'    },
    { name: 'Education',      href: '#education'     },
    { name: 'Projects',       href: '#projects'      },
    { name: 'Certifications', href: '#certifications'},
    { name: 'Badges',         href: '#badges'        },
    { name: 'Testimonials',   href: '#testimonials'  },
    { name: 'Contact',        href: '#contact'       },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 80, behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'rgba(15, 14, 14, 0.92)' : 'rgba(15, 14, 14, 0.7)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: scrolled
          ? '1px solid rgba(217, 119, 6, 0.15)'
          : '1px solid rgba(255, 255, 255, 0.05)',
        boxShadow: scrolled ? '0 4px 32px rgba(0,0,0,0.4)' : 'none',
        paddingTop:    scrolled ? '12px' : '18px',
        paddingBottom: scrolled ? '12px' : '18px',
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="text-xl sm:text-2xl font-bold gradient-text font-display">
            Portfolio<span style={{ color: '#D97706' }}>.</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-5 lg:space-x-7">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-sm font-medium transition-colors duration-200 relative group"
                style={{ color: '#9E978F' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#E2A85C')}
                onMouseLeave={e => (e.currentTarget.style.color = '#9E978F')}
              >
                {item.name}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px transition-all duration-300 group-hover:w-full rounded-full"
                  style={{ background: 'linear-gradient(90deg, #D97706, #E2A85C)' }} />
              </a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl focus:outline-none transition-colors duration-200"
            style={{ color: '#E2A85C' }}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            className="md:hidden mt-4 mb-2 rounded-xl overflow-hidden animate-slideIn"
            style={{
              backgroundColor: 'rgba(24, 22, 21, 0.97)',
              border: '1px solid rgba(217,119,6,0.15)',
              boxShadow: '0 16px 48px rgba(0,0,0,0.5)',
            }}
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="block px-5 py-3 text-sm font-medium transition-all duration-200 border-b last:border-b-0"
                style={{
                  color: '#9E978F',
                  borderColor: 'rgba(255,255,255,0.05)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = '#E2A85C';
                  e.currentTarget.style.backgroundColor = 'rgba(217,119,6,0.06)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = '#9E978F';
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
