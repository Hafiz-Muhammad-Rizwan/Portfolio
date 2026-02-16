'use client';

import { useEffect, useState } from 'react';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import toast from 'react-hot-toast';
import { FaPlus, FaEdit, FaTrash, FaBriefcase } from 'react-icons/fa';

interface Experience {
  id?: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
  achievements: string[];
}

export default function ExperienceAdmin() {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [editingExperience, setEditingExperience] = useState<Experience | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    location: '',
    startDate: '',
    endDate: '',
    current: false,
    description: '',
    achievements: [''],
  });

  useEffect(() => {
    fetchExperiences();
  }, []);

  const fetchExperiences = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'experience'));
      const experiencesData = querySnapshot.docs.map(doc => ({ id: doc.id, ...(doc.data() as Experience) }));
      setExperiences(experiencesData.sort((a, b) => b.startDate.localeCompare(a.startDate)));
    } catch (error) {
      console.error('Error fetching experiences:', error);
      toast.error('Failed to load experiences');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const experienceData = {
        ...formData,
        achievements: formData.achievements.filter(a => a.trim() !== ''),
        updatedAt: new Date().toISOString(),
      };

      if (editingExperience) {
        await updateDoc(doc(db, 'experience', editingExperience.id!), experienceData);
        toast.success('Experience updated successfully');
      } else {
        await addDoc(collection(db, 'experience'), {
          ...experienceData,
          createdAt: new Date().toISOString(),
        });
        toast.success('Experience added successfully');
      }

      setShowModal(false);
      setEditingExperience(null);
      resetForm();
      fetchExperiences();
    } catch (error) {
      console.error('Error saving experience:', error);
      toast.error('Failed to save experience');
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      company: '',
      location: '',
      startDate: '',
      endDate: '',
      current: false,
      description: '',
      achievements: [''],
    });
  };

  const handleEdit = (experience: any) => {
    setEditingExperience(experience);
    setFormData({
      title: experience.title,
      company: experience.company,
      location: experience.location || '',
      startDate: experience.startDate,
      endDate: experience.endDate || '',
      current: experience.current || false,
      description: experience.description,
      achievements: experience.achievements || [''],
    });
    setShowModal(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this experience?')) return;

    try {
      await deleteDoc(doc(db, 'experience', id));
      toast.success('Experience deleted successfully');
      fetchExperiences();
    } catch (error) {
      console.error('Error deleting experience:', error);
      toast.error('Failed to delete experience');
    }
  };

  const addAchievement = () => {
    setFormData({ ...formData, achievements: [...formData.achievements, ''] });
  };

  const removeAchievement = (index: number) => {
    const newAchievements = formData.achievements.filter((_, i) => i !== index);
    setFormData({ ...formData, achievements: newAchievements });
  };

  const updateAchievement = (index: number, value: string) => {
    const newAchievements = [...formData.achievements];
    newAchievements[index] = value;
    setFormData({ ...formData, achievements: newAchievements });
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold gradient-text mb-2">Manage Experience</h1>
          <p className="text-gray-400">Add and manage your work experience</p>
        </div>
        <button
          onClick={() => {
            setEditingExperience(null);
            resetForm();
            setShowModal(true);
          }}
          className="btn-neon border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-white flex items-center"
        >
          <FaPlus className="mr-2" />
          Add Experience
        </button>
      </div>

      {/* Experience List */}
      <div className="space-y-6">
        {experiences.map((exp) => (
          <div key={exp.id} className="glass rounded-xl p-6 border border-white/10">
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
                <div className="flex items-center text-neon-blue mb-2">
                  <FaBriefcase className="mr-2" />
                  <span>{exp.company}</span>
                  {exp.location && <span className="ml-2 text-gray-400">• {exp.location}</span>}
                </div>
                <p className="text-gray-400 text-sm mb-2">
                  {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                </p>
                <p className="text-gray-300 mb-3">{exp.description}</p>
                {exp.achievements && exp.achievements.length > 0 && (
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement: string, i: number) => (
                      <li key={i} className="text-sm text-gray-400">
                        <span className="text-neon-purple mr-2">▹</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="flex gap-2 ml-4">
                <button
                  onClick={() => handleEdit(exp)}
                  className="px-4 py-2 bg-neon-blue/20 text-neon-blue rounded-lg hover:bg-neon-blue/30 transition-all duration-300"
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() => handleDelete(exp.id!)}
                  className="px-4 py-2 bg-neon-pink/20 text-neon-pink rounded-lg hover:bg-neon-pink/30 transition-all duration-300"
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="glass rounded-xl p-8 max-w-2xl w-full border border-white/10 my-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              {editingExperience ? 'Edit Experience' : 'Add New Experience'}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-white font-medium mb-2">Job Title *</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  required
                  placeholder="Senior Full Stack Developer"
                  className="w-full px-4 py-3 bg-dark-300 border border-white/10 rounded-lg text-white focus:outline-none focus:border-neon-blue"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white font-medium mb-2">Company *</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    required
                    placeholder="Tech Company Inc."
                    className="w-full px-4 py-3 bg-dark-300 border border-white/10 rounded-lg text-white focus:outline-none focus:border-neon-blue"
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Location</label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="Remote / San Francisco, CA"
                    className="w-full px-4 py-3 bg-dark-300 border border-white/10 rounded-lg text-white focus:outline-none focus:border-neon-blue"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white font-medium mb-2">Start Date * (YYYY-MM)</label>
                  <input
                    type="text"
                    value={formData.startDate}
                    onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                    required
                    placeholder="2022-01"
                    className="w-full px-4 py-3 bg-dark-300 border border-white/10 rounded-lg text-white focus:outline-none focus:border-neon-blue"
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">End Date (YYYY-MM)</label>
                  <input
                    type="text"
                    value={formData.endDate}
                    onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                    placeholder="2024-01"
                    disabled={formData.current}
                    className="w-full px-4 py-3 bg-dark-300 border border-white/10 rounded-lg text-white focus:outline-none focus:border-neon-blue disabled:opacity-50"
                  />
                </div>
              </div>

              <div>
                <label className="flex items-center text-white cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.current}
                    onChange={(e) => setFormData({ ...formData, current: e.target.checked, endDate: '' })}
                    className="mr-2 w-5 h-5"
                  />
                  I currently work here
                </label>
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Description *</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  required
                  rows={3}
                  placeholder="Brief description of your role and responsibilities..."
                  className="w-full px-4 py-3 bg-dark-300 border border-white/10 rounded-lg text-white focus:outline-none focus:border-neon-blue resize-none"
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Key Achievements</label>
                {formData.achievements.map((achievement, index) => (
                  <div key={index} className="flex gap-2 mb-2">
                    <input
                      type="text"
                      value={achievement}
                      onChange={(e) => updateAchievement(index, e.target.value)}
                      placeholder="Describe an achievement or responsibility..."
                      className="flex-1 px-4 py-2 bg-dark-300 border border-white/10 rounded-lg text-white focus:outline-none focus:border-neon-blue"
                    />
                    {formData.achievements.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeAchievement(index)}
                        className="px-3 py-2 bg-neon-pink/20 text-neon-pink rounded-lg hover:bg-neon-pink/30"
                      >
                        <FaTrash />
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addAchievement}
                  className="text-neon-blue hover:text-neon-purple text-sm"
                >
                  + Add Achievement
                </button>
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  className="flex-1 btn-neon border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-white"
                >
                  {editingExperience ? 'Update Experience' : 'Add Experience'}
                </button>
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="flex-1 btn-neon border-neon-pink text-neon-pink hover:bg-neon-pink hover:text-white"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
