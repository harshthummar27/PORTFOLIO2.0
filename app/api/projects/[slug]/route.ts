import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Project from '@/models/Project';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    await connectDB();

    const { slug } = await params;

    const project = await Project.findOne({ slug });

    if (!project) {
      return NextResponse.json(
        { success: false, error: 'Project not found' },
        { status: 404 }
      );
    }

    // Increment views
    await Project.findByIdAndUpdate(project._id, { $inc: { views: 1 } });

    return NextResponse.json({
      success: true,
      data: project,
    });
  } catch (error: any) {
    console.error('Error fetching project:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to fetch project' },
      { status: 500 }
    );
  }
}

// Optional: Track project link clicks
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    await connectDB();

    const { slug } = await params;
    const body = await request.json();
    const { linkType } = body; // 'live' or 'github'

    const project = await Project.findOne({ slug });

    if (!project) {
      return NextResponse.json(
        { success: false, error: 'Project not found' },
        { status: 404 }
      );
    }

    // Increment clicks
    await Project.findByIdAndUpdate(project._id, { $inc: { clicks: 1 } });

    return NextResponse.json({
      success: true,
      message: 'Click tracked successfully',
    });
  } catch (error: any) {
    console.error('Error tracking click:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to track click' },
      { status: 500 }
    );
  }
}

