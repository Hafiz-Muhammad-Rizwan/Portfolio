'use client';

import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { 
  FaUsers, FaProjectDiagram, FaBriefcase, FaGraduationCap, 
  FaCode, FaComments, FaEnvelope, FaEye, FaCertificate
} from 'react-icons/fa';

export default function Dashboard() {
  const [stats, setStats] = useState({
    projects: 0,
    skills: 0,
    experience: 0,
    education: 0,
    certifications: 0,
    testimonials: 0,
    messages: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const collections = ['projects', 'skills', 'experience', 'education', 'certifications', 'testimonials', 'messages'];
        const counts: any = {};

        for (const col of collections) {
          const snapshot = await getDocs(collection(db, col));
          counts[col] = snapshot.size;
        }

        setStats(counts);
      } catch (error) {
        console.error('Error fetching stats:', error);
      }
    };

    fetchStats();
  }, []);

  const statCards = [
    { label: 'Total Projects', value: stats.projects, icon: FaProjectDiagram, color: 'neon-blue' },
    { label: 'Skills', value: stats.skills, icon: FaCode, color: 'neon-purple' },
    { label: 'Experience', value: stats.experience, icon: FaBriefcase, color: 'neon-pink' },
    { label: 'Education', value: stats.education, icon: FaGraduationCap, color: 'neon-green' },
    { label: 'Certifications', value: stats.certifications, icon: FaCertificate, color: 'neon-yellow' },
    { label: 'Testimonials', value: stats.testimonials, icon: FaComments, color: 'neon-blue' },
    { label: 'Messages', value: stats.messages, icon: FaEnvelope, color: 'neon-pink' },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold gradient-text mb-2">Dashboard Overview</h1>
        <p className="text-gray-400">Manage your portfolio content</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {statCards.map((stat, index) => (
          <div
            key={index}
            className={`glass rounded-xl p-6 border border-white/10 hover:border-${stat.color}/50 transition-all duration-300 card-hover`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm mb-1">{stat.label}</p>
                <p className={`text-3xl font-bold text-${stat.color}`}>{stat.value}</p>
              </div>
              <div className={`text-4xl text-${stat.color} opacity-50`}>
                <stat.icon />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="glass rounded-xl p-6 border border-white/10 mb-8">
        <h2 className="text-xl font-bold text-white mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <a
            href="/admin/dashboard/projects"
            className="btn-neon border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-white text-center"
          >
            Add Project
          </a>
          <a
            href="/admin/dashboard/skills"
            className="btn-neon border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-white text-center"
          >
            Add Skill
          </a>
          <a
            href="/admin/dashboard/experience"
            className="btn-neon border-neon-pink text-neon-pink hover:bg-neon-pink hover:text-white text-center"
          >
            Add Experience
          </a>
          <a
            href="/"
            target="_blank"
            className="btn-neon border-neon-green text-neon-green hover:bg-neon-green hover:text-white text-center flex items-center justify-center"
          >
            <FaEye className="mr-2" />
            View Site
          </a>
        </div>
      </div>

      {/* Info Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="glass rounded-xl p-6 border border-white/10">
          <h3 className="text-lg font-semibold text-white mb-4">Recent Activity</h3>
          <ul className="space-y-3">
            <li className="text-gray-400 text-sm">• Portfolio data loading from Firebase</li>
            <li className="text-gray-400 text-sm">• All sections configured</li>
            <li className="text-gray-400 text-sm">• Ready to manage content</li>
          </ul>
        </div>

        <div className="glass rounded-xl p-6 border border-white/10">
          <h3 className="text-lg font-semibold text-white mb-4">System Status</h3>
          <ul className="space-y-3">
            <li className="flex items-center text-sm">
              <span className="w-2 h-2 bg-neon-green rounded-full mr-2"></span>
              <span className="text-gray-400">Firebase Connected</span>
            </li>
            <li className="flex items-center text-sm">
              <span className="w-2 h-2 bg-neon-green rounded-full mr-2"></span>
              <span className="text-gray-400">Google Cloud Storage Active</span>
            </li>
            <li className="flex items-center text-sm">
              <span className="w-2 h-2 bg-neon-green rounded-full mr-2"></span>
              <span className="text-gray-400">Authentication Enabled</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
