import { NextResponse } from 'next/server';
import { destroyAdminSession } from '@/lib/auth';

export async function POST() {
  try {
    await destroyAdminSession();

    return NextResponse.json({
      success: true,
      message: 'Logout successful',
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || 'Logout failed' },
      { status: 500 }
    );
  }
}

