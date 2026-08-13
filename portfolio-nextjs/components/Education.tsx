'use client';

import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const cardStyle = {
  background: 'linear-gradient(180deg, rgba(248, 250, 252, 0.98) 0%, rgba(241, 245, 249, 0.96) 100%)',
  border: '1px solid rgba(148, 163, 184, 0.22)',
  boxShadow: '0 12px 30px rgba(15, 23, 42, 0.08)',
};

const educationList = [
  {
    degree: 'BS (Software Engineering)',
    institution: 'NUCES FAST',
    location: 'Pakistan',
    startDate: '2023',
    endDate: '2027',
    description: 'Pursuing a Bachelor\'s in Software Engineering with a focus on scalable full-stack development and AI integration.',
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
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 via-sky-500 to-cyan-400 mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {educationList.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_0_20px_rgba(6,182,212,0.12)]"
              style={cardStyle}
            >
              <div className="flex items-start mb-4">
                <div className="p-3 rounded-lg bg-cyan-100 text-cyan-700 text-2xl mr-4">
                  <FaGraduationCap />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{edu.degree}</h3>
                  <p className="text-cyan-600 font-semibold mb-1">{edu.institution}</p>
                </div>
              </div>

              <div className="space-y-2 mb-4">
                {edu.location && (
                  <div className="flex items-center text-slate-600">
                    <FaMapMarkerAlt className="mr-2 text-sky-600" />
                    <span>{edu.location}</span>
                  </div>
                )}
                <div className="flex items-center text-slate-600">
                  <FaCalendarAlt className="mr-2 text-cyan-600" />
                  <span>{edu.startDate} - {edu.endDate}</span>
                </div>
              </div>

              {edu.description && (
                <p className="text-slate-600 text-sm">{edu.description}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
