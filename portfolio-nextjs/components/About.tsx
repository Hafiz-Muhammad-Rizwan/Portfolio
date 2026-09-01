'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const stats = [
  { label: 'Years Experience', value: '1+' },
  { label: 'Projects Completed', value: '15+' },
  { label: 'Happy Clients', value: '2+' },
  { label: 'Awards Won', value: '2+' },
];

const About = () => {
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
          <h2 className="section-heading text-4xl md:text-5xl font-bold mb-3">
            About Me
          </h2>
          <div className="amber-underline mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div
              className="relative w-full h-96 rounded-xl overflow-hidden group"
              style={{
                background: '#181615',
                border: '1px solid rgba(255,255,255,0.07)',
                boxShadow: '0 16px 48px rgba(0,0,0,0.4)',
              }}
            >
              <Image
                src="/images/hafiz-rizwan-aws-cloud-engineer-profile.jpg"
                alt="Hafiz Muhammad Rizwan, DevOps Engineer specializing in AWS infrastructure"
                fill
                className="object-contain object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/50 via-transparent to-transparent" />
            </div>
            {/* Decorative amber glow corners */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full blur-3xl opacity-20"
                 style={{ background: '#D97706' }} />
            <div className="absolute -top-4 -left-4 w-20 h-20 rounded-full blur-3xl opacity-15"
                 style={{ background: '#E2A85C' }} />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-lg leading-relaxed mb-8" style={{ color: '#C7BFB5' }}>
              I&apos;m a Software Engineer at Sevteq. I don&apos;t just build features. I build the infrastructure
              that keeps them running. From slashing AWS costs by 40% using Terraform and ECS Fargate, to blocking
              bot attacks with WAF and JA3 fingerprinting, to shipping code through zero-downtime CI/CD pipelines.
              I own the full journey from commit to production. I&apos;ve worked on real estate marketplaces, banking
              apps, and AI integrations. But what I actually care about is what happens after the code is written —
              that it deploys cleanly, scales without drama, and stays secure under pressure. If you&apos;re building
              something that needs to run right, let&apos;s talk.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="rounded-xl p-5 text-center transition-all duration-300"
                  style={{
                    background: '#181615',
                    border: '1px solid rgba(255,255,255,0.07)',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = 'rgba(217,119,6,0.3)';
                    el.style.boxShadow = '0 0 20px -5px rgba(217,119,6,0.15)';
                    el.style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = 'rgba(255,255,255,0.07)';
                    el.style.boxShadow = 'none';
                    el.style.transform = 'translateY(0)';
                  }}
                >
                  <div className="text-3xl font-bold mb-1 gradient-text font-display">
                    {stat.value}
                  </div>
                  <div className="text-xs font-medium" style={{ color: '#9E978F' }}>
                    {stat.label}
                  </div>
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
