'use client';

import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    sections: [
      { name: 'Home', href: '#home' },
      { name: 'About', href: '#about' },
      { name: 'Skills', href: '#skills' },
      { name: 'Experience', href: '#experience' },
    ],
    resources: [
      { name: 'Education', href: '#education' },
      { name: 'Projects', href: '#projects' },
      { name: 'Testimonials', href: '#testimonials' },
      { name: 'Contact', href: '#contact' },
    ],
  };

  const socialLinks = [
    { icon: FaGithub,   href: 'https://github.com/Hafiz-Muhammad-Rizwan',                                          label: 'GitHub'   },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/hafiz-muhammad-rizwanrizwan-33328a374',                  label: 'LinkedIn' },
    { icon: FaTwitter,  href: 'https://twitter.com',                                                               label: 'Twitter'  },
    { icon: FaEnvelope, href: 'mailto:hafizmuhammadrizwan359@gmail.com',                                            label: 'Email'    },
  ];

  return (
    <footer
      className="relative"
      style={{
        background: '#181615',
        borderTop: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">

          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-bold gradient-text inline-block mb-4 font-display">
              Portfolio<span style={{ color: '#D97706' }}>.</span>
            </Link>
            <p className="mb-5 text-sm leading-relaxed max-w-sm" style={{ color: '#9E978F' }}>
              Building secure, cost-optimized cloud infrastructure with AWS, Terraform,
              and GitLab CI/CD. Let&apos;s create something amazing together.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    color: '#706860',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.color = '#E2A85C';
                    el.style.borderColor = 'rgba(217,119,6,0.3)';
                    el.style.background = 'rgba(217,119,6,0.08)';
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.color = '#706860';
                    el.style.borderColor = 'rgba(255,255,255,0.07)';
                    el.style.background = 'rgba(255,255,255,0.04)';
                  }}
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold mb-4 tracking-wider uppercase" style={{ color: '#F5F2EB' }}>
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.sections.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors duration-200"
                    style={{ color: '#706860' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#E2A85C')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#706860')}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold mb-4 tracking-wider uppercase" style={{ color: '#F5F2EB' }}>
              Resources
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors duration-200"
                    style={{ color: '#706860' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#E2A85C')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#706860')}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-6 flex flex-col md:flex-row justify-between items-center gap-3"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
        >
          <p className="text-xs" style={{ color: '#706860' }}>
            © {currentYear} Hafiz Muhammad Rizwan. All rights reserved.
          </p>
          <p className="text-xs flex items-center gap-1" style={{ color: '#706860' }}>
            Made with <FaHeart style={{ color: '#D97706', margin: '0 3px' }} /> using Next.js
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
