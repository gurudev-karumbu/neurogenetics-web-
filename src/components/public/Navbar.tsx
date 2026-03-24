'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import LangSwitcher from './LangSwitcher';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  {
    label: 'Services',
    children: [
      { href: '/services/mind', label: 'Mind — Psychology' },
      { href: '/services/neuro', label: 'Brain — Brain Science' },
      { href: '/services/body', label: 'Body — Functional Medicine' },
      { href: '/services/energy', label: 'Bio-Resonance & Frequency' },
    ],
  },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 dark:bg-[#070d1a]/95 backdrop-blur border-b border-gray-100 dark:border-teal-900/40 shadow-sm dark:shadow-teal-900/20 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1.5">
            <div className="rounded-lg overflow-hidden flex-shrink-0" style={{ background: '#0d1b2e' }}>
              <Image
                src="/images/logo.png"
                alt="Neuro-Genetics logo"
                width={52}
                height={57}
                className="block"
                priority
              />
            </div>
            <span className="text-base font-bold hidden sm:inline" style={{ color: 'var(--primary)' }}>
              Neuro<span style={{ color: 'var(--teal)' }}>genetics</span><span style={{ color: 'var(--gold)' }}>.my</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) =>
              link.children ? (
                <div key="services" className="relative group">
                  <button
                    className="text-sm font-medium text-gray-700 hover:text-teal-600 flex items-center gap-1"
                    style={{ color: 'var(--text)' }}
                  >
                    Services
                    <svg className="w-3 h-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-800 first:rounded-t-lg last:rounded-b-lg"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href!}
                  className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
            <Link
              href="/contact"
              className="text-sm font-semibold px-4 py-2 rounded-lg text-white transition-colors"
              style={{ background: 'var(--primary)' }}
            >
              Book Consultation
            </Link>
          </div>

          {/* Lang + Theme toggle + Mobile toggle */}
          <div className="flex items-center gap-1">
            <div className="hidden md:flex">
              <LangSwitcher />
            </div>
            <ThemeToggle />
            <button
              className="md:hidden p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white dark:bg-[#070d1a] border-t border-gray-100 dark:border-teal-900/30 px-4 py-3 space-y-1">
          {NAV_LINKS.map((link) =>
            link.children ? (
              <div key="services-mobile">
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="w-full text-left px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50"
                >
                  Services
                </button>
                {servicesOpen && (
                  <div className="pl-4 space-y-1">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-3 py-2 text-sm text-gray-600 rounded-lg hover:bg-blue-50"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href!}
                className="block px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            )
          )}
          <Link
            href="/contact"
            className="block mt-2 px-3 py-2 text-sm font-semibold text-white text-center rounded-lg"
            style={{ background: 'var(--primary)' }}
            onClick={() => setMobileOpen(false)}
          >
            Book Consultation
          </Link>
        </div>
      )}
    </nav>
  );
}
