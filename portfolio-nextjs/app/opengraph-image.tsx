import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Hafiz Muhammad Rizwan | Software Engineer & AI Specialist';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
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
          background: 'linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 100%)',
          position: 'relative',
        }}
      >
        {/* Background circles */}
        <div
          style={{
            position: 'absolute',
            top: '10%',
            left: '10%',
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(0, 240, 255, 0.3) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(60px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '10%',
            right: '10%',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(184, 41, 255, 0.3) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(60px)',
          }}
        />

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            zIndex: 1,
            padding: '0 80px',
          }}
        >
          <h1
            style={{
              fontSize: '72px',
              fontWeight: 'bold',
              background: 'linear-gradient(135deg, #00f0ff 0%, #b829ff 50%, #ff006b 100%)',
              backgroundClip: 'text',
              color: 'transparent',
              margin: 0,
              marginBottom: '20px',
            }}
          >
            Hafiz Muhammad Rizwan
          </h1>
          <p
            style={{
              fontSize: '38px',
              color: '#00f0ff',
              margin: 0,
              marginBottom: '20px',
              fontWeight: 600,
            }}
          >
            Software Engineer & AI Specialist
          </p>
          <p
            style={{
              fontSize: '24px',
              color: '#b829ff',
              margin: 0,
              marginBottom: '30px',
              fontWeight: 500,
            }}
          >
            Sevteq • FAST-NUCES
          </p>
          <p
            style={{
              fontSize: '28px',
              color: '#9ca3af',
              margin: 0,
              lineHeight: 1.4,
            }}
          >
            Flutter • Spring Boot • AI Integration • React
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
