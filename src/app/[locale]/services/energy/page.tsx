import type { Metadata } from 'next';
import Navbar from '@/components/public/Navbar';
import Footer from '@/components/public/Footer';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Bio-Resonance — Resonance & Frequency Therapy | Neurogenetics.my',
  description:
    'Bio-Well analysis, Cell Wellbeing assessment, and resonance frequency mapping in Malaysia. Understanding and supporting the body\'s energy field for holistic mental and physical wellbeing.',
  keywords: [
    'bio-resonance therapy malaysia',
    'bio-well analysis malaysia',
    'cell wellbeing assessment malaysia',
    'energy field assessment malaysia',
    'frequency therapy malaysia',
    'aura analysis malaysia',
    'holistic mental health malaysia',
    'bioenergetics malaysia',
    'integrative wellness malaysia',
  ],
  openGraph: {
    title: 'Bio-Resonance — Resonance & Frequency Therapy | Neurogenetics.my',
    description:
      'Bioresonance scanning and frequency-based assessments through Bio-Well and Cell Wellbeing technology, addressing the energetic dimension of mental and physical health.',
    url: 'https://neurogenetics.my/services/energy',
    siteName: 'Neurogenetics.my',
    locale: 'en_MY',
    type: 'website',
  },
  alternates: {
    canonical: 'https://neurogenetics.my/services/energy',
  },
};

const SERVICES = [
  {
    icon: '🌐',
    title: 'Bio-Well Analysis',
    desc: 'Bio-Well uses Gas Discharge Visualisation (GDV) technology to capture and analyse the energy field emitted from the fingertips. The result is a detailed visual representation of your biofield, revealing areas of energy surplus or deficiency that correspond to specific organs, systems, and emotional states.',
    detail: [
      'Full biofield energy capture and analysis',
      'Organ and system energy mapping',
      'Stress and emotional balance indicators',
      'Chakra and meridian energy assessment',
      'Detailed visual report with interpretation',
    ],
    color: '#a855f7',
  },
  {
    icon: '🧬',
    title: 'Cell Wellbeing Assessment',
    desc: 'The Cell Wellbeing epigenetic hair analysis evaluates how your environment and lifestyle are influencing your cellular function and gene expression. It identifies over 800 epigenetic indicators covering nutrition, toxins, electromagnetic stress, and emotional wellbeing, providing a comprehensive picture of what is affecting you at a cellular level.',
    detail: [
      'Epigenetic hair follicle analysis',
      '800+ environmental and cellular indicators',
      'Nutritional, emotional, and toxin mapping',
      'Electromagnetic and environmental stress assessment',
      'Personalised 90-day optimisation report',
    ],
    color: '#9333ea',
  },
  {
    icon: '〰️',
    title: 'Resonance & Frequency Mapping',
    desc: 'Every biological system in the body operates at specific electromagnetic frequencies. Resonance mapping identifies where your body\'s natural frequencies are disrupted or imbalanced, and uses targeted frequency-based interventions to support restoration, regulation, and energetic coherence.',
    detail: [
      'Whole-body frequency and resonance assessment',
      'Identification of energetic disruptions',
      'Targeted frequency-based support sessions',
      'Emotional and psychological energy patterns',
      'Integration with 4D healing model findings',
    ],
    color: '#7c3aed',
  },
];

const CONDITIONS = [
  'Chronic stress and overwhelm',
  'Low energy and fatigue',
  'Emotional imbalance',
  'Sleep disturbances',
  'Anxiety without clear cause',
  'Spiritual disconnection',
  'Environmental sensitivities',
  'Post-illness recovery',
  'Hormonal energy shifts',
  'Unexplained physical symptoms',
  'Mental fog and low motivation',
  'Burnout and depletion',
];

const PROCESS = [
  {
    step: '01',
    title: 'Initial Consultation',
    desc: 'A conversation covering your concerns, health history, and goals to determine which Bio-Resonance assessments are most relevant.',
  },
  {
    step: '02',
    title: 'Bio-Well Scan',
    desc: 'A non-invasive fingertip scan capturing your biofield energy in real time, producing a detailed energetic map of your body and systems.',
  },
  {
    step: '03',
    title: 'Cell Wellbeing Analysis',
    desc: 'A hair follicle sample is analysed for 800+ epigenetic indicators, revealing environmental and cellular influences on your wellbeing.',
  },
  {
    step: '04',
    title: 'Integrated Interpretation',
    desc: 'Findings from Bio-Resonance are interpreted alongside Mind and Brain data for a complete, 4D picture of your health.',
  },
  {
    step: '05',
    title: 'Support Protocol',
    desc: 'A personalised resonance and frequency support plan, integrated with the broader Neurogenetics healing programme.',
  },
];

const ACCENT = '#a855f7';

