'use client';

import { useEffect, useState } from 'react';
import { collection, getDocs, doc, setDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import toast from 'react-hot-toast';
import { FaSave, FaUpload } from 'react-icons/fa';

export default function HeroAdmin() {
  const [uploading, setUploading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    name: '',
    description: '',
    github: '',
    linkedin: '',
    twitter: '',
    email: '',
  });

  useEffect(() => {
    fetchHeroData();
  }, []);

  const fetchHeroData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'hero'));
      if (!querySnapshot.empty) {
        const data = querySnapshot.docs[0].data();
        setFormData(data as any);
      }
    } catch (error) {
      console.error('Error fetching hero data:', error);
      toast.error('Failed to load hero data');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Use a fixed document ID for hero section
      await setDoc(doc(db, 'hero', 'main'), {
        ...formData,
        updatedAt: new Date().toISOString(),
      });

      toast.success('Hero section updated successfully');
    } catch (error) {
      console.error('Error saving hero data:', error);
      toast.error('Failed to save hero data');
    }
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold gradient-text mb-2">Hero Section</h1>
        <p className="text-gray-400">Update your landing page hero section</p>
      </div>

      <div className="glass rounded-xl p-8 border border-white/10 max-w-3xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-white font-medium mb-2">Title/Role *</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
              placeholder="Full Stack Developer"
              className="w-full px-4 py-3 bg-dark-300 border border-white/10 rounded-lg text-white focus:outline-none focus:border-neon-blue"
            />
          </div>

          <div>
            <label className="block text-white font-medium mb-2">Your Name *</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              placeholder="John Doe"
              className="w-full px-4 py-3 bg-dark-300 border border-white/10 rounded-lg text-white focus:outline-none focus:border-neon-blue"
            />
          </div>

          <div>
            <label className="block text-white font-medium mb-2">Description *</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              required
              rows={3}
              placeholder="I create stunning digital experiences..."
              className="w-full px-4 py-3 bg-dark-300 border border-white/10 rounded-lg text-white focus:outline-none focus:border-neon-blue resize-none"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-white font-medium mb-2">GitHub URL</label>
              <input
                type="url"
                value={formData.github}
                onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                placeholder="https://github.com/username"
                className="w-full px-4 py-3 bg-dark-300 border border-white/10 rounded-lg text-white focus:outline-none focus:border-neon-blue"
              />
            </div>

            <div>
              <label className="block text-white font-medium mb-2">LinkedIn URL</label>
              <input
                type="url"
                value={formData.linkedin}
                onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                placeholder="https://linkedin.com/in/username"
                className="w-full px-4 py-3 bg-dark-300 border border-white/10 rounded-lg text-white focus:outline-none focus:border-neon-blue"
              />
            </div>

            <div>
              <label className="block text-white font-medium mb-2">Twitter URL</label>
              <input
                type="url"
                value={formData.twitter}
                onChange={(e) => setFormData({ ...formData, twitter: e.target.value })}
                placeholder="https://twitter.com/username"
                className="w-full px-4 py-3 bg-dark-300 border border-white/10 rounded-lg text-white focus:outline-none focus:border-neon-blue"
              />
            </div>

            <div>
              <label className="block text-white font-medium mb-2">Email *</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                placeholder="contact@example.com"
                className="w-full px-4 py-3 bg-dark-300 border border-white/10 rounded-lg text-white focus:outline-none focus:border-neon-blue"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full btn-neon border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-white hover:shadow-neon-blue flex items-center justify-center"
          >
            <FaSave className="mr-2" />
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}
