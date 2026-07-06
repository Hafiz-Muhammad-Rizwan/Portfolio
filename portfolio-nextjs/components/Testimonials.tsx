'use client';

import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const cardStyle = {
    background: 'linear-gradient(180deg, rgba(248, 250, 252, 0.98) 0%, rgba(241, 245, 249, 0.96) 100%)',
    border: '1px solid rgba(148, 163, 184, 0.22)',
    boxShadow: '0 12px 30px rgba(15, 23, 42, 0.08)',
  };

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'testimonials'));
        const testimonialsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setTestimonials(testimonialsData);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      }
    };

    fetchTestimonials();
  }, []);

  const defaultTestimonials = [
    {
      name: 'John Doe',
      position: 'CEO at Tech Corp',
      image: '/testimonial1.jpg',
      rating: 5,
      text: 'Outstanding work! The project was delivered on time and exceeded all expectations. Highly professional and skilled developer.',
    },
    {
      name: 'Jane Smith',
      position: 'Product Manager at StartUp Inc',
      image: '/testimonial2.jpg',
      rating: 5,
      text: 'Exceptional quality and attention to detail. Communication was excellent throughout the project. Would definitely work together again!',
    },
    {
      name: 'Mike Johnson',
      position: 'CTO at Digital Solutions',
      image: '/testimonial3.jpg',
      rating: 5,
      text: 'A true professional with deep technical knowledge. The solution provided was scalable, efficient, and well-documented.',
    },
  ];

  const displayTestimonials = testimonials.length > 0 ? testimonials : defaultTestimonials;

  return (
    <section id="testimonials" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Client Testimonials
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 via-sky-500 to-cyan-400 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayTestimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_0_20px_rgba(6,182,212,0.12)]"
              style={cardStyle}
            >
              {/* Quote Icon */}
              <div className="text-cyan-500 text-3xl mb-4 opacity-70">
                <FaQuoteLeft />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating || 5)].map((_, i) => (
                  <FaStar key={i} className="text-amber-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-slate-600 mb-6 leading-relaxed">
                {testimonial.text}
              </p>

              {/* Client Info */}
              <div className="flex items-center">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-slate-100 mr-4 border border-slate-200">
                  {testimonial.image && (
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  )}
                </div>
                <div>
                  <h4 className="text-slate-900 font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-cyan-600">{testimonial.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
