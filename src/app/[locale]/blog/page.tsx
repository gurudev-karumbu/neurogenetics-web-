import type { Metadata } from 'next';
import Navbar from '@/components/public/Navbar';
import Footer from '@/components/public/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog — Coming Soon | Neurogenetics.my',
  description:
    'Insights on integrative mental health, neurofeedback, functional nutrition, and the Neuro-Genetics 4D Model. Coming soon from Prabhu Sithamparam.',
};

const TOPICS = [
  { icon: '🧠', label: 'Psychology & Psychotherapy' },
  { icon: '📡', label: 'QEEG & Brain Mapping' },
  { icon: '⚡', label: 'Neurofeedback Therapy' },
  { icon: '💡', label: 'Photobiomodulation' },
  { icon: '🥗', label: 'Functional Nutrition' },
  { icon: '🦠', label: 'Gut-Brain Connection' },
  { icon: '✨', label: 'Bio-Resonance & Frequency' },
  { icon: '🌿', label: 'Integrative Mental Health' },
];

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      <Navbar />

      <section className="flex-1 flex items-center justify-center py-20 bg-gradient-to-br from-[#1a2a6c] via-[#163570] to-[#0d5c69]">
        <div className="max-w-2xl mx-auto px-4 text-center text-white">

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6 bg-yellow-400/20 text-yellow-300 border border-yellow-400/30">
            Coming Soon
          </div>

          <div className="text-6xl mb-6">✍️</div>

          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Insights from Prabhu
          </h1>

          <p className="text-blue-200 text-base leading-relaxed mb-8 max-w-lg mx-auto">
            Prabhu will be sharing practical insights, case studies, and evidence-based
            perspectives across all four dimensions of integrative mental health.
            Check back soon.
          </p>

          {/* Topics preview */}
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-300 mb-4">Topics we will cover</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {TOPICS.map((t) => (
                <span
                  key={t.label}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-white/10 text-blue-100 border border-white/20"
                >
                  {t.icon} {t.label}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-xl font-semibold text-sm bg-yellow-400 text-blue-900 hover:bg-yellow-300 transition-colors"
            >
              Book a Consultation
            </Link>
            <Link
              href="/"
              className="px-8 py-3.5 rounded-xl font-semibold text-sm border border-white/30 hover:bg-white/10 transition-colors text-white"
            >
              Back to Home
            </Link>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
