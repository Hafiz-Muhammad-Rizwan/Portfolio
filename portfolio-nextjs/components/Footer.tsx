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
    { icon: FaGithub, href: 'https://github.com/Hafiz-Muhammad-Rizwan', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/hafiz-muhammad-rizwanrizwan-33328a374', label: 'LinkedIn' },
    { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: FaEnvelope, href: 'mailto:hafizmuhammadrizwan359@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="relative bg-dark-100 border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-bold gradient-text inline-block mb-4">
              Portfolio<span className="text-neon-blue">.</span>
            </Link>
            <p className="text-gray-400 mb-4 max-w-md">
              Building exceptional digital experiences with cutting-edge technologies.
              Let's create something amazing together.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white hover:text-neon-blue hover:bg-neon-blue/20 transition-all duration-300"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.sections.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-neon-blue transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-neon-purple transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Premium Portfolio. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm flex items-center">
            Made with <FaHeart className="text-neon-pink mx-2" /> using Next.js & Firebase
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
