'use client';

import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const experiences = [
  {
    title: 'Founding DevOps Engineer',
    company: 'Sevteq Solutions',
    location: 'Remote',
    startDate: 'Feb 2026',
    endDate: 'Present',
    current: true,
    description: 'Co-founded Sevteq and own all cloud infrastructure architecture decisions, deployment pipelines, security, and cost.',
    achievements: [
      'Cut AWS costs by 40% by replacing NAT Gateways with chained PrivateLink VPC endpoints across ECS Fargate private subnets',
      'Built GitLab CI/CD pipelines for zero-downtime rolling deployments with container security baked into the build, not added after',
      'Configured AWS WAF with JA3 TLS fingerprinting to block rotating bot traffic at the edge, and wired CloudWatch Container Insights through private endpoints for full observability',
    ],
  },
  {
    title: 'Teaching Assistant',
    company: 'NUCES FAST',
    location: 'Pakistan',
    startDate: 'Aug 2025',
    endDate: 'May 2026',
    current: false,
    description: 'Supported 100+ students across Operating Systems, Database Systems, Discrete Structures, and ICT over two semesters.',
    achievements: [
      'Ran OS lab sessions in C and Bash — CPU scheduling, process synchronisation, semaphores, mutexes, and deadlock debugging in multi-threaded programs',
      'Designed SQL labs covering query optimisation in MySQL, and introduced ICT students to frontend fundamentals from scratch',
    ],
  },
  {
    title: 'Flutter Developer Intern',
    company: 'IPS Technologies',
    location: 'Remote',
    startDate: 'Apr 2025',
    endDate: 'Aug 2025',
    current: false,
    description: 'Leading the development of cross-platform mobile solutions like Roomatch Pk and Real Couple.',
    achievements: [
      'Led and mentored a team of interns through the full agile development lifecycle',
      'Delivered a comprehensive accommodation marketplace (Roomatch Pk) for student housing',
      'Built a secure, real-time dating application (Real Couple) with user verification',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-heading text-4xl md:text-5xl font-bold mb-3">
            Work Experience
          </h2>
          <div className="amber-underline mx-auto" />
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-8 pb-10 last:pb-0"
            >
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div
                  className="absolute left-0 top-8 bottom-0 w-px"
                  style={{ background: 'linear-gradient(180deg, rgba(217,119,6,0.5), rgba(226,168,92,0.1))' }}
                />
              )}

              {/* Timeline dot */}
              <div className="absolute left-0 top-3 -translate-x-1/2">
                <div
                  className="w-3.5 h-3.5 rounded-full animate-pulse-amber"
                  style={{ background: 'linear-gradient(135deg, #D97706, #E2A85C)' }}
                />
              </div>

              {/* Card */}
              <div
                className="rounded-xl p-6 transition-all duration-300"
                style={{
                  background: '#181615',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = 'rgba(217,119,6,0.3)';
                  el.style.boxShadow = '0 0 22px -6px rgba(217,119,6,0.15)';
                  el.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = 'rgba(255,255,255,0.07)';
                  el.style.boxShadow = 'none';
                  el.style.transform = 'translateY(0)';
                }}
              >
                {/* Header row */}
                <div className="flex flex-wrap justify-between items-start gap-3 mb-4">
                  <div>
                    <h3 className="text-lg font-bold mb-1 font-display" style={{ color: '#F5F2EB', letterSpacing: '-0.01em' }}>
                      {exp.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-sm">
                      <span className="flex items-center gap-1.5" style={{ color: '#D97706' }}>
                        <FaBriefcase className="text-xs" />
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-1" style={{ color: '#706860' }}>
                        <FaMapMarkerAlt className="text-xs" />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                  {/* Date badge */}
                  <div
                    className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium flex-shrink-0"
                    style={{
                      color: exp.current ? '#D97706' : '#9E978F',
                      background: exp.current ? 'rgba(217,119,6,0.1)' : 'rgba(255,255,255,0.04)',
                      border: exp.current ? '1px solid rgba(217,119,6,0.3)' : '1px solid rgba(255,255,255,0.06)',
                    }}
                  >
                    <FaCalendarAlt className="text-[10px]" />
                    {exp.startDate} – {exp.current ? 'Present' : exp.endDate}
                    {exp.current && (
                      <span
                        className="ml-1 w-1.5 h-1.5 rounded-full inline-block"
                        style={{ background: '#D97706' }}
                      />
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm mb-4 leading-relaxed" style={{ color: '#9E978F' }}>
                  {exp.description}
                </p>

                {/* Achievements */}
                {exp.achievements && exp.achievements.length > 0 && (
                  <ul className="space-y-2">
                    {exp.achievements.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm" style={{ color: '#C7BFB5' }}>
                        <span className="mt-1 flex-shrink-0 w-1 h-1 rounded-full" style={{ background: '#D97706', marginTop: '7px' }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
