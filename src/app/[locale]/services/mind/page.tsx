import type { Metadata } from 'next';
import Navbar from '@/components/public/Navbar';
import Footer from '@/components/public/Footer';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Mind — Psychology & Psychotherapy | Neurogenetics.my',
  description:
    'Comprehensive psychological assessments and psychotherapy in Malaysia. Working at the subconscious level to uncover root causes of anxiety, depression, trauma, and emotional challenges.',
  keywords: [
    'psychotherapy malaysia',
    'clinical hypnotherapy malaysia',
    'psychological assessment malaysia',
    'anxiety treatment malaysia',
    'depression therapy malaysia',
    'trauma therapy malaysia',
    'subconscious therapy malaysia',
    'mental health malaysia',
    'prabhu sithamparam',
  ],
  openGraph: {
    title: 'Mind — Psychology & Psychotherapy | Neurogenetics.my',
    description:
      'Comprehensive psychological assessments and psychotherapy to uncover deeper patterns, behaviours, and emotional challenges. Root cause healing, not symptom management.',
    url: 'https://neurogenetics.my/services/mind',
    siteName: 'Neurogenetics.my',
    locale: 'en_MY',
    type: 'website',
  },
  alternates: {
    canonical: 'https://neurogenetics.my/services/mind',
  },
};

const SERVICES = [
  {
    icon: '🌀',
    title: 'Clinical Hypnotherapy',
    desc: 'A deeply focused, relaxed state is used to access the subconscious mind, where ingrained patterns, beliefs, and emotional responses are stored. Hypnotherapy allows us to identify and reframe these patterns at their source, producing change that lasts.',
    detail: ['Anxiety & panic relief', 'Phobia resolution', 'Habit and addiction release', 'Emotional trauma clearing', 'Self-esteem and confidence building'],
    color: '#4f6fd4',
  },
  {
    icon: '🧩',
    title: 'Psychotherapy',
    desc: 'Evidence-based psychological therapy addressing the full spectrum of emotional and behavioural challenges. Sessions are tailored to each individual, drawing from CBT, trauma-informed approaches, transpersonal psychology, and solution-focused techniques.',
    detail: ['Cognitive Behavioural Therapy (CBT)', 'Trauma-focused therapy', 'Transpersonal psychology', 'Grief and loss support', 'Relationship and family challenges'],
    color: '#5b7fe0',
  },
  {
    icon: '📋',
    title: 'Psychological Assessment',
    desc: 'A thorough, structured evaluation of psychological functioning, identifying underlying patterns, cognitive strengths, emotional challenges, and areas of concern. The assessment forms the foundation of a precise, personalised therapy plan.',
    detail: ['Comprehensive clinical interview', 'Behavioural and cognitive evaluation', 'Emotional health screening', 'Psychometric profiling', 'Detailed written report & recommendations'],
    color: '#6b8fe8',
  },
];

const CONDITIONS = [
  'Anxiety & Panic Attacks',
  'Depression',
  'Trauma & PTSD',
  'Phobias',
  'Burnout & Chronic Stress',
  'Grief & Loss',
  'Low Self-Esteem',
  'Emotional Dysregulation',
  'Relationship Difficulties',
  'Addiction & Habits',
  'Psychosomatic Conditions',
  'Identity & Life Direction',
];

const PROCESS = [
  {
    step: '01',
    title: 'Initial Consultation',
    desc: 'A confidential conversation to understand your concerns, history, and goals. No judgement, just listening.',
  },
  {
    step: '02',
    title: 'Psychological Assessment',
    desc: 'A structured evaluation to identify the deeper patterns, root causes, and psychological factors at play.',
  },
  {
    step: '03',
    title: 'Personalised Therapy Plan',
    desc: 'A tailored plan designed specifically around your profile, combining the most appropriate modalities.',
  },
  {
    step: '04',
    title: 'Therapy Sessions',
    desc: 'Ongoing sessions working at the subconscious level, retraining the mind and releasing root causes.',
  },
  {
    step: '05',
    title: 'Review & Progress',
    desc: 'Regular reviews to track progress, adjust the plan, and celebrate milestones on your healing journey.',
  },
];

const ACCENT = '#4f6fd4';

