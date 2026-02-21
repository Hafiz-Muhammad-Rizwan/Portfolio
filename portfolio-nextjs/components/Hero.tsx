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
    title: 'Full Stack Developer | Flutter Developer | Spring Boot Developer',
    name: 'Hafiz Muhammad Rizwan',
    description: 'I create stunning digital experiences that help businesses grow',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
    email: 'contact@example.com',
  };

  const data = heroData || defaultData;

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-neon-blue/20 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-neon-purple/20 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-neon-pink/20 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

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
              <Image
                src="/images/Hafiz Muhammad Rizwan.png"
                alt="Hafiz Muhammad Rizwan - Software Engineer"
                width={200}
                height={200}
                className="rounded-full border-4 border-blue-500 shadow-[0_0_30px_rgba(59,130,246,0.6)] hover:shadow-[0_0_50px_rgba(59,130,246,0.8)] transition-all duration-300"
                priority
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-neon-blue text-lg md:text-xl font-semibold mb-4 tracking-wider">
              {data.title}
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white drop-shadow-[0_0_25px_rgba(59,130,246,0.5)] hover:drop-shadow-[0_0_35px_rgba(59,130,246,0.7)] transition-all duration-300">
              {data.name}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
              {data.description}
            </p>
          </motion.div>

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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex justify-center space-x-6"
          >
            <a
              href={data.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-white hover:text-neon-blue transition-all duration-300 hover:animate-glow"
            >
              <FaGithub />
            </a>
            <a
              href={data.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-white hover:text-neon-blue transition-all duration-300 hover:animate-glow"
            >
              <FaLinkedin />
            </a>
            <a
              href={data.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-white hover:text-neon-purple transition-all duration-300 hover:animate-glow"
            >
              <FaTwitter />
            </a>
            <a
              href={`mailto:${data.email}`}
              className="text-3xl text-white hover:text-neon-pink transition-all duration-300 hover:animate-glow"
            >
              <FaEnvelope />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-neon-blue rounded-full flex justify-center">
          <div className="w-1 h-3 bg-neon-blue rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
