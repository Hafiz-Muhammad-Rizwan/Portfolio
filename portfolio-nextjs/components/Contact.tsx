'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import toast from 'react-hot-toast';

const inputStyle = {
  base: {
    width: '100%',
    padding: '12px 16px',
    background: '#0F0E0E',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: '8px',
    color: '#F5F2EB',
    fontSize: '14px',
    outline: 'none',
    transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
  },
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
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
    },
    {
      icon: FaPhone,
      title: 'Phone',
      value: '+92 3229603359',
      link: 'tel:+923229603359',
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      value: 'Pakistan',
      link: null,
    },
  ];

  const socialLinks = [
    { icon: FaGithub,   href: 'https://github.com/Hafiz-Muhammad-Rizwan',                           label: 'GitHub'   },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/hafiz-muhammad-rizwanrizwan-33328a374',   label: 'LinkedIn' },
    { icon: FaTwitter,  href: 'https://twitter.com/hafizrizwan',                                    label: 'Twitter'  },
  ];

  const cardBase = {
    background: '#181615',
    border: '1px solid rgba(255,255,255,0.07)',
    borderRadius: '12px',
    padding: '20px',
    transition: 'border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease',
  };

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
          <h2 className="section-heading text-4xl md:text-5xl font-bold mb-3">
            Get In Touch
          </h2>
          <div className="amber-underline mx-auto" />
          <p className="mt-5 text-sm max-w-xl mx-auto" style={{ color: '#9E978F' }}>
            Have a project in mind or want to discuss opportunities? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 max-w-5xl mx-auto">

          {/* ── Contact Info sidebar ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {contactInfo.map((info, index) => (
              <div
                key={index}
                style={cardBase}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = 'rgba(217,119,6,0.25)';
                  el.style.boxShadow = '0 0 16px -4px rgba(217,119,6,0.12)';
                  el.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = 'rgba(255,255,255,0.07)';
                  el.style.boxShadow = 'none';
                  el.style.transform = 'translateY(0)';
                }}
              >
                <div className="text-xl mb-2" style={{ color: '#D97706' }}>
                  <info.icon />
                </div>
                <h3 className="text-sm font-semibold mb-1" style={{ color: '#F5F2EB' }}>
                  {info.title}
                </h3>
                {info.link ? (
                  <a
                    href={info.link}
                    className="text-xs transition-colors duration-200 break-all"
                    style={{ color: '#9E978F' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#E2A85C')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#9E978F')}
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-xs" style={{ color: '#9E978F' }}>{info.value}</p>
                )}
              </div>
            ))}

            {/* Social links */}
            <div
              style={cardBase}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(217,119,6,0.25)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)';
              }}
            >
              <h3 className="text-sm font-semibold mb-3" style={{ color: '#F5F2EB' }}>
                Follow Me
              </h3>
              <div className="flex gap-3">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300"
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.07)',
                      color: '#706860',
                    }}
                    onMouseEnter={e => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.color = '#E2A85C';
                      el.style.borderColor = 'rgba(217,119,6,0.3)';
                      el.style.background = 'rgba(217,119,6,0.08)';
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.color = '#706860';
                      el.style.borderColor = 'rgba(255,255,255,0.07)';
                      el.style.background = 'rgba(255,255,255,0.04)';
                    }}
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Contact form ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-xl p-6 space-y-5"
              style={{
                background: '#181615',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              <div className="grid sm:grid-cols-2 gap-5">
                {[
                  { id: 'name',  type: 'text',  label: 'Name',  placeholder: 'John Doe'          },
                  { id: 'email', type: 'email', label: 'Email', placeholder: 'john@example.com'  },
                ].map(({ id, type, label, placeholder }) => (
                  <div key={id}>
                    <label htmlFor={id} className="block text-sm font-medium mb-2" style={{ color: '#C7BFB5' }}>
                      {label}
                    </label>
                    <input
                      type={type}
                      id={id}
                      name={id}
                      value={(formData as Record<string, string>)[id]}
                      onChange={handleChange}
                      required
                      placeholder={placeholder}
                      className="w-full"
                      style={inputStyle.base}
                      onFocus={e => {
                        e.currentTarget.style.borderColor = 'rgba(217,119,6,0.5)';
                        e.currentTarget.style.boxShadow = '0 0 0 3px rgba(217,119,6,0.08)';
                      }}
                      onBlur={e => {
                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    />
                  </div>
                ))}
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2" style={{ color: '#C7BFB5' }}>
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project Discussion"
                  className="w-full"
                  style={inputStyle.base}
                  onFocus={e => {
                    e.currentTarget.style.borderColor = 'rgba(217,119,6,0.5)';
                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(217,119,6,0.08)';
                  }}
                  onBlur={e => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: '#C7BFB5' }}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Tell me about your project..."
                  className="w-full resize-none"
                  style={inputStyle.base}
                  onFocus={e => {
                    e.currentTarget.style.borderColor = 'rgba(217,119,6,0.5)';
                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(217,119,6,0.08)';
                  }}
                  onBlur={e => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full btn-amber-solid disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="w-4 h-4 border-2 border-espresso-950 border-t-transparent rounded-full animate-spin" />
                    Sending…
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
