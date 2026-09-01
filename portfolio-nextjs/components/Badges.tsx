'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FaAws, FaTimes, FaRobot, FaCloud, FaCheckCircle, FaShieldAlt } from 'react-icons/fa';
import type { IconType } from 'react-icons';

interface Badge {
  id: string;
  name: string;
  category: string;
  issuer: string;
  imageUrl: string;
  accentColor: string;
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
    accentColor: '#D97706',
    icon: FaRobot,
    description: 'AWS AI/ML services, generative AI concepts, and responsible AI practices.',
  },
  {
    id: '2',
    name: 'AWS Cloud Practitioner Essentials',
    category: 'Cloud Fundamentals',
    issuer: 'Amazon Web Services',
    imageUrl: '/images/AWS Cloud Practitioner-Hafiz Muhammad Rizwan.png',
    accentColor: '#E2A85C',
    icon: FaCloud,
    description: 'Foundational AWS cloud concepts, services, security, architecture, pricing, and support.',
  },
  {
    id: '3',
    name: 'Official Practice Exam: AWS Certified AI Practitioner',
    category: 'Practice Assessment',
    issuer: 'Amazon Web Services',
    imageUrl: '/images/AWS AI Practioner Exam 1-Hafiz Muhammad Rizwan.png',
    accentColor: '#F5C87A',
    icon: FaCheckCircle,
    description: 'Successfully completed official AWS AI Practitioner practice exam assessment 1.',
  },
  {
    id: '4',
    name: 'Official Pretest: AWS Certified AI Practitioner',
    category: 'Practice Assessment',
    issuer: 'Amazon Web Services',
    imageUrl: '/images/AWS AI Practioner Exam 2-Hafiz Muhammad Rizwan.png',
    accentColor: '#D97706',
    icon: FaShieldAlt,
    description: 'Successfully completed official AWS AI Practitioner practice exam assessment 2.',
  },
];

/* Duplicate badges for infinite loop */
const trackBadges = [...badges, ...badges, ...badges, ...badges];

const BadgeCarouselCard = ({
  badge,
  onClick,
}: {
  badge: Badge;
  onClick: () => void;
}) => {
  const Icon = badge.icon;
  return (
    <button
      onClick={onClick}
      className="flex-shrink-0 cursor-pointer group"
      style={{ width: '220px' }}
      aria-label={`View ${badge.name} badge`}
    >
      <div
        className="relative flex flex-col items-center px-5 py-6 rounded-xl transition-all duration-300"
        style={{
          background: '#181615',
          border: '1px solid rgba(255,255,255,0.07)',
          height: '220px',
        }}
        onMouseEnter={e => {
          const el = e.currentTarget as HTMLElement;
          el.style.borderColor = `${badge.accentColor}40`;
          el.style.boxShadow = `0 0 24px -6px ${badge.accentColor}30`;
          el.style.background = '#1F1C1A';
        }}
        onMouseLeave={e => {
          const el = e.currentTarget as HTMLElement;
          el.style.borderColor = 'rgba(255,255,255,0.07)';
          el.style.boxShadow = 'none';
          el.style.background = '#181615';
        }}
      >
        {/* Accent top bar */}
        <div
          className="absolute top-0 left-0 right-0 h-[2px] rounded-t-xl"
          style={{ background: `linear-gradient(90deg, transparent, ${badge.accentColor}, transparent)` }}
        />

        {/* Badge Image */}
        <div className="relative w-20 h-20 mb-4 flex-shrink-0">
          <div
            className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"
            style={{ background: badge.accentColor }}
          />
          <div
            className="relative w-full h-full rounded-full overflow-hidden"
            style={{ border: `2px solid ${badge.accentColor}40`, padding: '2px' }}
          >
            <Image
              src={badge.imageUrl}
              alt={`${badge.name} digital badge`}
              fill
              sizes="80px"
              className="object-contain rounded-full group-hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Category pill */}
        <div
          className="flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold mb-2"
          style={{
            color: badge.accentColor,
            background: `${badge.accentColor}15`,
            border: `1px solid ${badge.accentColor}30`,
          }}
        >
          <Icon className="text-[9px]" />
          <span className="truncate max-w-[100px]">{badge.category}</span>
        </div>

        {/* Badge name */}
        <h3
          className="text-xs font-bold text-center leading-snug line-clamp-2"
          style={{ color: '#F5F2EB' }}
        >
          {badge.name}
        </h3>

        {/* Issuer */}
        <p className="text-[10px] mt-1" style={{ color: '#706860' }}>
          {badge.issuer}
        </p>

        {/* Expand hint */}
        <p
          className="absolute bottom-3 text-[9px] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ color: badge.accentColor }}
        >
          Click to expand ↗
        </p>
      </div>
    </button>
  );
};

