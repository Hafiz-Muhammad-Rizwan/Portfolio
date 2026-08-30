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
}

const platformIconMap = {
  coursera: SiCoursera,
  udemy:    SiUdemy,
  aws:      FaAws,
  other:    FaCertificate,
};

const cardStyle = {
  background: 'linear-gradient(180deg, rgba(248,250,252,0.98) 0%, rgba(241,245,249,0.96) 100%)',
  border: '1px solid rgba(148,163,184,0.22)',
  boxShadow: '0 12px 30px rgba(15,23,42,0.08)',
};

const certifications: Certification[] = [
  {
    id: '7',
    name: 'AWS Certified AI Practitioner',
    issuer: 'Amazon Web Services',
    platform: 'aws',
    issueDate: '2025',
    imageUrl: '/images/AWS Certified AI Practitioner.jpeg',
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
  },
  {
    id: '3',
    name: 'AWS Hands on Introduction',
    issuer: 'Udemy',
    platform: 'udemy',
    issueDate: 'May 2026',
    imageUrl: '/images/AWS Hands On-Hafiz Muhammad Rizwan.jpg',
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
          className="text-center mb-10 sm:mb-14"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Certifications
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-teal-400 via-sky-500 to-cyan-400 mx-auto rounded-full" />
        </motion.div>

        {/* ── Grid — 1 col mobile, 2 col sm, 3 col lg ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {certifications.map((cert, index) => {
            const PlatformIcon = platformIconMap[cert.platform] || FaCertificate;

            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] group cursor-pointer flex flex-col"
                style={cardStyle}
                onClick={() => setSelectedCert(cert)}
              >
                {/* Certificate Image */}
                <div className="relative h-40 sm:h-44 w-full overflow-hidden flex-shrink-0">
                  <Image
                    src={cert.imageUrl}
                    alt={`${cert.name} certificate — ${cert.issuer}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-400"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/25 to-transparent" />
                </div>

                {/* Card body */}
                <div className="p-4 sm:p-5 flex flex-col flex-1">
                  {/* Icon + title */}
                  <div className="flex items-start gap-3 mb-3">
                    <div className="text-2xl sm:text-3xl text-cyan-500 flex-shrink-0 mt-0.5">
                      <PlatformIcon />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug line-clamp-2">
                        {cert.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 mt-0.5">{cert.issuer}</p>
                    </div>
                  </div>

                  {/* Date + credential */}
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400 mb-3">
                    <span className="flex items-center gap-1">
                      <FaCalendarAlt className="text-[10px]" />
                      {cert.issueDate}
                    </span>
                    {cert.credentialId && (
                      <span className="truncate">ID: {cert.credentialId}</span>
                    )}
                  </div>

                  {/* Spacer pushes button to bottom */}
                  <div className="flex-1" />

                  {/* Action button */}
                  {cert.credentialUrl ? (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={e => e.stopPropagation()}
                      className="flex items-center justify-center gap-2 w-full px-4 py-2 rounded-lg text-xs sm:text-sm font-medium bg-cyan-500/10 text-cyan-700 hover:bg-cyan-500 hover:text-white transition-all duration-300"
                    >
                      View Certificate <FaExternalLinkAlt className="text-[10px]" />
                    </a>
                  ) : (
                    <div className="flex items-center justify-center gap-2 w-full px-4 py-2 rounded-lg text-xs text-slate-400 bg-slate-100/60 select-none">
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
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-3 sm:p-6"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              key="modal"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ type: 'spring', stiffness: 300, damping: 26 }}
              className="rounded-xl w-full max-w-3xl overflow-y-auto overflow-x-hidden"
              style={{ ...cardStyle, maxHeight: '90vh' }}
              onClick={e => e.stopPropagation()}
            >
              {/* Close button */}
              <div className="flex justify-end p-3 sm:p-4">
                <button
                  onClick={() => setSelectedCert(null)}
                  className="w-8 h-8 flex items-center justify-center rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-all"
                  aria-label="Close"
                >
                  <FaTimes className="text-sm" />
                </button>
              </div>

              {/* Certificate image — fixed height so Next.js Image fill always works */}
              <div className="relative w-full" style={{ height: '240px' }}>
                <Image
                  src={selectedCert.imageUrl}
                  alt={`${selectedCert.name} certificate — ${selectedCert.issuer}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 768px"
                />
              </div>

              {/* Footer */}
              <div className="p-4 sm:p-6 flex-shrink-0">
                <h3 className="text-lg sm:text-2xl font-bold text-slate-900 mb-1 leading-snug">
                  {selectedCert.name}
                </h3>
                <p className="text-sm text-slate-500 mb-3">{selectedCert.issuer}</p>
                <div className="flex flex-wrap gap-3 text-xs sm:text-sm text-slate-400 mb-4">
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
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium bg-cyan-500/10 text-cyan-700 hover:bg-cyan-500 hover:text-white transition-all duration-300"
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
