import { useState, ChangeEvent } from 'react';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setPreviewUrl(objectUrl);
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Upload and Preview Image</h1>

      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
      />

      {previewUrl && (
        <div
          style={{
            width: '350px',
            height: '350px',
            marginTop: '1rem',
            overflow: 'hidden',
            border: '1px solid #ccc',
            borderRadius: '8px',
          }}
        >
          <img
            src={previewUrl}
            alt="Selected preview"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>
      )}
    </div>
);
}

export default Home;
