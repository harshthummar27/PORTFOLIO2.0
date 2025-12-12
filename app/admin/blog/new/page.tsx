'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Save, Image as ImageIcon, Calendar } from 'lucide-react';
import Link from 'next/link';

export default function NewBlogPostPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    author: 'Harsh Thummar',
    date: new Date().toISOString().split('T')[0],
    readTime: '',
    category: '',
    image: '',
    published: true,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/admin/blog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        router.push('/admin/blog');
      } else {
        setError(data.error || 'Failed to create blog post');
      }
    } catch (err: any) {
      setError('An error occurred while creating the blog post');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <Link
          href="/admin/blog"
          className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog Posts
        </Link>
        <h1 className="text-4xl font-black text-white mb-2">New Blog Post</h1>
        <p className="text-white/60">Create a new blog post</p>
      </div>

      {error && (
        <div className="mb-6 px-4 py-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-gradient-to-br from-gray-900/80 via-gray-950/90 to-black/95 backdrop-blur-xl border border-white/10 rounded-xl p-6 space-y-6">
          {/* Basic Information */}
          <div>
            <h2 className="text-xl font-bold text-white mb-4">Basic Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">
                  Title <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50"
                  placeholder="Blog Post Title"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">
                  Category <span className="text-red-400">*</span>
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50"
                >
                  <option value="">Select Category</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Frontend">Frontend</option>
                  <option value="Backend">Backend</option>
                  <option value="Full-Stack">Full-Stack</option>
                  <option value="React">React</option>
                  <option value="Next.js">Next.js</option>
                  <option value="JavaScript">JavaScript</option>
                  <option value="TypeScript">TypeScript</option>
                  <option value="Node.js">Node.js</option>
                  <option value="MongoDB">MongoDB</option>
                  <option value="Tips & Tricks">Tips & Tricks</option>
                  <option value="Tutorial">Tutorial</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-white/80 mb-2">
                Excerpt <span className="text-red-400">*</span>
              </label>
              <textarea
                name="excerpt"
                value={formData.excerpt}
                onChange={handleInputChange}
                required
                rows={3}
                className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50"
                placeholder="Short excerpt or summary of the blog post"
              />
              <p className="mt-1 text-xs text-white/50">This will be displayed as a preview on the blog listing page</p>
            </div>
          </div>

          {/* Image */}
          <div>
            <h2 className="text-xl font-bold text-white mb-4">Blog Post Image</h2>
            <div>
              <label className="block text-sm font-medium text-white/80 mb-2">
                Image Path/URL
              </label>
              <div className="flex items-center gap-2">
                <ImageIcon className="w-5 h-5 text-white/50" />
                <input
                  type="text"
                  name="image"
                  value={formData.image}
                  onChange={handleInputChange}
                  className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50"
                  placeholder="/images/Blog/post.jpg or https://example.com/image.jpg"
                />
              </div>
              <p className="mt-2 text-xs text-white/50">
                Enter the path to the image (e.g., /images/Blog/post.jpg) or a full URL (optional)
              </p>
              {formData.image && (
                <div className="mt-4">
                  <div className="relative w-full h-64 bg-white/5 border border-white/10 rounded-lg overflow-hidden">
                    <img
                      src={formData.image}
                      alt="Preview"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-xl font-bold text-white mb-4">Content</h2>
            <div>
              <label className="block text-sm font-medium text-white/80 mb-2">
                Content <span className="text-red-400">*</span>
              </label>
              <textarea
                name="content"
                value={formData.content}
                onChange={handleInputChange}
                required
                rows={15}
                className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 font-mono text-sm"
                placeholder="Write your blog post content here. You can use markdown or HTML..."
              />
              <p className="mt-1 text-xs text-white/50">Supports markdown and HTML formatting</p>
            </div>
          </div>

          {/* Additional Information */}
          <div>
            <h2 className="text-xl font-bold text-white mb-4">Additional Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">
                  Author <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  name="author"
                  value={formData.author}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50"
                  placeholder="Author Name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">
                  Date <span className="text-red-400">*</span>
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50" />
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">
                  Read Time <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  name="readTime"
                  value={formData.readTime}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50"
                  placeholder="5 min read"
                />
              </div>
            </div>
          </div>

          {/* Publishing Settings */}
          <div>
            <h2 className="text-xl font-bold text-white mb-4">Publishing Settings</h2>
            <div>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  name="published"
                  checked={formData.published}
                  onChange={handleInputChange}
                  className="w-4 h-4 rounded border-white/20 bg-white/5 text-purple-500 focus:ring-purple-500/50"
                />
                <span className="text-sm font-medium text-white/80">Publish immediately</span>
              </label>
              <p className="mt-1 text-xs text-white/50">
                Uncheck to save as draft (won't be visible to public)
              </p>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex items-center justify-end gap-4">
          <Link
            href="/admin/blog"
            className="px-6 py-3 bg-white/5 border border-white/10 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
          >
            Cancel
          </Link>
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Save className="w-5 h-5" />
            {loading ? 'Creating...' : 'Create Post'}
          </button>
        </div>
      </form>
    </div>
  );
}

