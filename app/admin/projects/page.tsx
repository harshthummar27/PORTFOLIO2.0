'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Plus, Edit, Trash2, Eye, Star } from 'lucide-react';

interface Project {
  _id: string;
  id: number;
  title: string;
  slug: string;
  description: string;
  category: string;
  featured: boolean;
  views: number;
  clicks: number;
}

export default function AdminProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await fetch('/api/admin/projects');
      const data = await response.json();
      if (data.success) {
        setProjects(data.data);
      } else {
        setError(data.error || 'Failed to fetch projects');
      }
    } catch (err: any) {
      setError('An error occurred while fetching projects');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this project?')) {
      return;
    }

    try {
      const response = await fetch(`/api/admin/projects/${id}`, {
        method: 'DELETE',
      });

      const data = await response.json();
      if (data.success) {
        setProjects(projects.filter((project) => project._id !== id));
      } else {
        alert(data.error || 'Failed to delete project');
      }
    } catch (err: any) {
      alert('An error occurred while deleting the project');
    }
  };

  if (loading) {
    return (
      <div className="p-8">
        <div className="flex items-center justify-center h-64">
          <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-black text-white mb-2">Projects</h1>
          <p className="text-white/60">Manage your portfolio projects</p>
        </div>
        <Link
          href="/admin/projects/new"
          className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all flex items-center gap-2"
        >
          <Plus className="w-5 h-5" />
          Add New Project
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
                <th className="px-6 py-4 text-left text-sm font-semibold text-white/80">Featured</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-white/80">Views</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-white/80">Clicks</th>
                <th className="px-6 py-4 text-right text-sm font-semibold text-white/80">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {projects.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-white/60">
                    No projects found. Add your first project!
                  </td>
                </tr>
              ) : (
                projects.map((project) => (
                  <tr key={project._id} className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-medium text-white">{project.title}</div>
                      <div className="text-sm text-white/50 mt-1">{project.description.substring(0, 60)}...</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium">
                        {project.category}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      {project.featured ? (
                        <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      ) : (
                        <Star className="w-5 h-5 text-white/30" />
                      )}
                    </td>
                    <td className="px-6 py-4 text-white/70">{project.views || 0}</td>
                    <td className="px-6 py-4 text-white/70">{project.clicks || 0}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-2">
                        <Link
                          href={`/portfolio/${project.slug}`}
                          target="_blank"
                          className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                          title="View"
                        >
                          <Eye className="w-4 h-4 text-white/70" />
                        </Link>
                        <Link
                          href={`/admin/projects/${project._id}/edit`}
                          className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                          title="Edit"
                        >
                          <Edit className="w-4 h-4 text-white/70" />
                        </Link>
                        <button
                          onClick={() => handleDelete(project._id)}
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

