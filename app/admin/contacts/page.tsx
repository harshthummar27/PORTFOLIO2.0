'use client';

import { useState, useEffect } from 'react';
import { Mail, Trash2, Eye, CheckCircle, XCircle } from 'lucide-react';

interface Contact {
  _id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  read: boolean;
  replied: boolean;
  createdAt: string;
}

export default function AdminContactsPage() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [filter, setFilter] = useState<'all' | 'unread' | 'read'>('all');

  useEffect(() => {
    fetchContacts();
  }, [filter]);

  const fetchContacts = async () => {
    try {
      const query = filter === 'unread' ? '?read=false' : filter === 'read' ? '?read=true' : '';
      const response = await fetch(`/api/admin/contacts${query}`);
      const data = await response.json();
      if (data.success) {
        setContacts(data.data);
      } else {
        setError(data.error || 'Failed to fetch contacts');
      }
    } catch (err: any) {
      setError('An error occurred while fetching contacts');
    } finally {
      setLoading(false);
    }
  };

  const handleMarkAsRead = async (id: string) => {
    try {
      const response = await fetch(`/api/admin/contacts/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ read: true }),
      });

      const data = await response.json();
      if (data.success) {
        setContacts(contacts.map((c) => (c._id === id ? { ...c, read: true } : c)));
        if (selectedContact?._id === id) {
          setSelectedContact({ ...selectedContact, read: true });
        }
      }
    } catch (err: any) {
      alert('Failed to mark as read');
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this contact message?')) {
      return;
    }

    try {
      const response = await fetch(`/api/admin/contacts/${id}`, {
        method: 'DELETE',
      });

      const data = await response.json();
      if (data.success) {
        setContacts(contacts.filter((contact) => contact._id !== id));
        if (selectedContact?._id === id) {
          setSelectedContact(null);
        }
      } else {
        alert(data.error || 'Failed to delete contact');
      }
    } catch (err: any) {
      alert('An error occurred while deleting the contact');
    }
  };

  if (loading) {
    return (
      <div className="p-8">
        <div className="flex items-center justify-center h-64">
          <div className="w-8 h-8 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  const unreadCount = contacts.filter((c) => !c.read).length;

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-black text-white mb-2">Contact Messages</h1>
        <p className="text-white/60">Manage contact form submissions</p>
      </div>

      {error && (
        <div className="mb-6 px-4 py-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400">
          {error}
        </div>
      )}

      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-lg font-medium transition-all ${
            filter === 'all'
              ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
              : 'bg-white/5 text-white/70 hover:bg-white/10'
          }`}
        >
          All ({contacts.length})
        </button>
        <button
          onClick={() => setFilter('unread')}
          className={`px-4 py-2 rounded-lg font-medium transition-all ${
            filter === 'unread'
              ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
              : 'bg-white/5 text-white/70 hover:bg-white/10'
          }`}
        >
          Unread ({unreadCount})
        </button>
        <button
          onClick={() => setFilter('read')}
          className={`px-4 py-2 rounded-lg font-medium transition-all ${
            filter === 'read'
              ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
              : 'bg-white/5 text-white/70 hover:bg-white/10'
          }`}
        >
          Read ({contacts.length - unreadCount})
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Contact List */}
        <div className="lg:col-span-1">
          <div className="bg-gradient-to-br from-gray-900/80 via-gray-950/90 to-black/95 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden">
            <div className="p-4 border-b border-white/10">
              <h2 className="text-lg font-semibold text-white">Messages</h2>
            </div>
            <div className="max-h-[600px] overflow-y-auto">
              {contacts.length === 0 ? (
                <div className="p-8 text-center text-white/60">No messages found</div>
              ) : (
                contacts.map((contact) => (
                  <div
                    key={contact._id}
                    onClick={() => {
                      setSelectedContact(contact);
                      if (!contact.read) {
                        handleMarkAsRead(contact._id);
                      }
                    }}
                    className={`p-4 border-b border-white/10 cursor-pointer transition-colors ${
                      selectedContact?._id === contact._id
                        ? 'bg-purple-500/20'
                        : 'hover:bg-white/5'
                    } ${!contact.read ? 'bg-blue-500/10' : ''}`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <div className="font-medium text-white">{contact.name}</div>
                        <div className="text-sm text-white/50">{contact.email}</div>
                      </div>
                      {!contact.read && (
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      )}
                    </div>
                    <div className="text-sm text-white/70 font-medium mb-1">{contact.subject}</div>
                    <div className="text-xs text-white/50">
                      {new Date(contact.createdAt).toLocaleString()}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Contact Detail */}
        <div className="lg:col-span-2">
          {selectedContact ? (
            <div className="bg-gradient-to-br from-gray-900/80 via-gray-950/90 to-black/95 backdrop-blur-xl border border-white/10 rounded-xl p-6">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">{selectedContact.subject}</h2>
                  <div className="flex items-center gap-4 text-sm text-white/60">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      {selectedContact.email}
                    </div>
                    <div>{new Date(selectedContact.createdAt).toLocaleString()}</div>
                  </div>
                </div>
                <div className="flex gap-2">
                  {!selectedContact.read && (
                    <button
                      onClick={() => handleMarkAsRead(selectedContact._id)}
                      className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                      title="Mark as read"
                    >
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    </button>
                  )}
                  <button
                    onClick={() => handleDelete(selectedContact._id)}
                    className="p-2 hover:bg-red-500/10 rounded-lg transition-colors"
                    title="Delete"
                  >
                    <Trash2 className="w-5 h-5 text-red-400" />
                  </button>
                </div>
              </div>
              <div className="mb-4">
                <div className="text-sm text-white/60 mb-1">From</div>
                <div className="text-white font-medium">{selectedContact.name}</div>
              </div>
              <div className="mb-4">
                <div className="text-sm text-white/60 mb-1">Email</div>
                <a
                  href={`mailto:${selectedContact.email}`}
                  className="text-purple-400 hover:text-purple-300"
                >
                  {selectedContact.email}
                </a>
              </div>
              <div>
                <div className="text-sm text-white/60 mb-2">Message</div>
                <div className="bg-white/5 rounded-lg p-4 text-white/80 whitespace-pre-wrap">
                  {selectedContact.message}
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-gradient-to-br from-gray-900/80 via-gray-950/90 to-black/95 backdrop-blur-xl border border-white/10 rounded-xl p-12 text-center">
              <Mail className="w-16 h-16 text-white/20 mx-auto mb-4" />
              <p className="text-white/60">Select a message to view details</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

