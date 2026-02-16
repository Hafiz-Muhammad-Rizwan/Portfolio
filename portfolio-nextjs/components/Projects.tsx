'use client';

import { useEffect, useState } from 'react';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';

const Projects = () => {
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const q = query(collection(db, 'projects'), orderBy('order', 'asc'));
        const querySnapshot = await getDocs(q);
        const projectsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setProjects(projectsData);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  const defaultProjects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with payment integration, admin dashboard, and real-time inventory management.',
      image: '/project1.jpg',
      technologies: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: true,
    },
    {
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for managing multiple social media accounts with automated posting and engagement tracking.',
      image: '/project2.jpg',
      technologies: ['React', 'TypeScript', 'Firebase', 'Chart.js'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: true,
    },
    {
      title: 'AI Chat Application',
      description: 'Real-time chat application with AI-powered responses and sentiment analysis.',
      image: '/project3.jpg',
      technologies: ['Next.js', 'OpenAI', 'Prisma', 'PostgreSQL'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false,
    },
  ];

  const displayProjects = projects.length > 0 ? projects : defaultProjects;

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
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-xl overflow-hidden border border-white/10 hover:border-neon-blue/50 transition-all duration-300 card-hover group"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-dark-300">
                {project.image && (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-100 to-transparent opacity-60"></div>
                
                {/* Overlay Icons */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-dark-100/80 text-neon-blue hover:bg-neon-blue hover:text-white transition-all duration-300"
                    >
                      <FaGithub size={24} />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-dark-100/80 text-neon-purple hover:bg-neon-purple hover:text-white transition-all duration-300"
                    >
                      <FaExternalLinkAlt size={24} />
                    </a>
                  )}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-blue transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                {project.technologies && (
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech: string, i: number) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs rounded-full bg-neon-blue/10 text-neon-blue border border-neon-blue/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
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
            href="https://github.com"
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
