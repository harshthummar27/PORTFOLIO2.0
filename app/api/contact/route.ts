import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Contact from '@/models/Contact';
import { z } from 'zod';

// Validation schema
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(3, 'Subject must be at least 3 characters').max(200),
  message: z.string().min(10, 'Message must be at least 10 characters').max(2000),
});

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    let body;
    try {
      body = await request.json();
    } catch (parseError) {
      console.error('Error parsing request body:', parseError);
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid request body. Please check your form data.',
        },
        { status: 400 }
      );
    }

    // Validate input
    let validatedData;
    try {
      validatedData = contactSchema.parse(body);
    } catch (validationError: any) {
      console.error('Validation error:', validationError);
      if (validationError.name === 'ZodError') {
        return NextResponse.json(
          {
            success: false,
            error: 'Validation failed',
            details: validationError.errors,
          },
          { status: 400 }
        );
      }
      throw validationError;
    }

    // Connect to database
    try {
      await connectDB();
    } catch (dbError: any) {
      console.error('Database connection error:', dbError);
      return NextResponse.json(
        {
          success: false,
          error: dbError.message?.includes('MONGODB_URI')
            ? 'Database configuration error. Please check your MongoDB connection string.'
            : 'Database connection failed. Please try again later.',
        },
        { status: 500 }
      );
    }

    // Save to database
    try {
      const contact = await Contact.create(validatedData);

      return NextResponse.json(
        {
          success: true,
          message: 'Thank you for your message! I will get back to you soon.',
          data: {
            id: contact._id,
            name: contact.name,
            email: contact.email,
            subject: contact.subject,
          },
        },
        { status: 201 }
      );
    } catch (dbError: any) {
      console.error('Database save error:', dbError);
      return NextResponse.json(
        {
          success: false,
          error: dbError.message || 'Failed to save your message. Please try again.',
        },
        { status: 500 }
      );
    }
  } catch (error: any) {
    console.error('Unexpected error in contact form:', error);
    console.error('Error stack:', error.stack);
    
    return NextResponse.json(
      {
        success: false,
        error: error.message || 'An unexpected error occurred. Please try again later.',
      },
      { status: 500 }
    );
  }
}

