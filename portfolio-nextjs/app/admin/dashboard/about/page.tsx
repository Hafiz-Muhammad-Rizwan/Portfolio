'use client';

import { useEffect, useState } from 'react';
import { collection, getDocs, doc, setDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import toast from 'react-hot-toast';
import { FaSave, FaUpload } from 'react-icons/fa';

export default function AboutAdmin() {
  const [uploading, setUploading] = useState(false);
  const [formData, setFormData] = useState({
    title: 'About Me',
    description: '',
    image: '',
    stats: [
      { label: 'Years Experience', value: '0+' },
      { label: 'Projects Completed', value: '0+' },
      { label: 'Happy Clients', value: '0+' },
      { label: 'Awards Won', value: '0+' },
    ],
  });

  useEffect(() => {
    fetchAboutData();
  }, []);

  const fetchAboutData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'about'));
      if (!querySnapshot.empty) {
        const data = querySnapshot.docs[0].data();
        setFormData(data as any);
      }
    } catch (error) {
      console.error('Error fetching about data:', error);
      toast.error('Failed to load about data');
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        setFormData(prev => ({ ...prev, image: data.url }));
        toast.success('Image uploaded successfully');
      } else {
        toast.error('Failed to upload image');
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      toast.error('Error uploading image');
    } finally {
      setUploading(false);
    }
  };

  const handleStatChange = (index: number, field: 'label' | 'value', value: string) => {
    const newStats = [...formData.stats];
    newStats[index][field] = value;
    setFormData({ ...formData, stats: newStats });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await setDoc(doc(db, 'about', 'main'), {
        ...formData,
        updatedAt: new Date().toISOString(),
      });

      toast.success('About section updated successfully');
    } catch (error) {
      console.error('Error saving about data:', error);
      toast.error('Failed to save about data');
    }
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold gradient-text mb-2">About Section</h1>
        <p className="text-gray-400">Update your about section and statistics</p>
      </div>

      <div className="glass rounded-xl p-8 border border-white/10 max-w-4xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-white font-medium mb-2">Section Title</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
              placeholder="About Me"
              className="w-full px-4 py-3 bg-dark-300 border border-white/10 rounded-lg text-white focus:outline-none focus:border-neon-blue"
            />
          </div>

          <div>
            <label className="block text-white font-medium mb-2">Description *</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              required
              rows={6}
              placeholder="Tell visitors about yourself, your experience, and what you do..."
              className="w-full px-4 py-3 bg-dark-300 border border-white/10 rounded-lg text-white focus:outline-none focus:border-neon-blue resize-none"
            />
          </div>

          <div>
            <label className="block text-white font-medium mb-2">Profile Image</label>
            <div className="flex gap-4">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                id="imageUpload"
              />
              <label
                htmlFor="imageUpload"
                className="flex-1 px-4 py-3 bg-dark-300 border border-white/10 rounded-lg text-white cursor-pointer hover:border-neon-blue transition-colors flex items-center justify-center"
              >
                <FaUpload className="mr-2" />
                {uploading ? 'Uploading...' : 'Upload Profile Image'}
              </label>
            </div>
            {formData.image && (
              <img
                src={formData.image}
                alt="Profile Preview"
                className="mt-4 w-48 h-48 object-cover rounded-xl border-2 border-neon-blue/30"
              />
            )}
          </div>

          <div>
            <label className="block text-white font-medium mb-4">Statistics</label>
            <div className="grid md:grid-cols-2 gap-4">
              {formData.stats.map((stat, index) => (
                <div key={index} className="glass rounded-lg p-4 border border-white/10">
                  <input
                    type="text"
                    value={stat.label}
                    onChange={(e) => handleStatChange(index, 'label', e.target.value)}
                    placeholder="Label (e.g., Years Experience)"
                    className="w-full px-3 py-2 bg-dark-300 border border-white/10 rounded-lg text-white text-sm mb-2 focus:outline-none focus:border-neon-blue"
                  />
                  <input
                    type="text"
                    value={stat.value}
                    onChange={(e) => handleStatChange(index, 'value', e.target.value)}
                    placeholder="Value (e.g., 5+)"
                    className="w-full px-3 py-2 bg-dark-300 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-neon-blue"
                  />
                </div>
              ))}
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
