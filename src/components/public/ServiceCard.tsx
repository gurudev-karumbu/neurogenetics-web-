'use client';
import Link from 'next/link';
import { useState } from 'react';

interface ServiceCardProps {
  icon: string;
  title: string;
  sub: string;
  color: string;
  href: string;
  desc: string;
}

export default function ServiceCard({ icon, title, sub, color, href, desc }: ServiceCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={href}
      className="glass-card rounded-2xl p-6 border-t-4 transition-all duration-300"
      style={{
        borderTopColor: color,
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        boxShadow: hovered ? `0 16px 40px ${color}35` : undefined,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4" style={{ background: `${color}20` }}>
        {icon}
      </div>
      <h3 className="font-bold text-lg mb-0.5" style={{ color }}>{title}</h3>
      <p className="text-xs font-medium text-gray-400 dark:text-gray-500 mb-3">{sub}</p>
      <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{desc}</p>
      <p className="mt-4 text-xs font-semibold" style={{ color }}>Learn more →</p>
    </Link>
  );
}