export default function MindServicePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      <Navbar />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0f1340] via-[#16186a] to-[#0d1050]">
        {/* Glow orbs */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-10 blur-3xl" style={{ background: ACCENT }} />
        <div className="absolute -bottom-32 -left-20 w-80 h-80 rounded-full opacity-10 bg-teal-400 blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="flex flex-col lg:flex-row items-center gap-10">

            {/* Text */}
            <div className="flex-1 text-white text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-4 border"
                style={{ background: `${ACCENT}25`, color: '#a5b4fc', borderColor: `${ACCENT}50` }}>
                🧠 Dimension 01 · Mind
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-3 text-indigo-300">
                Psychology &<br />Psychotherapy
              </h1>
              <p className="text-base font-semibold text-white/60 mb-5 tracking-wide">
                Comprehensive Mind-Level Healing
              </p>
              <p className="text-blue-200 text-base leading-relaxed max-w-xl mb-8 mx-auto lg:mx-0">
                Comprehensive psychological assessments and psychotherapy to uncover deeper patterns,
                behaviours, and emotional challenges. We work at the subconscious level to identify
                and release root causes, retraining the mind towards calmness, clarity, and lasting
                emotional resilience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/contact"
                  className="px-8 py-3.5 rounded-xl font-semibold text-sm transition-colors text-white"
                  style={{ background: ACCENT }}
                >
                  Book a Consultation
                </Link>
                <a
                  href="#services"
                  className="px-8 py-3.5 rounded-xl font-semibold text-sm border border-white/30 hover:bg-white/10 transition-colors text-white"
                >
                  Explore Treatments
                </a>
              </div>
            </div>

            {/* Prabhu photo */}
            <div className="flex-shrink-0 flex flex-col items-center gap-4">
              <div className="relative w-56 h-64 md:w-72 md:h-80 rounded-3xl overflow-hidden shadow-2xl border-4"
                style={{ borderColor: `${ACCENT}50` }}>
                <Image
                  src="/images/prabhu.jpg"
                  alt="Prabhu Sithamparam — Clinical Psychotherapist & Co-founder of Neurogenetics.my"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 768px) 224px, 288px"
                />
                <div className="absolute inset-0" style={{ background: `linear-gradient(to top, #0f134090 0%, transparent 55%)` }} />
                <div className="absolute bottom-4 left-0 right-0 text-center">
                  <p className="text-white font-bold text-sm">Prabhu Sithamparam</p>
                  <p className="text-indigo-200 text-xs">PhD in Psychology · Clinical Hypnotherapist</p>
                </div>
              </div>
              {/* Credential badges */}
              <div className="flex flex-wrap gap-2 justify-center max-w-xs">
                {['PhD Psychology', 'Clinical Hypnotherapist', '20+ Years Experience'].map((badge) => (
                  <span key={badge} className="text-xs px-3 py-1 rounded-full font-medium"
                    style={{ background: `${ACCENT}30`, color: '#c7d2fe' }}>
                    {badge}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Why the Mind matters ──────────────────────────────────────────── */}
      <section className="py-16 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Image */}
            <div className="flex-shrink-0 w-full max-w-sm mx-auto lg:mx-0">
              <div className="relative rounded-2xl overflow-hidden shadow-xl" style={{ aspectRatio: '4/3' }}>
                <Image
                  src="/images/mind-therapy.png"
                  alt="Calm psychotherapy consultation — Neurogenetics.my"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>
            {/* Text */}
            <div className="flex-1">
              <div className="flex items-start gap-4">
                <div className="w-1 rounded-full flex-shrink-0 self-stretch" style={{ background: ACCENT }} />
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-900 dark:text-blue-300">
                    Why the Mind is the Starting Point
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base mb-4">
                    Every thought, emotion, and behaviour originates in the mind. When the mind carries
                    unresolved patterns from childhood experiences, trauma, limiting beliefs, or
                    emotional wounds, these quietly shape every aspect of life: relationships, career,
                    health, and how we experience ourselves.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base mb-4">
                    Most approaches address the surface. Medication manages symptoms. Advice changes
                    behaviour temporarily. But lasting transformation happens when we work at the
                    <strong className="text-blue-900 dark:text-blue-300"> subconscious level</strong>, where
                    the root patterns actually live.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base">
                    At Neurogenetics, our Mind dimension combines psychological assessment, psychotherapy,
                    and clinical hypnotherapy to identify and release these root causes, not just manage
                    their symptoms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── How it works ─────────────────────────────────────────────────── */}
      <section className="py-16 bg-gray-50 dark:bg-gray-950 transition-colors">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 dark:text-blue-300 heading-underline-center">
              How It Works
            </h2>
            <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-sm">
              A structured, compassionate process from your first conversation to lasting change.
            </p>
          </div>
          <div className="relative">
            {/* Connecting line — desktop only */}
            <div className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-transparent via-indigo-200 dark:via-indigo-900 to-transparent" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {PROCESS.map((p) => (
                <div key={p.step} className="relative flex flex-col items-center text-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4 shadow-lg flex-shrink-0 z-10"
                    style={{ background: ACCENT }}
                  >
                    {p.step}
                  </div>
                  <h3 className="font-bold text-sm mb-2 text-blue-900 dark:text-blue-300">{p.title}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Treatments offered ────────────────────────────────────────────── */}
      <section id="services" className="py-20 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 dark:text-blue-300 heading-underline-center">
              Our Mind Treatments
            </h2>
            <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-sm">
              Each modality is chosen and combined based on your unique psychological profile and goals.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {SERVICES.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-shadow flex flex-col"
              >
                {/* Card header */}
                <div className="p-6 pb-4" style={{ background: `${s.color}12` }}>
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
                    style={{ background: `${s.color}20` }}
                  >
                    {s.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: s.color }}>{s.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{s.desc}</p>
                </div>
                {/* Card details */}
                <div className="p-6 pt-4 flex-1 flex flex-col">
                  <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-3">
                    This includes
                  </p>
                  <ul className="space-y-2 flex-1">
                    {s.detail.map((d) => (
                      <li key={d} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: s.color }} />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Conditions ────────────────────────────────────────────────────── */}
      <section className="py-16 bg-gradient-to-br from-[#0f1340] to-[#16186a] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Conditions We Address</h2>
            <p className="text-blue-200 max-w-xl mx-auto text-sm">
              The Mind dimension is effective for a wide range of psychological and emotional conditions.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {CONDITIONS.map((c) => (
              <span
                key={c}
                className="px-4 py-2 rounded-full text-sm font-medium border"
                style={{ background: `${ACCENT}25`, borderColor: `${ACCENT}50`, color: '#c7d2fe' }}
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Neurogenetics for Mind ────────────────────────────────────── */}
      <section className="py-16 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 heading-underline text-blue-900 dark:text-blue-300">
                Why Choose Neurogenetics for Mind Healing?
              </h2>
              <div className="space-y-5">
                {[
                  {
                    icon: '🎯',
                    title: 'Root Cause, Not Symptom Management',
                    desc: 'We work at the subconscious level to find and release what is actually driving your challenges, not just manage their surface expression.',
                  },
                  {
                    icon: '🔬',
                    title: 'Integrated with Brain Science',
                    desc: 'The Mind dimension does not work in isolation. It is integrated with QEEG brain data, functional health insights, and energetic assessments for a complete picture.',
                  },
                  {
                    icon: '🧑‍🎓',
                    title: '20+ Years of Clinical Experience',
                    desc: 'Prabhu Sithamparam brings over 9 years of clinical psychotherapy and 20+ years in health and wellness, with a PhD in Psychology from the University of Sedona.',
                  },
                  {
                    icon: '🌍',
                    title: 'International Credentials',
                    desc: 'Certified with LCCH International, USBCH, and the Malaysian Practitioners of Hypnotherapy Association, with clients across Malaysia, Australia, Canada, India, and Singapore.',
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                      style={{ background: `${ACCENT}15` }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm text-blue-900 dark:text-blue-300 mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: '9+', label: 'Years of Clinical Psychotherapy' },
                { num: 'PhD', label: 'Psychology, University of Sedona' },
                { num: '20+', label: 'Years in Health & Wellness' },
                { num: '5+', label: 'Countries with Clients Served' },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl p-6 text-center border"
                  style={{ background: `${ACCENT}08`, borderColor: `${ACCENT}20` }}
                >
                  <p className="text-3xl font-bold mb-2" style={{ color: ACCENT }}>{s.num}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-snug">{s.label}</p>
                </div>
              ))}
              <div
                className="col-span-2 rounded-2xl p-5 border"
                style={{ background: `${ACCENT}08`, borderColor: `${ACCENT}20` }}
              >
                <blockquote className="text-sm text-gray-600 dark:text-gray-300 italic leading-relaxed text-center">
                  &ldquo;Every individual carries a unique success blueprint. My role is to help you
                  uncover it, by aligning your natural abilities with your life&rsquo;s purpose and
                  healing at every dimension that holds you back.&rdquo;
                </blockquote>
                <p className="text-center text-xs font-semibold mt-3" style={{ color: ACCENT }}>
                  Prabhu Sithamparam, PhD
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Other dimensions ─────────────────────────────────────────────── */}
      <section className="py-16 bg-gray-50 dark:bg-gray-950 transition-colors">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-300">
              The Mind Does Not Work Alone
            </h2>
            <p className="mt-3 text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-sm">
              For complete healing, our 4D model addresses all interconnected dimensions simultaneously.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { href: '/services/neuro', icon: '⚡', label: 'Brain', sub: 'QEEG, Neurofeedback & Photobiomodulation', color: '#2dd4bf' },
              { href: '/services/body', icon: '🔬', label: 'Body', sub: 'Functional Medicine', color: '#e05252' },
              { href: '/services/energy', icon: '✨', label: 'Bio-Resonance', sub: 'Resonance & Frequency', color: '#a855f7' },
            ].map((d) => (
              <Link
                key={d.label}
                href={d.href}
                className="glass-card rounded-2xl p-5 hover:shadow-xl transition-shadow flex items-start gap-4"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                  style={{ background: `${d.color}15` }}
                >
                  {d.icon}
                </div>
                <div>
                  <h3 className="font-bold text-sm mb-1" style={{ color: d.color }}>{d.label}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{d.sub}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="py-20 text-white text-center bg-gradient-to-br from-indigo-700 to-blue-900">
        <div className="max-w-2xl mx-auto px-4">
          <div className="text-4xl mb-4">🧠</div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Work at the Root?
          </h2>
          <p className="text-indigo-100 mb-8 text-sm leading-relaxed max-w-lg mx-auto">
            A confidential consultation with Prabhu is the first step. No pressure, just a genuine
            conversation about where you are and how we can help.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3.5 rounded-xl font-semibold text-sm bg-yellow-400 text-blue-900 hover:bg-yellow-300 transition-colors"
          >
            Book Your Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
