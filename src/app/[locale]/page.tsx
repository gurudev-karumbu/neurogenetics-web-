import Navbar from '@/components/public/Navbar';
import Footer from '@/components/public/Footer';
import FourDModel from '@/components/public/FourDModel';
import Link from 'next/link';
import Image from 'next/image';

const SERVICES = [
  {
    icon: '🧠',
    title: 'Mind',
    sub: 'Psychology & Therapy',
    color: '#4f6fd4',
    lightClass: 'bg-blue-50 dark:bg-blue-950/40',
    href: '/services/mind',
    desc: 'Hypnotherapy, psychotherapy, and psychological assessments for anxiety, depression, and emotional wellbeing.',
  },
  {
    icon: '⚡',
    title: 'Brain',
    sub: 'Brain Science & QEEG',
    color: '#0d9488',
    lightClass: 'bg-teal-50 dark:bg-teal-950/40',
    href: '/services/neuro',
    desc: 'QEEG brain mapping and neurofeedback therapy to retrain brainwave patterns for lasting mental clarity.',
  },
  {
    icon: '🔬',
    title: 'Body',
    sub: 'Functional Medicine',
    color: '#e05252',
    lightClass: 'bg-red-50 dark:bg-red-950/40',
    href: '/services/body',
    desc: 'Functional nutrition, hormone testing, and physiological root-cause analysis of mental health challenges.',
  },
  {
    icon: '✨',
    title: 'Bio-Resonance',
    sub: 'Resonance & Frequency',
    color: '#a855f7',
    lightClass: 'bg-purple-50 dark:bg-purple-950/40',
    href: '/services/energy',
    desc: 'Bio-Well and Cell Wellbeing assessments using resonance and frequency analysis to address energetic imbalances.',
  },
];

const CONDITIONS = [
  'Anxiety & Panic', 'Depression', 'ADHD & Focus', 'Trauma & PTSD',
  'Burnout & Stress', 'Brain Fog', 'Postpartum Depression', 'Sleep Issues',
  'Psychosomatic Conditions', 'Hormonal Mood Disorders',
];

