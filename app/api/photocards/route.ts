import { NextResponse } from 'next/server';
import { photocards } from '@/data/artist';

export async function GET() {
  try {
    return NextResponse.json(
      {
        success: true,
        message: "Successfully fetched Go Younjung's photocards",
        data: photocards,
      },
      { status: 200 },
    );
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: 'Internal Server Error',
      },
      { status: 500 },
    );
  }
}
