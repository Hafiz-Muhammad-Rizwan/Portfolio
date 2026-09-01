'use client';

import { motion } from 'framer-motion';
import {
  FaReact, FaNodeJs, FaDocker, FaAws, FaGitAlt, FaJava,
  FaGithub
} from 'react-icons/fa';
import {
  SiMongodb, SiFirebase, SiFlutter, SiDart, SiSpring, SiTerraform,
  SiKubernetes, SiPostgresql, SiGitlab,
} from 'react-icons/si';

/* ── Domain groups ── */
const skillGroups = [
  {
    domain: 'Cloud & DevOps',
    color: '#D97706',
    skills: [
      { name: 'AWS', icon: FaAws, },
      { name: 'Docker', icon: FaDocker, },
      { name: 'Terraform', icon: SiTerraform, },
      { name: 'Github Actions', icon: FaGithub, },
      { name: 'GitLab CI', icon: SiGitlab, },
      { name: 'Git', icon: FaGitAlt, },
    ],
  },
  {
    domain: 'Backend & Mobile',
    color: '#E2A85C',
    skills: [
      { name: 'Java', icon: FaJava, },
      { name: 'Spring Boot', icon: SiSpring, },
      { name: 'Node.js', icon: FaNodeJs, },
      { name: 'Flutter', icon: SiFlutter, },
      { name: 'Dart', icon: SiDart, },
      { name: 'React', icon: FaReact, },
    ],
  },
  {
    domain: 'Databases',
    color: '#F5C87A',
    skills: [
      { name: 'MongoDB', icon: SiMongodb, },
      { name: 'PostgreSQL', icon: SiPostgresql, },
      { name: 'Firebase', icon: SiFirebase, },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-heading text-4xl md:text-5xl font-bold mb-3">
            Skills & Expertise
          </h2>
          <div className="amber-underline mx-auto" />
          <p className="mt-4 text-sm" style={{ color: '#9E978F' }}>
            Technologies I use to build, ship, and scale.
          </p>
        </motion.div>

        {/* ── Domain Groups ── */}
        <div className="flex flex-col gap-10 max-w-4xl mx-auto">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={gi}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Domain label */}
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px flex-1" style={{ background: `linear-gradient(90deg, ${group.color}40, transparent)` }} />
                <span
                  className="text-xs font-semibold tracking-[0.12em] uppercase px-3 py-1 rounded-full"
                  style={{
                    color: group.color,
                    background: `${group.color}14`,
                    border: `1px solid ${group.color}30`,
                  }}
                >
                  {group.domain}
                </span>
                <div className="h-px flex-1" style={{ background: `linear-gradient(270deg, ${group.color}40, transparent)` }} />
              </div>

              {/* Skills grid — 2-col compact list */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {group.skills.map((skill, si) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={si}
                      initial={{ opacity: 0, scale: 0.92 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.35, delay: gi * 0.08 + si * 0.04 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3 px-4 py-3 rounded-lg group cursor-default transition-all duration-300"
                      style={{
                        background: '#181615',
                        border: '1px solid rgba(255,255,255,0.06)',
                      }}
                      onMouseEnter={e => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.borderColor = `${group.color}40`;
                        el.style.boxShadow = `0 0 18px -4px ${group.color}22`;
                        el.style.background = '#1F1C1A';
                      }}
                      onMouseLeave={e => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.borderColor = 'rgba(255,255,255,0.06)';
                        el.style.boxShadow = 'none';
                        el.style.background = '#181615';
                      }}
                    >
                      <div
                        className="text-xl flex-shrink-0 transition-colors duration-300"
                        style={{ color: '#706860' }}
                        ref={(el) => {
                          if (el) {
                            el.closest('.group')?.addEventListener('mouseenter', () => {
                              el.style.color = group.color;
                            });
                            el.closest('.group')?.addEventListener('mouseleave', () => {
                              el.style.color = '#706860';
                            });
                          }
                        }}
                      >
                        <Icon />
                      </div>
                      <span className="text-sm font-medium" style={{ color: '#C7BFB5' }}>
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
