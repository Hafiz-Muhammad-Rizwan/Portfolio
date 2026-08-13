'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const statCardStyle = {
  background: 'linear-gradient(180deg, rgba(248, 250, 252, 0.98) 0%, rgba(241, 245, 249, 0.96) 100%)',
  border: '1px solid rgba(148, 163, 184, 0.22)',
  boxShadow: '0 12px 30px rgba(15, 23, 42, 0.08)',
};

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
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 via-sky-500 to-cyan-400 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full h-96 rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 shadow-[0_16px_40px_rgba(15,23,42,0.08)] group">
              <Image
                src="/images/hafiz-rizwan-aws-cloud-engineer-profile.jpg"
                alt="Hafiz Muhammad Rizwan, DevOps Engineer specializing in AWS infrastructure"
                fill
                className="object-contain object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/25 via-transparent to-transparent opacity-60"></div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-cyan-400/15 rounded-full filter blur-3xl"></div>
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-sky-400/15 rounded-full filter blur-3xl"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              I&apos;m a Software Engineer at Sevteq. I don&apos;t just build features. I build the infrastructure
              that keeps them running. From slashing AWS costs by 40% using Terraform and ECS Fargate, to blocking
              bot attacks with WAF and JA3 fingerprinting, to shipping code through zero-downtime CI/CD pipelines.
              I own the full journey from commit to production. I&apos;ve worked on real estate marketplaces, banking
              apps, and AI integrations. But what I actually care about is what happens after the code is written —
              that it deploys cleanly, scales without drama, and stays secure under pressure. If you&apos;re building
              something that needs to run right, let&apos;s talk.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="rounded-xl p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_0_20px_rgba(6,182,212,0.12)]"
                  style={statCardStyle}
                >
                  <div className="text-3xl font-bold text-slate-900 mb-2">{stat.value}</div>
                  <div className="text-sm text-slate-500">{stat.label}</div>
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
