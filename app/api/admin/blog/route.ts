import { NextRequest, NextResponse } from 'next/server';
import { verifyAdminSession } from '@/lib/auth';
import connectDB from '@/lib/mongodb';
import BlogPost from '@/models/BlogPost';
import { z } from 'zod';
import { slugify } from '@/lib/utils';

const blogPostSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  excerpt: z.string().min(1, 'Excerpt is required'),
  content: z.string().min(1, 'Content is required'),
  author: z.string().min(1, 'Author is required'),
  date: z.string(),
  readTime: z.string().min(1, 'Read time is required'),
  category: z.string().min(1, 'Category is required'),
  image: z.string().optional(),
  published: z.boolean().default(true),
});

export async function GET(request: NextRequest) {
  try {
    const isAuthenticated = await verifyAdminSession();
    if (!isAuthenticated) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    await connectDB();

    const searchParams = request.nextUrl.searchParams;
    const limit = parseInt(searchParams.get('limit') || '100');
    const skip = parseInt(searchParams.get('skip') || '0');

    const posts = await BlogPost.find()
      .sort({ date: -1 })
      .limit(limit)
      .skip(skip)
      .lean();

    const total = await BlogPost.countDocuments();

    return NextResponse.json({
      success: true,
      data: posts,
      total,
      limit,
      skip,
    });
  } catch (error: any) {
    console.error('Error fetching blog posts:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to fetch blog posts' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const isAuthenticated = await verifyAdminSession();
    if (!isAuthenticated) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const validatedData = blogPostSchema.parse(body);

    await connectDB();

    // Generate slug from title
    const slug = slugify(validatedData.title);

    // Check if slug already exists
    const existing = await BlogPost.findOne({ slug });
    if (existing) {
      return NextResponse.json(
        { success: false, error: 'A blog post with this title already exists' },
        { status: 400 }
      );
    }

    // Get the highest ID and increment
    const lastPost = await BlogPost.findOne().sort({ id: -1 });
    const newId = lastPost ? lastPost.id + 1 : 1;

    const post = await BlogPost.create({
      ...validatedData,
      id: newId,
      slug,
      date: new Date(validatedData.date),
      views: 0,
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Blog post created successfully',
        data: post,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Error creating blog post:', error);
    if (error.name === 'ZodError') {
      return NextResponse.json(
        { success: false, error: 'Validation failed', details: error.errors },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to create blog post' },
      { status: 500 }
    );
  }
}