const TESTIMONIALS = [
  {
    quote: "The neurofeedback sessions have transformed my ability to focus. After years of ADHD struggles, I finally feel in control.",
    name: "A.R., Kuala Lumpur",
    condition: "ADHD",
  },
  {
    quote: "Prabhu's integrative approach found the thyroid imbalance that was driving my depression. I feel like myself again.",
    name: "S.L., Petaling Jaya",
    condition: "Depression",
  },
  {
    quote: "The hypnotherapy work was life-changing. My anxiety reduced within weeks in a way medication alone never achieved.",
    name: "M.K., Selangor",
    condition: "Anxiety",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      <Navbar />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1a2a6c] via-[#163570] to-[#0d5c69] dark:from-[#04070f] dark:via-[#080f1f] dark:to-[#061520]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full opacity-10 dark:opacity-20 bg-yellow-400 dark:bg-yellow-300 blur-3xl" />
          <div className="absolute -bottom-32 -left-20 w-80 h-80 rounded-full opacity-10 dark:opacity-20 bg-teal-400 dark:bg-teal-300 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-0 dark:opacity-5 bg-indigo-400 blur-3xl" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8 py-16 md:py-20">
            {/* Text */}
            <div className="flex-1 text-center lg:text-left text-white">
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full font-bold mb-4 text-sm md:text-base bg-yellow-400/25 text-yellow-300 border border-yellow-400/50 tracking-wide">
                ✦ Integrative Mental Health — Malaysia
              </div>
              <p className="text-yellow-200/80 text-sm md:text-base font-medium mb-4 mx-auto lg:mx-0 max-w-xl">
                True mental wellbeing starts with understanding your brain, body, and beyond.
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5">
                Heal at Every Level.
              </h1>
              <div className="flex flex-wrap gap-3 mb-8 justify-center lg:justify-start">
                {[
                  { label: 'Mind',          icon: '🧠', color: '#818cf8' },
                  { label: 'Brain',         icon: '⚡', color: '#2dd4bf' },
                  { label: 'Body',          icon: '🔬', color: '#e05252' },
                  { label: 'Bio-Resonance', icon: '✨', color: '#a855f7' },
                ].map((d) => (
                  <span
                    key={d.label}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-base font-bold border-2"
                    style={{ color: d.color, borderColor: `${d.color}70`, background: `${d.color}22` }}
                  >
                    <span>{d.icon}</span>
                    {d.label}
                  </span>
                ))}
              </div>
              <p className="text-lg text-blue-200 max-w-xl mb-10 leading-relaxed mx-auto lg:mx-0">
                The <strong className="text-white">Neuro-Genetics 4D Model</strong> addresses mental health
                across four interconnected dimensions — because true healing cannot come from treating just one layer.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/contact" className="px-8 py-3.5 rounded-xl font-semibold text-sm bg-yellow-400 text-blue-900 hover:bg-yellow-300 transition-colors">
                  Book a Consultation
                </Link>
                <Link href="#model" className="px-8 py-3.5 rounded-xl font-semibold text-sm border border-white/30 hover:bg-white/10 transition-colors">
                  Explore the 4D Model
                </Link>
              </div>
            </div>
            {/* Hero image */}
            <div className="flex-1 w-full max-w-lg lg:max-w-none">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                <Image
                  src="/images/hero-woman.png"
                  alt="Malaysian woman in a wellness consultation"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Conditions scroll banner ───────────────────────────────────────── */}
      <section className="py-3 border-b border-gray-100 dark:border-teal-900/30 bg-white dark:bg-[#070d1a] overflow-hidden transition-colors">
        <div className="flex w-max animate-marquee gap-8">
          {[...CONDITIONS, ...CONDITIONS].map((c, i) => (
            <span key={i} className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-teal-500" />
              {c}
            </span>
          ))}
        </div>
      </section>

      {/* ── Why Brain Imaging? ────────────────────────────────────────────── */}
      <section className="py-16 bg-gradient-to-br from-[#0d1b2e] to-[#0f2a3a] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-4 bg-teal-400/20 text-teal-300 border border-teal-400/30">
              The Brain-First Approach
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Why Brain Imaging Changes Everything
            </h2>
            <p className="text-blue-200 max-w-2xl mx-auto text-sm leading-relaxed">
              Mental health comes from how the brain functions. When the brain is not working optimally,
              thoughts and emotions are affected — yet most approaches never look at the brain directly.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: '🧬',
                title: 'Traditional Psychiatry',
                body: 'Relies on symptoms and labels. Assumes everyone with the same diagnosis is the same — so treatment becomes trial and error, often guesswork.',
                accent: '#e05252',
              },
              {
                icon: '📡',
                title: 'QEEG Brain Mapping',
                body: 'We measure your brain directly using Quantitative EEG — seeing exactly which regions are over- or under-active and how your unique brain is wired.',
                accent: '#2dd4bf',
              },
              {
                icon: '🎯',
                title: 'Personalised Treatment',
                body: 'Because every brain is different, your therapy plan is built around your actual brain data — not just your symptoms. Precision healing, not guesswork.',
                accent: '#fdbb2d',
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-2xl p-6 border border-white/10 bg-white/5 backdrop-blur"
                style={{ borderTopColor: card.accent, borderTopWidth: 3 }}
              >
                <div className="text-3xl mb-3">{card.icon}</div>
                <h3 className="font-bold text-base mb-2" style={{ color: card.accent }}>{card.title}</h3>
                <p className="text-sm text-blue-200 leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4D Model ──────────────────────────────────────────────────────── */}
      <section id="model" className="py-20 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold heading-underline-center text-blue-900 dark:text-blue-300">
              The Neuro-Genetics 4D Model
            </h2>
            <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-sm leading-relaxed">
              Mental health challenges rarely arise from a single cause. Our model examines all four
              dimensions simultaneously — click each to discover how they interact.
            </p>
          </div>
          <FourDModel />
        </div>
      </section>

      {/* ── Services cards ────────────────────────────────────────────────── */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950 transition-colors">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold heading-underline-center text-blue-900 dark:text-blue-300">
              Our Services
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="glass-card rounded-2xl p-6 hover:shadow-xl transition-shadow"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 ${s.lightClass}`}>
                  {s.icon}
                </div>
                <h3 className="font-bold text-lg mb-0.5 text-blue-900 dark:text-blue-300">{s.title}</h3>
                <p className="text-xs font-medium text-gray-400 dark:text-gray-500 mb-3">{s.sub}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{s.desc}</p>
                <p className="mt-4 text-xs font-semibold text-teal-600 dark:text-teal-400">Learn more →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why integrative ───────────────────────────────────────────────── */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Images grid */}
            <div className="flex-1 grid grid-cols-2 gap-3 w-full max-w-md mx-auto lg:mx-0">
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4] shadow-lg">
                <Image
                  src="/images/mother-child.jpg"
                  alt="Malaysian mother and child"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4] shadow-lg mt-8">
                <Image
                  src="/images/wellness-woman.jpg"
                  alt="Woman meditating in wellness studio"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </div>
            {/* Text */}
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-6 heading-underline text-blue-900 dark:text-blue-300">
                Why Integrative Care?
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 text-base">
                A thyroid imbalance can cause depression. A disrupted cortisol cycle can trigger anxiety.
                Unresolved trauma can rewire brainwave patterns. Treating only the symptoms — with medication
                or therapy alone — misses the deeper picture.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base">
                The Neuro-Genetics 4D Model evaluates all four dimensions simultaneously, identifying the{' '}
                <strong className="text-blue-900 dark:text-blue-300">root causes</strong> — not just the surface symptoms
                — so that recovery is complete, lasting, and truly yours.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { num: '4', label: 'Integrated Dimensions' },
                  { num: '10+', label: 'Conditions Addressed' },
                  { num: '~2 months', label: 'Avg. Anxiety Recovery' },
                  { num: '1', label: 'Comprehensive Assessment' },
                ].map((stat) => (
                  <div key={stat.label} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 text-center">
                    <p className="text-3xl font-bold text-teal-600 dark:text-teal-400">{stat.num}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ──────────────────────────────────────────────────── */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950 transition-colors">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold heading-underline-center text-blue-900 dark:text-blue-300">
              Client Experiences
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="glass-card rounded-2xl p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 italic leading-relaxed mb-4">&quot;{t.quote}&quot;</p>
                <p className="text-sm font-semibold text-blue-900 dark:text-blue-300">{t.name}</p>
                <p className="text-xs text-gray-400 dark:text-gray-500">{t.condition}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="py-20 text-white text-center bg-gradient-to-br from-teal-600 to-blue-900">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Begin Your Healing Journey?</h2>
          <p className="text-teal-100 mb-8 text-sm leading-relaxed">
            A comprehensive 4D assessment is the first step to understanding what is truly driving
            your mental health challenges.
          </p>
          <Link href="/contact" className="inline-block px-8 py-3.5 rounded-xl font-semibold text-sm bg-yellow-400 text-blue-900 hover:bg-yellow-300 transition-colors">
            Book Your Consultation Today
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
