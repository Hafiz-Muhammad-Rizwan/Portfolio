'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FaAws, FaTimes, FaRobot, FaCloud, FaCheckCircle } from 'react-icons/fa';
import type { IconType } from 'react-icons';

interface Badge {
  id: string;
  name: string;
  category: string;
  issuer: string;
  imageUrl: string;
  color: string;
  icon: IconType;
  description: string;
}

const badges: Badge[] = [
  {
    id: '1',
    name: 'AWS AI Practitioner',
    category: 'Artificial Intelligence',
    issuer: 'Amazon Web Services',
    imageUrl: '/images/Hafiz-Muhammad-Rizwan-AI Practioner Badge.jpeg',
    color: 'from-violet-500 to-purple-600',
    icon: FaRobot,
    description: 'AWS AI/ML services, generative AI concepts, and responsible AI practices.',
  },
  {
    id: '2',
    name: 'AWS Cloud Practitioner Essentials',
    category: 'Cloud Fundamentals',
    issuer: 'Amazon Web Services',
    imageUrl: '/images/AWS Cloud Practitioner-Hafiz Muhammad Rizwan.png',
    color: 'from-orange-400 to-amber-500',
    icon: FaCloud,
    description: 'Foundational AWS cloud concepts, services, security, architecture, pricing, and support.',
  },
  {
    id: '3',
    name: 'Official Practice Exam: AWS Certified AI Practitioner',
    category: 'Practice Assessment',
    issuer: 'Amazon Web Services',
    imageUrl: '/images/AWS AI Practioner Exam 1-Hafiz Muhammad Rizwan.png',
    color: 'from-cyan-400 to-sky-500',
    icon: FaCheckCircle,
    description: 'Successfully completed official AWS AI Practitioner practice exam assessment 1.',
  },
  {
    id: '4',
    name: 'Official Pretest: AWS Certified AI Practitioner',
    category: 'Practice Assessment',
    issuer: 'Amazon Web Services',
    imageUrl: '/images/AWS AI Practioner Exam 2-Hafiz Muhammad Rizwan.png',
    color: 'from-emerald-400 to-teal-500',
    icon: FaCheckCircle,
    description: 'Successfully completed official AWS AI Practitioner practice exam assessment 2.',
  },
];

