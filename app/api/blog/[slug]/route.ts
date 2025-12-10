import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import BlogPost from '@/models/BlogPost';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    await connectDB();

    const { slug } = await params;

    const post = await BlogPost.findOne({ slug, published: true });

    if (!post) {
      return NextResponse.json(
        { success: false, error: 'Blog post not found' },
        { status: 404 }
      );
    }

    // Increment views
    await BlogPost.findByIdAndUpdate(post._id, { $inc: { views: 1 } });

    return NextResponse.json({
      success: true,
      data: post,
    });
  } catch (error: any) {
    console.error('Error fetching blog post:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to fetch blog post' },
      { status: 500 }
    );
  }
}

