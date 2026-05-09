'use client';
import Image from 'next/image';
import { useState } from 'react';

const PHOTOS = [
  { src: '/images/prabhu-large-workshop-kl.jpeg', caption: 'Corporate wellness workshop — Kuala Lumpur' },
  { src: '/images/prabhu-presenting-workshop-wide.jpeg', caption: 'Body & Mind Connection seminar' },
  { src: '/images/prabhu-workshop-full-body.jpeg', caption: 'Wellness workshop — full session' },
  { src: '/images/prabhu-presenting-full-audience.jpeg', caption: 'Public talk — full-house audience' },
  { src: '/images/prabhu-award-ceremony.jpeg', caption: 'Award presentation at wellness event' },
  { src: '/images/prabhu-workshop-room-overview.jpeg', caption: 'Multi-organisational wellness conference' },
];

export default function SpeakingGallery() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {PHOTOS.map((img) => (
          <button
            key={img.src}
            onClick={() => setLightbox(img.src)}
            className="relative rounded-2xl overflow-hidden shadow-md group text-left cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
            style={{ aspectRatio: '4/3' }}
            aria-label={`View: ${img.caption}`}
          >
            <Image
              src={img.src}
              alt={img.caption}
              fill
              className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute top-2 right-2 bg-black/40 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 115 11a6 6 0 0112 0zm-3 0h-2m-2 0H8m2-2v2m0 2v2" />
              </svg>
            </div>
            <p className="absolute bottom-3 left-3 right-3 text-white text-xs font-medium leading-snug">
              {img.caption}
            </p>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
            aria-label="Close"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div
            className="relative w-full max-w-4xl"
            style={{ aspectRatio: '4/3' }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightbox}
              alt="Event photo"
              fill
              className="object-contain rounded-xl"
              sizes="100vw"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}
