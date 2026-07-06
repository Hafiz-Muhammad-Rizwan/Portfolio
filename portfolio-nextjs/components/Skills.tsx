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
  const cardStyle = {
    background: 'linear-gradient(180deg, rgba(248, 250, 252, 0.98) 0%, rgba(241, 245, 249, 0.96) 100%)',
    border: '1px solid rgba(148, 163, 184, 0.22)',
    boxShadow: '0 12px 30px rgba(15, 23, 42, 0.08)',
  };

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

  const colorClasses = {
    'neon-blue':   { text: 'text-neon-blue' },
    'neon-purple': { text: 'text-neon-purple' },
    'neon-pink':   { text: 'text-neon-pink' },
    'neon-green':  { text: 'text-neon-green' },
    'neon-yellow': { text: 'text-neon-yellow' },
  };

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
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Skills &amp; Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 via-sky-500 to-cyan-400 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6">
          {displaySkills.map((skill, index) => {
            const Icon = iconMap[skill.icon] || FaDatabase;
            const colorClass = colorClasses[skill.color as keyof typeof colorClasses] || colorClasses['neon-blue'];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="rounded-xl p-4 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_0_20px_rgba(6,182,212,0.12)] group"
                style={cardStyle}
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`text-4xl sm:text-5xl mb-3 sm:mb-4 ${colorClass.text} group-hover:animate-glow`}>
                    <Icon />
                  </div>
                  <h3 className="text-sm sm:text-lg font-semibold text-slate-900">{skill.name}</h3>
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
