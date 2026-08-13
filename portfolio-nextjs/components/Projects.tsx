'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';

const cardStyle = {
  background: 'linear-gradient(180deg, rgba(248, 250, 252, 0.98) 0%, rgba(241, 245, 249, 0.96) 100%)',
  border: '1px solid rgba(148, 163, 184, 0.22)',
  boxShadow: '0 12px 30px rgba(15, 23, 42, 0.08)',
};

const projects = [
  {
    title: 'Smart Product Analyzer',
    description: 'Combats Analysis Paralysis by using a fine-tuned RoBERTa transformer model to instantly classify Amazon product reviews as positive or negative.',
    image: '/images/sentimental-analysis-Hafiz Muhammad Rizwan.png',
    imageAlt: 'Smart Product Analyzer — RoBERTa NLP sentiment analysis project by Hafiz Muhammad Rizwan',
    technologies: ['Python', 'NLP', 'NLTK'],
    github: 'https://github.com/Hafiz-Muhammad-Rizwan',
    live: null,
  },
  {
    title: 'Banking App System',
    description: 'A secure financial platform ensuring data integrity during concurrent transactions using strict row-level locking and a robust Spring Boot backend.',
    image: '/images/banking-app-Hafiz Muhammad Rizwan.jpg',
    imageAlt: 'Banking App System — Spring Boot and Flutter banking application by Hafiz Muhammad Rizwan',
    technologies: ['Flutter', 'Spring Boot', 'Provider', 'MySQL'],
    github: 'https://github.com/Hafiz-Muhammad-Rizwan',
    live: null,
  },
  {
    title: 'Professional Networking Platform',
    description: 'Deploys a full-stack platform on a secure AWS VPC with public/private subnets. It automates multi-tier deployment using a robust GitLab CI/CD pipeline.',
    image: '/images/cloud-hafiz-muhammad-rizwan.jpeg',
    imageAlt: 'AWS VPC professional networking platform with GitLab CI/CD pipeline by Hafiz Muhammad Rizwan',
    technologies: ['DevOps', 'AWS', 'GitLab', 'CI/CD'],
    github: 'https://github.com/Hafiz-Muhammad-Rizwan',
    live: null,
  },
  {
    title: 'Voter List Management System',
    description: 'SmartVote replaces slow paper voter lists with an app that lets polling officers verify citizens instantly via CNIC. Solves double voting by updating status in real-time right at the booth.',
    image: '/images/voter-list-management-Hafiz Muhammad Rizwan.jpg',
    imageAlt: 'SmartVote voter list management system by Hafiz Muhammad Rizwan',
    technologies: ['Flutter', 'Dart', 'Provider'],
    github: 'https://github.com/Hafiz-Muhammad-Rizwan',
    live: null,
  },
  {
    title: 'Roomatch Pk (Airbnb for Students)',
    description: 'A cross-platform accommodation marketplace connecting students with verified hosts, featuring real-time booking and a comprehensive admin dashboard.',
    image: '/images/roomatchpk-Hafiz Muhammad Rizwan.png',
    imageAlt: 'Roomatch Pk student accommodation marketplace app by Hafiz Muhammad Rizwan',
    technologies: ['Flutter', 'Dart', 'Provider', 'MongoDB', 'Next.js'],
    github: 'https://github.com/Hafiz-Muhammad-Rizwan',
    live: null,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 via-sky-500 to-cyan-400 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_0_20px_rgba(6,182,212,0.12)] group"
              style={cardStyle}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-slate-100">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent opacity-70"></div>
                
                {/* Overlay Icons */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-white/90 text-cyan-600 hover:bg-cyan-500 hover:text-white transition-all duration-300 border border-slate-200 shadow-sm"
                    >
                      <FaGithub size={24} />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-white/90 text-sky-600 hover:bg-sky-500 hover:text-white transition-all duration-300 border border-slate-200 shadow-sm"
                    >
                      <FaExternalLinkAlt size={24} />
                    </a>
                  )}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-cyan-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full bg-cyan-50 text-cyan-700 border border-cyan-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/Hafiz-Muhammad-Rizwan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center btn-neon border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-white"
          >
            <FaCode className="mr-2" />
            View All Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
