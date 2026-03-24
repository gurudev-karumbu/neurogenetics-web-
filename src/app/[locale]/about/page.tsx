import Navbar from '@/components/public/Navbar';
import Footer from '@/components/public/Footer';
import Image from 'next/image';
import Link from 'next/link';

const QUALIFICATIONS = [
  { label: 'PhD in Transpersonal Psychology (in progress)', org: 'University of Sedona, USA' },
  { label: 'Life Member', org: 'Malaysian Practitioners of Hypnotherapy Association' },
  { label: 'Life Member', org: 'United States Board of Clinical Hypnotherapy (USBCH)' },
  { label: 'Life Member', org: 'Persatuan Kaunselor Pendidikan Malaysia (PEKA)' },
  { label: 'Member', org: 'Achology — Applied Modern Psychology, UK' },
  { label: 'Certified NLP Practitioner, IGNLP (UK)', org: 'Professional Member (UK)' },
  { label: 'Certified Neuro-Psychology', org: '' },
  { label: 'HRD Corp Certified Trainer', org: '' },
];

const EXPERTISE = [
  {
    icon: '📡',
    title: 'Biofeedback, QEEG & Neurofeedback',
    desc: 'Enhancing emotional regulation, cognitive function, and neuro modulation through direct brain measurement and retraining.',
    color: '#2dd4bf',
  },
  {
    icon: '🖐',
    title: 'Dermatoglyphics Counseling',
    desc: 'Identifying and nurturing inborn talents for personal and career growth through fingerprint-based genetic profiling.',
    color: '#fdbb2d',
  },
  {
    icon: '🎯',
    title: 'Career Counseling',
    desc: 'Personalised career guidance based on mental, emotional, and genetic profiles to align you with your true strengths.',
    color: '#4f6fd4',
  },
  {
    icon: '🧩',
    title: 'Behavioral Therapy',
    desc: 'Evidence-based interventions for mental health challenges, emotional resilience, and stress management.',
    color: '#e05252',
  },
];

