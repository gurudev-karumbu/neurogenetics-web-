import type { Metadata } from 'next';
import Navbar from '@/components/public/Navbar';
import Footer from '@/components/public/Footer';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Corporate Wellness & Human Capital Development | Neurogenetics.my',
  description:
    'HRD Corp claimable corporate wellness programmes in Malaysia. Science-driven solutions integrating psychology, neuroscience, and behavioral intelligence to enhance employee wellbeing and organizational performance.',
  keywords: [
    'corporate wellness malaysia',
    'HRD Corp claimable programmes',
    'employee wellbeing malaysia',
    'talent mapping malaysia',
    'genetic inborn talent malaysia',
    'corporate mental health malaysia',
    'neuroscience HR malaysia',
    'leadership development malaysia',
    'psychometric assessment corporate malaysia',
    'heartmath malaysia',
  ],
  openGraph: {
    title: 'Corporate Wellness & Human Capital Development | Neurogenetics.my',
    description:
      'HRD Corp claimable, science-driven corporate wellness programmes integrating psychology, neuroscience, and behavioral intelligence for sustainable business growth.',
    url: 'https://neurogenetics.my/services/corporate',
    siteName: 'Neurogenetics.my',
    locale: 'en_MY',
    type: 'website',
    images: [{ url: 'https://neurogenetics.my/images/prabhu-large-workshop-kl.jpeg', width: 1200, height: 800, alt: 'Corporate Wellness Programmes by Neurogenetics.my in Kuala Lumpur' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Corporate Wellness & Human Capital Development | Neurogenetics.my',
    description: 'HRD Corp claimable corporate wellness in Malaysia. Psychology, neuroscience and behavioural intelligence for peak organisational performance.',
    images: ['https://neurogenetics.my/images/prabhu-large-workshop-kl.jpeg'],
  },
  alternates: {
    canonical: 'https://neurogenetics.my/services/corporate',
  },
};

const ACCENT = '#059669';

const PROGRAMME_CATEGORIES = [
  {
    category: 'Talent & Performance',
    icon: '🌟',
    color: '#059669',
    programmes: [
      {
        title: 'Talent Discovery & Career Alignment',
        sub: 'Genetic Inborn Talent Mapping',
        desc: 'Unlock the natural strengths of your workforce through advanced talent mapping and psychometric intelligence. Align individuals to roles where they perform with ease, purpose, and excellence, driving higher productivity, engagement, and retention.',
      },
      {
        title: 'Customised Interview & Assessment Systems',
        sub: 'Role-Specific Evaluation',
        desc: 'Design role-specific interview frameworks and assessment tools to identify candidates with the right skills, mindset, and behavioral fit for each function.',
      },
      {
        title: 'Learning & Development Intelligence',
        sub: 'Personalised Training Pathways',
        desc: 'Personalise training pathways based on individual strengths, cognitive styles, and development needs to maximise learning effectiveness.',
      },
    ],
  },
  {
    category: 'Mental Health & Wellbeing',
    icon: '🧠',
    color: '#0d9488',
    programmes: [
      {
        title: 'Mental Health & Emotional Wellbeing',
        sub: 'Structured Screening & Intervention',
        desc: 'Proactively support employee mental health through structured screening, early detection, and targeted interventions. Build a resilient workforce capable of managing stress, uncertainty, and workplace demands effectively.',
      },
      {
        title: 'Mindfulness & Meditation Training',
        sub: 'Focus and Emotional Balance',
        desc: 'Enhance focus, emotional balance, and clarity through guided mindfulness, breathwork, and mental conditioning techniques tailored for corporate environments.',
      },
      {
        title: 'Stress Management & Resilience',
        sub: 'Burnout Prevention',
        desc: 'Equip employees with practical tools to manage pressure, prevent burnout, and maintain consistent performance in high-demand roles.',
      },
    ],
  },
  {
    category: 'Leadership & Organisational Intelligence',
    icon: '🧭',
    color: '#047857',
    programmes: [
      {
        title: 'Leadership & Organisational Intelligence',
        sub: 'Decision Style & Influence Dynamics',
        desc: 'Develop high-impact leaders by understanding decision styles, communication patterns, and influence dynamics within the organisation.',
      },
      {
        title: 'Workplace Culture Engineering',
        sub: 'Psychologically Safe Environments',
        desc: 'Assess and shape organisational culture by aligning values, behaviors, and employee experience to create a psychologically safe and high-performing environment.',
      },
      {
        title: 'Good Corporate Governance',
        sub: 'Ethical Leadership & Accountability',
        desc: 'Strengthen ethical leadership and accountability through behavioral insights and decision-making frameworks that support transparency and integrity.',
      },
    ],
  },
  {
    category: 'Advanced & Specialised Programmes',
    icon: '🚀',
    color: '#065f46',
    programmes: [
      {
        title: 'Neuro-Optimisation & Brain Performance',
        sub: 'Cognitive Efficiency Training',
        desc: 'Enhance focus, clarity, and cognitive efficiency through brain-based training and performance optimisation techniques for high-performing individuals.',
      },
      {
        title: 'Hypnotherapy-Based Performance Programmes',
        sub: 'Deep Behavioral Transformation',
        desc: 'Facilitate deep behavioral transformation by addressing subconscious patterns that impact confidence, performance, and decision-making.',
      },
      {
        title: 'HeartMath Coherence & Emotional Regulation',
        sub: 'Heart-Brain Coherence Training',
        desc: 'Enhance emotional stability, focus, and resilience by training employees to achieve heart-brain coherence using scientifically validated self-regulation techniques. Improves stress management, decision-making clarity, and peak performance under pressure.',
      },
    ],
  },
  {
    category: 'Analytics & Emerging Solutions',
    icon: '📊',
    color: '#064e3b',
    programmes: [
      {
        title: 'HR Analytics & Workforce Insights',
        sub: 'Data-Driven Workforce Strategy',
        desc: 'Leverage data-driven insights to track employee wellbeing, engagement, and performance, enabling informed, strategic HR decisions.',
      },
      {
        title: 'Voice Biomarker-Based Emotional Monitoring',
        sub: 'Non-Invasive Stress Detection',
        desc: 'Utilise non-invasive voice analysis to detect early signs of stress, anxiety, and burnout through vocal patterns, enabling timely support and intervention.',
      },
      {
        title: 'Call Centre & High-Stress Workforce Solutions',
        sub: 'Real-Time Support for High-Pressure Roles',
        desc: 'Support high-pressure roles with real-time emotional monitoring, resilience training, and performance enhancement strategies to reduce burnout and improve retention.',
      },
      {
        title: 'Sustainability, ESG & Conscious Living',
        sub: 'Purpose-Driven Culture',
        desc: 'Embed Environmental, Social, and Governance (ESG) principles into workplace culture by fostering awareness, responsible behavior, and conscious decision-making aligned with sustainable business practices.',
      },
    ],
  },
];

const WHY_CHOOSE = [
  {
    icon: '✅',
    title: 'HRD Corp Aligned & Claimable',
    desc: 'All programmes are designed to meet HRD Corp requirements, making them claimable for Malaysian employers under the Human Resources Development Fund.',
  },
  {
    icon: '🔬',
    title: 'Science-Based Assessments',
    desc: 'Every programme is grounded in validated psychology, neuroscience, and behavioral science, not off-the-shelf content.',
  },
  {
    icon: '🎯',
    title: 'Customised for Every Organisation',
    desc: 'We do not deliver generic programmes. Each solution is designed around your industry, workforce profile, and organisational goals.',
  },
  {
    icon: '🧠',
    title: 'Integrated Psychology and Neuroscience',
    desc: 'Our unique combination of psychological assessment, neuroscience-based interventions, and behavioral intelligence sets our programmes apart.',
  },
  {
    icon: '📈',
    title: 'People Wellbeing and Business Performance',
    desc: 'We focus equally on the human and the business outcome, because organisations perform best when their people thrive.',
  },
  {
    icon: '🌍',
    title: 'Serving Organisations Across Malaysia',
    desc: 'From SMEs to large corporations, we have delivered measurable results for diverse organisations across Malaysia.',
  },
];

export default function CorporateServicePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      <Navbar />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#052e16] via-[#064e3b] to-[#065f46]">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-10 blur-3xl" style={{ background: ACCENT }} />
        <div className="absolute -bottom-32 -left-20 w-80 h-80 rounded-full opacity-10 blur-3xl" style={{ background: '#fdbb2d' }} />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="flex flex-col lg:flex-row items-center gap-10">

            {/* Text */}
            <div className="flex-1 text-white text-center lg:text-left">
              {/* HRD Corp badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-5 bg-yellow-400 text-emerald-900">
                ✅ HRD Corp Claimable Programmes
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-3 text-emerald-300">
                Corporate Wellness<br />&amp; Human Capital
              </h1>
              <p className="text-base font-semibold text-white/60 mb-5 tracking-wide">
                Science-Driven Solutions for Organisations
              </p>
              <p className="text-emerald-100 text-base leading-relaxed max-w-xl mb-8 mx-auto lg:mx-0">
                A comprehensive suite of science-driven, human-centric corporate solutions designed
                to enhance employee wellbeing, optimise performance, and align talent with
                organisational goals. Our programmes integrate psychology, neuroscience, and
                behavioral intelligence to support sustainable business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/contact"
                  className="px-8 py-3.5 rounded-xl font-semibold text-sm transition-colors text-emerald-900"
                  style={{ background: '#4ade80' }}
                >
                  Request a Programme Proposal
                </Link>
                <a
                  href="#programmes"
                  className="px-8 py-3.5 rounded-xl font-semibold text-sm border border-white/30 hover:bg-white/10 transition-colors text-white"
                >
                  View Programmes
                </a>
              </div>
            </div>

            {/* Hero image */}
            <div className="flex-shrink-0 w-full max-w-md mx-auto lg:mx-0">
              <div
                className="relative rounded-3xl overflow-hidden shadow-2xl border-4"
                style={{ aspectRatio: '4/3', borderColor: `${ACCENT}50` }}
              >
                <Image
                  src="/images/corporate-workshop-1.jpeg"
                  alt="Corporate wellness workshop facilitated by Neurogenetics.my in Kuala Lumpur"
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Stats strip ──────────────────────────────────────────────────── */}
      <section className="py-10 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 transition-colors">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { num: 'HRD Corp', label: 'Claimable under HRDF' },
              { num: '18+', label: 'Specialised Programmes' },
              { num: '5', label: 'Programme Categories' },
              { num: '100%', label: 'Customised Delivery' },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-2xl md:text-3xl font-bold mb-1" style={{ color: ACCENT }}>{s.num}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Intro section ────────────────────────────────────────────────── */}
      <section className="overflow-hidden bg-white dark:bg-gray-950 transition-colors">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-0">
            {/* Image — taller than text column, overflows top */}
            <div className="flex-1 w-full relative lg:-mt-16 lg:-mb-0" style={{ minHeight: 750 }}>
              <Image
                src="/images/corporate-hero-portrait-transparent.png"
                alt="Corporate wellness professional at Neurogenetics.my"
                fill
                className="object-cover"
                style={{ objectPosition: 'center 15%' }}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Text */}
            <div className="flex-1 py-16">
              <div className="flex items-start gap-4">
                <div className="w-1 rounded-full flex-shrink-0 self-stretch" style={{ background: ACCENT }} />
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-900 dark:text-blue-300">
                    Where People Wellbeing Meets Business Performance
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base mb-4">
                    Employee wellbeing is no longer a soft metric. Organisations that invest in their
                    people&apos;s mental health, cognitive performance, and behavioral alignment consistently
                    outperform those that do not, in productivity, retention, and culture.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base mb-4">
                    Neurogenetics brings clinical-grade psychology and neuroscience into the corporate
                    environment. Our programmes are not off-the-shelf training content. They are
                    scientifically grounded, precisely designed interventions that address the real
                    human factors driving or limiting your organisation&apos;s performance.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base">
                    From talent discovery to mental health screening, from leadership intelligence to
                    advanced neuro-performance training, our comprehensive suite is built to align
                    your people with your organisation&apos;s goals at every level.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Programmes ───────────────────────────────────────────────────── */}
      <section id="programmes" className="py-20 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 dark:text-blue-300 heading-underline-center">
              Our Programme Suite
            </h2>
            <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-sm leading-relaxed">
              All programmes are HRD Corp aligned and claimable. Each is fully customised to your
              organisation, industry, and workforce requirements.
            </p>
          </div>
          <div className="space-y-14">
            {PROGRAMME_CATEGORIES.map((cat) => (
              <div key={cat.category}>
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                    style={{ background: `${cat.color}15` }}
                  >
                    {cat.icon}
                  </div>
                  <h3 className="text-lg font-bold" style={{ color: cat.color }}>{cat.category}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {cat.programmes.map((p) => (
                    <div
                      key={p.title}
                      className="rounded-2xl p-5 border hover:shadow-md transition-shadow bg-white dark:bg-gray-800"
                      style={{ borderColor: `${cat.color}25`, borderLeftColor: cat.color, borderLeftWidth: 3 }}
                    >
                      <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: cat.color }}>
                        {p.sub}
                      </p>
                      <h4 className="font-bold text-sm mb-2 text-blue-900 dark:text-blue-300">{p.title}</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">{p.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose ───────────────────────────────────────────────────── */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950 transition-colors">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-4"
              style={{ background: `${ACCENT}15`, color: ACCENT }}>
              Why Neurogenetics
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 dark:text-blue-300 heading-underline-center">
              Why Choose Us for Corporate Wellness?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl p-6 bg-white dark:bg-gray-900 border hover:shadow-md transition-shadow"
                style={{ borderColor: `${ACCENT}20` }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
                  style={{ background: `${ACCENT}10` }}
                >
                  {item.icon}
                </div>
                <h3 className="font-bold text-sm mb-2 text-blue-900 dark:text-blue-300">{item.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Workshop image strip ─────────────────────────────────────────── */}
      <section className="py-16 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-900 dark:text-blue-300 heading-underline">
                Delivered in Your Environment
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base mb-4">
                Our corporate programmes are delivered on-site at your premises, at our centre, or in a
                hybrid format. All materials, assessments, and facilitation are handled end-to-end
                by our team.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base mb-6">
                We work closely with your HR and L&amp;D teams to ensure every programme aligns with
                your organisation&apos;s objectives, culture, and HRD Corp documentation requirements.
              </p>
              <Link
                href="/contact"
                className="inline-block px-8 py-3.5 rounded-xl font-semibold text-sm text-white transition-colors"
                style={{ background: ACCENT }}
              >
                Start a Conversation
              </Link>
            </div>
            <div className="flex-shrink-0 w-full max-w-lg mx-auto lg:mx-0">
              <div className="relative rounded-2xl overflow-hidden shadow-xl" style={{ aspectRatio: '4/3' }}>
                <Image
                  src="/images/corporate-workshop-2.jpeg"
                  alt="Corporate training session with diverse Malaysian professionals at Neurogenetics.my"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── For individuals ──────────────────────────────────────────────── */}
      <section className="py-16 bg-gray-50 dark:bg-gray-950 transition-colors">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-300">
              Looking for Individual Services?
            </h2>
            <p className="mt-3 text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-sm">
              Our 4D model for personal healing addresses Mind, Brain, Body, and Bio-Resonance.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-5">
            {[
              { href: '/services/mind', icon: '🧠', label: 'Mind', sub: 'Psychology & Psychotherapy', color: '#4f6fd4' },
              { href: '/services/neuro', icon: '⚡', label: 'Brain', sub: 'QEEG & Neurofeedback', color: '#2dd4bf' },
              { href: '/services/body', icon: '🔬', label: 'Body', sub: 'Functional Medicine', color: '#e05252' },
              { href: '/services/energy', icon: '✨', label: 'Bio-Resonance', sub: 'Resonance & Frequency', color: '#a855f7' },
            ].map((d) => (
              <Link
                key={d.label}
                href={d.href}
                className="glass-card rounded-2xl p-5 hover:shadow-xl transition-shadow flex items-start gap-3"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                  style={{ background: `${d.color}15` }}
                >
                  {d.icon}
                </div>
                <div>
                  <h3 className="font-bold text-sm mb-0.5" style={{ color: d.color }}>{d.label}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{d.sub}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="py-20 text-white text-center bg-gradient-to-br from-emerald-800 to-[#052e16]">
        <div className="max-w-2xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-6 bg-yellow-400 text-emerald-900">
            ✅ HRD Corp Claimable
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Transform Your Organisation?
          </h2>
          <p className="text-emerald-100 mb-8 text-sm leading-relaxed max-w-lg mx-auto">
            Contact us to discuss your organisation&apos;s needs. We will design a customised programme
            proposal with full HRD Corp documentation support.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3.5 rounded-xl font-semibold text-sm bg-yellow-400 text-emerald-900 hover:bg-yellow-300 transition-colors"
          >
            Request a Proposal
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
