import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = {
  width: 180,
  height: 180,
};
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #00f0ff 0%, #b829ff 50%, #ff006b 100%)',
          borderRadius: '22%',
        }}
      >
        <div
          style={{
            fontSize: 90,
            fontWeight: 'bold',
            color: 'white',
            textShadow: '0 0 30px rgba(0, 0, 0, 0.5)',
          }}
        >
          HR
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
