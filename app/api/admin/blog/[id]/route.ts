import { NextRequest, NextResponse } from 'next/server';
import { verifyAdminSession } from '@/lib/auth';
import connectDB from '@/lib/mongodb';
import BlogPost from '@/models/BlogPost';
import { z } from 'zod';
import { slugify } from '@/lib/utils';

const blogPostSchema = z.object({
  title: z.string().min(1).optional(),
  excerpt: z.string().min(1).optional(),
  content: z.string().min(1).optional(),
  author: z.string().min(1).optional(),
  date: z.string().optional(),
  readTime: z.string().min(1).optional(),
  category: z.string().min(1).optional(),
  image: z.string().optional(),
  published: z.boolean().optional(),
});

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const isAuthenticated = await verifyAdminSession();
    if (!isAuthenticated) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    await connectDB();
    const { id } = await params;

    const post = await BlogPost.findById(id);

    if (!post) {
      return NextResponse.json(
        { success: false, error: 'Blog post not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: post,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to fetch blog post' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
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
    const { id } = await params;

    await connectDB();

    const post = await BlogPost.findById(id);
    if (!post) {
      return NextResponse.json(
        { success: false, error: 'Blog post not found' },
        { status: 404 }
      );
    }

    // If title changed, update slug
    if (validatedData.title && validatedData.title !== post.title) {
      const newSlug = slugify(validatedData.title);
      const existing = await BlogPost.findOne({ slug: newSlug, _id: { $ne: id } });
      if (existing) {
        return NextResponse.json(
          { success: false, error: 'A blog post with this title already exists' },
          { status: 400 }
        );
      }
      validatedData.slug = newSlug;
    }

    // Update date if provided
    if (validatedData.date) {
      validatedData.date = new Date(validatedData.date);
    }

    const updatedPost = await BlogPost.findByIdAndUpdate(
      id,
      { $set: validatedData },
      { new: true, runValidators: true }
    );

    return NextResponse.json({
      success: true,
      message: 'Blog post updated successfully',
      data: updatedPost,
    });
  } catch (error: any) {
    if (error.name === 'ZodError') {
      return NextResponse.json(
        { success: false, error: 'Validation failed', details: error.errors },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to update blog post' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const isAuthenticated = await verifyAdminSession();
    if (!isAuthenticated) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    await connectDB();
    const { id } = await params;

    const post = await BlogPost.findByIdAndDelete(id);

    if (!post) {
      return NextResponse.json(
        { success: false, error: 'Blog post not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Blog post deleted successfully',
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to delete blog post' },
      { status: 500 }
    );
  }
}

