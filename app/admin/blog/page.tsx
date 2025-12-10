'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Plus, Edit, Trash2, Eye, Calendar } from 'lucide-react';

interface BlogPost {
  _id: string;
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  published: boolean;
  views: number;
  date: string;
}

export default function AdminBlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch('/api/admin/blog');
      const data = await response.json();
      if (data.success) {
        setPosts(data.data);
      } else {
        setError(data.error || 'Failed to fetch posts');
      }
    } catch (err: any) {
      setError('An error occurred while fetching posts');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this blog post?')) {
      return;
    }

    try {
      const response = await fetch(`/api/admin/blog/${id}`, {
        method: 'DELETE',
      });

      const data = await response.json();
      if (data.success) {
        setPosts(posts.filter((post) => post._id !== id));
      } else {
        alert(data.error || 'Failed to delete post');
      }
    } catch (err: any) {
      alert('An error occurred while deleting the post');
    }
  };

  if (loading) {
    return (
      <div className="p-8">
        <div className="flex items-center justify-center h-64">
          <div className="w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-black text-white mb-2">Blog Posts</h1>
          <p className="text-white/60">Manage your blog posts</p>
        </div>
        <Link
          href="/admin/blog/new"
          className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all flex items-center gap-2"
        >
          <Plus className="w-5 h-5" />
          Create New Post
        </Link>
      </div>

      {error && (
        <div className="mb-6 px-4 py-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400">
          {error}
        </div>
      )}

      <div className="bg-gradient-to-br from-gray-900/80 via-gray-950/90 to-black/95 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-white/5 border-b border-white/10">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-white/80">Title</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-white/80">Category</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-white/80">Status</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-white/80">Views</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-white/80">Date</th>
                <th className="px-6 py-4 text-right text-sm font-semibold text-white/80">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {posts.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-white/60">
                    No blog posts found. Create your first post!
                  </td>
                </tr>
              ) : (
                posts.map((post) => (
                  <tr key={post._id} className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-medium text-white">{post.title}</div>
                      <div className="text-sm text-white/50 mt-1">{post.excerpt.substring(0, 60)}...</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          post.published
                            ? 'bg-green-500/20 text-green-300'
                            : 'bg-yellow-500/20 text-yellow-300'
                        }`}
                      >
                        {post.published ? 'Published' : 'Draft'}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-white/70">{post.views || 0}</td>
                    <td className="px-6 py-4 text-white/70">
                      {new Date(post.date).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-2">
                        <Link
                          href={`/blog/${post.slug}`}
                          target="_blank"
                          className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                          title="View"
                        >
                          <Eye className="w-4 h-4 text-white/70" />
                        </Link>
                        <Link
                          href={`/admin/blog/${post._id}/edit`}
                          className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                          title="Edit"
                        >
                          <Edit className="w-4 h-4 text-white/70" />
                        </Link>
                        <button
                          onClick={() => handleDelete(post._id)}
                          className="p-2 hover:bg-red-500/10 rounded-lg transition-colors"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4 text-red-400" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

