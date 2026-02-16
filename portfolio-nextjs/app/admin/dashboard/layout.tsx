'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import Link from 'next/link';
import { 
  FaHome, FaUser, FaCode, FaBriefcase, FaGraduationCap, 
  FaProjectDiagram, FaComments, FaEnvelope, FaSignOutAlt, FaBars, FaTimes, FaCertificate
} from 'react-icons/fa';
import toast from 'react-hot-toast';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        router.push('/admin');
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [router]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success('Logged out successfully');
      router.push('/admin');
    } catch (error) {
      toast.error('Error logging out');
    }
  };

  const menuItems = [
    { name: 'Dashboard', href: '/admin/dashboard', icon: FaHome },
    { name: 'Hero Section', href: '/admin/dashboard/hero', icon: FaUser },
    { name: 'About', href: '/admin/dashboard/about', icon: FaUser },
    { name: 'Skills', href: '/admin/dashboard/skills', icon: FaCode },
    { name: 'Experience', href: '/admin/dashboard/experience', icon: FaBriefcase },
    { name: 'Education', href: '/admin/dashboard/education', icon: FaGraduationCap },
    { name: 'Projects', href: '/admin/dashboard/projects', icon: FaProjectDiagram },
    { name: 'Certifications', href: '/admin/dashboard/certifications', icon: FaCertificate },
    { name: 'Testimonials', href: '/admin/dashboard/testimonials', icon: FaComments },
    { name: 'Messages', href: '/admin/dashboard/messages', icon: FaEnvelope },
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="spinner"></div>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="min-h-screen bg-dark-100">
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 glass border-r border-white/10 transition-transform duration-300 z-50 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}
      >
        <div className="p-6">
          <Link href="/" className="text-2xl font-bold gradient-text">
            Admin Panel
          </Link>
        </div>

        <nav className="mt-6">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              onClick={() => setSidebarOpen(false)}
              className="flex items-center px-6 py-3 text-gray-400 hover:bg-white/5 hover:text-neon-blue transition-all duration-300 border-l-4 border-transparent hover:border-neon-blue"
            >
              <item.icon className="mr-3" />
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>

        <div className="absolute bottom-6 left-0 right-0 px-6">
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center px-4 py-3 bg-neon-pink/20 text-neon-pink rounded-lg hover:bg-neon-pink/30 transition-all duration-300"
          >
            <FaSignOutAlt className="mr-2" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="lg:ml-64">
        {/* Top Bar */}
        <header className="glass border-b border-white/10 p-4 flex justify-between items-center sticky top-0 z-40">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden text-2xl text-white"
          >
            {sidebarOpen ? <FaTimes /> : <FaBars />}
          </button>

          <div className="flex items-center space-x-4">
            <span className="text-gray-400">Welcome back,</span>
            <span className="text-neon-blue font-semibold">{user?.email}</span>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">
          {children}
        </main>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}
