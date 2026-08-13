'use client';

import { motion } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaDocker, FaAws, FaGitAlt, FaJava
} from 'react-icons/fa';
import { 
  SiMongodb, SiFirebase, SiFlutter, SiDart, SiSpring, SiTerraform
} from 'react-icons/si';

const cardStyle = {
  background: 'linear-gradient(180deg, rgba(248, 250, 252, 0.98) 0%, rgba(241, 245, 249, 0.96) 100%)',
  border: '1px solid rgba(148, 163, 184, 0.22)',
  boxShadow: '0 12px 30px rgba(15, 23, 42, 0.08)',
};

const skills = [
  { name: 'Git',        icon: FaGitAlt,   color: 'neon-pink'   },
  { name: 'AWS',        icon: FaAws,      color: 'neon-yellow' },
  { name: 'Java',       icon: FaJava,     color: 'neon-blue'   },
  { name: 'React',      icon: FaReact,    color: 'neon-blue'   },
  { name: 'Flutter',    icon: SiFlutter,  color: 'neon-blue'   },
  { name: 'Docker',     icon: FaDocker,   color: 'neon-blue'   },
  { name: 'Dart',       icon: SiDart,     color: 'neon-blue'   },
  { name: 'MongoDB',    icon: SiMongodb,  color: 'neon-green'  },
  { name: 'Firebase',   icon: SiFirebase, color: 'neon-yellow' },
  { name: 'Node.js',    icon: FaNodeJs,   color: 'neon-green'  },
  { name: 'Spring Boot',icon: SiSpring,   color: 'neon-green'  },
  { name: 'Terraform',  icon: SiTerraform,color: 'neon-purple' },
];

const colorClasses: Record<string, string> = {
  'neon-blue':   'text-neon-blue',
  'neon-purple': 'text-neon-purple',
  'neon-pink':   'text-neon-pink',
  'neon-green':  'text-neon-green',
  'neon-yellow': 'text-neon-yellow',
};

const Skills = () => {
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
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            const colorClass = colorClasses[skill.color] || colorClasses['neon-blue'];

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
                  <div className={`text-4xl sm:text-5xl mb-3 sm:mb-4 ${colorClass} group-hover:animate-glow`}>
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
