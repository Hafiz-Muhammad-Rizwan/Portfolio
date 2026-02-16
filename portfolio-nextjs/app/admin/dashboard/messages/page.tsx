'use client';

import { useEffect, useState } from 'react';
import { collection, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import toast from 'react-hot-toast';
import { FaTrash, FaEnvelope, FaCheck, FaEye } from 'react-icons/fa';

interface Message {
  id?: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
  read: boolean;
}

export default function MessagesAdmin() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [selectedMessage, setSelectedMessage] = useState<any>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'messages'));
      const messagesData = querySnapshot.docs.map(doc => ({ id: doc.id, ...(doc.data() as Message) }));
      setMessages(messagesData.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()));
    } catch (error) {
      console.error('Error fetching messages:', error);
      toast.error('Failed to load messages');
    }
  };

  const handleViewMessage = async (message: Message) => {
    setSelectedMessage(message);
    setShowModal(true);

    // Mark as read
    if (!message.read) {
      try {
        await updateDoc(doc(db, 'messages', message.id!), {
          read: true,
        });
        fetchMessages();
      } catch (error) {
        console.error('Error marking message as read:', error);
      }
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this message?')) return;

    try {
      await deleteDoc(doc(db, 'messages', id));
      toast.success('Message deleted successfully');
      fetchMessages();
      if (selectedMessage?.id === id) {
        setShowModal(false);
      }
    } catch (error) {
      console.error('Error deleting message:', error);
      toast.error('Failed to delete message');
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold gradient-text mb-2">Contact Messages</h1>
        <p className="text-gray-400">View and manage messages from your contact form</p>
      </div>

      <div className="glass rounded-xl p-6 border border-white/10 mb-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold text-white">{messages.length}</p>
            <p className="text-gray-400 text-sm">Total Messages</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-neon-blue">
              {messages.filter(m => !m.read).length}
            </p>
            <p className="text-gray-400 text-sm">Unread</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-neon-green">
              {messages.filter(m => m.read).length}
            </p>
            <p className="text-gray-400 text-sm">Read</p>
          </div>
        </div>
      </div>

      {/* Messages List */}
      <div className="space-y-4">
        {messages.length === 0 ? (
          <div className="glass rounded-xl p-12 border border-white/10 text-center">
            <FaEnvelope className="text-6xl text-gray-600 mx-auto mb-4" />
            <p className="text-gray-400">No messages yet</p>
          </div>
        ) : (
          messages.map((message) => (
            <div
              key={message.id}
              className={`glass rounded-xl p-6 border transition-all duration-300 cursor-pointer ${
                message.read
                  ? 'border-white/10 hover:border-white/20'
                  : 'border-neon-blue/30 hover:border-neon-blue/50'
              }`}
              onClick={() => handleViewMessage(message)}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-bold text-white">{message.name}</h3>
                    {!message.read && (
                      <span className="px-2 py-1 rounded-full bg-neon-blue/20 text-neon-blue text-xs">
                        New
                      </span>
                    )}
                  </div>
                  <p className="text-neon-blue text-sm mb-2">{message.email}</p>
                  <p className="text-white font-semibold mb-2">{message.subject}</p>
                  <p className="text-gray-400 text-sm line-clamp-2">{message.message}</p>
                  <p className="text-gray-500 text-xs mt-3">{formatDate(message.createdAt)}</p>
                </div>
                <div className="flex gap-2 ml-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleViewMessage(message);
                    }}
                    className="px-3 py-2 bg-neon-blue/20 text-neon-blue rounded-lg hover:bg-neon-blue/30 transition-all duration-300"
                    title="View Message"
                  >
                    <FaEye />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(message.id!);
                    }}
                    className="px-3 py-2 bg-neon-pink/20 text-neon-pink rounded-lg hover:bg-neon-pink/30 transition-all duration-300"
                    title="Delete Message"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Message Detail Modal */}
      {showModal && selectedMessage && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="glass rounded-xl p-8 max-w-2xl w-full border border-white/10 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-2xl font-bold text-white">Message Details</h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-white text-2xl"
              >
                ×
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-gray-400 text-sm mb-1">From</label>
                <p className="text-white font-semibold">{selectedMessage.name}</p>
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-1">Email</label>
                <a
                  href={`mailto:${selectedMessage.email}`}
                  className="text-neon-blue hover:underline"
                >
                  {selectedMessage.email}
                </a>
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-1">Subject</label>
                <p className="text-white font-semibold">{selectedMessage.subject}</p>
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-1">Message</label>
                <div className="glass rounded-lg p-4 border border-white/10">
                  <p className="text-white whitespace-pre-wrap">{selectedMessage.message}</p>
                </div>
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-1">Received</label>
                <p className="text-white">{formatDate(selectedMessage.createdAt)}</p>
              </div>

              <div className="flex gap-4 pt-4">
                <a
                  href={`mailto:${selectedMessage.email}?subject=Re: ${selectedMessage.subject}`}
                  className="flex-1 btn-neon border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-white text-center"
                >
                  Reply via Email
                </a>
                <button
                  onClick={() => {
                    handleDelete(selectedMessage.id!);
                    setShowModal(false);
                  }}
                  className="flex-1 btn-neon border-neon-pink text-neon-pink hover:bg-neon-pink hover:text-white"
                >
                  Delete Message
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
