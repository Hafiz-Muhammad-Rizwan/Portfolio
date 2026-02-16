'use client';

import { useEffect, useState } from 'react';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Education = () => {
  const [education, setEducation] = useState<any[]>([]);

  useEffect(() => {
    const fetchEducation = async () => {
      try {
        const q = query(collection(db, 'education'), orderBy('startDate', 'desc'));
        const querySnapshot = await getDocs(q);
        const educationData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setEducation(educationData);
      } catch (error) {
        console.error('Error fetching education:', error);
      }
    };

    fetchEducation();
  }, []);

  const defaultEducation = [
    {
      degree: 'Master of Science in Computer Science',
      institution: 'University of Technology',
      location: 'San Francisco, CA',
      startDate: '2018',
      endDate: '2020',
      gpa: '3.9/4.0',
      description: 'Specialized in Machine Learning and Artificial Intelligence',
    },
    {
      degree: 'Bachelor of Science in Software Engineering',
      institution: 'State University',
      location: 'Boston, MA',
      startDate: '2014',
      endDate: '2018',
      gpa: '3.7/4.0',
      description: 'Focus on Web Development and Database Systems',
    },
  ];

  const displayEducation = education.length > 0 ? education : defaultEducation;

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
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {displayEducation.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-xl p-6 border border-white/10 hover:border-neon-purple/50 transition-all duration-300 card-hover"
            >
              <div className="flex items-start mb-4">
                <div className="p-3 rounded-lg bg-neon-purple/20 text-neon-purple text-2xl mr-4">
                  <FaGraduationCap />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                  <p className="text-neon-blue font-semibold mb-1">{edu.institution}</p>
                </div>
              </div>

              <div className="space-y-2 mb-4">
                {edu.location && (
                  <div className="flex items-center text-gray-400">
                    <FaMapMarkerAlt className="mr-2 text-neon-pink" />
                    <span>{edu.location}</span>
                  </div>
                )}
                <div className="flex items-center text-gray-400">
                  <FaCalendarAlt className="mr-2 text-neon-blue" />
                  <span>{edu.startDate} - {edu.endDate}</span>
                </div>
                {edu.gpa && (
                  <div className="text-gray-400">
                    <span className="text-neon-green">GPA:</span> {edu.gpa}
                  </div>
                )}
              </div>

              {edu.description && (
                <p className="text-gray-300 text-sm">{edu.description}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
