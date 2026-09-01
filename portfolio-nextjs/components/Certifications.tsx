'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SiCoursera, SiUdemy } from 'react-icons/si';
import { FaCertificate, FaExternalLinkAlt, FaAws, FaTimes, FaCalendarAlt } from 'react-icons/fa';
import Image from 'next/image';

interface Certification {
  id: string;
  name: string;
  issuer: string;
  platform: 'coursera' | 'udemy' | 'aws' | 'other';
  issueDate: string;
  credentialId?: string;
  credentialUrl?: string;
  imageUrl: string;
  accentColor: string;
}

const platformIconMap = {
  coursera: SiCoursera,
  udemy:    SiUdemy,
  aws:      FaAws,
  other:    FaCertificate,
};

const certifications: Certification[] = [
  {
    id: '7',
    name: 'AWS Certified AI Practitioner',
    issuer: 'Amazon Web Services',
    platform: 'aws',
    issueDate: '2025',
    imageUrl: '/images/AWS Certified AI Practitioner.jpeg',
    accentColor: '#D97706',
  },
  {
    id: '1',
    name: 'Flutter and Dart: Developing iOS, Android, and Mobile Apps',
    issuer: 'Coursera',
    platform: 'coursera',
    issueDate: 'Jan 2026',
    credentialId: 'G335TBGX2GKW',
    credentialUrl: 'https://coursera.org/verify/G335TBGX2GKW',
    imageUrl: '/images/Flutter IBM- Hafiz Muhammad Rizwan.jpeg',
    accentColor: '#E2A85C',
  },
  {
    id: '2',
    name: 'Python for Data Science, AI & Development',
    issuer: 'Coursera',
    platform: 'coursera',
    issueDate: 'Oct 2025',
    credentialId: 'L920C94VN3ZV',
    credentialUrl: 'https://coursera.org/verify/L920C94VN3ZV',
    imageUrl: '/images/AI For Everyone -Hafiz Muhammad Rizwan.jpeg',
    accentColor: '#F5C87A',
  },
  {
    id: '3',
    name: 'AWS Hands on Introduction',
    issuer: 'Udemy',
    platform: 'udemy',
    issueDate: 'May 2026',
    imageUrl: '/images/AWS Hands On-Hafiz Muhammad Rizwan.jpg',
    accentColor: '#D97706',
  },
  {
    id: '4',
    name: 'Java Spring Boot',
    issuer: 'Coursera',
    platform: 'coursera',
    issueDate: 'Dec 2025',
    credentialId: 'NS3IOWV0QZIB',
    credentialUrl: 'https://coursera.org/verify/NS3IOWV0QZIB',
    imageUrl: '/images/Spring Boot - Hafiz Muhammad Rizwan.jpeg',
    accentColor: '#E2A85C',
  },
  {
    id: '5',
    name: 'AI For Everyone',
    issuer: 'Coursera',
    platform: 'coursera',
    issueDate: 'Aug 2025',
    credentialId: 'CTIOH9F2A7D5',
    credentialUrl: 'https://coursera.org/verify/CTIOH9F2A7D5',
    imageUrl: '/images/AI For Everyone -Hafiz Muhammad Rizwan.jpeg',
    accentColor: '#F5C87A',
  },
  {
    id: '6',
    name: 'Java Script',
    issuer: 'Coursera',
    platform: 'coursera',
    issueDate: 'Jul 2025',
    credentialId: 'O6ADC3W0RHEF',
    credentialUrl: 'https://coursera.org/verify/O6ADC3W0RHEF',
    imageUrl: '/images/java Script- Hafiz Muhammad Rizwan.jpeg',
    accentColor: '#D97706',
  },
];

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <section id="certifications" className="py-16 sm:py-20 relative overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
            Certifications
          </h2>
          <div className="amber-underline mx-auto" />
        </motion.div>

        {/* ── Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {certifications.map((cert, index) => {
            const PlatformIcon = platformIconMap[cert.platform] || FaCertificate;

            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                viewport={{ once: true }}
                className="group rounded-xl overflow-hidden cursor-pointer flex flex-col transition-all duration-300"
                style={{
                  background: '#181615',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
                onClick={() => setSelectedCert(cert)}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = `${cert.accentColor}35`;
                  el.style.boxShadow = `0 0 24px -6px ${cert.accentColor}20`;
                  el.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = 'rgba(255,255,255,0.07)';
                  el.style.boxShadow = 'none';
                  el.style.transform = 'translateY(0)';
                }}
              >
                {/* Accent top bar */}
                <div
                  className="h-[2px] flex-shrink-0"
                  style={{ background: `linear-gradient(90deg, transparent, ${cert.accentColor}, transparent)` }}
                />

                {/* Certificate image */}
                <div className="relative h-40 w-full overflow-hidden flex-shrink-0" style={{ background: '#1F1C1A' }}>
                  <Image
                    src={cert.imageUrl}
                    alt={`${cert.name} certificate — ${cert.issuer}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/60 to-transparent" />
                </div>

                {/* Card body */}
                <div className="p-4 flex flex-col flex-1">
                  <div className="flex items-start gap-3 mb-3">
                    <div
                      className="text-xl flex-shrink-0 mt-0.5"
                      style={{ color: cert.accentColor }}
                    >
                      <PlatformIcon />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3
                        className="text-sm font-bold leading-snug line-clamp-2 mb-0.5"
                        style={{ color: '#F5F2EB' }}
                      >
                        {cert.name}
                      </h3>
                      <p className="text-xs" style={{ color: '#706860' }}>
                        {cert.issuer}
                      </p>
                    </div>
                  </div>

                  {/* Date + credential */}
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs mb-3" style={{ color: '#706860' }}>
                    <span className="flex items-center gap-1">
                      <FaCalendarAlt className="text-[10px]" />
                      {cert.issueDate}
                    </span>
                    {cert.credentialId && (
                      <span className="truncate">ID: {cert.credentialId}</span>
                    )}
                  </div>

                  <div className="flex-1" />

                  {/* Action */}
                  {cert.credentialUrl ? (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={e => e.stopPropagation()}
                      className="flex items-center justify-center gap-2 w-full px-4 py-2 rounded-lg text-xs font-medium transition-all duration-300"
                      style={{
                        color: cert.accentColor,
                        background: `${cert.accentColor}10`,
                        border: `1px solid ${cert.accentColor}25`,
                      }}
                      onMouseEnter={e => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.background = cert.accentColor;
                        el.style.color = '#0F0E0E';
                      }}
                      onMouseLeave={e => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.background = `${cert.accentColor}10`;
                        el.style.color = cert.accentColor;
                      }}
                    >
                      View Certificate <FaExternalLinkAlt className="text-[10px]" />
                    </a>
                  ) : (
                    <div
                      className="flex items-center justify-center gap-2 w-full px-4 py-2 rounded-lg text-xs"
                      style={{ color: '#706860', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
                    >
                      <FaCertificate className="text-[10px]" />
                      Official Certificate
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ── Modal ── */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
            style={{ background: 'rgba(10,9,9,0.92)', backdropFilter: 'blur(16px)' }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              key="modal"
              initial={{ opacity: 0, scale: 0.92, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 12 }}
              transition={{ type: 'spring', stiffness: 300, damping: 26 }}
              className="rounded-xl w-full max-w-2xl overflow-y-auto overflow-x-hidden"
              style={{
                background: '#181615',
                border: `1px solid ${selectedCert.accentColor}30`,
                boxShadow: `0 40px 100px rgba(0,0,0,0.6), 0 0 40px -10px ${selectedCert.accentColor}15`,
                maxHeight: '90vh',
              }}
              onClick={e => e.stopPropagation()}
            >
              {/* Accent bar */}
              <div
                className="h-[2px]"
                style={{ background: `linear-gradient(90deg, transparent, ${selectedCert.accentColor}, transparent)` }}
              />

              {/* Close */}
              <div className="flex justify-end p-3">
                <button
                  onClick={() => setSelectedCert(null)}
                  className="w-8 h-8 flex items-center justify-center rounded-full transition-all"
                  style={{ background: 'rgba(255,255,255,0.05)', color: '#9E978F' }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.1)';
                    (e.currentTarget as HTMLElement).style.color = '#F5F2EB';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)';
                    (e.currentTarget as HTMLElement).style.color = '#9E978F';
                  }}
                  aria-label="Close"
                >
                  <FaTimes className="text-sm" />
                </button>
              </div>

              {/* Image */}
              <div className="relative w-full" style={{ height: '220px' }}>
                <Image
                  src={selectedCert.imageUrl}
                  alt={`${selectedCert.name} certificate — ${selectedCert.issuer}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 672px"
                />
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 font-display" style={{ color: '#F5F2EB', letterSpacing: '-0.01em' }}>
                  {selectedCert.name}
                </h3>
                <p className="text-sm mb-3" style={{ color: '#9E978F' }}>{selectedCert.issuer}</p>
                <div className="flex flex-wrap gap-3 text-xs mb-5" style={{ color: '#706860' }}>
                  <span className="flex items-center gap-1">
                    <FaCalendarAlt className="text-[10px]" /> {selectedCert.issueDate}
                  </span>
                  {selectedCert.credentialId && <span>ID: {selectedCert.credentialId}</span>}
                </div>
                {selectedCert.credentialUrl && (
                  <a
                    href={selectedCert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300"
                    style={{
                      color: selectedCert.accentColor,
                      background: `${selectedCert.accentColor}12`,
                      border: `1px solid ${selectedCert.accentColor}30`,
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.background = selectedCert.accentColor;
                      (e.currentTarget as HTMLElement).style.color = '#0F0E0E';
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.background = `${selectedCert.accentColor}12`;
                      (e.currentTarget as HTMLElement).style.color = selectedCert.accentColor;
                    }}
                  >
                    View Certificate <FaExternalLinkAlt className="text-xs" />
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;
