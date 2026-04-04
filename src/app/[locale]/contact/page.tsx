'use client';

import { useState } from 'react';
import Navbar from '@/components/public/Navbar';
import Footer from '@/components/public/Footer';
import Link from 'next/link';

const SERVICES = [
  'Mind — Psychology & Psychotherapy',
  'Brain — QEEG & Neurofeedback',
  'Brain — Transcranial Photobiomodulation',
  'Body — Functional Nutrition',
  'Body — Hormone & Cortisol Testing',
  'Body — Hair Tissue Mineral Analysis',
  'Body — Thyroid & Postpartum Support',
  'Bio-Resonance — Bio-Well Analysis',
  'Bio-Resonance — Cell Wellbeing Assessment',
  'Full 4D Assessment',
  'Not sure — I need guidance',
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', phone: '', service: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      <Navbar />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1a2a6c] via-[#163570] to-[#0d5c69]">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-10 bg-yellow-400 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 w-80 h-80 rounded-full opacity-10 bg-teal-400 blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center text-white">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-4 bg-yellow-400/20 text-yellow-300 border border-yellow-400/30">
            By Appointment Only
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Book a Consultation
          </h1>
          <p className="text-blue-200 text-base leading-relaxed max-w-xl mx-auto">
            Take the first step towards understanding what is truly driving your mental health.
            Fill in the form below and Prabhu will be in touch personally within 1-2 business days.
          </p>
        </div>
      </section>

      {/* ── Contact content ───────────────────────────────────────────────── */}
      <section className="py-16 bg-gray-50 dark:bg-gray-950 transition-colors flex-1">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Info sidebar */}
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-bold text-blue-900 dark:text-blue-300 mb-4">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      icon: '📍',
                      label: 'Location',
                      value: 'Malaysia',
                      sub: 'Serving clients locally and internationally',
                    },
                    {
                      icon: '🕐',
                      label: 'Appointments',
                      value: 'By appointment only',
                      sub: 'Online and in-person sessions available',
                    },
                    {
                      icon: '📧',
                      label: 'Email',
                      value: 'prabhu@neurogenetics.my',
                      sub: 'We respond within 1-2 business days',
                    },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-3 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm">
                      <span className="text-xl flex-shrink-0">{item.icon}</span>
                      <div>
                        <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wide mb-0.5">{item.label}</p>
                        <p className="text-sm font-semibold text-blue-900 dark:text-blue-300">{item.value}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{item.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Services quick links */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm">
                <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wide mb-3">Our Services</p>
                <div className="space-y-2">
                  {[
                    { href: '/services/mind', icon: '🧠', label: 'Mind', color: '#4f6fd4' },
                    { href: '/services/neuro', icon: '⚡', label: 'Brain', color: '#2dd4bf' },
                    { href: '/services/body', icon: '🔬', label: 'Body', color: '#e05252' },
                    { href: '/services/energy', icon: '✨', label: 'Bio-Resonance', color: '#a855f7' },
                  ].map((s) => (
                    <Link
                      key={s.label}
                      href={s.href}
                      className="flex items-center gap-2 text-sm font-medium hover:underline"
                      style={{ color: s.color }}
                    >
                      <span>{s.icon}</span> {s.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* International note */}
              <div className="bg-teal-50 dark:bg-teal-950/30 rounded-xl p-4 border border-teal-100 dark:border-teal-900">
                <p className="text-xs font-semibold text-teal-700 dark:text-teal-400 mb-1">International Clients</p>
                <p className="text-xs text-teal-600 dark:text-teal-300 leading-relaxed">
                  Prabhu works with clients across Malaysia, Australia, New Zealand, Canada,
                  India, and Singapore. Online consultations are available worldwide.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8">
                {status === 'success' ? (
                  <div className="text-center py-12">
                    <div className="text-5xl mb-4">✅</div>
                    <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-2">
                      Enquiry Received
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed max-w-sm mx-auto mb-6">
                      Thank you for reaching out. Prabhu will review your enquiry and be in
                      touch personally within 1-2 business days.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="text-sm font-semibold text-teal-600 dark:text-teal-400 hover:underline"
                    >
                      Submit another enquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <h2 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-1">
                        Send an Enquiry
                      </h2>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        All fields marked with * are required.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          placeholder="Your full name"
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-sm text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1.5">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          placeholder="your@email.com"
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-sm text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1.5">
                          Phone / WhatsApp
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+60 12 345 6789"
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-sm text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1.5">
                          Service of Interest
                        </label>
                        <select
                          name="service"
                          value={form.service}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-sm text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
                        >
                          <option value="">Select a service</option>
                          {SERVICES.map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1.5">
                        Tell us about your situation *
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Briefly describe what you are experiencing and what you are hoping to address. There is no right or wrong answer."
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-sm text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-400 transition resize-none"
                      />
                    </div>

                    {status === 'error' && (
                      <p className="text-sm text-red-500 dark:text-red-400">
                        Something went wrong. Please try again or email us directly at prabhu@neurogenetics.my
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="w-full py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-teal-600 to-blue-800 hover:from-teal-500 hover:to-blue-700 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === 'sending' ? 'Sending...' : 'Send Enquiry'}
                    </button>

                    <p className="text-xs text-gray-400 dark:text-gray-500 text-center">
                      Your information is kept strictly confidential and will not be shared with any third parties.
                    </p>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
