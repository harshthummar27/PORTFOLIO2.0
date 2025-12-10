import { NextRequest, NextResponse } from 'next/server';
import { verifyAdminSession } from '@/lib/auth';
import connectDB from '@/lib/mongodb';
import Project from '@/models/Project';
import { z } from 'zod';
import { slugify } from '@/lib/utils';

const projectSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
  longDescription: z.string().optional(),
  category: z.string().min(1, 'Category is required'),
  technologies: z.array(z.string()).min(1, 'At least one technology is required'),
  liveUrl: z.string().url('Invalid URL'),
  githubUrl: z.string().url('Invalid URL'),
  featured: z.boolean().default(false),
  color: z.string().min(1, 'Color is required'),
  image: z.string().min(1, 'Image is required'),
  year: z.string().optional(),
  client: z.string().optional(),
  challenges: z.array(z.string()).optional(),
  solutions: z.array(z.string()).optional(),
  results: z.array(z.string()).optional(),
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

    const projects = await Project.find()
      .sort({ createdAt: -1 })
      .limit(limit)
      .skip(skip)
      .lean();

    const total = await Project.countDocuments();

    return NextResponse.json({
      success: true,
      data: projects,
      total,
      limit,
      skip,
    });
  } catch (error: any) {
    console.error('Error fetching projects:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to fetch projects' },
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
    const validatedData = projectSchema.parse(body);

    await connectDB();

    // Generate slug from title
    const slug = slugify(validatedData.title);

    // Check if slug already exists
    const existing = await Project.findOne({ slug });
    if (existing) {
      return NextResponse.json(
        { success: false, error: 'A project with this title already exists' },
        { status: 400 }
      );
    }

    // Get the highest ID and increment
    const lastProject = await Project.findOne().sort({ id: -1 });
    const newId = lastProject ? lastProject.id + 1 : 1;

    const project = await Project.create({
      ...validatedData,
      id: newId,
      slug,
      views: 0,
      clicks: 0,
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Project created successfully',
        data: project,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Error creating project:', error);
    if (error.name === 'ZodError') {
      return NextResponse.json(
        { success: false, error: 'Validation failed', details: error.errors },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to create project' },
      { status: 500 }
    );
  }
}

