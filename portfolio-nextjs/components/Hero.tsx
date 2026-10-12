'use client';

import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Hero = () => {
  const socials = [
    { icon: FaGithub, href: 'https://github.com/Hafiz-Muhammad-Rizwan', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/hafiz-muhammad-rizwanrizwan-33328a374', label: 'LinkedIn' },
    { icon: FaTwitter, href: 'https://twitter.com/hafizrizwan', label: 'Twitter' },
    { icon: FaEnvelope, href: 'mailto:hafizmuhammadrizwan359@gmail.com', label: 'Email' },
  ];

  return (
    <section id="home" className="relative overflow-hidden border-b border-[#454843]/60 bg-[#131314] pt-28 pb-20 lg:pt-36 lg:pb-28">
      <div className="pointer-events-none absolute inset-0 opacity-50">
        <div className="absolute -left-32 top-16 h-96 w-96 rounded-full bg-[#e9c176]/[0.06] blur-[120px]" />
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-white/[0.035] blur-[100px]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 lg:grid-cols-12 lg:gap-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="flex flex-col gap-7 lg:col-span-7"
        >
          <div className="flex flex-wrap items-center gap-3 border-b border-[#454843]/60 pb-3 font-mono text-[11px] uppercase tracking-[0.16em] text-[#c5c7c1]">
            <span className="text-[#e9c176]">[FOLIO-2026.HR]</span>
            <span>Cloud Systems &amp; Digital Infrastructure</span>
            <span className="text-[#e9c176]">● SYSTEM OPERATIONAL</span>
          </div>

          <div>
            <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-[#e9c176]">
              DevOps Engineer · Cloud &amp; Automation
            </p>
            <h1 className="max-w-4xl font-display text-5xl font-normal leading-[0.96] tracking-[-0.035em] text-white sm:text-7xl lg:text-[5.25rem]">
              Architecture for <span className="italic text-[#e9c176]">reliable</span> digital systems.
            </h1>
          </div>

          <p className="max-w-2xl text-lg leading-8 text-[#c5c7c1]">
            I build secure cloud infrastructure that ships cleanly and scales without drama.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a href="#projects" className="btn-amber-solid rounded-lg !bg-white !text-[#131314]">
              Inspect Case Studies <span className="ml-2">↓</span>
            </a>
            <a href="#experience" className="btn-amber rounded-lg !border-[#454843] !text-[#e5e2e3]">
              Explore Timeline
            </a>
          </div>

          <div className="grid max-w-xl grid-cols-3 gap-4 border-t border-[#454843]/60 pt-6">
            {[
              ['2', 'Years Experience'],
              ['15', 'Projects Completed'],
              ['40', 'AWS Cost Reduction'],
            ].map(([value, label]) => (
              <div key={label}>
                <div className="font-display text-3xl text-white">
                  {value}<span className="text-[#e9c176]">{label === 'AWS Cost Reduction' ? '%' : '+'}</span>
                </div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-wider text-[#8f918c]">{label}</div>
              </div>
            ))}
          </div>

          <div className="flex gap-4 pt-2">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                aria-label={label}
                className="text-xl text-[#8f918c] transition-all duration-300 hover:-translate-y-1 hover:text-[#e9c176]"
              >
                <Icon />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.12 }}
          className="lg:col-span-5 lg:-mt-4"
        >
          <div className="group rounded-xl bg-[#1c1b1c] p-4 shadow-2xl">
            <div className="relative aspect-square overflow-hidden rounded-lg bg-[#353436]">
              <Image
                src="/images/hafiz-rizwan-aws-cloud-engineer-profile.jpg"
                alt="Hafiz Muhammad Rizwan, DevOps Engineer specializing in AWS infrastructure"
                fill
                priority
                className="object-cover grayscale contrast-125 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#131314] via-transparent to-transparent opacity-90" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-[10px] text-[#e5e2e3]">
                <span className="rounded bg-[#353436]/80 px-2 py-1 backdrop-blur">PORTRAIT // REF. HR-09</span>
                <span className="flex items-center gap-1.5 text-[#e9c176]"><span>●</span> ONLINE</span>
              </div>
            </div>
            <div className="mt-4 space-y-3">
              {[
                ['Current Focus', 'Founding DevOps Engineer @ Sevteq'],
                ['Discipline', 'AWS · Terraform · CI/CD'],
                ['Availability', 'Open to engineering conversations'],
              ].map(([label, value]) => (
                <div key={label} className="flex flex-wrap items-center justify-between gap-2 border-b border-[#454843]/50 pb-2 last:border-0">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#8f918c]">{label}</span>
                  <span className="text-right text-sm text-white">{value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4 rounded-lg bg-[#0e0e0f] p-4 font-mono text-xs leading-relaxed text-[#c5c7c1]">
            <span className="mr-2 text-[#e9c176]">&gt;</span>
            <span className="text-white">Core Axiom:</span> complexity is borrowed reliability with exponential interest.
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
