'use client';

import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{ background: '#0F0E0E' }}
    >
      {/* ── Ambient glow orbs ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Warm amber orb — centre */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.07] blur-[120px]"
          style={{ background: 'radial-gradient(circle, #D97706 0%, transparent 70%)' }}
        />
        {/* Gold orb — top-right */}
        <div
          className="absolute -top-20 right-0 w-[350px] h-[350px] rounded-full opacity-[0.05] blur-[90px]"
          style={{ background: 'radial-gradient(circle, #E2A85C 0%, transparent 70%)' }}
        />
        {/* Deep amber — bottom-left */}
        <div
          className="absolute bottom-0 -left-20 w-[300px] h-[300px] rounded-full opacity-[0.04] blur-[90px]"
          style={{ background: 'radial-gradient(circle, #D97706 0%, transparent 70%)' }}
        />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(rgba(226,168,92,0.3) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(226,168,92,0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* ── Content ── */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mb-8 flex justify-center"
          >
            <div className="relative">
              {/* Amber glowing ring */}
              <div
                className="absolute -inset-[3px] rounded-full blur-[6px] opacity-60"
                style={{ background: 'linear-gradient(135deg, #D97706, #E2A85C, #F5C87A)' }}
              />
              <div className="absolute -inset-[1px] rounded-full"
                style={{ background: 'linear-gradient(135deg, #D97706, #E2A85C)' }} />
              <Image
                src="/images/hafiz-muhammad-rizwan-devops-engineer.png"
                alt="Hafiz Muhammad Rizwan, AWS DevOps and Cloud Engineer"
                width={180}
                height={180}
                className="relative rounded-full"
                style={{
                  border: '3px solid #0F0E0E',
                  boxShadow: '0 0 40px rgba(217,119,6,0.25), 0 0 80px rgba(217,119,6,0.08)',
                }}
                priority
              />
            </div>
          </motion.div>

          {/* Role Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <p className="text-sm sm:text-base font-semibold mb-4 tracking-[0.2em] uppercase"
               style={{ color: '#D97706', letterSpacing: '0.18em' }}>
              DevOps Engineer · Cloud & Automation
            </p>
          </motion.div>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h1
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 font-display"
              style={{
                letterSpacing: '-0.02em',
                lineHeight: 1.05,
                color: '#F5F2EB',
              }}
            >
              Hafiz Muhammad{' '}
              <span className="gradient-text">Rizwan</span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
          >
            <p className="text-base sm:text-xl md:text-2xl mb-12 max-w-2xl mx-auto leading-relaxed"
               style={{ color: '#9E978F' }}>
              I make sure your app stays up while everyone else is asleep.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <a href="#contact" className="btn-amber-solid">
              Get In Touch
            </a>
            <a href="#projects" className="btn-amber">
              View Projects
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.75 }}
            className="flex justify-center space-x-6"
          >
            {[
              { icon: FaGithub,   href: 'https://github.com/Hafiz-Muhammad-Rizwan' },
              { icon: FaLinkedin, href: 'https://www.linkedin.com/in/hafiz-muhammad-rizwanrizwan-33328a374' },
              { icon: FaTwitter,  href: 'https://twitter.com/hafizrizwan' },
              { icon: FaEnvelope, href: 'mailto:hafizmuhammadrizwan359@gmail.com' },
            ].map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                className="text-3xl transition-all duration-300"
                style={{ color: '#706860' }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.color = '#E2A85C';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.color = '#706860';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                }}
              >
                <Icon />
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Scroll Indicator ── */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 rounded-full flex justify-center"
             style={{ border: '1px solid rgba(217,119,6,0.4)' }}>
          <div className="w-1 h-3 rounded-full mt-2 animate-bounce"
               style={{ background: 'linear-gradient(180deg, #D97706, #E2A85C)' }} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
