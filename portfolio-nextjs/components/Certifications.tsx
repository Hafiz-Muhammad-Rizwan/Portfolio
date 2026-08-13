'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  SiCoursera, SiUdemy
} from 'react-icons/si';
import { FaCertificate, FaExternalLinkAlt, FaAws } from 'react-icons/fa';
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
  background: 'linear-gradient(180deg, rgba(248, 250, 252, 0.98) 0%, rgba(241, 245, 249, 0.96) 100%)',
  border: '1px solid rgba(148, 163, 184, 0.22)',
  boxShadow: '0 12px 30px rgba(15, 23, 42, 0.08)',
};

const certifications: Certification[] = [
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
    name: 'AWS Cloud Practitioner Essential',
    issuer: 'AWS',
    platform: 'aws',
    issueDate: 'March 29',
    imageUrl: '/images/AWS Cloud Practitioner-Hafiz Muhammad Rizwan.png',
  },
  {
    id: '7',
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
    <section id="certifications" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 via-sky-500 to-cyan-400 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => {
            const PlatformIcon = platformIconMap[cert.platform] || FaCertificate;
            
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_0_20px_rgba(6,182,212,0.12)] group cursor-pointer"
                style={cardStyle}
                onClick={() => setSelectedCert(cert)}
              >
                {/* Certificate Image */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={cert.imageUrl}
                    alt={`${cert.name} certificate — ${cert.issuer}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent"></div>
                </div>

                <div className="p-6">
                  {/* Platform Icon */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-3xl text-cyan-500">
                      <PlatformIcon />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-slate-900">{cert.name}</h3>
                      <p className="text-sm text-slate-500">{cert.issuer}</p>
                    </div>
                  </div>

                  {/* Date */}
                  <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                    <span>Issued: {cert.issueDate}</span>
                  </div>

                  {/* Credential ID */}
                  {cert.credentialId && (
                    <div className="text-xs text-slate-400 mb-4">
                      ID: {cert.credentialId}
                    </div>
                  )}

                  {/* View Certificate Button */}
                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-cyan-500/10 text-cyan-700 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
                    >
                      View Certificate <FaExternalLinkAlt className="text-xs" />
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedCert && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedCert(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-xl max-w-4xl w-full overflow-hidden"
            style={cardStyle}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-96">
              <Image
                src={selectedCert.imageUrl}
                alt={`${selectedCert.name} certificate — ${selectedCert.issuer}`}
                fill
                className="object-contain"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{selectedCert.name}</h3>
              <p className="text-slate-500 mb-4">{selectedCert.issuer}</p>
              <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                <span>Issued: {selectedCert.issueDate}</span>
                {selectedCert.credentialId && <span>ID: {selectedCert.credentialId}</span>}
              </div>
              {selectedCert.credentialUrl && (
                <a
                  href={selectedCert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-cyan-500/10 text-cyan-700 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
                >
                  View Certificate <FaExternalLinkAlt />
                </a>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Certifications;
