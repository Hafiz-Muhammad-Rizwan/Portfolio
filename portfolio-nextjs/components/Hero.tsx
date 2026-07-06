'use client';

import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Hero = () => {
  const [heroData, setHeroData] = useState<any>(null);

  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'hero'));
        if (!querySnapshot.empty) {
          setHeroData({ id: querySnapshot.docs[0].id, ...querySnapshot.docs[0].data() });
        }
      } catch (error) {
        console.error('Error fetching hero data:', error);
      }
    };
    fetchHeroData();
  }, []);

  const defaultData = {
    title: 'Software Engineer',
    name: 'Hafiz Muhammad Rizwan',
    description: 'I create stunning digital experiences that help businesses grow',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
    email: 'contact@example.com',
  };

  const data = heroData || defaultData;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-white"
    >
      {/* ── Ambient glow orbs ──────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Cyan orb — top-centre */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-[0.12] blur-[100px]"
          style={{ background: 'radial-gradient(circle, #00d4ff 0%, transparent 70%)' }}
        />
        {/* Purple orb — top-right */}
        <div
          className="absolute -top-20 right-0 w-[400px] h-[400px] rounded-full opacity-[0.09] blur-[80px]"
          style={{ background: 'radial-gradient(circle, #a855f7 0%, transparent 70%)' }}
        />
        {/* Pink orb — bottom-left */}
        <div
          className="absolute bottom-0 -left-20 w-[350px] h-[350px] rounded-full opacity-[0.08] blur-[80px]"
          style={{ background: 'radial-gradient(circle, #f472b6 0%, transparent 70%)' }}
        />
      </div>

      {/* ── Content ─────────────────────────────────────────────── */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8 flex justify-center"
          >
            <div className="relative">
              {/* Glowing ring */}
              <div
                className="absolute -inset-1 rounded-full blur-sm opacity-70"
                style={{ background: 'linear-gradient(135deg, #00d4ff, #a855f7, #f472b6)' }}
              />
              <Image
                src="/images/Hafiz Muhammad Rizwan.png"
                alt="Hafiz Muhammad Rizwan - Software Engineer"
                width={200}
                height={200}
                className="relative rounded-full"
                style={{
                  border: '3px solid rgba(0,212,255,0.6)',
                  boxShadow: '0 0 32px rgba(0,212,255,0.3), 0 0 64px rgba(168,85,247,0.15)',
                }}
                priority
              />
            </div>
          </motion.div>

          {/* Role Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm sm:text-base md:text-lg font-semibold mb-4 tracking-widest uppercase text-neon-blue">
              {data.title}
            </p>
          </motion.div>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-gray-900"
              style={{ letterSpacing: '-0.02em', lineHeight: 1.08 }}
            >
              {data.name}
            </h1>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-base sm:text-xl md:text-2xl text-gray-500 mb-12 max-w-3xl mx-auto leading-relaxed">
              {data.description}
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <a
              href="#contact"
              className="btn-neon border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-white hover:shadow-neon-blue"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="btn-neon border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-white hover:shadow-neon-purple"
            >
              View Projects
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex justify-center space-x-6"
          >
            <a href={data.github}           target="_blank" rel="noopener noreferrer" className="text-3xl text-gray-400 hover:text-neon-blue  transition-all duration-300 hover:animate-glow"><FaGithub   /></a>
            <a href={data.linkedin}         target="_blank" rel="noopener noreferrer" className="text-3xl text-gray-400 hover:text-neon-blue  transition-all duration-300 hover:animate-glow"><FaLinkedin /></a>
            <a href={data.twitter}          target="_blank" rel="noopener noreferrer" className="text-3xl text-gray-400 hover:text-neon-purple transition-all duration-300 hover:animate-glow"><FaTwitter  /></a>
            <a href={`mailto:${data.email}`}                                          className="text-3xl text-gray-400 hover:text-neon-pink   transition-all duration-300 hover:animate-glow"><FaEnvelope /></a>
          </motion.div>
        </div>
      </div>

      {/* ── Scroll Indicator ────────────────────────────────────── */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-neon-blue rounded-full flex justify-center">
          <div className="w-1 h-3 bg-neon-blue rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
