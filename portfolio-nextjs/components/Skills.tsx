'use client';

import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { motion } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaPython, FaDocker, FaAws, FaGitAlt,
  FaHtml5, FaCss3Alt, FaJs, FaDatabase, FaJava
} from 'react-icons/fa';
import { 
  SiNextdotjs, SiTypescript, SiMongodb, SiPostgresql, 
  SiFirebase, SiTailwindcss, SiExpress, SiGraphql,
  SiFlutter, SiDart, SiSpring
} from 'react-icons/si';

const iconMap: any = {
  react: FaReact,
  nodejs: FaNodeJs,
  python: FaPython,
  docker: FaDocker,
  aws: FaAws,
  git: FaGitAlt,
  html5: FaHtml5,
  css3: FaCss3Alt,
  javascript: FaJs,
  database: FaDatabase,
  nextjs: SiNextdotjs,
  typescript: SiTypescript,
  mongodb: SiMongodb,
  postgresql: SiPostgresql,
  firebase: SiFirebase,
  tailwindcss: SiTailwindcss,
  express: SiExpress,
  graphql: SiGraphql,
  flutter: SiFlutter,
  dart: SiDart,
  java: FaJava,
  spring: SiSpring,
};

const Skills = () => {
  const [skills, setSkills] = useState<any[]>([]);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'skills'));
        const skillsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setSkills(skillsData);
      } catch (error) {
        console.error('Error fetching skills:', error);
      }
    };

    fetchSkills();
  }, []);

  const defaultSkills = [
    { name: 'React', icon: 'react', level: 95, color: 'neon-blue' },
    { name: 'Next.js', icon: 'nextjs', level: 90, color: 'neon-blue' },
    { name: 'TypeScript', icon: 'typescript', level: 88, color: 'neon-purple' },
    { name: 'Node.js', icon: 'nodejs', level: 92, color: 'neon-green' },
    { name: 'Python', icon: 'python', level: 85, color: 'neon-yellow' },
    { name: 'MongoDB', icon: 'mongodb', level: 87, color: 'neon-green' },
    { name: 'PostgreSQL', icon: 'postgresql', level: 83, color: 'neon-blue' },
    { name: 'Firebase', icon: 'firebase', level: 90, color: 'neon-pink' },
    { name: 'AWS', icon: 'aws', level: 80, color: 'neon-yellow' },
    { name: 'Docker', icon: 'docker', level: 85, color: 'neon-blue' },
    { name: 'Tailwind CSS', icon: 'tailwind', level: 95, color: 'neon-blue' },
    { name: 'GraphQL', icon: 'graphql', level: 82, color: 'neon-pink' },
  ];

  const displaySkills = skills.length > 0 ? skills : defaultSkills;

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {displaySkills.map((skill, index) => {
            const Icon = iconMap[skill.icon] || FaDatabase;
            
            // Color mapping for icon and progress bar
            const colorClasses = {
              'neon-blue': { text: 'text-neon-blue', gradient: 'from-neon-blue' },
              'neon-purple': { text: 'text-neon-purple', gradient: 'from-neon-purple' },
              'neon-pink': { text: 'text-neon-pink', gradient: 'from-neon-pink' },
              'neon-green': { text: 'text-neon-green', gradient: 'from-neon-green' },
              'neon-yellow': { text: 'text-neon-yellow', gradient: 'from-neon-yellow' },
            };
            
            const colorClass = colorClasses[skill.color as keyof typeof colorClasses] || colorClasses['neon-blue'];
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="glass rounded-xl p-6 border border-white/10 hover:border-neon-blue/50 transition-all duration-300 card-hover group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`text-5xl mb-4 ${colorClass.text} group-hover:animate-glow`}>
                    <Icon />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-white">{skill.name}</h3>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-gray-800 rounded-full h-2 mb-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className={`h-full rounded-full bg-gradient-to-r ${colorClass.gradient} to-neon-purple`}
                    />
                  </div>
                  <span className="text-sm text-gray-400">{skill.level}%</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
