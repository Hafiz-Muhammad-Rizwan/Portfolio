'use client';

import { useEffect, useState } from 'react';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import toast from 'react-hot-toast';
import { FaPlus, FaEdit, FaTrash, FaUpload } from 'react-icons/fa';

export default function SkillsAdmin() {
  const [skills, setSkills] = useState<any[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [editingSkill, setEditingSkill] = useState<any>(null);
  const [formData, setFormData] = useState({
    name: '',
    icon: '',
    level: 0,
    color: 'neon-blue',
  });

  const iconOptions = [
  'react', 'nodejs', 'python', 'docker', 'aws', 'git',
  'html5', 'css3', 'javascript', 'database', 'nextjs',
  'typescript', 'mongodb', 'postgresql', 'firebase',
  'tailwindcss', 'express', 'graphql',
  'flutter', 'java', 'spring', 'dart'
];

  const colorOptions = ['neon-blue', 'neon-purple', 'neon-pink', 'neon-green', 'neon-yellow'];

  useEffect(() => {
    fetchSkills();
  }, []);

  const fetchSkills = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'skills'));
      const skillsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setSkills(skillsData);
    } catch (error) {
      console.error('Error fetching skills:', error);
      toast.error('Failed to load skills');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (editingSkill) {
        await updateDoc(doc(db, 'skills', editingSkill.id), formData);
        toast.success('Skill updated successfully');
      } else {
        await addDoc(collection(db, 'skills'), formData);
        toast.success('Skill added successfully');
      }

      setShowModal(false);
      setEditingSkill(null);
      setFormData({ name: '', icon: '', level: 0, color: 'neon-blue' });
      fetchSkills();
    } catch (error) {
      console.error('Error saving skill:', error);
      toast.error('Failed to save skill');
    }
  };

  const handleEdit = (skill: any) => {
    setEditingSkill(skill);
    setFormData({
      name: skill.name,
      icon: skill.icon,
      level: skill.level,
      color: skill.color || 'neon-blue',
    });
    setShowModal(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this skill?')) return;

    try {
      await deleteDoc(doc(db, 'skills', id));
      toast.success('Skill deleted successfully');
      fetchSkills();
    } catch (error) {
      console.error('Error deleting skill:', error);
      toast.error('Failed to delete skill');
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold gradient-text mb-2">Manage Skills</h1>
          <p className="text-gray-400">Add and manage your technical skills</p>
        </div>
        <button
          onClick={() => {
            setEditingSkill(null);
            setFormData({ name: '', icon: '', level: 0, color: 'neon-blue' });
            setShowModal(true);
          }}
          className="btn-neon border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-white flex items-center"
        >
          <FaPlus className="mr-2" />
          Add Skill
        </button>
      </div>

      {/* Skills Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <div key={skill.id} className="glass rounded-xl p-6 border border-white/10 text-center">
            <h3 className="text-xl font-bold text-white mb-2">{skill.name}</h3>
            <p className="text-gray-400 text-sm mb-4">Level: {skill.level}%</p>
            <div className="flex gap-2">
              <button
                onClick={() => handleEdit(skill)}
                className="flex-1 px-3 py-2 bg-neon-blue/20 text-neon-blue rounded-lg hover:bg-neon-blue/30 transition-all duration-300"
              >
                <FaEdit className="mx-auto" />
              </button>
              <button
                onClick={() => handleDelete(skill.id)}
                className="flex-1 px-3 py-2 bg-neon-pink/20 text-neon-pink rounded-lg hover:bg-neon-pink/30 transition-all duration-300"
              >
                <FaTrash className="mx-auto" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="glass rounded-xl p-8 max-w-md w-full border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-6">
              {editingSkill ? 'Edit Skill' : 'Add New Skill'}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-white font-medium mb-2">Name *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-dark-300 border border-white/10 rounded-lg text-white focus:outline-none focus:border-neon-blue"
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Icon *</label>
                <select
                  value={formData.icon}
                  onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-dark-300 border border-white/10 rounded-lg text-white focus:outline-none focus:border-neon-blue"
                >
                  <option value="">Select an icon</option>
                  {iconOptions.map(icon => (
                    <option key={icon} value={icon}>{icon}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Color</label>
                <select
                  value={formData.color}
                  onChange={(e) => setFormData({ ...formData, color: e.target.value })}
                  className="w-full px-4 py-3 bg-dark-300 border border-white/10 rounded-lg text-white focus:outline-none focus:border-neon-blue"
                >
                  {colorOptions.map(color => (
                    <option key={color} value={color}>{color}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Level (%) *</label>
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={formData.level}
                  onChange={(e) => setFormData({ ...formData, level: parseInt(e.target.value) })}
                  required
                  className="w-full px-4 py-3 bg-dark-300 border border-white/10 rounded-lg text-white focus:outline-none focus:border-neon-blue"
                />
                <div className="mt-2 w-full bg-dark-300 rounded-full h-2">
                  <div 
                    className="h-full rounded-full bg-neon-blue transition-all duration-300"
                    style={{ width: `${formData.level}%` }}
                  />
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  className="flex-1 btn-neon border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-white"
                >
                  {editingSkill ? 'Update' : 'Add'}
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
