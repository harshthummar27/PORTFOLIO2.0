import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import BlogPost from '@/models/BlogPost';

export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const searchParams = request.nextUrl.searchParams;
    const published = searchParams.get('published') !== 'false';
    const limit = parseInt(searchParams.get('limit') || '100');
    const skip = parseInt(searchParams.get('skip') || '0');
    const category = searchParams.get('category');

    // Build query
    const query: any = {};
    if (published) {
      query.published = true;
    }
    if (category) {
      query.category = category;
    }

    // Fetch posts
    const posts = await BlogPost.find(query)
      .sort({ date: -1 })
      .limit(limit)
      .skip(skip)
      .lean();

    // Get total count for pagination
    const total = await BlogPost.countDocuments(query);

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

