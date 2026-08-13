'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const cardStyle = {
  background: 'linear-gradient(180deg, rgba(248, 250, 252, 0.98) 0%, rgba(241, 245, 249, 0.96) 100%)',
  border: '1px solid rgba(148, 163, 184, 0.22)',
  boxShadow: '0 12px 30px rgba(15, 23, 42, 0.08)',
};

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
    position: 'Collegue',
    image: '/images/faheem.jpeg',
    rating: 5,
    text: 'I worked with Hafiz Muhammad in our university project group, where we built a mobile application using Flutter. He was a key technical asset to our team. Whenever we got stuck on complex logic or backend integration, Hafiz was the one to find the solution. He writes clean code and has a deep understanding of mobile development. I highly recommend him as a software engineer who knows how to deliver.',
  },
  {
    name: 'Zaid Hassan',
    position: 'Collegue',
    image: '/images/zaid.jpeg',
    rating: 5,
    text: 'Hafiz is a fantastic team player. We worked together on a major group project, and I could always count on him to meet deadlines and put in extra effort to make sure our application ran smoothly. He communicates well and is always ready to help other team members. Any engineering team would be lucky to have someone as dedicated and cooperative as him.',
  },
  {
    name: 'Abdullah Cheema',
    position: 'Software Engineer',
    image: '/images/abdullah.jpeg',
    rating: 5,
    text: 'Hafiz is an excellent developer with a real talent for mobile applications. During our time working together, I was impressed by his command of Flutter and his ability to turn complex requirements into smooth, functional user interfaces. He approaches problems with a logical mindset and brings creative solutions to the table. I highly recommend him for any mobile or software development role.',
  },
  {
    name: 'Umair Altaf',
    position: 'Collegue',
    image: '/images/umair.jpeg',
    rating: 5,
    text: 'Hafiz is a highly versatile developer. During our time working together, I saw him handle everything from mobile development with Flutter to backend structures in Java and Spring Boot with ease. He writes clean, manageable code and adapts quickly to new requirements. He is a fantastic asset to any engineering team, and I would gladly work with him again.',
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
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Client Testimonials
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 via-sky-500 to-cyan-400 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
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
                {[...Array(testimonial.rating)].map((_, i) => (
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
                  <Image
                    src={testimonial.image}
                    alt={`${testimonial.name} — ${testimonial.position}`}
                    fill
                    className="object-cover"
                  />
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