const Badges = () => {
  const [selectedBadge, setSelectedBadge] = useState<Badge | null>(null);

  return (
    <section id="badges" className="py-16 sm:py-24 relative overflow-hidden">

      {/* Ambient blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -left-40 w-[400px] h-[400px] rounded-full opacity-[0.06] blur-3xl"
        style={{ background: 'radial-gradient(circle, #D97706 0%, transparent 70%)' }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -right-40 w-[400px] h-[400px] rounded-full opacity-[0.05] blur-3xl"
        style={{ background: 'radial-gradient(circle, #E2A85C 0%, transparent 70%)' }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5 text-xs font-semibold"
            style={{
              background: 'rgba(217,119,6,0.08)',
              border: '1px solid rgba(217,119,6,0.2)',
              color: '#D97706',
            }}
          >
            <FaAws />
            Amazon Web Services
          </div>

          <h2 className="section-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
            AWS Badges
          </h2>
          <div className="amber-underline mx-auto" />
          <p className="mt-4 text-sm max-w-md mx-auto" style={{ color: '#9E978F' }}>
            Verified digital badges earned through AWS skill-builder programs and official assessments.
          </p>
        </motion.div>
      </div>

      {/* ── Continuous Carousel Row 1 → ── */}
      <div className="marquee-wrapper mb-4">
        <div className="marquee-track">
          {trackBadges.map((badge, i) => (
            <BadgeCarouselCard
              key={`row1-${badge.id}-${i}`}
              badge={badge}
              onClick={() => setSelectedBadge(badge)}
            />
          ))}
        </div>
      </div>

      {/* ── Continuous Carousel Row 2 ← (reversed) ── */}
      <div className="marquee-wrapper">
        <div className="marquee-track-reverse">
          {[...trackBadges].reverse().map((badge, i) => (
            <BadgeCarouselCard
              key={`row2-${badge.id}-${i}`}
              badge={badge}
              onClick={() => setSelectedBadge(badge)}
            />
          ))}
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
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
            style={{ background: 'rgba(10,9,9,0.92)', backdropFilter: 'blur(16px)' }}
            onClick={() => setSelectedBadge(null)}
          >
            <motion.div
              key="modal"
              initial={{ opacity: 0, scale: 0.88, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.88, y: 16 }}
              transition={{ type: 'spring', stiffness: 300, damping: 28 }}
              className="relative w-full max-w-sm rounded-2xl overflow-hidden"
              style={{
                background: '#181615',
                border: `1px solid ${selectedBadge.accentColor}30`,
                boxShadow: `0 40px 100px rgba(0,0,0,0.6), 0 0 40px -10px ${selectedBadge.accentColor}20`,
              }}
              onClick={e => e.stopPropagation()}
            >
              {/* Accent bar */}
              <div
                className="h-[2px] w-full"
                style={{ background: `linear-gradient(90deg, transparent, ${selectedBadge.accentColor}, transparent)` }}
              />

              {/* Close button */}
              <button
                onClick={() => setSelectedBadge(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-all z-10"
                style={{ background: 'rgba(255,255,255,0.05)', color: '#9E978F' }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.1)';
                  (e.currentTarget as HTMLElement).style.color = '#F5F2EB';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)';
                  (e.currentTarget as HTMLElement).style.color = '#9E978F';
                }}
                aria-label="Close badge detail"
              >
                <FaTimes className="text-sm" />
              </button>

              {/* Badge image */}
              <div className="flex justify-center pt-8 pb-4 px-8">
                <div className="relative w-40 h-40">
                  <div
                    className="absolute inset-0 rounded-full blur-2xl opacity-20"
                    style={{ background: selectedBadge.accentColor }}
                  />
                  <div
                    className="relative w-full h-full rounded-full overflow-hidden"
                    style={{
                      border: `3px solid ${selectedBadge.accentColor}50`,
                      boxShadow: `0 0 30px -6px ${selectedBadge.accentColor}40`,
                    }}
                  >
                    <Image
                      src={selectedBadge.imageUrl}
                      alt={`${selectedBadge.name} badge enlarged view`}
                      fill
                      className="object-contain p-2"
                      sizes="160px"
                    />
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="px-7 pb-8 text-center">
                <div
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-3"
                  style={{
                    color: selectedBadge.accentColor,
                    background: `${selectedBadge.accentColor}15`,
                    border: `1px solid ${selectedBadge.accentColor}30`,
                  }}
                >
                  {selectedBadge.category}
                </div>
                <h3
                  className="text-xl font-bold mb-1 leading-snug font-display"
                  style={{ color: '#F5F2EB' }}
                >
                  {selectedBadge.name}
                </h3>
                <p className="text-xs mb-4" style={{ color: '#9E978F' }}>
                  {selectedBadge.issuer}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: '#C7BFB5' }}>
                  {selectedBadge.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Badges;
