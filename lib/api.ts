// Use NEXT_PUBLIC_API_URL if set (for production), otherwise use relative URLs (for same-origin)
const API_URL = process.env.NEXT_PUBLIC_API_URL || '';

export async function fetchBlogPosts(category?: string) {
  try {
    const url = category
      ? `${API_URL}/api/blog?category=${encodeURIComponent(category)}`
      : `${API_URL}/api/blog`;
    
    const response = await fetch(url, {
      cache: 'no-store', // Always fetch fresh data
    });

    if (!response.ok) {
      throw new Error('Failed to fetch blog posts');
    }

    const data = await response.json();
    return data.success ? data.data : [];
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

export async function fetchBlogPost(slug: string) {
  try {
    const response = await fetch(`${API_URL}/api/blog/${slug}`, {
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error('Failed to fetch blog post');
    }

    const data = await response.json();
    return data.success ? data.data : null;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}

export async function fetchProjects(featured?: boolean) {
  try {
    const url = featured
      ? `${API_URL}/api/projects?featured=true`
      : `${API_URL}/api/projects`;
    
    const response = await fetch(url, {
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error('Failed to fetch projects');
    }

    const data = await response.json();
    return data.success ? data.data : [];
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
}

export async function fetchProject(slug: string) {
  try {
    const response = await fetch(`${API_URL}/api/projects/${slug}`, {
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error('Failed to fetch project');
    }

    const data = await response.json();
    return data.success ? data.data : null;
  } catch (error) {
    console.error('Error fetching project:', error);
    return null;
  }
}

export async function submitContactForm(formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  try {
    const response = await fetch(`${API_URL}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Failed to submit contact form');
    }

    return data;
  } catch (error: any) {
    console.error('Error submitting contact form:', error);
    throw error;
  }
}

