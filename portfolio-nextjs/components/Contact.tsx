'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import toast from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        toast.error('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'hafizmuhammadrizwan359@gmail.com',
      link: 'mailto:hafizmuhammadrizwan359@gmail.com',
      color: 'neon-blue',
    },
    {
      icon: FaPhone,
      title: 'Phone',
      value: '+92 3229603359',
      link: 'tel:+923229603359',
      color: 'neon-purple',
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      value: 'Pakistan',
      link: null,
      color: 'neon-pink',
    },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="glass rounded-xl p-6 border border-white/10 hover:border-neon-blue/50 transition-all duration-300"
              >
                <div className={`text-${info.color} text-3xl mb-3`}>
                  <info.icon />
                </div>
                <h3 className="text-white font-semibold mb-2">{info.title}</h3>
                {info.link ? (
                  <a
                    href={info.link}
                    className={`text-${info.color} hover:underline`}
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-gray-400">{info.value}</p>
                )}
              </div>
            ))}

            {/* Social Links */}
            <div className="glass rounded-xl p-6 border border-white/10">
              <h3 className="text-white font-semibold mb-4">Follow Me</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Hafiz-Muhammad-Rizwan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-white/5 text-white hover:text-neon-blue hover:bg-neon-blue/20 transition-all duration-300"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/hafiz-muhammad-rizwanrizwan-33328a374"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-white/5 text-white hover:text-neon-blue hover:bg-neon-blue/20 transition-all duration-300"
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/hafiz-muhammad-rizwanrizwan-33328a374"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-white/5 text-white hover:text-neon-purple hover:bg-neon-purple/20 transition-all duration-300"
                >
                  <FaTwitter size={24} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <form onSubmit={handleSubmit} className="glass rounded-xl p-8 border border-white/10 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-300 border border-white/10 rounded-lg text-white focus:outline-none focus:border-neon-blue transition-colors duration-300"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-300 border border-white/10 rounded-lg text-white focus:outline-none focus:border-neon-blue transition-colors duration-300"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-white font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-300 border border-white/10 rounded-lg text-white focus:outline-none focus:border-neon-blue transition-colors duration-300"
                  placeholder="Project Discussion"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-dark-300 border border-white/10 rounded-lg text-white focus:outline-none focus:border-neon-blue transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full btn-neon border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-white hover:shadow-neon-blue disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
