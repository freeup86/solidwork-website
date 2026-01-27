import { NextRequest, NextResponse } from 'next/server';
import { leadSchema } from '@/lib/schemas';
import { checkRateLimit } from '@/lib/rate-limit';
import { query } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] ??
               request.headers.get('x-real-ip') ??
               'unknown';

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { success: false, error: "You've submitted recently. Please try again in a few minutes." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const result = leadSchema.safeParse(body);

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
        { success: true, message: "Thanks! We'll be in touch within 24 hours." },
        { status: 201 }
      );
    }

    try {
      await query(
        `INSERT INTO leads (email, name, company, role, phone, trade, estimate_volume, pain_point, source_page, source_product, ip_address, created_at)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, NOW())`,
        [
          data.email,
          data.name || null,
          data.company || null,
          data.role || null,
          data.phone || null,
          data.trade || null,
          data.estimate_volume || null,
          data.pain_point || null,
          data.source_page || null,
          data.source_product || null,
          ip,
        ]
      );
    } catch (dbError) {
      console.error('Database insert failed, lead data:', { email: data.email, timestamp: new Date().toISOString() });
      console.error('DB error:', dbError);
    }

    return NextResponse.json(
      { success: true, message: "Thanks! We'll be in touch within 24 hours." },
      { status: 201 }
    );
  } catch (error) {
    console.error('Lead submission error:', error);
    return NextResponse.json(
      { success: false, error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
