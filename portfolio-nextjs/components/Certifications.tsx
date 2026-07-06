'use client';

import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { motion } from 'framer-motion';
import { 
  SiCoursera, SiUdemy, SiGoogle, 
  SiAmazon, SiLinkedin
} from 'react-icons/si';
import { FaCertificate, FaExternalLinkAlt, FaMicrosoft, FaAws } from 'react-icons/fa';
import Image from 'next/image';

interface Certification {
  id: string;
  name: string;
  issuer: string;
  platform: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  imageUrl?: string;
  description?: string;
  order?: number;
}

const platformIconMap: any = {
  coursera: SiCoursera,
  udemy: SiUdemy,
  google: SiGoogle,
  microsoft: FaMicrosoft,
  aws: FaAws,
  ibm: FaCertificate,
  linkedin: SiLinkedin,
  meta: SiAmazon,
  other: FaCertificate,
};

const Certifications = () => {
  const [certifications, setCertifications] = useState<Certification[]>([]);
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const cardStyle = {
    background: 'linear-gradient(180deg, rgba(248, 250, 252, 0.98) 0%, rgba(241, 245, 249, 0.96) 100%)',
    border: '1px solid rgba(148, 163, 184, 0.22)',
    boxShadow: '0 12px 30px rgba(15, 23, 42, 0.08)',
  };

  useEffect(() => {
    const fetchCertifications = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'certifications'));
        const certsData = querySnapshot.docs.map(doc => ({ 
          id: doc.id, 
          ...doc.data() 
        } as Certification));
        // Sort by order field
        certsData.sort((a, b) => (a.order || 0) - (b.order || 0));
        setCertifications(certsData);
      } catch (error) {
        console.error('Error fetching certifications:', error);
      }
    };

    fetchCertifications();
  }, []);

  if (certifications.length === 0) return null;

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
                {cert.imageUrl && (
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={cert.imageUrl}
                      alt={cert.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent"></div>
                  </div>
                )}

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
                    {cert.expiryDate && <span>Expires: {cert.expiryDate}</span>}
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
            {selectedCert.imageUrl && (
              <div className="relative w-full h-96">
                <Image
                  src={selectedCert.imageUrl}
                  alt={selectedCert.name}
                  fill
                  className="object-contain"
                />
              </div>
            )}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{selectedCert.name}</h3>
              <p className="text-slate-500 mb-4">{selectedCert.issuer}</p>
              {selectedCert.description && (
                <p className="text-slate-600 mb-4">{selectedCert.description}</p>
              )}
              <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                <span>Issued: {selectedCert.issueDate}</span>
                {selectedCert.expiryDate && <span>Expires: {selectedCert.expiryDate}</span>}
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
