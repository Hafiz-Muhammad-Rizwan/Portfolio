'use client';

import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
  const [aboutData, setAboutData] = useState<any>(null);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'about'));
        if (!querySnapshot.empty) {
          setAboutData({ id: querySnapshot.docs[0].id, ...querySnapshot.docs[0].data() });
        }
      } catch (error) {
        console.error('Error fetching about data:', error);
      }
    };

    fetchAboutData();
  }, []);

  const defaultData = {
    title: 'About Me',
    description: 'I am a passionate full-stack developer with expertise in building modern web applications.',
    image: '/placeholder-profile.jpg',
    stats: [
      { label: 'Years Experience', value: '5+' },
      { label: 'Projects Completed', value: '50+' },
      { label: 'Happy Clients', value: '30+' },
      { label: 'Awards Won', value: '10+' },
    ],
  };

  const data = aboutData || defaultData;

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            {data.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full h-96 glass rounded-2xl overflow-hidden border-2 border-neon-blue/30 group">
              {data.image && (
                <Image
                  src={data.image}
                  alt="Profile"
                  fill
                  className="object-contain object-center group-hover:scale-105 transition-transform duration-500"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-100 via-transparent to-transparent opacity-60"></div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-neon-purple/20 rounded-full filter blur-3xl"></div>
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-neon-blue/20 rounded-full filter blur-3xl"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              {data.description}
            </p>

            <div className="grid grid-cols-2 gap-6">
              {data.stats.map((stat: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass rounded-xl p-6 text-center border border-neon-blue/20 hover:border-neon-blue/50 transition-all duration-300 card-hover"
                >
                  <div className="text-3xl font-bold text-neon-blue mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
