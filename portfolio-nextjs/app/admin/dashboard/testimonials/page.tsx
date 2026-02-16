'use client';

import { useEffect, useState } from 'react';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import toast from 'react-hot-toast';
import { FaPlus, FaEdit, FaTrash, FaUpload, FaStar } from 'react-icons/fa';

interface Testimonial {
  id?: string;
  name: string;
  position: string;
  company: string;
  image: string;
  rating: number;
  text: string;
}

export default function TestimonialsAdmin() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [editingTestimonial, setEditingTestimonial] = useState<Testimonial | null>(null);
  const [uploading, setUploading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    position: '',
    company: '',
    image: '',
    rating: 5,
    text: '',
  });

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'testimonials'));
      const testimonialsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...(doc.data() as Testimonial) }));
      setTestimonials(testimonialsData);
    } catch (error) {
      console.error('Error fetching testimonials:', error);
      toast.error('Failed to load testimonials');
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const formDataToUpload = new FormData();
    formDataToUpload.append('file', file);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formDataToUpload,
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
      const testimonialData = {
        ...formData,
        updatedAt: new Date().toISOString(),
      };

      if (editingTestimonial) {
        await updateDoc(doc(db, 'testimonials', editingTestimonial.id!), testimonialData);
        toast.success('Testimonial updated successfully');
      } else {
        await addDoc(collection(db, 'testimonials'), {
          ...testimonialData,
          createdAt: new Date().toISOString(),
        });
        toast.success('Testimonial added successfully');
      }

      setShowModal(false);
      setEditingTestimonial(null);
      resetForm();
      fetchTestimonials();
    } catch (error) {
      console.error('Error saving testimonial:', error);
      toast.error('Failed to save testimonial');
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      position: '',
      company: '',
      image: '',
      rating: 5,
      text: '',
    });
  };

  const handleEdit = (testimonial: any) => {
    setEditingTestimonial(testimonial);
    setFormData({
      name: testimonial.name,
      position: testimonial.position,
      company: testimonial.company || '',
      image: testimonial.image || '',
      rating: testimonial.rating || 5,
      text: testimonial.text,
    });
    setShowModal(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this testimonial?')) return;

    try {
      await deleteDoc(doc(db, 'testimonials', id));
      toast.success('Testimonial deleted successfully');
      fetchTestimonials();
    } catch (error) {
      console.error('Error deleting testimonial:', error);
      toast.error('Failed to delete testimonial');
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold gradient-text mb-2">Manage Testimonials</h1>
          <p className="text-gray-400">Add and manage client testimonials</p>
        </div>
        <button
          onClick={() => {
            setEditingTestimonial(null);
            resetForm();
            setShowModal(true);
          }}
          className="btn-neon border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-white flex items-center"
        >
          <FaPlus className="mr-2" />
          Add Testimonial
        </button>
      </div>

      {/* Testimonials Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="glass rounded-xl p-6 border border-white/10">
            <div className="flex items-start mb-4">
              {testimonial.image && (
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
              )}
              <div className="flex-1">
                <h3 className="text-lg font-bold text-white">{testimonial.name}</h3>
                <p className="text-sm text-neon-blue">{testimonial.position}</p>
                {testimonial.company && (
                  <p className="text-xs text-gray-400">{testimonial.company}</p>
                )}
              </div>
            </div>

            <div className="flex gap-1 mb-3">
              {[...Array(testimonial.rating || 5)].map((_, i) => (
                <FaStar key={i} className="text-neon-yellow text-sm" />
              ))}
            </div>

            <p className="text-gray-300 text-sm mb-4 line-clamp-3">{testimonial.text}</p>

            <div className="flex gap-2">
              <button
                onClick={() => handleEdit(testimonial)}
                className="flex-1 px-3 py-2 bg-neon-blue/20 text-neon-blue rounded-lg hover:bg-neon-blue/30 transition-all duration-300"
              >
                <FaEdit className="mx-auto" />
              </button>
              <button
                onClick={() => handleDelete(testimonial.id!)}
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
          <div className="glass rounded-xl p-8 max-w-2xl w-full border border-white/10 max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl font-bold text-white mb-6">
              {editingTestimonial ? 'Edit Testimonial' : 'Add New Testimonial'}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white font-medium mb-2">Client Name *</label>
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
                  <label className="block text-white font-medium mb-2">Position *</label>
                  <input
                    type="text"
                    value={formData.position}
                    onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                    required
                    placeholder="CEO"
                    className="w-full px-4 py-3 bg-dark-300 border border-white/10 rounded-lg text-white focus:outline-none focus:border-neon-blue"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Company</label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Tech Corp"
                  className="w-full px-4 py-3 bg-dark-300 border border-white/10 rounded-lg text-white focus:outline-none focus:border-neon-blue"
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Rating</label>
                <select
                  value={formData.rating}
                  onChange={(e) => setFormData({ ...formData, rating: parseInt(e.target.value) })}
                  className="w-full px-4 py-3 bg-dark-300 border border-white/10 rounded-lg text-white focus:outline-none focus:border-neon-blue"
                >
                  {[5, 4, 3, 2, 1].map((rating) => (
                    <option key={rating} value={rating}>
                      {rating} Star{rating !== 1 ? 's' : ''}
                    </option>
                  ))}
                </select>
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
                    {uploading ? 'Uploading...' : 'Upload Image'}
                  </label>
                </div>
                {formData.image && (
                  <img
                    src={formData.image}
                    alt="Preview"
                    className="mt-2 w-24 h-24 object-cover rounded-full border-2 border-neon-blue/30"
                  />
                )}
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Testimonial *</label>
                <textarea
                  value={formData.text}
                  onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                  required
                  rows={5}
                  placeholder="Write the client's testimonial here..."
                  className="w-full px-4 py-3 bg-dark-300 border border-white/10 rounded-lg text-white focus:outline-none focus:border-neon-blue resize-none"
                />
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  className="flex-1 btn-neon border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-white"
                >
                  {editingTestimonial ? 'Update Testimonial' : 'Add Testimonial'}
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
