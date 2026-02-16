'use client';

import { useEffect, useState } from 'react';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import toast from 'react-hot-toast';
import { FaPlus, FaEdit, FaTrash, FaUpload, FaExternalLinkAlt } from 'react-icons/fa';
import Image from 'next/image';

export default function CertificationsAdmin() {
  const [certifications, setCertifications] = useState<any[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [editingCert, setEditingCert] = useState<any>(null);
  const [uploading, setUploading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    issuer: '',
    platform: 'coursera',
    issueDate: '',
    expiryDate: '',
    credentialId: '',
    credentialUrl: '',
    imageUrl: '',
    description: '',
    order: 0,
  });

  const platformOptions = [
    'coursera', 'udemy', 'google', 'microsoft', 'aws', 
    'ibm', 'linkedin', 'meta', 'other'
  ];

  useEffect(() => {
    fetchCertifications();
  }, []);

  const fetchCertifications = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'certifications'));
      const certsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      certsData.sort((a, b) => (a.order || 0) - (b.order || 0));
      setCertifications(certsData);
    } catch (error) {
      console.error('Error fetching certifications:', error);
      toast.error('Failed to load certifications');
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

      if (!response.ok) throw new Error('Upload failed');

      const data = await response.json();
      setFormData(prev => ({ ...prev, imageUrl: data.url }));
      toast.success('Image uploaded successfully');
    } catch (error) {
      console.error('Error uploading image:', error);
      toast.error('Failed to upload image');
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (editingCert) {
        await updateDoc(doc(db, 'certifications', editingCert.id), formData);
        toast.success('Certification updated successfully');
      } else {
        await addDoc(collection(db, 'certifications'), formData);
        toast.success('Certification added successfully');
      }

      setShowModal(false);
      setEditingCert(null);
      resetForm();
      fetchCertifications();
    } catch (error) {
      console.error('Error saving certification:', error);
      toast.error('Failed to save certification');
    }
  };

  const handleEdit = (cert: any) => {
    setEditingCert(cert);
    setFormData({
      name: cert.name,
      issuer: cert.issuer,
      platform: cert.platform || 'coursera',
      issueDate: cert.issueDate,
      expiryDate: cert.expiryDate || '',
      credentialId: cert.credentialId || '',
      credentialUrl: cert.credentialUrl || '',
      imageUrl: cert.imageUrl || '',
      description: cert.description || '',
      order: cert.order || 0,
    });
    setShowModal(true);
  };

  const handleDelete = async (id: string, imageUrl: string) => {
    if (!confirm('Are you sure you want to delete this certification?')) return;

    try {
      // Delete image from storage if exists
      if (imageUrl) {
        await fetch('/api/upload', {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ url: imageUrl }),
        });
      }

      await deleteDoc(doc(db, 'certifications', id));
      toast.success('Certification deleted successfully');
      fetchCertifications();
    } catch (error) {
      console.error('Error deleting certification:', error);
      toast.error('Failed to delete certification');
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      issuer: '',
      platform: 'coursera',
      issueDate: '',
      expiryDate: '',
      credentialId: '',
      credentialUrl: '',
      imageUrl: '',
      description: '',
      order: 0,
    });
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold gradient-text mb-2">Manage Certifications</h1>
          <p className="text-gray-400">Add and manage your professional certifications</p>
        </div>
        <button
          onClick={() => {
            setEditingCert(null);
            resetForm();
            setShowModal(true);
          }}
          className="btn-neon border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-white flex items-center"
        >
          <FaPlus className="mr-2" />
          Add Certification
        </button>
      </div>

      {/* Certifications Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert) => (
          <div key={cert.id} className="glass rounded-xl overflow-hidden border border-white/10">
            {cert.imageUrl && (
              <div className="relative h-48 w-full">
                <Image
                  src={cert.imageUrl}
                  alt={cert.name}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">{cert.name}</h3>
              <p className="text-gray-400 text-sm mb-2">{cert.issuer}</p>
              <p className="text-gray-500 text-xs mb-4">
                Platform: {cert.platform} | Order: {cert.order}
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(cert)}
                  className="flex-1 px-3 py-2 bg-neon-blue/20 text-neon-blue rounded-lg hover:bg-neon-blue/30 transition-all duration-300 flex items-center justify-center"
                >
                  <FaEdit />
                </button>
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-3 py-2 bg-neon-purple/20 text-neon-purple rounded-lg hover:bg-neon-purple/30 transition-all duration-300 flex items-center justify-center"
                  >
                    <FaExternalLinkAlt />
                  </a>
                )}
                <button
                  onClick={() => handleDelete(cert.id, cert.imageUrl)}
                  className="flex-1 px-3 py-2 bg-neon-pink/20 text-neon-pink rounded-lg hover:bg-neon-pink/30 transition-all duration-300 flex items-center justify-center"
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
              {editingCert ? 'Edit Certification' : 'Add New Certification'}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white font-medium mb-2">Certificate Name *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-2 bg-dark-200 border border-white/10 rounded-lg text-white focus:outline-none focus:border-neon-blue"
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Issuer *</label>
                  <input
                    type="text"
                    value={formData.issuer}
                    onChange={(e) => setFormData({ ...formData, issuer: e.target.value })}
                    required
                    className="w-full px-4 py-2 bg-dark-200 border border-white/10 rounded-lg text-white focus:outline-none focus:border-neon-blue"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white font-medium mb-2">Platform *</label>
                  <select
                    value={formData.platform}
                    onChange={(e) => setFormData({ ...formData, platform: e.target.value })}
                    className="w-full px-4 py-2 bg-dark-200 border border-white/10 rounded-lg text-white focus:outline-none focus:border-neon-blue"
                  >
                    {platformOptions.map(platform => (
                      <option key={platform} value={platform}>
                        {platform.charAt(0).toUpperCase() + platform.slice(1)}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Order</label>
                  <input
                    type="number"
                    value={formData.order}
                    onChange={(e) => setFormData({ ...formData, order: parseInt(e.target.value) })}
                    className="w-full px-4 py-2 bg-dark-200 border border-white/10 rounded-lg text-white focus:outline-none focus:border-neon-blue"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white font-medium mb-2">Issue Date *</label>
                  <input
                    type="text"
                    placeholder="e.g., Jan 2024"
                    value={formData.issueDate}
                    onChange={(e) => setFormData({ ...formData, issueDate: e.target.value })}
                    required
                    className="w-full px-4 py-2 bg-dark-200 border border-white/10 rounded-lg text-white focus:outline-none focus:border-neon-blue"
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Expiry Date</label>
                  <input
                    type="text"
                    placeholder="e.g., Jan 2027 or leave empty"
                    value={formData.expiryDate}
                    onChange={(e) => setFormData({ ...formData, expiryDate: e.target.value })}
                    className="w-full px-4 py-2 bg-dark-200 border border-white/10 rounded-lg text-white focus:outline-none focus:border-neon-blue"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Credential ID</label>
                <input
                  type="text"
                  value={formData.credentialId}
                  onChange={(e) => setFormData({ ...formData, credentialId: e.target.value })}
                  className="w-full px-4 py-2 bg-dark-200 border border-white/10 rounded-lg text-white focus:outline-none focus:border-neon-blue"
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Credential URL</label>
                <input
                  type="url"
                  placeholder="https://..."
                  value={formData.credentialUrl}
                  onChange={(e) => setFormData({ ...formData, credentialUrl: e.target.value })}
                  className="w-full px-4 py-2 bg-dark-200 border border-white/10 rounded-lg text-white focus:outline-none focus:border-neon-blue"
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-2 bg-dark-200 border border-white/10 rounded-lg text-white focus:outline-none focus:border-neon-blue"
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Certificate Image</label>
                <div className="flex items-center gap-4">
                  <label className="flex-1 px-4 py-2 bg-neon-purple/20 text-neon-purple rounded-lg hover:bg-neon-purple/30 transition-all duration-300 cursor-pointer text-center">
                    <FaUpload className="inline mr-2" />
                    {uploading ? 'Uploading...' : 'Upload Image'}
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                      disabled={uploading}
                    />
                  </label>
                  {formData.imageUrl && (
                    <div className="relative w-20 h-20 rounded-lg overflow-hidden">
                      <Image
                        src={formData.imageUrl}
                        alt="Preview"
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  className="flex-1 btn-neon border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-white"
                >
                  {editingCert ? 'Update' : 'Add'} Certification
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowModal(false);
                    setEditingCert(null);
                    resetForm();
                  }}
                  className="flex-1 px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-all duration-300"
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
