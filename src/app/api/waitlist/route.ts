import { NextRequest, NextResponse } from 'next/server';
import { waitlistSchema } from '@/lib/schemas';
import { checkRateLimit } from '@/lib/rate-limit';
import { query } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] ??
               request.headers.get('x-real-ip') ??
               'unknown';

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { success: false, error: "You've submitted recently. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const result = waitlistSchema.safeParse(body);

    if (!result.success) {
      const firstError = result.error.issues[0];
      return NextResponse.json(
        { success: false, error: firstError?.message || 'Invalid input' },
        { status: 400 }
      );
    }

    const data = result.data;

    if (data.hp_field && data.hp_field.length > 0) {
      return NextResponse.json(
        { success: true, message: "You're on the list!" },
        { status: 201 }
      );
    }

    try {
      await query(
        `INSERT INTO waitlist (email, product_interest, source_page, ip_address, created_at)
         VALUES ($1, $2, $3, $4, NOW())`,
        [data.email, data.product_interest, data.source_page || null, ip]
      );
    } catch (dbError) {
      console.error('Database insert failed, waitlist data:', { email: data.email, timestamp: new Date().toISOString() });
      console.error('DB error:', dbError);
    }

    return NextResponse.json(
      { success: true, message: "You're on the list!" },
      { status: 201 }
    );
  } catch (error) {
    console.error('Waitlist submission error:', error);
    return NextResponse.json(
      { success: false, error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
