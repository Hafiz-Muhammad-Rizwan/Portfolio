'use client';

import { useEffect, useState } from 'react';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import toast from 'react-hot-toast';
import { FaPlus, FaEdit, FaTrash, FaGraduationCap } from 'react-icons/fa';

export default function EducationAdmin() {
  const [education, setEducation] = useState<any[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [editingEducation, setEditingEducation] = useState<any>(null);
  const [formData, setFormData] = useState({
    degree: '',
    institution: '',
    location: '',
    startDate: '',
    endDate: '',
    gpa: '',
    description: '',
  });

  useEffect(() => {
    fetchEducation();
  }, []);

  const fetchEducation = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'education'));
      const educationData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setEducation(educationData.sort((a, b) => b.startDate.localeCompare(a.startDate)));
    } catch (error) {
      console.error('Error fetching education:', error);
      toast.error('Failed to load education');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const educationData = {
        ...formData,
        updatedAt: new Date().toISOString(),
      };

      if (editingEducation) {
        await updateDoc(doc(db, 'education', editingEducation.id), educationData);
        toast.success('Education updated successfully');
      } else {
        await addDoc(collection(db, 'education'), {
          ...educationData,
          createdAt: new Date().toISOString(),
        });
        toast.success('Education added successfully');
      }

      setShowModal(false);
      setEditingEducation(null);
      resetForm();
      fetchEducation();
    } catch (error) {
      console.error('Error saving education:', error);
      toast.error('Failed to save education');
    }
  };

  const resetForm = () => {
    setFormData({
      degree: '',
      institution: '',
      location: '',
      startDate: '',
      endDate: '',
      gpa: '',
      description: '',
    });
  };

  const handleEdit = (edu: any) => {
    setEditingEducation(edu);
    setFormData({
      degree: edu.degree,
      institution: edu.institution,
      location: edu.location || '',
      startDate: edu.startDate,
      endDate: edu.endDate,
      gpa: edu.gpa || '',
      description: edu.description || '',
    });
    setShowModal(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this education entry?')) return;

    try {
      await deleteDoc(doc(db, 'education', id));
      toast.success('Education deleted successfully');
      fetchEducation();
    } catch (error) {
      console.error('Error deleting education:', error);
      toast.error('Failed to delete education');
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold gradient-text mb-2">Manage Education</h1>
          <p className="text-gray-400">Add and manage your educational background</p>
        </div>
        <button
          onClick={() => {
            setEditingEducation(null);
            resetForm();
            setShowModal(true);
          }}
          className="btn-neon border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-white flex items-center"
        >
          <FaPlus className="mr-2" />
          Add Education
        </button>
      </div>

      {/* Education Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {education.map((edu) => (
          <div key={edu.id} className="glass rounded-xl p-6 border border-white/10">
            <div className="flex items-start mb-4">
              <div className="p-3 rounded-lg bg-neon-purple/20 text-neon-purple text-2xl mr-4">
                <FaGraduationCap />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-white mb-2">{edu.degree}</h3>
                <p className="text-neon-blue font-semibold mb-1">{edu.institution}</p>
                {edu.location && (
                  <p className="text-gray-400 text-sm mb-1">{edu.location}</p>
                )}
                <p className="text-gray-400 text-sm mb-2">
                  {edu.startDate} - {edu.endDate}
                </p>
                {edu.gpa && (
                  <p className="text-gray-400 text-sm mb-2">
                    <span className="text-neon-green">GPA:</span> {edu.gpa}
                  </p>
                )}
                {edu.description && (
                  <p className="text-gray-300 text-sm mt-3">{edu.description}</p>
                )}
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => handleEdit(edu)}
                className="flex-1 px-4 py-2 bg-neon-blue/20 text-neon-blue rounded-lg hover:bg-neon-blue/30 transition-all duration-300 flex items-center justify-center"
              >
                <FaEdit className="mr-2" />
                Edit
              </button>
              <button
                onClick={() => handleDelete(edu.id)}
                className="flex-1 px-4 py-2 bg-neon-pink/20 text-neon-pink rounded-lg hover:bg-neon-pink/30 transition-all duration-300 flex items-center justify-center"
              >
                <FaTrash className="mr-2" />
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="glass rounded-xl p-8 max-w-2xl w-full border border-white/10 max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl font-bold text-white mb-6">
              {editingEducation ? 'Edit Education' : 'Add New Education'}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-white font-medium mb-2">Degree / Qualification *</label>
                <input
                  type="text"
                  value={formData.degree}
                  onChange={(e) => setFormData({ ...formData, degree: e.target.value })}
                  required
                  placeholder="Bachelor of Science in Computer Science"
                  className="w-full px-4 py-3 bg-dark-300 border border-white/10 rounded-lg text-white focus:outline-none focus:border-neon-blue"
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Institution *</label>
                <input
                  type="text"
                  value={formData.institution}
                  onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                  required
                  placeholder="University of Technology"
                  className="w-full px-4 py-3 bg-dark-300 border border-white/10 rounded-lg text-white focus:outline-none focus:border-neon-blue"
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Location</label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  placeholder="San Francisco, CA"
                  className="w-full px-4 py-3 bg-dark-300 border border-white/10 rounded-lg text-white focus:outline-none focus:border-neon-blue"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white font-medium mb-2">Start Year *</label>
                  <input
                    type="text"
                    value={formData.startDate}
                    onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                    required
                    placeholder="2018"
                    className="w-full px-4 py-3 bg-dark-300 border border-white/10 rounded-lg text-white focus:outline-none focus:border-neon-blue"
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">End Year *</label>
                  <input
                    type="text"
                    value={formData.endDate}
                    onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                    required
                    placeholder="2022"
                    className="w-full px-4 py-3 bg-dark-300 border border-white/10 rounded-lg text-white focus:outline-none focus:border-neon-blue"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white font-medium mb-2">GPA / Grade</label>
                <input
                  type="text"
                  value={formData.gpa}
                  onChange={(e) => setFormData({ ...formData, gpa: e.target.value })}
                  placeholder="3.8/4.0 or First Class"
                  className="w-full px-4 py-3 bg-dark-300 border border-white/10 rounded-lg text-white focus:outline-none focus:border-neon-blue"
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={3}
                  placeholder="Additional details about specialization, honors, etc."
                  className="w-full px-4 py-3 bg-dark-300 border border-white/10 rounded-lg text-white focus:outline-none focus:border-neon-blue resize-none"
                />
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  className="flex-1 btn-neon border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-white"
                >
                  {editingEducation ? 'Update Education' : 'Add Education'}
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