export default function EnergyServicePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      <Navbar />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#100820] via-[#1a0a30] to-[#0d0618]">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-10 blur-3xl" style={{ background: ACCENT }} />
        <div className="absolute -bottom-32 -left-20 w-80 h-80 rounded-full opacity-10 blur-3xl" style={{ background: '#fdbb2d' }} />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="flex flex-col lg:flex-row items-center gap-10">

            {/* Text */}
            <div className="flex-1 text-white text-center lg:text-left">
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-4 border"
                style={{ background: `${ACCENT}25`, color: '#d8b4fe', borderColor: `${ACCENT}50` }}
              >
                ✨ Dimension 04 · Bio-Resonance
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-3 text-purple-300">
                Resonance &amp;<br />Frequency Therapy
              </h1>
              <p className="text-base font-semibold text-white/60 mb-5 tracking-wide">
                The Energetic Dimension of Healing
              </p>
              <p className="text-purple-100 text-base leading-relaxed max-w-xl mb-8 mx-auto lg:mx-0">
                Bioresonance scanning and frequency-based assessments are alternative approaches
                that aim to influence the body and mind using electromagnetic frequencies, assessed
                through Bio-Well and Cell Wellbeing technology — addressing the energetic root of
                imbalance alongside the psychological, neurological, and physiological dimensions.
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
              <div
                className="relative w-56 h-64 md:w-72 md:h-80 rounded-3xl overflow-hidden shadow-2xl border-4"
                style={{ borderColor: `${ACCENT}50` }}
              >
                <Image
                  src="/images/prabhu.jpg"
                  alt="Prabhu Sithamparam, Bio-Resonance and integrative wellness practitioner at Neurogenetics.my"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 768px) 224px, 288px"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #10082090 0%, transparent 55%)' }} />
                <div className="absolute bottom-4 left-0 right-0 text-center">
                  <p className="text-white font-bold text-sm">Prabhu Sithamparam</p>
                  <p className="text-purple-200 text-xs">Bio-Well Practitioner · Integrative Wellness</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 justify-center max-w-xs">
                {['Bio-Well Analysis', 'Cell Wellbeing', 'Frequency Mapping'].map((badge) => (
                  <span
                    key={badge}
                    className="text-xs px-3 py-1 rounded-full font-medium"
                    style={{ background: `${ACCENT}30`, color: '#d8b4fe' }}
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── What is Bio-Resonance ─────────────────────────────────────────── */}
      <section className="py-16 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Image */}
            <div className="flex-shrink-0 w-full max-w-sm mx-auto lg:mx-0">
              <div className="relative rounded-2xl overflow-hidden shadow-xl" style={{ aspectRatio: '4/3' }}>
                <Image
                  src="/images/energy-therapy.png"
                  alt="Bio-Well energy field assessment at Neurogenetics.my"
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
                    The Fourth Dimension of Healing
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base mb-4">
                    The human body is not only a physical and biochemical system. Every cell, organ,
                    and system emits and responds to electromagnetic frequencies. When these frequencies
                    are coherent and balanced, we experience vitality, clarity, and emotional stability.
                    When they are disrupted, symptoms emerge that often have no clear conventional explanation.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base mb-4">
                    Bio-Resonance therapy works with these energetic frequencies directly — assessing
                    the biofield through Bio-Well technology, evaluating epigenetic influences through
                    Cell Wellbeing analysis, and applying targeted frequency support to restore coherence
                    and balance.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base">
                    As the fourth dimension of the Neurogenetics 4D model, Bio-Resonance completes the
                    picture that Mind, Brain, and Body begin — addressing the aspects of health that
                    conventional approaches do not yet fully account for.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── The 4D Connection ─────────────────────────────────────────────── */}
      <section className="py-16 bg-gradient-to-br from-[#100820] to-[#1a0a30] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">How Bio-Resonance Completes the 4D Model</h2>
            <p className="text-purple-200 max-w-xl mx-auto text-sm">
              Each dimension of the Neurogenetics model informs and supports the others.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {[
              { href: '/services/mind', icon: '🧠', label: 'Mind', desc: 'Psychological patterns and subconscious root causes', color: '#4f6fd4' },
              { href: '/services/neuro', icon: '⚡', label: 'Brain', desc: 'Brainwave activity and neural regulation via QEEG', color: '#2dd4bf' },
              { href: '/services/body', icon: '🔬', label: 'Body', desc: 'Gut health, hormones, and nutritional biochemistry', color: '#e05252' },
              { href: '/services/energy', icon: '✨', label: 'Bio-Resonance', desc: 'Biofield coherence, epigenetics, and frequency balance', color: ACCENT },
            ].map((d) => (
              <Link
                key={d.label}
                href={d.href}
                className="rounded-2xl p-5 border border-white/10 bg-white/5 text-center hover:bg-white/10 transition-colors"
                style={{ borderTopColor: d.color, borderTopWidth: 3 }}
              >
                <div className="text-3xl mb-3">{d.icon}</div>
                <h3 className="font-bold text-sm mb-2" style={{ color: d.color }}>{d.label}</h3>
                <p className="text-xs text-purple-200 leading-relaxed">{d.desc}</p>
              </Link>
            ))}
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
              A gentle, non-invasive process to assess and support your body's energetic dimension.
            </p>
          </div>
          <div className="relative">
            <div className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-transparent via-purple-200 dark:via-purple-900 to-transparent" />
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

      {/* ── Treatments ───────────────────────────────────────────────────── */}
      <section id="services" className="py-20 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 dark:text-blue-300 heading-underline-center">
              Our Bio-Resonance Assessments
            </h2>
            <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-sm">
              Three complementary technologies that together provide a complete energetic picture.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {SERVICES.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-shadow flex flex-col"
              >
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

      {/* ── Conditions ───────────────────────────────────────────────────── */}
      <section className="py-16 bg-gradient-to-br from-[#100820] to-[#1a0a30] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Conditions We Support</h2>
            <p className="text-purple-200 max-w-xl mx-auto text-sm">
              Bio-Resonance is particularly valuable when symptoms are persistent, unexplained, or
              have not fully responded to conventional approaches.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {CONDITIONS.map((c) => (
              <span
                key={c}
                className="px-4 py-2 rounded-full text-sm font-medium border"
                style={{ background: `${ACCENT}20`, borderColor: `${ACCENT}40`, color: '#e9d5ff' }}
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Neurogenetics for Bio-Resonance ──────────────────────────── */}
      <section className="py-16 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 heading-underline text-blue-900 dark:text-blue-300">
                Why Include Bio-Resonance in Your Healing?
              </h2>
              <div className="space-y-5">
                {[
                  {
                    icon: '🔎',
                    title: 'Sees What Other Tests Cannot',
                    desc: 'Biofield assessments reveal energetic and epigenetic imbalances that do not show up in standard blood tests or brain scans, completing the picture of your health.',
                  },
                  {
                    icon: '🌿',
                    title: 'Completely Non-Invasive',
                    desc: 'Bio-Well scanning requires only a fingertip placement. Cell Wellbeing analysis uses a hair follicle. Both are gentle, painless, and safe for all ages.',
                  },
                  {
                    icon: '🔗',
                    title: 'Integrated with All Four Dimensions',
                    desc: 'Bio-Resonance findings are interpreted alongside QEEG, psychological, and functional health data, ensuring every dimension of your wellbeing is addressed.',
                  },
                  {
                    icon: '📊',
                    title: 'Personalised 90-Day Action Plan',
                    desc: 'The Cell Wellbeing report provides a detailed 90-day epigenetic optimisation plan covering nutrition, environment, and lifestyle adjustments specific to your profile.',
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
                { num: '800+', label: 'epigenetic indicators assessed' },
                { num: 'GDV', label: 'Gas Discharge Visualisation technology' },
                { num: '90', label: 'day personalised optimisation plan' },
                { num: '4D', label: 'fully integrated healing model' },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl p-6 text-center border"
                  style={{ background: `${ACCENT}08`, borderColor: `${ACCENT}20` }}
                >
                  <p className="text-2xl font-bold mb-2" style={{ color: ACCENT }}>{s.num}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-snug">{s.label}</p>
                </div>
              ))}
              <div
                className="col-span-2 rounded-2xl p-5 border"
                style={{ background: `${ACCENT}08`, borderColor: `${ACCENT}20` }}
              >
                <blockquote className="text-sm text-gray-600 dark:text-gray-300 italic leading-relaxed text-center">
                  &ldquo;True healing accounts for every dimension of the person. When the energy
                  dimension is ignored, we often find that progress plateaus. Bio-Resonance
                  addresses what the other sciences cannot yet fully measure.&rdquo;
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
              Explore the Full 4D Model
            </h2>
            <p className="mt-3 text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-sm">
              Bio-Resonance is most powerful when combined with all four dimensions of the Neurogenetics healing model.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { href: '/services/mind', icon: '🧠', label: 'Mind', sub: 'Psychology & Psychotherapy', color: '#4f6fd4' },
              { href: '/services/neuro', icon: '⚡', label: 'Brain', sub: 'QEEG, Neurofeedback & Photobiomodulation', color: '#2dd4bf' },
              { href: '/services/body', icon: '🔬', label: 'Body', sub: 'Functional Medicine', color: '#e05252' },
            ].map((d) => (
              <Link
                key={d.label}
                href={d.href}
                className="glass-card rounded-2xl p-5 hover:shadow-xl transition-all hover:-translate-y-1 flex items-start gap-4 group"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                  style={{ background: `${d.color}15` }}
                >
                  {d.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-sm mb-1" style={{ color: d.color }}>{d.label}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">{d.sub}</p>
                  <p className="text-xs font-semibold" style={{ color: d.color }}>Learn more →</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="py-20 text-white text-center bg-gradient-to-br from-purple-800 to-[#100820]">
        <div className="max-w-2xl mx-auto px-4">
          <div className="text-4xl mb-4">✨</div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Explore Your Energetic Dimension?
          </h2>
          <p className="text-purple-100 mb-8 text-sm leading-relaxed max-w-lg mx-auto">
            A Bio-Resonance assessment adds a powerful layer to your healing journey. Book a
            consultation with Prabhu to discover what the energy dimension reveals about your
            health and wellbeing.
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