const Badges = () => {
  const [selectedBadge, setSelectedBadge] = useState<Badge | null>(null);

  return (
    <section id="badges" className="py-16 sm:py-24 relative overflow-x-hidden">

      {/* Ambient blobs — hidden on very small screens for perf */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -left-40 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full opacity-10 blur-3xl"
        style={{ background: 'radial-gradient(circle, #f97316 0%, transparent 70%)' }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -right-40 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full opacity-10 blur-3xl"
        style={{ background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)' }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14"
        >
          <div
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full mb-4 sm:mb-5 text-xs sm:text-sm font-medium"
            style={{
              background: 'rgba(251,146,60,0.10)',
              border: '1px solid rgba(251,146,60,0.25)',
              color: '#fb923c',
            }}
          >
            <FaAws className="text-sm sm:text-base" />
            Amazon Web Services
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            AWS Badges
          </h2>

          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 mx-auto mb-4 sm:mb-5 rounded-full" />

          <p className="text-sm sm:text-base text-slate-500 max-w-md mx-auto px-4">
            Verified digital badges earned through AWS skill-builder programs and official assessments.
          </p>
        </motion.div>

        {/* ── Badge grid ──
              Mobile  (< 640px): 2 columns
              Tablet  (640–1023px): 2 columns
              Desktop (≥ 1024px): 4 columns
        ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 max-w-6xl mx-auto">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={badge.id}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, scale: 1.02 }}
                onClick={() => setSelectedBadge(badge)}
                className="group cursor-pointer relative rounded-xl sm:rounded-2xl overflow-hidden flex flex-col"
                style={{
                  background: 'linear-gradient(160deg, rgba(255,255,255,0.97) 0%, rgba(248,250,252,0.95) 100%)',
                  border: '1px solid rgba(148,163,184,0.18)',
                  boxShadow: '0 6px 24px rgba(15,23,42,0.07)',
                  transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 16px 40px rgba(15,23,42,0.13), 0 0 0 1.5px rgba(251,146,60,0.25)';
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(251,146,60,0.35)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 24px rgba(15,23,42,0.07)';
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(148,163,184,0.18)';
                }}
              >
                {/* Gradient accent bar */}
                <div className={`h-1 w-full bg-gradient-to-r ${badge.color} flex-shrink-0`} />

                {/* Badge image */}
                <div className="flex items-center justify-center pt-5 sm:pt-7 pb-3 sm:pb-4 px-4 sm:px-6">
                  <div className="relative w-20 h-20 sm:w-28 sm:h-28 flex-shrink-0">
                    {/* Glow rings */}
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${badge.color} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`} />
                    <div className={`absolute inset-[-3px] sm:inset-[-4px] rounded-full bg-gradient-to-br ${badge.color} opacity-0 group-hover:opacity-25 blur-md transition-all duration-500`} />
                    <div className="relative w-full h-full rounded-full overflow-hidden border-[3px] sm:border-4 border-white shadow-md sm:shadow-lg">
                      <Image
                        src={badge.imageUrl}
                        alt={`${badge.name} digital badge — ${badge.issuer}`}
                        fill
                        sizes="(max-width: 1024px) 112px, 112px"
                        className="object-contain p-1 group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Text content */}
                <div className="px-3 sm:px-5 pb-4 sm:pb-5 text-center flex-1 flex flex-col">
                  {/* Category pill */}
                  <div className={`inline-flex items-center gap-1 sm:gap-1.5 self-center px-2 sm:px-3 py-0.5 rounded-full text-[10px] sm:text-xs font-semibold mb-2 sm:mb-3 bg-gradient-to-r ${badge.color} text-white shadow-sm`}>
                    <Icon className="text-[9px] sm:text-xs" />
                    <span className="hidden xs:inline sm:inline">{badge.category}</span>
                    <span className="sm:hidden">{badge.category.split(' ')[0]}</span>
                  </div>

                  <h3 className="text-xs sm:text-sm font-bold text-slate-800 mb-1 leading-snug line-clamp-2">
                    {badge.name}
                  </h3>
                  <p className="text-[10px] sm:text-xs text-slate-400 mb-2 sm:mb-3 hidden sm:block">
                    {badge.issuer}
                  </p>
                  <p className="text-[10px] sm:text-xs text-slate-500 leading-relaxed flex-1 hidden sm:block">
                    {badge.description}
                  </p>

                  {/* Click hint */}
                  <div className="mt-2 sm:mt-4 text-[10px] sm:text-xs text-slate-400 group-hover:text-orange-400 transition-colors duration-300 font-medium">
                    Tap to expand ↗
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ── Lightbox modal ── */}
      <AnimatePresence>
        {selectedBadge && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6"
            style={{ background: 'rgba(2,6,23,0.88)', backdropFilter: 'blur(10px)' }}
            onClick={() => setSelectedBadge(null)}
          >
            <motion.div
              key="modal"
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.88 }}
              transition={{ type: 'spring', stiffness: 300, damping: 28 }}
              className="relative w-full max-w-xs sm:max-w-sm rounded-2xl sm:rounded-3xl overflow-hidden"
              style={{
                background: 'linear-gradient(160deg, rgba(255,255,255,0.98) 0%, rgba(248,250,252,0.96) 100%)',
                border: '1px solid rgba(148,163,184,0.2)',
                boxShadow: '0 40px 100px rgba(0,0,0,0.4)',
              }}
              onClick={e => e.stopPropagation()}
            >
              {/* Gradient accent bar */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${selectedBadge.color}`} />

              {/* Close button */}
              <button
                onClick={() => setSelectedBadge(null)}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-all z-10"
                aria-label="Close badge detail"
              >
                <FaTimes className="text-sm" />
              </button>

              {/* Badge image — fixed height parent so fill always works */}
              <div className="flex justify-center pt-6 sm:pt-8 pb-4 px-6 sm:px-8">
                <div className="relative w-36 h-36 sm:w-44 sm:h-44">
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${selectedBadge.color} opacity-15 blur-2xl`} />
                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl">
                    <Image
                      src={selectedBadge.imageUrl}
                      alt={`${selectedBadge.name} badge enlarged view`}
                      fill
                      className="object-contain p-2"
                      sizes="(max-width: 480px) 144px, 176px"
                    />
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="px-5 sm:px-8 pb-6 sm:pb-8 text-center">
                <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-2 sm:mb-3 bg-gradient-to-r ${selectedBadge.color} text-white`}>
                  {selectedBadge.category}
                </div>
                <h3 className="text-lg sm:text-2xl font-bold text-slate-900 mb-1 leading-snug">
                  {selectedBadge.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mb-3 sm:mb-4">{selectedBadge.issuer}</p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{selectedBadge.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Badges;
