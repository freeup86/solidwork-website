import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'SolidWork Systems - Practical Software for Real-World Trades';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0d0d0f',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Grid pattern overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(59, 130, 246, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.08) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        {/* Amber glow */}
        <div
          style={{
            position: 'absolute',
            top: -100,
            right: -100,
            width: 400,
            height: 400,
            borderRadius: '50%',
            background: 'rgba(245, 158, 11, 0.15)',
            filter: 'blur(80px)',
          }}
        />

        {/* Blueprint glow */}
        <div
          style={{
            position: 'absolute',
            bottom: -100,
            left: -100,
            width: 400,
            height: 400,
            borderRadius: '50%',
            background: 'rgba(59, 130, 246, 0.1)',
            filter: 'blur(80px)',
          }}
        />

        {/* Logo hex */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 80,
            height: 80,
            borderRadius: 20,
            background: '#f59e0b',
            marginBottom: 32,
          }}
        >
          <svg width="44" height="44" viewBox="0 0 24 24" fill="none">
            <polygon
              points="20.66,7 20.66,17 12,22 3.34,17 3.34,7 12,2"
              fill="#0d0d0f"
              stroke="#0d0d0f"
              strokeWidth="1.75"
              strokeLinejoin="round"
            />
            <polygon
              points="15.9,9.75 15.9,14.25 12,16.5 8.1,14.25 8.1,9.75 12,7.5"
              fill="#f59e0b"
              stroke="#f59e0b"
              strokeWidth="1.25"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 56,
            fontWeight: 800,
            color: 'white',
            letterSpacing: '-0.02em',
            textAlign: 'center',
            lineHeight: 1.1,
          }}
        >
          SolidWork Systems
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 24,
            color: '#b8b8c8',
            marginTop: 16,
            textAlign: 'center',
          }}
        >
          Practical Software for Real-World Trades
        </div>

        {/* Product pills */}
        <div
          style={{
            display: 'flex',
            gap: 12,
            marginTop: 40,
          }}
        >
          {['SolidBid', 'PaperTrail', 'CityShield'].map((name) => (
            <div
              key={name}
              style={{
                padding: '8px 20px',
                borderRadius: 50,
                border: '1px solid rgba(255,255,255,0.15)',
                background: 'rgba(255,255,255,0.05)',
                color: '#f59e0b',
                fontSize: 16,
                fontWeight: 600,
              }}
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
