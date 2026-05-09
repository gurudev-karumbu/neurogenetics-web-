'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

interface ServiceCardProps {
  icon: string;
  title: string;
  sub: string;
  color: string;
  lightClass: string;
  href: string;
  desc: string;
  image: string;
  defaultOpen?: boolean;
  index?: number;
}

export default function ServiceCard({ icon, title, sub, color, href, desc, image, defaultOpen = false, index = 0 }: ServiceCardProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-gray-100 dark:border-gray-800 last:border-0">
      {/* Header row */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center gap-4 py-5 px-2 text-left group cursor-pointer"
      >
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0 transition-transform duration-200 group-hover:scale-110"
          style={{ background: `${color}20` }}
        >
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-base md:text-lg" style={{ color }}>{title}</h3>
          <p className="text-xs text-gray-400 dark:text-gray-500 truncate">{sub}</p>
        </div>
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300"
          style={{ background: `${color}15`, border: `1px solid ${color}30` }}
        >
          <svg
            className="w-4 h-4 transition-transform duration-300"
            style={{ color, transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {/* Expanded content */}
      <div
        className="overflow-hidden transition-all duration-400 ease-in-out"
        style={{ maxHeight: open ? 500 : 0, opacity: open ? 1 : 0 }}
      >
        <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 pb-8 px-2`}>
          {/* Text */}
          <div className={`flex-1 flex flex-col ${index % 2 !== 0 ? 'items-end text-right' : 'items-start text-left'}`}>
            <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-6">{desc}</p>
            <Link
              href={href}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-85"
              style={{ background: color }}
            >
              Explore {title} →
            </Link>
          </div>
          {/* Image */}
          <div className="flex-shrink-0 w-full md:w-72 lg:w-96 rounded-2xl overflow-hidden" style={{ aspectRatio: '16/9' }}>
            <div className="relative w-full h-full" style={{ minHeight: 180 }}>
              <Image
                src={image}
                alt={`${title} services at Neurogenetics.my`}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute inset-0" style={{ background: `linear-gradient(to right, transparent 60%, ${color}20)` }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
