import { ImageResponse } from 'next/og';

export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 18,
          background: '#080B12',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#00B4FF',
          fontWeight: 900,
          borderRadius: 6,
          border: '1.5px solid #1A2436',
          fontFamily: 'sans-serif',
          letterSpacing: '-0.5px',
        }}
      >
        AX
      </div>
    ),
    {
      ...size,
    }
  );
}
