import { BookOpen, Briefcase, Mail, Eye, TrendingUp } from 'lucide-react';
import Link from 'next/link';

// This will be replaced with actual API calls later
async function getStats() {
  // TODO: Replace with actual API calls
  return {
    blogPosts: 0,
    projects: 0,
    contacts: 0,
    totalViews: 0,
  };
}

export default async function AdminDashboardPage() {
  const stats = await getStats();

  const statCards = [
    {
      title: 'Blog Posts',
      value: stats.blogPosts,
      icon: BookOpen,
      href: '/admin/blog',
      color: 'from-purple-500 to-purple-600',
    },
    {
      title: 'Projects',
      value: stats.projects,
      icon: Briefcase,
      href: '/admin/projects',
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Contact Messages',
      value: stats.contacts,
      icon: Mail,
      href: '/admin/contacts',
      color: 'from-green-500 to-green-600',
    },
    {
      title: 'Total Views',
      value: stats.totalViews,
      icon: Eye,
      href: '#',
      color: 'from-orange-500 to-orange-600',
    },
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-black text-white mb-2">Dashboard</h1>
        <p className="text-white/60">Welcome to the admin panel</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statCards.map((stat) => {
          const Icon = stat.icon;
          const CardContent = (
            <div className="bg-gradient-to-br from-gray-900/80 via-gray-950/90 to-black/95 backdrop-blur-xl border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <TrendingUp className="w-5 h-5 text-white/30" />
              </div>
              <h3 className="text-white/60 text-sm font-medium mb-1">{stat.title}</h3>
              <p className="text-3xl font-black text-white">{stat.value}</p>
            </div>
          );

          if (stat.href === '#') {
            return <div key={stat.title}>{CardContent}</div>;
          }

          return (
            <Link key={stat.title} href={stat.href}>
              {CardContent}
            </Link>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div className="bg-gradient-to-br from-gray-900/80 via-gray-950/90 to-black/95 backdrop-blur-xl border border-white/10 rounded-xl p-6">
        <h2 className="text-2xl font-bold text-white mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link
            href="/admin/blog/new"
            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all text-center"
          >
            Create Blog Post
          </Link>
          <Link
            href="/admin/projects/new"
            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all text-center"
          >
            Add Project
          </Link>
          <Link
            href="/admin/contacts"
            className="px-6 py-3 bg-white/5 border border-white/10 text-white rounded-lg font-semibold hover:bg-white/10 transition-all text-center"
          >
            View Messages
          </Link>
        </div>
      </div>
    </div>
  );
}

