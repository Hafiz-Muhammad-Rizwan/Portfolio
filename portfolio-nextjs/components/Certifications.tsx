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
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink mx-auto"></div>
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
                className="glass rounded-xl overflow-hidden border border-white/10 hover:border-neon-blue/50 transition-all duration-300 card-hover group cursor-pointer"
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
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-100 to-transparent"></div>
                  </div>
                )}

                <div className="p-6">
                  {/* Platform Icon */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-3xl text-neon-blue">
                      <PlatformIcon />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white">{cert.name}</h3>
                      <p className="text-sm text-gray-400">{cert.issuer}</p>
                    </div>
                  </div>

                  {/* Date */}
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <span>Issued: {cert.issueDate}</span>
                    {cert.expiryDate && <span>Expires: {cert.expiryDate}</span>}
                  </div>

                  {/* Credential ID */}
                  {cert.credentialId && (
                    <div className="text-xs text-gray-500 mb-4">
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
                      className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-neon-blue/20 text-neon-blue rounded-lg hover:bg-neon-blue hover:text-white transition-all duration-300"
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
            className="glass rounded-xl max-w-4xl w-full border border-white/10 overflow-hidden"
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
              <h3 className="text-2xl font-bold text-white mb-2">{selectedCert.name}</h3>
              <p className="text-gray-400 mb-4">{selectedCert.issuer}</p>
              {selectedCert.description && (
                <p className="text-gray-300 mb-4">{selectedCert.description}</p>
              )}
              <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                <span>Issued: {selectedCert.issueDate}</span>
                {selectedCert.expiryDate && <span>Expires: {selectedCert.expiryDate}</span>}
                {selectedCert.credentialId && <span>ID: {selectedCert.credentialId}</span>}
              </div>
              {selectedCert.credentialUrl && (
                <a
                  href={selectedCert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-neon-blue/20 text-neon-blue rounded-lg hover:bg-neon-blue hover:text-white transition-all duration-300"
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
