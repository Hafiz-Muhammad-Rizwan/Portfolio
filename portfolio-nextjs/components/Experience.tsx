'use client';

import { useEffect, useState } from 'react';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';

const Experience = () => {
  const [experiences, setExperiences] = useState<any[]>([]);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const q = query(collection(db, 'experience'), orderBy('startDate', 'desc'));
        const querySnapshot = await getDocs(q);
        const experienceData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setExperiences(experienceData);
      } catch (error) {
        console.error('Error fetching experiences:', error);
      }
    };

    fetchExperiences();
  }, []);

  const defaultExperiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Company Inc.',
      location: 'Remote',
      startDate: '2022-01',
      endDate: 'Present',
      current: true,
      description: 'Leading development of enterprise-scale applications using React, Node.js, and AWS.',
      achievements: [
        'Improved application performance by 40%',
        'Led a team of 5 developers',
        'Implemented CI/CD pipelines',
      ],
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Solutions Ltd.',
      location: 'New York, NY',
      startDate: '2020-06',
      endDate: '2021-12',
      current: false,
      description: 'Developed and maintained multiple web applications for clients across various industries.',
      achievements: [
        'Built 15+ production applications',
        'Reduced load times by 50%',
        'Mentored junior developers',
      ],
    },
  ];

  const displayExperiences = experiences.length > 0 ? experiences : defaultExperiences;

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
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {displayExperiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Timeline Line */}
              {index !== displayExperiences.length - 1 && (
                <div className="absolute left-0 top-8 bottom-0 w-0.5 bg-gradient-to-b from-neon-blue to-neon-purple"></div>
              )}

              {/* Timeline Dot */}
              <div className="absolute left-0 top-2 w-4 h-4 -translate-x-1/2">
                <div className="w-full h-full rounded-full bg-neon-blue shadow-neon-blue"></div>
              </div>

              <div className="glass rounded-xl p-6 border border-white/10 hover:border-neon-blue/50 transition-all duration-300 card-hover">
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                    <div className="flex items-center text-neon-blue mb-2">
                      <FaBriefcase className="mr-2" />
                      <span>{exp.company}</span>
                      {exp.location && <span className="ml-2 text-gray-400">• {exp.location}</span>}
                    </div>
                  </div>
                  <div className="flex items-center text-gray-400 mt-2 md:mt-0">
                    <FaCalendarAlt className="mr-2" />
                    <span>
                      {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                    </span>
                  </div>
                </div>

                <p className="text-gray-300 mb-4">{exp.description}</p>

                {exp.achievements && exp.achievements.length > 0 && (
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement: string, i: number) => (
                      <li key={i} className="flex items-start text-gray-400">
                        <span className="text-neon-purple mr-2">▹</span>
                        {achievement}
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
