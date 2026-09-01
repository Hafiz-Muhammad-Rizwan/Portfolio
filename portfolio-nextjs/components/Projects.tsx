'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'Smart Product Analyzer',
    description: 'Combats Analysis Paralysis by using a fine-tuned RoBERTa transformer model to instantly classify Amazon product reviews as positive or negative.',
    image: '/images/sentimental-analysis-Hafiz Muhammad Rizwan.png',
    imageAlt: 'Smart Product Analyzer — RoBERTa NLP sentiment analysis project by Hafiz Muhammad Rizwan',
    technologies: ['Python', 'NLP', 'NLTK', 'RoBERTa'],
    github: 'https://github.com/Hafiz-Muhammad-Rizwan',
    live: null,
    accentColor: '#D97706',
  },
  {
    title: 'Banking App System',
    description: 'A secure financial platform ensuring data integrity during concurrent transactions using strict row-level locking and a robust Spring Boot backend.',
    image: '/images/banking-app-Hafiz Muhammad Rizwan.jpg',
    imageAlt: 'Banking App System — Spring Boot and Flutter banking application by Hafiz Muhammad Rizwan',
    technologies: ['Flutter', 'Spring Boot', 'Provider', 'MySQL'],
    github: 'https://github.com/Hafiz-Muhammad-Rizwan',
    live: null,
    accentColor: '#E2A85C',
  },
  {
    title: 'Professional Networking Platform',
    description: 'Deploys a full-stack platform on a secure AWS VPC with public/private subnets. Automates multi-tier deployment using a robust GitLab CI/CD pipeline.',
    image: '/images/cloud-hafiz-muhammad-rizwan.jpeg',
    imageAlt: 'AWS VPC professional networking platform with GitLab CI/CD pipeline by Hafiz Muhammad Rizwan',
    technologies: ['DevOps', 'AWS', 'GitLab', 'CI/CD'],
    github: 'https://github.com/Hafiz-Muhammad-Rizwan',
    live: null,
    accentColor: '#F5C87A',
  },
  {
    title: 'Voter List Management System',
    description: 'SmartVote replaces slow paper voter lists with an app that lets polling officers verify citizens instantly via CNIC. Solves double voting by updating status in real-time right at the booth.',
    image: '/images/voter-list-management-Hafiz Muhammad Rizwan.jpg',
    imageAlt: 'SmartVote voter list management system by Hafiz Muhammad Rizwan',
    technologies: ['Flutter', 'Dart', 'Provider'],
    github: 'https://github.com/Hafiz-Muhammad-Rizwan',
    live: null,
    accentColor: '#D97706',
  },
  {
    title: 'Roomatch Pk',
    description: 'A cross-platform accommodation marketplace connecting students with verified hosts, featuring real-time booking and a comprehensive admin dashboard.',
    image: '/images/roomatchpk-Hafiz Muhammad Rizwan.png',
    imageAlt: 'Roomatch Pk student accommodation marketplace app by Hafiz Muhammad Rizwan',
    technologies: ['Flutter', 'Dart', 'Provider', 'MongoDB', 'Next.js'],
    github: 'https://github.com/Hafiz-Muhammad-Rizwan',
    live: null,
    accentColor: '#E2A85C',
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
          <h2 className="section-heading text-4xl md:text-5xl font-bold mb-3">
            Featured Projects
          </h2>
          <div className="amber-underline mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group rounded-xl overflow-hidden flex flex-col"
              style={{
                background: '#181615',
                border: '1px solid rgba(255,255,255,0.07)',
                transition: 'border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = `${project.accentColor}35`;
                el.style.boxShadow = `0 0 28px -6px ${project.accentColor}20, 0 20px 40px rgba(0,0,0,0.3)`;
                el.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = 'rgba(255,255,255,0.07)';
                el.style.boxShadow = 'none';
                el.style.transform = 'translateY(0)';
              }}
            >
              {/* Accent top bar */}
              <div
                className="h-[2px] w-full flex-shrink-0"
                style={{ background: `linear-gradient(90deg, transparent, ${project.accentColor}, transparent)` }}
              />

              {/* Project Image */}
              <div className="relative h-44 overflow-hidden flex-shrink-0" style={{ background: '#1F1C1A' }}>
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/70 to-transparent" />

                {/* Hover action buttons */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-full transition-all duration-300"
                      style={{
                        background: 'rgba(15,14,14,0.9)',
                        border: `1px solid ${project.accentColor}50`,
                        color: project.accentColor,
                      }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLElement).style.background = project.accentColor;
                        (e.currentTarget as HTMLElement).style.color = '#0F0E0E';
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLElement).style.background = 'rgba(15,14,14,0.9)';
                        (e.currentTarget as HTMLElement).style.color = project.accentColor;
                      }}
                    >
                      <FaGithub size={18} />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-full transition-all duration-300"
                      style={{
                        background: 'rgba(15,14,14,0.9)',
                        border: `1px solid ${project.accentColor}50`,
                        color: project.accentColor,
                      }}
                    >
                      <FaExternalLinkAlt size={18} />
                    </a>
                  )}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-5 flex flex-col flex-1">
                <h3
                  className="text-base font-bold mb-2 transition-colors duration-300"
                  style={{ color: '#F5F2EB' }}
                >
                  {project.title}
                </h3>
                <p className="text-sm mb-4 leading-relaxed flex-1" style={{ color: '#9E978F' }}>
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-0.5 text-[11px] font-medium rounded-full"
                      style={{
                        color: project.accentColor,
                        background: `${project.accentColor}12`,
                        border: `1px solid ${project.accentColor}25`,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
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
            className="btn-amber inline-flex items-center gap-2"
          >
            <FaGithub />
            View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
