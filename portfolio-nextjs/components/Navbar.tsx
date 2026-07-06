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
        // At top = white navbar (sits over light hero)
        // Scrolled = dark frosted glass (sits over dark sections)
        backgroundColor: scrolled ? 'rgba(6, 11, 23, 0.92)' : '#ffffff',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled
          ? '1px solid rgba(0, 212, 255, 0.12)'
          : '1px solid rgba(0,0,0,0.07)',
        boxShadow: scrolled ? '0 4px 24px rgba(0,212,255,0.07)' : 'none',
        paddingTop:    scrolled ? '12px' : '18px',
        paddingBottom: scrolled ? '12px' : '18px',
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="text-xl sm:text-2xl font-bold gradient-text">
            Portfolio<span className="text-neon-blue">.</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-sm font-medium transition-colors duration-200 relative group"
                style={{ color: scrolled ? '#d1d5db' : '#4b5563' }}
              >
                {item.name}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-neon-blue transition-all duration-300 group-hover:w-full rounded-full" />
              </a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl focus:outline-none text-neon-blue"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            className="md:hidden mt-4 mb-2 rounded-xl overflow-hidden border animate-slideIn"
            style={{
              backgroundColor: scrolled ? 'rgba(6,11,23,0.97)' : '#ffffff',
              borderColor: 'rgba(0, 212, 255, 0.15)',
              boxShadow: '0 8px 32px rgba(0,212,255,0.08)',
            }}
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="block px-5 py-3 text-sm font-medium transition-all duration-200 border-b last:border-b-0"
                style={{
                  color: scrolled ? '#d1d5db' : '#4b5563',
                  borderColor: scrolled ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.07)',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#00d4ff')}
                onMouseLeave={e => (e.currentTarget.style.color = scrolled ? '#d1d5db' : '#4b5563')}
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
