'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { ArrowLeft, Save, Image as ImageIcon } from 'lucide-react';
import Link from 'next/link';

interface Project {
  _id: string;
  title: string;
  description: string;
  longDescription?: string;
  category: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  color: string;
  image: string;
  year?: string;
  client?: string;
  challenges?: string[];
  solutions?: string[];
  results?: string[];
}

export default function EditProjectPage() {
  const router = useRouter();
  const params = useParams();
  const projectId = params.id as string;

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    longDescription: '',
    category: '',
    technologies: [] as string[],
    liveUrl: '',
    githubUrl: '',
    featured: false,
    color: 'from-purple-500 to-blue-500',
    image: '',
    year: '',
    client: '',
    challenges: [] as string[],
    solutions: [] as string[],
    results: [] as string[],
  });

  const [techInput, setTechInput] = useState('');
  const [challengeInput, setChallengeInput] = useState('');
  const [solutionInput, setSolutionInput] = useState('');
  const [resultInput, setResultInput] = useState('');

  useEffect(() => {
    fetchProject();
  }, [projectId]);

  const fetchProject = async () => {
    try {
      const response = await fetch(`/api/admin/projects/${projectId}`);
      const data = await response.json();

      if (data.success) {
        const project: Project = data.data;
        setFormData({
          title: project.title || '',
          description: project.description || '',
          longDescription: project.longDescription || '',
          category: project.category || '',
          technologies: project.technologies || [],
          liveUrl: project.liveUrl || '',
          githubUrl: project.githubUrl || '',
          featured: project.featured || false,
          color: project.color || 'from-purple-500 to-blue-500',
          image: project.image || '',
          year: project.year || '',
          client: project.client || '',
          challenges: project.challenges || [],
          solutions: project.solutions || [],
          results: project.results || [],
        });
      } else {
        setError(data.error || 'Failed to fetch project');
      }
    } catch (err: any) {
      setError('An error occurred while fetching the project');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const addTechnology = () => {
    if (techInput.trim()) {
      setFormData((prev) => ({
        ...prev,
        technologies: [...prev.technologies, techInput.trim()],
      }));
      setTechInput('');
    }
  };

  const removeTechnology = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      technologies: prev.technologies.filter((_, i) => i !== index),
    }));
  };

  const addChallenge = () => {
    if (challengeInput.trim()) {
      setFormData((prev) => ({
        ...prev,
        challenges: [...(prev.challenges || []), challengeInput.trim()],
      }));
      setChallengeInput('');
    }
  };

  const removeChallenge = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      challenges: prev.challenges?.filter((_, i) => i !== index) || [],
    }));
  };

  const addSolution = () => {
    if (solutionInput.trim()) {
      setFormData((prev) => ({
        ...prev,
        solutions: [...(prev.solutions || []), solutionInput.trim()],
      }));
      setSolutionInput('');
    }
  };

  const removeSolution = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      solutions: prev.solutions?.filter((_, i) => i !== index) || [],
    }));
  };

  const addResult = () => {
    if (resultInput.trim()) {
      setFormData((prev) => ({
        ...prev,
        results: [...(prev.results || []), resultInput.trim()],
      }));
      setResultInput('');
    }
  };

  const removeResult = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      results: prev.results?.filter((_, i) => i !== index) || [],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError('');

    try {
      const response = await fetch(`/api/admin/projects/${projectId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        router.push('/admin/projects');
      } else {
        setError(data.error || 'Failed to update project');
      }
    } catch (err: any) {
      setError('An error occurred while updating the project');
    } finally {
      setSaving(false);
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
      <div className="mb-8">
        <Link
          href="/admin/projects"
          className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>
        <h1 className="text-4xl font-black text-white mb-2">Edit Project</h1>
        <p className="text-white/60">Update project information</p>
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
                  placeholder="Project Title"
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
                  <option value="Full-Stack">Full-Stack</option>
                  <option value="Frontend">Frontend</option>
                  <option value="Backend">Backend</option>
                  <option value="Mobile">Mobile</option>
                  <option value="Web3">Web3</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-white/80 mb-2">
                Description <span className="text-red-400">*</span>
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
                rows={3}
                className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50"
                placeholder="Short description of the project"
              />
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-white/80 mb-2">Long Description</label>
              <textarea
                name="longDescription"
                value={formData.longDescription}
                onChange={handleInputChange}
                rows={5}
                className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50"
                placeholder="Detailed description of the project"
              />
            </div>
          </div>

          {/* Image */}
          <div>
            <h2 className="text-xl font-bold text-white mb-4">Project Image</h2>
            <div>
              <label className="block text-sm font-medium text-white/80 mb-2">
                Image Path/URL <span className="text-red-400">*</span>
              </label>
              <div className="flex items-center gap-2">
                <ImageIcon className="w-5 h-5 text-white/50" />
                <input
                  type="text"
                  name="image"
                  value={formData.image}
                  onChange={handleInputChange}
                  required
                  className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50"
                  placeholder="/images/project.png or https://example.com/image.jpg"
                />
              </div>
              <p className="mt-2 text-xs text-white/50">
                Enter the path to the image (e.g., /images/project.png) or a full URL
              </p>
              {formData.image && (
                <div className="mt-4">
                  <div className="relative w-full h-48 bg-white/5 border border-white/10 rounded-lg overflow-hidden">
                    <img
                      src={formData.image}
                      alt="Preview"
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h2 className="text-xl font-bold text-white mb-4">Technologies</h2>
            <div className="flex gap-2 mb-4">
              <input
                type="text"
                value={techInput}
                onChange={(e) => setTechInput(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    addTechnology();
                  }
                }}
                className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50"
                placeholder="Add technology (e.g., React, Node.js)"
              />
              <button
                type="button"
                onClick={addTechnology}
                className="px-4 py-2 bg-purple-500/20 border border-purple-500/30 text-purple-300 rounded-lg hover:bg-purple-500/30 transition-colors"
              >
                Add
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {formData.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm flex items-center gap-2"
                >
                  {tech}
                  <button
                    type="button"
                    onClick={() => removeTechnology(index)}
                    className="hover:text-red-400 transition-colors"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* URLs */}
          <div>
            <h2 className="text-xl font-bold text-white mb-4">Project Links</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">
                  Live URL <span className="text-red-400">*</span>
                </label>
                <input
                  type="url"
                  name="liveUrl"
                  value={formData.liveUrl}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50"
                  placeholder="https://example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">
                  GitHub URL <span className="text-red-400">*</span>
                </label>
                <input
                  type="url"
                  name="githubUrl"
                  value={formData.githubUrl}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50"
                  placeholder="https://github.com/user/repo"
                />
              </div>
            </div>
          </div>

          {/* Additional Settings */}
          <div>
            <h2 className="text-xl font-bold text-white mb-4">Additional Settings</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">
                  Color Gradient <span className="text-red-400">*</span>
                </label>
                <select
                  name="color"
                  value={formData.color}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50"
                >
                  <option value="from-purple-500 to-blue-500">Purple to Blue</option>
                  <option value="from-green-500 to-emerald-500">Green to Emerald</option>
                  <option value="from-blue-500 to-cyan-500">Blue to Cyan</option>
                  <option value="from-pink-500 to-rose-500">Pink to Rose</option>
                  <option value="from-orange-500 to-red-500">Orange to Red</option>
                  <option value="from-yellow-500 to-orange-500">Yellow to Orange</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">Year</label>
                <input
                  type="text"
                  name="year"
                  value={formData.year}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50"
                  placeholder="2024"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">Client</label>
                <input
                  type="text"
                  name="client"
                  value={formData.client}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50"
                  placeholder="Client Name"
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  name="featured"
                  checked={formData.featured}
                  onChange={handleInputChange}
                  className="w-4 h-4 rounded border-white/20 bg-white/5 text-purple-500 focus:ring-purple-500/50"
                />
                <span className="text-sm font-medium text-white/80">Featured Project</span>
              </label>
            </div>
          </div>

          {/* Challenges, Solutions, Results */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Challenges */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Challenges</h3>
              <div className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={challengeInput}
                  onChange={(e) => setChallengeInput(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      addChallenge();
                    }
                  }}
                  className="flex-1 px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm placeholder-white/40 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50"
                  placeholder="Add challenge"
                />
                <button
                  type="button"
                  onClick={addChallenge}
                  className="px-3 py-2 bg-purple-500/20 border border-purple-500/30 text-purple-300 rounded-lg hover:bg-purple-500/30 transition-colors text-sm"
                >
                  +
                </button>
              </div>
              <div className="space-y-2">
                {formData.challenges?.map((challenge, index) => (
                  <div
                    key={index}
                    className="px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm flex items-center justify-between"
                  >
                    <span>{challenge}</span>
                    <button
                      type="button"
                      onClick={() => removeChallenge(index)}
                      className="text-red-400 hover:text-red-300"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Solutions */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Solutions</h3>
              <div className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={solutionInput}
                  onChange={(e) => setSolutionInput(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      addSolution();
                    }
                  }}
                  className="flex-1 px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm placeholder-white/40 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50"
                  placeholder="Add solution"
                />
                <button
                  type="button"
                  onClick={addSolution}
                  className="px-3 py-2 bg-purple-500/20 border border-purple-500/30 text-purple-300 rounded-lg hover:bg-purple-500/30 transition-colors text-sm"
                >
                  +
                </button>
              </div>
              <div className="space-y-2">
                {formData.solutions?.map((solution, index) => (
                  <div
                    key={index}
                    className="px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm flex items-center justify-between"
                  >
                    <span>{solution}</span>
                    <button
                      type="button"
                      onClick={() => removeSolution(index)}
                      className="text-red-400 hover:text-red-300"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Results */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Results</h3>
              <div className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={resultInput}
                  onChange={(e) => setResultInput(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      addResult();
                    }
                  }}
                  className="flex-1 px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm placeholder-white/40 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50"
                  placeholder="Add result"
                />
                <button
                  type="button"
                  onClick={addResult}
                  className="px-3 py-2 bg-purple-500/20 border border-purple-500/30 text-purple-300 rounded-lg hover:bg-purple-500/30 transition-colors text-sm"
                >
                  +
                </button>
              </div>
              <div className="space-y-2">
                {formData.results?.map((result, index) => (
                  <div
                    key={index}
                    className="px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm flex items-center justify-between"
                  >
                    <span>{result}</span>
                    <button
                      type="button"
                      onClick={() => removeResult(index)}
                      className="text-red-400 hover:text-red-300"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex items-center justify-end gap-4">
          <Link
            href="/admin/projects"
            className="px-6 py-3 bg-white/5 border border-white/10 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
          >
            Cancel
          </Link>
          <button
            type="submit"
            disabled={saving}
            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Save className="w-5 h-5" />
            {saving ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </form>
    </div>
  );
}

