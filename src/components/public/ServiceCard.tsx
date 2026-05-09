'use client';
import Link from 'next/link';
import { useState } from 'react';

interface ServiceCardProps {
  icon: string;
  title: string;
  sub: string;
  color: string;
  lightClass: string;
  href: string;
  desc: string;
  defaultOpen?: boolean;
}

export default function ServiceCard({ icon, title, sub, color, lightClass, href, desc, defaultOpen = false }: ServiceCardProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div
      className={`glass-card rounded-2xl border-t-4 transition-all duration-300 overflow-hidden`}
      style={{ borderTopColor: color }}
    >
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full text-left p-6 flex items-start gap-4 cursor-pointer"
      >
        <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0" style={{ background: `${color}20` }}>
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-lg mb-0.5" style={{ color }}>{title}</h3>
          <p className="text-xs font-medium text-gray-400 dark:text-gray-500">{sub}</p>
        </div>
        <svg
          className="w-5 h-5 flex-shrink-0 mt-1 transition-transform duration-300"
          style={{ color, transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? 300 : 0, opacity: open ? 1 : 0 }}
      >
        <div className="px-6 pb-6">
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">{desc}</p>
          <Link
            href={href}
            className="inline-flex items-center gap-1 text-xs font-semibold transition-opacity hover:opacity-70"
            style={{ color }}
          >
            Learn more →
          </Link>
        </div>
      </div>
    </div>
  );
}
