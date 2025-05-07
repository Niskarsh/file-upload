// pages/index.tsx
import { useState, ChangeEvent } from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'  // Next.js Image component

const Home: NextPage = () => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const objectUrl = URL.createObjectURL(file)
      setPreviewUrl(objectUrl)
    }
  }

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
            width: 350,
            height: 350,
            marginTop: '1rem',
            overflow: 'hidden',
            position: 'relative',
            borderRadius: 8,
            border: '1px solid #ccc'
          }}
        >
          <Image
            src={previewUrl}
            alt="Selected preview"
            fill
            style={{ objectFit: 'cover' }}
            unoptimized               // disable optimization for blob URLs
            loader={({ src }) => src} // return the blob URL unchanged
          />
        </div>
      )}
    </div>
)
}

export default Home
