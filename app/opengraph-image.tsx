import { ImageResponse } from 'next/og';

export const alt = 'Axonix Tech — Premium Web Design & Digital Experiences';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#080B12',
          backgroundImage: 'radial-gradient(circle at 50% 20%, rgba(0, 180, 255, 0.25) 0%, transparent 65%)',
          color: '#F5F8FF',
          padding: '60px',
          fontFamily: 'sans-serif',
          border: '3px solid #1A2436',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            marginBottom: '24px',
            padding: '8px 24px',
            borderRadius: '999px',
            border: '1.5px solid rgba(0, 180, 255, 0.4)',
            backgroundColor: 'rgba(13, 18, 32, 0.8)',
          }}
        >
          <div
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '999px',
              backgroundColor: '#00B4FF',
            }}
          />
          <span style={{ fontSize: '18px', color: '#36C5FF', fontWeight: 600, letterSpacing: '2px' }}>
            YOUR VISION. OUR CODE.
          </span>
        </div>

        <div
          style={{
            fontSize: '68px',
            fontWeight: 900,
            letterSpacing: '3px',
            textAlign: 'center',
            marginBottom: '16px',
            display: 'flex',
            gap: '16px',
          }}
        >
          <span style={{ color: '#F5F8FF' }}>AXONIX</span>
          <span style={{ color: '#00B4FF' }}>TECH</span>
        </div>

        <div
          style={{
            fontSize: '24px',
            color: '#A6B2C5',
            textAlign: 'center',
            maxWidth: '850px',
            marginBottom: '36px',
            lineHeight: 1.4,
          }}
        >
          Modern Websites • Meaningful Digital Experiences • Built for Ambitious Businesses
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
            fontSize: '18px',
            color: '#36C5FF',
            fontFamily: 'monospace',
          }}
        >
          <span>Instagram: @axo_nixtech</span>
          <span>•</span>
          <span>Sub-1.5s Speed</span>
          <span>•</span>
          <span>360px Fluid Mobile</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
