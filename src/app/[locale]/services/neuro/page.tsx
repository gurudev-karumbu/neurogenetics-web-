import type { Metadata } from 'next';
import Navbar from '@/components/public/Navbar';
import Footer from '@/components/public/Footer';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Brain — QEEG, Neurofeedback & Photobiomodulation | Neurogenetics.my',
  description:
    'QEEG brain mapping, neurofeedback therapy, and transcranial photobiomodulation in Malaysia. See exactly how your brain is functioning and retrain it for lasting focus, emotional regulation, and mental clarity.',
  keywords: [
    'QEEG brain mapping malaysia',
    'neurofeedback therapy malaysia',
    'ISF neurofeedback malaysia',
    'transcranial photobiomodulation malaysia',
    'brain scan malaysia',
    'ADHD neurofeedback malaysia',
    'anxiety brain treatment malaysia',
    'photobiomodulation red light therapy brain',
    'brainwave training malaysia',
    'neurotherapy malaysia',
    'prabhu sithamparam neurogenetics',
  ],
  openGraph: {
    title: 'Brain — QEEG, Neurofeedback & Photobiomodulation | Neurogenetics.my',
    description:
      'We assess how your brain is functioning using QEEG brain mapping, then retrain brainwave patterns through neurofeedback and transcranial photobiomodulation.',
    url: 'https://neurogenetics.my/services/neuro',
    siteName: 'Neurogenetics.my',
    locale: 'en_MY',
    type: 'website',
    images: [{ url: 'https://neurogenetics.my/images/brain-scan-qeeg.jpeg', width: 1200, height: 800, alt: 'QEEG Brain Mapping & Neurofeedback at Neurogenetics.my' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brain — QEEG, Neurofeedback & Photobiomodulation | Neurogenetics.my',
    description: 'QEEG brain mapping and neurofeedback therapy in Malaysia. See exactly how your brain functions and retrain it for lasting clarity.',
    images: ['https://neurogenetics.my/images/brain-scan-qeeg.jpeg'],
  },
  alternates: {
    canonical: 'https://neurogenetics.my/services/neuro',
  },
};

const SERVICES = [
  {
    icon: '📡',
    title: 'QEEG Brain Mapping',
    desc: 'Quantitative EEG (QEEG) measures your brainwave activity across multiple regions simultaneously. The result is a detailed brain map showing exactly which areas are over-active, under-active, or dysregulated, giving us objective data to guide your entire therapy plan.',
    detail: [
      'Full-cap electrode brain recording',
      'Eyes-open and eyes-closed assessment',
      'Quantitative analysis against normative database',
      'Identification of dysregulated brainwave patterns',
      'Detailed written QEEG report and interpretation',
    ],
    color: '#2dd4bf',
  },
  {
    icon: '🎯',
    title: 'ISF Neurofeedback Therapy',
    desc: 'Infra Slow Fluctuation (ISF) neurofeedback operates below 0.1 Hz, targeting the deepest regulatory rhythms of the brain. Backed by over 70 years of clinical research with 15,000+ practitioners worldwide, ISF is licensed from New York and guides the brain to its optimal regulatory state, producing lasting improvements in focus, mood, sleep, and emotional control.',
    detail: [
      'Licensed ISF protocol from New York',
      'Personalised protocol based on your QEEG results',
      'Real-time brainwave monitoring and feedback',
      'Progressive session-by-session brain retraining',
      'ISF targets deep brain regulatory networks',
      'Non-invasive, medication-free approach',
    ],
    color: '#0d9488',
  },
  {
    icon: '💡',
    title: 'Transcranial Photobiomodulation',
    desc: 'Photobiomodulation (PBM) uses specific wavelengths of red and near-infrared light to stimulate brain cells at a mitochondrial level. This supports cellular energy production, reduces neuroinflammation, and enhances the brain\'s natural capacity to heal, focus, and regulate.',
    detail: [
      'Whole-brain transcranial PBM sessions',
      'Intranasal PBM for deeper brain penetration',
      'Targets focus, sleep, stress, anxiety and depression',
      'Supports mitochondrial function and neuroplasticity',
      'Complements neurofeedback for accelerated results',
    ],
    color: '#14b8a6',
  },
];

const CONDITIONS = [
  'ADHD & Focus Difficulties',
  'Anxiety & Panic Disorder',
  'Depression',
  'Brain Fog',
  'Burnout & Chronic Stress',
  'Sleep Disorders & Insomnia',
  'Trauma & PTSD',
  'Cognitive Decline & Dementia',
  'Memory & Recall Issues',
  'Emotional Dysregulation',
  'Peak Performance',
  'Post-Concussion Recovery',
  'Autism Spectrum (ASD)',
  'Stroke Rehabilitation',
  'Migraine & Chronic Headaches',
  'Parkinson\'s & Essential Tremors',
  'Epilepsy Management',
  'Cerebral Palsy',
  'Traumatic Brain Injury (TBI)',
  'Postpartum Depression',
];

const PROCESS = [
  {
    step: '01',
    title: 'QEEG Assessment',
    desc: 'A full brain mapping session recording your brainwave activity across all regions, both eyes-open and eyes-closed.',
  },
  {
    step: '02',
    title: 'Report & Interpretation',
    desc: 'Prabhu analyses your QEEG data and explains the findings in plain language, showing you exactly what is happening in your brain.',
  },
  {
    step: '03',
    title: 'Personalised Protocol',
    desc: 'A neurofeedback and PBM protocol is designed specifically around your brain map, targeting the regions and patterns that need retraining.',
  },
  {
    step: '04',
    title: 'Therapy Sessions',
    desc: 'Regular neurofeedback and photobiomodulation sessions progressively retrain your brainwave patterns toward healthier function.',
  },
  {
    step: '05',
    title: 'Progress Review',
    desc: 'Periodic QEEG reassessments track your brain\'s improvement objectively, showing measurable change over time.',
  },
];

const TESTIMONIALS = [
  {
    quote: 'After years of ADHD struggles, neurofeedback gave me back my ability to focus. The change was measurable, not just something I felt.',
    name: 'K.L., Kuala Lumpur',
    condition: 'ADHD',
  },
  {
    quote: 'The QEEG showed exactly where my anxiety was coming from in the brain. Knowing the biological cause made the whole process feel real and hopeful.',
    name: 'R.M., Selangor',
    condition: 'Anxiety',
  },
  {
    quote: 'Three months of neurofeedback sessions and my sleep quality transformed completely. I wake up clear-headed for the first time in years.',
    name: 'S.T., Petaling Jaya',
    condition: 'Sleep Disorder',
  },
];

const ACCENT = '#2dd4bf';

export default function BrainServicePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      <Navbar />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#061f1f] via-[#082a2e] to-[#072030]">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-10 blur-3xl" style={{ background: ACCENT }} />
        <div className="absolute -bottom-32 -left-20 w-80 h-80 rounded-full opacity-10 blur-3xl" style={{ background: '#4f6fd4' }} />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="flex flex-col lg:flex-row items-center gap-10">

            {/* Text */}
            <div className="flex-1 text-white text-center lg:text-left">
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-4 border"
                style={{ background: `${ACCENT}25`, color: '#5eead4', borderColor: `${ACCENT}50` }}
              >
                ⚡ Dimension 02 · Brain
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-3 text-teal-300">
                QEEG, Neurofeedback<br />&amp; Photobiomodulation
              </h1>
              <p className="text-base font-semibold text-white/60 mb-5 tracking-wide">
                Objective Brain Assessment and Retraining
              </p>
              <p className="text-teal-100 text-base leading-relaxed max-w-xl mb-8 mx-auto lg:mx-0">
                Every brain has a second chance. We assess how your brain is functioning using QEEG brain
                mapping, then retrain brainwave patterns through ISF neurofeedback. Transcranial
                photobiomodulation supports brain function at a cellular level, enhancing focus, emotional
                regulation, and mental clarity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/contact"
                  className="px-8 py-3.5 rounded-xl font-semibold text-sm transition-colors text-gray-900"
                  style={{ background: ACCENT }}
                >
                  Book a Brain Assessment
                </Link>
                <a
                  href="#services"
                  className="px-8 py-3.5 rounded-xl font-semibold text-sm border border-white/30 hover:bg-white/10 transition-colors text-white"
                >
                  Explore Treatments
                </a>
              </div>
            </div>

            {/* Images stack */}
            <div className="flex-shrink-0 flex flex-row lg:flex-row gap-4 items-end">
              <div
                className="relative w-40 h-52 md:w-52 md:h-64 rounded-3xl overflow-hidden shadow-2xl border-4"
                style={{ borderColor: `${ACCENT}50` }}
              >
                <Image
                  src="/images/prabhu.jpg"
                  alt="Prabhu Sithamparam, QEEG and Neurofeedback specialist at Neurogenetics.my"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 768px) 160px, 208px"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #06141490 0%, transparent 55%)' }} />
                <div className="absolute bottom-3 left-0 right-0 text-center px-2">
                  <p className="text-white font-bold text-xs">Prabhu Sithamparam</p>
                  <p className="text-teal-200 text-xs">QEEG Specialist</p>
                </div>
              </div>
              <div
                className="relative w-40 h-52 md:w-52 md:h-64 rounded-3xl overflow-hidden shadow-2xl border-4 mb-6"
                style={{ borderColor: `${ACCENT}30` }}
              >
                <Image
                  src="/images/neuro-session-male.jpeg"
                  alt="Patient undergoing QEEG brain mapping session at Neurogenetics.my"
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(max-width: 768px) 160px, 208px"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #06141490 0%, transparent 60%)' }} />
                <div className="absolute bottom-3 left-0 right-0 text-center px-2">
                  <p className="text-teal-200 text-xs font-medium">QEEG Session</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Tagline banner ────────────────────────────────────────────────── */}
      <section className="py-6 bg-teal-600 text-white text-center">
        <p className="text-lg font-semibold tracking-wide">
          Every brain has a second chance. We never give up.
        </p>
      </section>

      {/* ── Why brain assessment changes everything ───────────────────────── */}
      <section className="py-16 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Text */}
            <div className="flex-1">
              <div className="flex items-start gap-4">
                <div className="w-1 rounded-full flex-shrink-0 self-stretch" style={{ background: ACCENT }} />
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-900 dark:text-blue-300">
                    Why Looking at the Brain Directly Changes Everything
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base mb-4">
                    Most mental health approaches rely entirely on reported symptoms. A diagnosis is
                    assigned based on what you describe, and treatment follows from that label. But
                    two people with the same diagnosis can have completely different brains.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base mb-4">
                    QEEG brain mapping changes this. By measuring your brainwave activity directly,
                    we can see exactly which regions are dysregulated, how your brain networks
                    communicate, and what specific patterns are driving your symptoms. No guesswork.
                    No one-size-fits-all protocols.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base">
                    Every neurofeedback and photobiomodulation protocol at Neurogenetics is built
                    around your unique brain data, making treatment precise, targeted, and
                    measurably effective.
                  </p>
                </div>
              </div>
            </div>
            {/* Image */}
            <div className="flex-shrink-0 w-full max-w-sm mx-auto lg:mx-0">
              <div className="relative rounded-2xl overflow-hidden shadow-xl" style={{ aspectRatio: '4/3' }}>
                <Image
                  src="/images/neuro-session-female.jpeg"
                  alt="QEEG brain mapping session at Neurogenetics.my"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── QEEG visual ──────────────────────────────────────────────────── */}
      <section className="py-16 bg-gray-50 dark:bg-gray-950 transition-colors">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            {/* Image */}
            <div className="flex-shrink-0 w-full max-w-lg mx-auto lg:mx-0">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ aspectRatio: '16/9' }}>
                <Image
                  src="/images/brain-scan-qeeg.jpeg"
                  alt="QEEG brain scan result showing brainwave activity patterns"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <p className="text-xs text-center text-gray-400 dark:text-gray-500 mt-3">
                A QEEG brain map reveals exactly which regions are over-active, under-active, or dysregulated.
              </p>
            </div>
            {/* Text */}
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4"
                style={{ background: `${ACCENT}20`, color: ACCENT }}>
                What You See in a QEEG
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-900 dark:text-blue-300">
                Your Brain, Mapped in Detail
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base mb-4">
                A QEEG produces a colour-coded brain map showing the electrical activity across every
                region of your cortex. Warm colours indicate over-activation. Cool colours indicate
                under-activation. Each pattern corresponds to specific symptoms you experience.
              </p>
              <div className="space-y-3 mb-6">
                {[
                  { label: 'Excess high-frequency beta', implication: 'Anxiety, racing thoughts, hypervigilance' },
                  { label: 'Excess slow-wave theta', implication: 'Brain fog, attention difficulties, low energy' },
                  { label: 'Dysregulated alpha', implication: 'Sleep problems, emotional dysregulation' },
                  { label: 'Interhemispheric asymmetry', implication: 'Mood disorders, cognitive imbalance' },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3 text-sm">
                    <span className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0" style={{ background: ACCENT }} />
                    <span className="text-gray-700 dark:text-gray-300">
                      <strong className="text-blue-900 dark:text-blue-300">{item.label}:</strong> {item.implication}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-xl p-4 text-sm italic text-teal-800 dark:text-teal-300 border-l-4"
                style={{ borderColor: ACCENT, background: `${ACCENT}15` }}>
                "Why guess when you can see, quantify, and be proactive about your mental health?"
              </div>
            </div>
          </div>

          {/* QEEG Session Process */}
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { step: '01', title: 'Sensor Placement', desc: 'An electrode cap is fitted and saline gel applied to ensure clean signal contact across all brain regions.' },
              { step: '02', title: 'Recording', desc: '40-minute session recording brainwave activity eyes-open and eyes-closed. Safe, non-invasive, read-only.' },
              { step: '03', title: 'LORETA Analysis', desc: 'Results are processed using LORETA 3D mapping, analysing power, phase, coherence, and regional activity.' },
              { step: '04', title: 'Report & Plan', desc: 'Full written report with interpretation within 48 hours. Your therapy plan is built directly from the findings.' },
            ].map((item) => (
              <div key={item.step} className="rounded-xl p-4 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
                <p className="text-xs font-bold mb-2" style={{ color: ACCENT }}>Step {item.step}</p>
                <h4 className="font-bold text-sm text-blue-900 dark:text-blue-300 mb-1">{item.title}</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Traditional vs Brain-First ────────────────────────────────────── */}
      <section className="py-16 bg-gradient-to-br from-[#0d1b2e] to-[#0f2a3a] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Brain-First vs Traditional Approaches</h2>
            <p className="text-blue-200 max-w-xl mx-auto text-sm">
              Understanding the difference between symptom-based and data-driven mental health care.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: '🔀',
                title: 'Traditional Psychiatry',
                body: 'Relies on reported symptoms and diagnostic labels. Treatment is trial and error. Assumes everyone with the same diagnosis needs the same approach.',
                accent: '#e05252',
              },
              {
                icon: '📡',
                title: 'QEEG Brain Mapping',
                body: 'Measures your actual brain activity directly. Identifies precisely which regions and networks are dysregulated, giving an objective biological picture.',
                accent: ACCENT,
              },
              {
                icon: '🎯',
                title: 'Personalised Brain Therapy',
                body: 'Neurofeedback and PBM protocols built around your specific brain data. Treatment targets the actual source, not just the surface symptoms.',
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

      {/* ── How it works ─────────────────────────────────────────────────── */}
      <section className="py-16 bg-gray-50 dark:bg-gray-950 transition-colors">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 dark:text-blue-300 heading-underline-center">
              How It Works
            </h2>
            <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-sm">
              A structured, data-driven process from brain assessment to measurable improvement.
            </p>
          </div>
          <div className="relative">
            <div className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-transparent via-teal-200 dark:via-teal-900 to-transparent" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {PROCESS.map((p) => (
                <div key={p.step} className="relative flex flex-col items-center text-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center text-gray-900 font-bold text-lg mb-4 shadow-lg flex-shrink-0 z-10"
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
              Our Brain Treatments
            </h2>
            <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-sm">
              Three complementary modalities, each targeting brain function at a different level.
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

      {/* ── Our Technology ───────────────────────────────────────────────── */}
      <section className="py-16 bg-gradient-to-br from-[#0d1b2e] to-[#0f2a3a] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">The Technology We Use</h2>
            <p className="text-blue-200 max-w-xl mx-auto text-sm">
              Professional-grade brain assessment and retraining equipment, the same used by
              neurofeedback clinicians across Southeast Asia.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                image: '/images/nf-eeg-cap.jpg',
                alt: 'QEEG electrode cap for brain mapping at Neurogenetics.my',
                title: 'QEEG Electrode Cap',
                desc: 'Full-cap saline electrode system for quantitative EEG brain mapping. Records brainwave activity across all cortical regions simultaneously.',
              },
              {
                image: '/images/nf-helmet.png',
                alt: 'ThinkFast photobiomodulation helmet for brain stimulation at Neurogenetics.my',
                title: 'Photobiomodulation Helmet',
                desc: 'Near-infrared light therapy helmet delivering targeted wavelengths to stimulate mitochondrial function and support neuroplasticity at a cellular level.',
              },
              {
                image: '/images/nf-intranasal.jpg',
                alt: 'Intranasal photobiomodulation device at Neurogenetics.my',
                title: 'Intranasal Light Therapy',
                desc: 'Intranasal PBM device delivering light therapy via the nasal passage for direct access to deeper brain structures and improved cellular energy production.',
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
                <div className="relative w-full" style={{ aspectRatio: '4/3' }}>
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-sm mb-2" style={{ color: ACCENT }}>{item.title}</h3>
                  <p className="text-xs text-blue-200 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────────────────── */}
      <section className="py-16 bg-gray-50 dark:bg-gray-950 transition-colors">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 dark:text-blue-300 heading-underline-center">
              Client Experiences
            </h2>
            <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-sm">
              Real outcomes from real clients who began with a QEEG brain assessment.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="glass-card rounded-2xl p-6 flex flex-col">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 italic leading-relaxed mb-4 flex-1">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <p className="text-sm font-semibold text-blue-900 dark:text-blue-300">{t.name}</p>
                  <p className="text-xs text-gray-400 dark:text-gray-500">{t.condition}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Conditions ───────────────────────────────────────────────────── */}
      <section className="py-16 bg-gradient-to-br from-[#061f1f] to-[#082a2e] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Conditions We Address</h2>
            <p className="text-teal-200 max-w-xl mx-auto text-sm">
              The Brain dimension is particularly effective for conditions with a direct neurological component.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {CONDITIONS.map((c) => (
              <span
                key={c}
                className="px-4 py-2 rounded-full text-sm font-medium border"
                style={{ background: `${ACCENT}20`, borderColor: `${ACCENT}40`, color: '#99f6e4' }}
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Neurogenetics for Brain ───────────────────────────────────── */}
      <section className="py-16 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 heading-underline text-blue-900 dark:text-blue-300">
                Why Choose Neurogenetics for Brain Therapy?
              </h2>
              <div className="space-y-5">
                {[
                  {
                    icon: '📊',
                    title: 'Objective, Data-Driven Assessment',
                    desc: 'We do not guess. Every brain therapy protocol at Neurogenetics begins with a full QEEG assessment, giving us hard data on your specific brain activity before any treatment begins.',
                  },
                  {
                    icon: '🔗',
                    title: 'Integrated with Mind and Body',
                    desc: 'Brain therapy at Neurogenetics does not work in isolation. QEEG findings inform the psychotherapy approach, and functional nutrition supports the neurochemical environment for retraining.',
                  },
                  {
                    icon: '⚡',
                    title: 'Triple-Modality Brain Protocol',
                    desc: 'The combination of QEEG-guided ISF neurofeedback and photobiomodulation addresses brain function from two angles simultaneously: electrical retraining and cellular regeneration.',
                  },
                  {
                    icon: '📈',
                    title: 'Measurable, Trackable Progress',
                    desc: 'Unlike most therapies, neurofeedback progress can be objectively measured. Repeat QEEG assessments show the actual changes in your brain over the course of treatment.',
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
            <div className="flex flex-col gap-4">
              <div className="relative rounded-2xl overflow-hidden shadow-lg" style={{ aspectRatio: '4/3' }}>
                <Image
                  src="/images/child-focus.jpg"
                  alt="Child improving focus and attention through neurofeedback at Neurogenetics.my"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
              {[
                { num: 'QEEG', label: 'Quantitative Brain Mapping' },
                { num: 'ISF', label: 'Infra Slow Fluctuation Neurofeedback' },
                { num: 'PBM', label: 'Photobiomodulation Therapy' },
                { num: '4D', label: 'Integrated Healing Model' },
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
                  &ldquo;When we look at the brain directly, we stop guessing. QEEG gives us a
                  biological map of what is actually happening, so every intervention has a clear
                  and measurable target.&rdquo;
                </blockquote>
                <p className="text-center text-xs font-semibold mt-3" style={{ color: ACCENT }}>
                  Prabhu Sithamparam, PhD
                </p>
              </div>
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
              The Brain Does Not Work Alone
            </h2>
            <p className="mt-3 text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-sm">
              For complete healing, our 4D model addresses all interconnected dimensions simultaneously.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { href: '/services/mind', image: '/images/slide-mind.png', label: 'Mind', sub: 'Psychology & Psychotherapy', color: '#4f6fd4' },
              { href: '/services/body', image: '/images/slide-body.png', label: 'Body', sub: 'Functional Medicine', color: '#e05252' },
              { href: '/services/energy', image: '/images/slide-energy.png', label: 'Bio-Resonance', sub: 'Resonance & Frequency', color: '#a855f7' },
            ].map((d) => (
              <Link
                key={d.label}
                href={d.href}
                className="rounded-2xl overflow-hidden relative h-48 hover:shadow-xl transition-shadow block group"
              >
                <Image
                  src={d.image}
                  alt={`${d.label} dimension at Neurogenetics.my`}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-4" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)' }}>
                  <h3 className="font-bold text-base text-white mb-1" style={{ color: d.color }}>{d.label}</h3>
                  <p className="text-xs text-gray-300">{d.sub}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="py-20 text-white text-center bg-gradient-to-br from-teal-700 to-[#0d1b2e]">
        <div className="max-w-2xl mx-auto px-4">
          <div className="text-4xl mb-4">⚡</div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            See Your Brain. Change Your Brain.
          </h2>
          <p className="text-teal-100 mb-8 text-sm leading-relaxed max-w-lg mx-auto">
            A QEEG brain assessment is the starting point. Book a consultation with Prabhu
            and take the first objective look at what is driving your mental health challenges.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3.5 rounded-xl font-semibold text-sm bg-yellow-400 text-blue-900 hover:bg-yellow-300 transition-colors"
          >
            Book a Brain Assessment
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
