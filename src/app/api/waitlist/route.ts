import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const waitlistSchema = z.object({
  email: z.string().email(),
  product_interest: z.enum(['papertrail', 'cityshield', 'general']),
  source_page: z.string().optional(),
});

// Rate limiting map
const rateLimit = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 10;
const RATE_LIMIT_WINDOW = 60 * 60 * 1000;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimit.get(ip);

  if (!record || now > record.resetTime) {
    rateLimit.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (record.count >= RATE_LIMIT) {
    return false;
  }

  record.count++;
  return true;
}

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
      return NextResponse.json(
        { success: false, error: 'Invalid email format' },
        { status: 400 }
      );
    }

    const data = result.data;

    // In production, store in Supabase
    console.log('New waitlist signup:', {
      email: data.email,
      product_interest: data.product_interest,
      source_page: data.source_page,
      timestamp: new Date().toISOString(),
    });

    // TODO: Uncomment when Supabase is configured
    // const supabase = createClient();
    // const { error } = await supabase.from('waitlist').insert({
    //   email: data.email,
    //   product_interest: data.product_interest,
    //   source_page: data.source_page,
    // });
    // if (error) throw error;

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
