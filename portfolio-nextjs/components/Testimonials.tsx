'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Muhammad Usman Anwer',
    position: 'Software Engineer',
    image: '/images/usman.jpeg',
    rating: 5,
    text: 'I had the great experience of working alongside Hafiz Muhammad on our group project. He is a talented developer with strong skills in Flutter and software architecture. He is proactive, easy to work with, and consistently produces high-quality work. I strongly recommend him for any mobile development or software engineering role.',
  },
  {
    name: 'Muhammad Faheem Akhter',
    position: 'Colleague',
    image: '/images/faheem.jpeg',
    rating: 5,
    text: 'I worked with Hafiz Muhammad in our university project group, where we built a mobile application using Flutter. He was a key technical asset to our team. Whenever we got stuck on complex logic or backend integration, Hafiz was the one to find the solution. He writes clean code and has a deep understanding of mobile development.',
  },
  {
    name: 'Zaid Hassan',
    position: 'Colleague',
    image: '/images/zaid.jpeg',
    rating: 5,
    text: 'Hafiz is a fantastic team player. We worked together on a major group project, and I could always count on him to meet deadlines and put in extra effort to make sure our application ran smoothly. He communicates well and is always ready to help other team members. Any engineering team would be lucky to have him.',
  },
  {
    name: 'Abdullah Cheema',
    position: 'Software Engineer',
    image: '/images/abdullah.jpeg',
    rating: 5,
    text: 'Hafiz is an excellent developer with a real talent for mobile applications. During our time working together, I was impressed by his command of Flutter and his ability to turn complex requirements into smooth, functional user interfaces. He approaches problems with a logical mindset and brings creative solutions.',
  },
  {
    name: 'Umair Altaf',
    position: 'Colleague',
    image: '/images/umair.jpeg',
    rating: 5,
    text: 'Hafiz is a highly versatile developer. During our time working together, I saw him handle everything from mobile development with Flutter to backend structures in Java and Spring Boot with ease. He writes clean, manageable code and adapts quickly to new requirements. A fantastic asset to any engineering team.',
  },
];

const Testimonials = () => {
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
          <h2 className="section-heading text-4xl md:text-5xl font-bold mb-3">
            What People Say
          </h2>
          <div className="amber-underline mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="rounded-xl p-6 flex flex-col transition-all duration-300"
              style={{
                background: '#181615',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = 'rgba(217,119,6,0.25)';
                el.style.boxShadow = '0 0 22px -6px rgba(217,119,6,0.12)';
                el.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = 'rgba(255,255,255,0.07)';
                el.style.boxShadow = 'none';
                el.style.transform = 'translateY(0)';
              }}
            >
              {/* Quote Icon */}
              <div className="text-2xl mb-4 opacity-50" style={{ color: '#D97706' }}>
                <FaQuoteLeft />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} style={{ color: '#D97706', fontSize: '13px' }} />
                ))}
              </div>

              {/* Text */}
              <p className="text-sm leading-relaxed flex-1 mb-6" style={{ color: '#9E978F' }}>
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0"
                  style={{ border: '2px solid rgba(217,119,6,0.3)' }}
                >
                  <Image
                    src={testimonial.image}
                    alt={`${testimonial.name} — ${testimonial.position}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-semibold" style={{ color: '#F5F2EB' }}>
                    {testimonial.name}
                  </h4>
                  <p className="text-xs" style={{ color: '#D97706' }}>
                    {testimonial.position}
                  </p>
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
