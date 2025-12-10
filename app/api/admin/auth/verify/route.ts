import { NextResponse } from 'next/server';
import { verifyAdminSession } from '@/lib/auth';

export async function GET() {
  try {
    const isAuthenticated = await verifyAdminSession();

    return NextResponse.json({
      success: true,
      authenticated: isAuthenticated,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, authenticated: false, error: error.message },
      { status: 500 }
    );
  }
}