const CLIENTELE = [
  { icon: '😔', label: 'Anxiety, depression, phobias & addiction' },
  { icon: '🧠', label: 'ADHD & Autism spectrum disorder' },
  { icon: '💼', label: 'Professionals seeking career alignment' },
  { icon: '🏢', label: 'Corporate stress management & wellness programmes' },
  { icon: '🌏', label: 'Clients from Malaysia, Australia, NZ, Canada, India & Singapore' },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1a2a6c] via-[#163570] to-[#0d5c69] dark:from-[#04070f] dark:via-[#080f1f] dark:to-[#061520]">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full opacity-10 bg-yellow-400 blur-3xl" />
          <div className="absolute -bottom-32 -left-20 w-80 h-80 rounded-full opacity-10 bg-teal-400 blur-3xl" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            {/* Photo */}
            <div className="flex-shrink-0">
              <div className="relative w-48 h-56 md:w-60 md:h-72 rounded-2xl overflow-hidden shadow-2xl border-4 border-yellow-400/30">
                <Image
                  src="/images/prabhu.jpg"
                  alt="Prabhu Sithamparam — Co-founder of Neuro-Genetics"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 768px) 192px, 240px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
              </div>
            </div>
            {/* Intro */}
            <div className="text-white text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-4 bg-yellow-400/20 text-yellow-300 border border-yellow-400/40">
                Co-founder &amp; Therapist
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-3">Prabhu Sithamparam</h1>
              <p className="text-teal-300 font-semibold text-lg mb-5">Co-founder of Neuro-Genetics</p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start text-sm text-blue-200 mb-6">
                <span className="flex items-center gap-1.5"><span className="text-yellow-400">✦</span> 12+ years Training &amp; Business Development</span>
                <span className="flex items-center gap-1.5"><span className="text-yellow-400">✦</span> 9+ years Clinical Psychotherapy</span>
                <span className="flex items-center gap-1.5"><span className="text-yellow-400">✦</span> PhD Candidate, Transpersonal Psychology</span>
              </div>
              <p className="text-blue-200 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Prabhu integrates advanced methodologies — <strong className="text-white">Biofeedback</strong>,{' '}
                <strong className="text-white">QEEG brain scan</strong>, and{' '}
                <strong className="text-white">Neurofeedback therapy</strong> — combined with functional medicine
                and nutritional support, to empower clients in overcoming mental health challenges and achieving
                holistic personal growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Profile Summary ───────────────────────────────────────────────── */}
      <section className="py-16 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 heading-underline text-blue-900 dark:text-blue-300">
            Profile Summary
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-5 text-base">
            As Co-founder of <strong className="text-blue-900 dark:text-blue-300">Neuro-Genetics</strong>, Prabhu
            combines mind science with genetic profiling to treat ADHD, Autism spectrum disorder, and other mental
            health disorders. His unique approach helps individuals identify and nurture their inborn talents,
            providing tailored success strategies to ensure sustainable transformation.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base">
            Prabhu&rsquo;s core mission is to help individuals uncover their{' '}
            <strong className="text-blue-900 dark:text-blue-300">success blueprint</strong> by aligning their
            natural abilities with their life&rsquo;s purpose. Through an integrative approach that combines
            psychotherapy, transpersonal psychology, neurofeedback, and genetic brain profiling, he fosters holistic
            healing to achieve long-lasting transformation — empowering clients to unlock their full potential and
            navigate life&rsquo;s challenges with confidence.
          </p>
        </div>
      </section>

      {/* ── Key Expertise ─────────────────────────────────────────────────── */}
      <section className="py-16 bg-gray-50 dark:bg-gray-950 transition-colors">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold heading-underline-center text-blue-900 dark:text-blue-300">
              Key Expertise &amp; Services
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {EXPERTISE.map((e) => (
              <div key={e.title} className="glass-card rounded-2xl p-6">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
                  style={{ background: `${e.color}20` }}
                >
                  {e.icon}
                </div>
                <h3 className="font-bold text-sm mb-2" style={{ color: e.color }}>{e.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Approach & Philosophy ─────────────────────────────────────────── */}
      <section className="py-16 bg-gradient-to-br from-[#0d1b2e] to-[#0f2a3a] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Approach &amp; Philosophy</h2>
          <blockquote className="text-lg md:text-xl text-blue-200 leading-relaxed italic border-l-4 border-yellow-400 pl-6 text-left">
            &ldquo;Every individual carries a unique success blueprint. My role is to help you uncover it —
            by aligning your natural abilities with your life&rsquo;s purpose, and healing at every dimension
            that holds you back.&rdquo;
          </blockquote>
          <p className="mt-6 text-teal-300 font-semibold">— Prabhu Sithamparam</p>
        </div>
      </section>

      {/* ── Qualifications ────────────────────────────────────────────────── */}
      <section className="py-16 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 heading-underline text-blue-900 dark:text-blue-300">
            Qualifications &amp; Memberships
          </h2>
          <ul className="space-y-3">
            {QUALIFICATIONS.map((q, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1 w-2 h-2 rounded-full flex-shrink-0 bg-teal-500" />
                <span className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  <strong className="text-blue-900 dark:text-blue-300">{q.label}</strong>
                  {q.org && <span className="text-gray-500 dark:text-gray-400"> — {q.org}</span>}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              { num: '12+', label: 'Years Training & Business Development' },
              { num: '9+',  label: 'Years Clinical Psychotherapy' },
              { num: '5+',  label: 'Countries Served' },
            ].map((s) => (
              <div key={s.label} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 text-center">
                <p className="text-3xl font-bold text-teal-600 dark:text-teal-400">{s.num}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Clientele ─────────────────────────────────────────────────────── */}
      <section className="py-16 bg-gray-50 dark:bg-gray-950 transition-colors">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 heading-underline text-blue-900 dark:text-blue-300">
            Who Prabhu Works With
          </h2>
          <ul className="space-y-4">
            {CLIENTELE.map((c) => (
              <li key={c.label} className="flex items-center gap-4 bg-white dark:bg-gray-800 rounded-xl px-5 py-4 shadow-sm">
                <span className="text-2xl flex-shrink-0">{c.icon}</span>
                <span className="text-gray-700 dark:text-gray-200 text-sm leading-relaxed">{c.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="py-16 text-white text-center bg-gradient-to-br from-teal-600 to-blue-900">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Work with Prabhu?</h2>
          <p className="text-teal-100 mb-8 text-sm leading-relaxed">
            Book a consultation and take the first step towards understanding your unique mental health blueprint.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3.5 rounded-xl font-semibold text-sm bg-yellow-400 text-blue-900 hover:bg-yellow-300 transition-colors"
          >
            Book a Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
