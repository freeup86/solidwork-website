import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const leadSchema = z.object({
  email: z.string().email(),
  name: z.string().optional(),
  company: z.string().optional(),
  role: z.enum(['owner', 'estimator', 'ops', 'other']).optional(),
  phone: z.string().optional(),
  trade: z.enum(['electrical', 'hvac', 'plumbing', 'general', 'other']).optional(),
  estimate_volume: z.string().optional(),
  pain_point: z.string().max(2000).optional(),
  source_page: z.string().optional(),
  source_product: z.string().optional(),
  website: z.string().max(0).optional(), // Honeypot
});

// Rate limiting map (in production, use Redis or similar)
const rateLimit = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 10; // 10 requests per hour
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour

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
    // Get IP for rate limiting
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] ??
               request.headers.get('x-real-ip') ??
               'unknown';

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { success: false, error: "You've submitted recently. Please try again in a few minutes." },
        { status: 429 }
      );
    }

    const body = await request.json();

    // Validate input
    const result = leadSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { success: false, error: 'Invalid email format' },
        { status: 400 }
      );
    }

    const data = result.data;

    // Check honeypot
    if (data.website && data.website.length > 0) {
      // Silently accept but don't store (spam)
      return NextResponse.json(
        { success: true, message: "Thanks! We'll be in touch within 24 hours." },
        { status: 201 }
      );
    }

    // In production, this would:
    // 1. Store in Supabase
    // 2. Send confirmation email via Resend
    // 3. Send notification email to team

    // For now, just log it
    console.log('New lead submission:', {
      email: data.email,
      name: data.name,
      company: data.company,
      role: data.role,
      trade: data.trade,
      estimate_volume: data.estimate_volume,
      pain_point: data.pain_point?.substring(0, 100),
      source_page: data.source_page,
      source_product: data.source_product,
      timestamp: new Date().toISOString(),
    });

    // TODO: Uncomment when Supabase is configured
    // const supabase = createClient();
    // const { error } = await supabase.from('leads').insert({
    //   email: data.email,
    //   name: data.name,
    //   company: data.company,
    //   role: data.role,
    //   trade: data.trade,
    //   estimate_volume: data.estimate_volume,
    //   pain_point: data.pain_point,
    //   source_page: data.source_page,
    //   source_product: data.source_product,
    // });
    // if (error) throw error;

    // TODO: Uncomment when Resend is configured
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'SolidWork Systems <noreply@solidwork.systems>',
    //   to: data.email,
    //   subject: 'Thanks for reaching out!',
    //   text: `Hi ${data.name || 'there'},\n\nThanks for your interest. We'll be in touch within 24 hours.\n\nBest,\nSolidWork Systems`,
    // });

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
