'use client';

import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const educationList = [
  {
    degree: 'BS (Software Engineering)',
    institution: 'NUCES FAST',
    location: 'Pakistan',
    startDate: '2023',
    endDate: '2027',
    description: "Pursuing a Bachelor's in Software Engineering with a focus on scalable full-stack development and AI integration.",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-heading text-4xl md:text-5xl font-bold mb-3">
            Education
          </h2>
          <div className="amber-underline mx-auto" />
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {educationList.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-xl p-6 transition-all duration-300"
              style={{
                background: '#181615',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = 'rgba(217,119,6,0.3)';
                el.style.boxShadow = '0 0 22px -6px rgba(217,119,6,0.15)';
                el.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = 'rgba(255,255,255,0.07)';
                el.style.boxShadow = 'none';
                el.style.transform = 'translateY(0)';
              }}
            >
              <div className="flex items-start mb-5">
                <div
                  className="p-3 rounded-xl mr-4 text-2xl flex-shrink-0"
                  style={{
                    background: 'rgba(217,119,6,0.1)',
                    border: '1px solid rgba(217,119,6,0.2)',
                    color: '#D97706',
                  }}
                >
                  <FaGraduationCap />
                </div>
                <div className="flex-1">
                  <h3
                    className="text-xl font-bold mb-1 font-display"
                    style={{ color: '#F5F2EB', letterSpacing: '-0.01em' }}
                  >
                    {edu.degree}
                  </h3>
                  <p className="font-semibold text-sm" style={{ color: '#D97706' }}>
                    {edu.institution}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mb-4 text-sm" style={{ color: '#9E978F' }}>
                {edu.location && (
                  <div className="flex items-center gap-1.5">
                    <FaMapMarkerAlt className="text-xs" style={{ color: '#706860' }} />
                    <span>{edu.location}</span>
                  </div>
                )}
                <div className="flex items-center gap-1.5">
                  <FaCalendarAlt className="text-xs" style={{ color: '#706860' }} />
                  <span>{edu.startDate} – {edu.endDate}</span>
                </div>
              </div>

              {edu.description && (
                <p className="text-sm leading-relaxed" style={{ color: '#9E978F' }}>
                  {edu.description}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
