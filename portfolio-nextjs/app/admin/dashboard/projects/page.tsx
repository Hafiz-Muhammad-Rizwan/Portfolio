'use client';

import { useEffect, useState } from 'react';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import toast from 'react-hot-toast';
import { FaPlus, FaEdit, FaTrash, FaUpload } from 'react-icons/fa';

export default function ProjectsAdmin() {
  const [projects, setProjects] = useState<any[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [editingProject, setEditingProject] = useState<any>(null);
  const [uploading, setUploading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: '',
    technologies: '',
    github: '',
    live: '',
    featured: false,
    order: 0,
  });

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'projects'));
      const projectsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setProjects(projectsData);
    } catch (error) {
      console.error('Error fetching projects:', error);
      toast.error('Failed to load projects');
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const projectData = {
        ...formData,
        technologies: formData.technologies.split(',').map(t => t.trim()),
        updatedAt: new Date().toISOString(),
      };

      if (editingProject) {
        await updateDoc(doc(db, 'projects', editingProject.id), projectData);
        toast.success('Project updated successfully');
      } else {
        await addDoc(collection(db, 'projects'), {
          ...projectData,
          createdAt: new Date().toISOString(),
        });
        toast.success('Project added successfully');
      }

      setShowModal(false);
      setEditingProject(null);
      setFormData({
        title: '',
        description: '',
        image: '',
        technologies: '',
        github: '',
        live: '',
        featured: false,
        order: 0,
      });
      fetchProjects();
    } catch (error) {
      console.error('Error saving project:', error);
      toast.error('Failed to save project');
    }
  };

  const handleEdit = (project: any) => {
    setEditingProject(project);
    setFormData({
      title: project.title,
      description: project.description,
      image: project.image,
      technologies: project.technologies?.join(', ') || '',
      github: project.github || '',
      live: project.live || '',
      featured: project.featured || false,
      order: project.order || 0,
    });
    setShowModal(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this project?')) return;

    try {
      await deleteDoc(doc(db, 'projects', id));
      toast.success('Project deleted successfully');
      fetchProjects();
    } catch (error) {
      console.error('Error deleting project:', error);
      toast.error('Failed to delete project');
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold gradient-text mb-2">Manage Projects</h1>
          <p className="text-gray-400">Add and manage your portfolio projects</p>
        </div>
        <button
          onClick={() => {
            setEditingProject(null);
            setFormData({
              title: '',
              description: '',
              image: '',
              technologies: '',
              github: '',
              live: '',
              featured: false,
              order: 0,
            });
            setShowModal(true);
          }}
          className="btn-neon border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-white flex items-center"
        >
          <FaPlus className="mr-2" />
          Add Project
        </button>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="glass rounded-xl p-6 border border-white/10">
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
            )}
            <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
            <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>
            <div className="flex gap-2">
              <button
                onClick={() => handleEdit(project)}
                className="flex-1 px-4 py-2 bg-neon-blue/20 text-neon-blue rounded-lg hover:bg-neon-blue/30 transition-all duration-300 flex items-center justify-center"
              >
                <FaEdit className="mr-2" />
                Edit
              </button>
              <button
                onClick={() => handleDelete(project.id)}
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
              {editingProject ? 'Edit Project' : 'Add New Project'}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-white font-medium mb-2">Title *</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-dark-300 border border-white/10 rounded-lg text-white focus:outline-none focus:border-neon-blue"
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Description *</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-dark-300 border border-white/10 rounded-lg text-white focus:outline-none focus:border-neon-blue resize-none"
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Image</label>
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
                    {uploading ? 'Uploading...' : 'Upload Image'}
                  </label>
                </div>
                {formData.image && (
                  <img src={formData.image} alt="Preview" className="mt-2 w-full h-40 object-cover rounded-lg" />
                )}
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Technologies (comma separated)</label>
                <input
                  type="text"
                  value={formData.technologies}
                  onChange={(e) => setFormData({ ...formData, technologies: e.target.value })}
                  placeholder="React, Node.js, MongoDB"
                  className="w-full px-4 py-3 bg-dark-300 border border-white/10 rounded-lg text-white focus:outline-none focus:border-neon-blue"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white font-medium mb-2">GitHub URL</label>
                  <input
                    type="url"
                    value={formData.github}
                    onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                    className="w-full px-4 py-3 bg-dark-300 border border-white/10 rounded-lg text-white focus:outline-none focus:border-neon-blue"
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Live URL</label>
                  <input
                    type="url"
                    value={formData.live}
                    onChange={(e) => setFormData({ ...formData, live: e.target.value })}
                    className="w-full px-4 py-3 bg-dark-300 border border-white/10 rounded-lg text-white focus:outline-none focus:border-neon-blue"
                  />
                </div>
              </div>

              <div className="flex items-center gap-4">
                <label className="flex items-center text-white cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.featured}
                    onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                    className="mr-2 w-5 h-5"
                  />
                  Featured Project
                </label>

                <div className="flex-1">
                  <label className="block text-white font-medium mb-2">Order</label>
                  <input
                    type="number"
                    value={formData.order}
                    onChange={(e) => setFormData({ ...formData, order: parseInt(e.target.value) })}
                    className="w-full px-4 py-3 bg-dark-300 border border-white/10 rounded-lg text-white focus:outline-none focus:border-neon-blue"
                  />
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  className="flex-1 btn-neon border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-white"
                >
                  {editingProject ? 'Update Project' : 'Add Project'}
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
