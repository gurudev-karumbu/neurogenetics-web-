import type { Metadata } from 'next';
import Navbar from '@/components/public/Navbar';
import Footer from '@/components/public/Footer';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Body — Functional Medicine & Nutrition | Neurogenetics.my',
  description:
    'Functional medicine and psychonutritional diagnostics in Malaysia. Addressing how diet, gut health, hormones, and nutrient status drive mental health challenges at a biological level.',
  keywords: [
    'functional medicine malaysia',
    'functional nutrition malaysia',
    'gut brain axis malaysia',
    'hormone testing malaysia',
    'cortisol testing malaysia',
    'thyroid mental health malaysia',
    'postpartum depression treatment malaysia',
    'hair tissue analysis malaysia',
    'psychonutritional diagnostics',
    'integrative medicine malaysia',
  ],
  openGraph: {
    title: 'Body — Functional Medicine & Nutrition | Neurogenetics.my',
    description:
      'Psychonutritional diagnostics evaluates how diet, nutrient status, and gut health influence mood and cognitive function, applying targeted interventions to restore balance.',
    url: 'https://neurogenetics.my/services/body',
    siteName: 'Neurogenetics.my',
    locale: 'en_MY',
    type: 'website',
  },
  alternates: {
    canonical: 'https://neurogenetics.my/services/body',
  },
};

const SERVICES = [
  {
    icon: '🥗',
    title: 'Functional Nutrition',
    desc: 'Psychonutritional diagnostics evaluates how your diet, nutrient levels, and gut microbiome are influencing your brain chemistry, mood, and cognitive function. Targeted nutritional interventions are then applied to restore balance and support mental wellbeing from within.',
    detail: [
      'Dietary assessment and nutritional profiling',
      'Gut microbiome and digestive health evaluation',
      'Neurotransmitter support through targeted nutrition',
      'Anti-inflammatory dietary protocols',
      'Personalised supplement and food recommendations',
    ],
    color: '#e05252',
  },
  {
    icon: '🧪',
    title: 'Hormone & Cortisol Testing',
    desc: 'Hormonal imbalances are one of the most commonly overlooked drivers of anxiety, depression, and mood disorders. We assess cortisol rhythms, sex hormones, adrenal function, and stress markers to identify the physiological root causes behind emotional and mental health challenges.',
    detail: [
      'Cortisol and adrenal stress profiling',
      'Sex hormone assessment (oestrogen, progesterone, testosterone)',
      'Thyroid hormone panel',
      'Stress response and HPA axis evaluation',
      'Personalised hormonal rebalancing protocol',
    ],
    color: '#d94f4f',
  },
  {
    icon: '🧬',
    title: 'Hair Tissue Mineral Analysis',
    desc: 'Hair tissue mineral analysis (HTMA) provides a comprehensive picture of your body\'s mineral status and heavy metal burden over the preceding months. Mineral imbalances and toxic metal accumulation directly affect brain function, nervous system regulation, and mood stability.',
    detail: [
      'Analysis of 35+ minerals and heavy metals',
      'Identification of nutrient deficiencies and toxic load',
      'Adrenal and thyroid function indicators',
      'Metabolic rate and nervous system assessment',
      'Targeted mineral rebalancing programme',
    ],
    color: '#c94949',
  },
  {
    icon: '🤱',
    title: 'Thyroid & Postpartum Support',
    desc: 'Thyroid dysfunction and postpartum hormonal shifts are leading but frequently missed causes of depression, anxiety, and cognitive difficulties in women. We provide specialist assessment and integrative support that addresses the underlying physiology, not just the emotional symptoms.',
    detail: [
      'Comprehensive thyroid function assessment',
      'Postpartum hormone profiling',
      'Mood and cognitive impact evaluation',
      'Nutritional and hormonal rebalancing support',
      'Integrated with psychotherapy for complete care',
    ],
    color: '#e06060',
  },
];

const CONDITIONS = [
  'Depression linked to gut health',
  'Anxiety and adrenal fatigue',
  'Brain fog and poor concentration',
  'Hormonal mood disorders',
  'Postpartum depression',
  'Thyroid-related mood issues',
  'Chronic fatigue',
  'Inflammatory conditions',
  'Sleep disruption',
  'Weight and metabolic imbalance',
  'Nutrient deficiency symptoms',
  'Heavy metal toxicity effects',
];

const PROCESS = [
  {
    step: '01',
    title: 'Functional Consultation',
    desc: 'A thorough intake covering your health history, symptoms, diet, lifestyle, and relevant medical background.',
  },
  {
    step: '02',
    title: 'Diagnostic Testing',
    desc: 'Targeted functional tests including hormone panels, hair tissue analysis, and nutritional assessments.',
  },
  {
    step: '03',
    title: 'Results Interpretation',
    desc: 'Prabhu reviews your results and explains in plain terms how your body chemistry is affecting your mental health.',
  },
  {
    step: '04',
    title: 'Personalised Protocol',
    desc: 'A targeted nutrition, supplementation, and lifestyle protocol designed around your specific test results.',
  },
  {
    step: '05',
    title: 'Review & Adjust',
    desc: 'Regular follow-ups to track progress, retest as needed, and refine the protocol as your body responds.',
  },
];

const ACCENT = '#e05252';

export default function BodyServicePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      <Navbar />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#200a0a] via-[#331010] to-[#1a0808]">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-10 blur-3xl" style={{ background: ACCENT }} />
        <div className="absolute -bottom-32 -left-20 w-80 h-80 rounded-full opacity-10 blur-3xl" style={{ background: '#fdbb2d' }} />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="flex flex-col lg:flex-row items-center gap-10">

            {/* Text */}
            <div className="flex-1 text-white text-center lg:text-left">
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-4 border"
                style={{ background: `${ACCENT}25`, color: '#fca5a5', borderColor: `${ACCENT}50` }}
              >
                🔬 Dimension 03 · Body
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-3 text-red-300">
                Functional Medicine<br />&amp; Nutrition
              </h1>
              <p className="text-base font-semibold text-white/60 mb-5 tracking-wide">
                The Biology Behind Your Mental Health
              </p>
              <p className="text-red-100 text-base leading-relaxed max-w-xl mb-8 mx-auto lg:mx-0">
                Within Functional Medicine, psychonutritional diagnostics evaluates how diet,
                nutrient status, and gut health influence mood and cognitive function, applying
                targeted interventions to restore balance and optimise brain health.
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
                  alt="Prabhu Sithamparam, Functional Medicine practitioner at Neurogenetics.my"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 768px) 224px, 288px"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #20040490 0%, transparent 55%)' }} />
                <div className="absolute bottom-4 left-0 right-0 text-center">
                  <p className="text-white font-bold text-sm">Prabhu Sithamparam</p>
                  <p className="text-red-200 text-xs">Functional Medicine · Psychonutritional Diagnostics</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 justify-center max-w-xs">
                {['Functional Nutrition', 'Hormone Testing', 'HTMA Analysis'].map((badge) => (
                  <span
                    key={badge}
                    className="text-xs px-3 py-1 rounded-full font-medium"
                    style={{ background: `${ACCENT}30`, color: '#fca5a5' }}
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── The Gut-Brain Connection ──────────────────────────────────────── */}
      <section className="py-16 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Image */}
            <div className="flex-shrink-0 w-full max-w-sm mx-auto lg:mx-0">
              <div className="relative rounded-2xl overflow-hidden shadow-xl" style={{ aspectRatio: '4/3' }}>
                <Image
                  src="/images/body-therapy.png"
                  alt="Functional nutrition consultation at Neurogenetics.my"
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
                    Your Body is Talking to Your Brain
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base mb-4">
                    A thyroid imbalance can cause depression. A disrupted cortisol cycle can trigger
                    anxiety. Gut dysbiosis reduces serotonin production. Heavy metal accumulation
                    impairs cognitive function. These are not metaphors — they are documented
                    physiological mechanisms that conventional psychiatry routinely misses.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base mb-4">
                    Up to 90% of the body's serotonin is produced in the gut. The gut-brain axis
                    is a continuous two-way communication pathway. When the body is out of balance,
                    the brain and mind reflect it — and no amount of therapy or medication will
                    fully resolve the issue until the underlying biology is addressed.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base">
                    The Body dimension at Neurogenetics identifies and corrects these physiological
                    root causes, creating the biological foundation that makes all other healing
                    possible.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Gut-Brain-Mind Axis ───────────────────────────────────────────── */}
      <section className="py-16 bg-gradient-to-br from-[#1a0808] to-[#2d1010] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">The Gut-Brain-Mind Axis</h2>
            <p className="text-red-200 max-w-xl mx-auto text-sm">
              Three interconnected systems that must all be in balance for true mental wellness.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: '🦠',
                title: 'Gut Health',
                body: '90% of serotonin is produced in the gut. Microbiome imbalances directly reduce neurotransmitter availability, driving anxiety, depression, and brain fog.',
                accent: ACCENT,
              },
              {
                icon: '🔄',
                title: 'Vagus Nerve',
                body: 'The vagus nerve is the primary communication highway between gut and brain. Chronic inflammation and gut dysbiosis impair this pathway, dysregulating mood and stress responses.',
                accent: '#fdbb2d',
              },
              {
                icon: '🧠',
                title: 'Brain Function',
                body: 'Nutrient deficiencies, hormonal imbalances, and toxic burden directly impair neurotransmitter synthesis, brainwave regulation, and cognitive performance.',
                accent: '#2dd4bf',
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-2xl p-6 border border-white/10 bg-white/5 backdrop-blur"
                style={{ borderTopColor: card.accent, borderTopWidth: 3 }}
              >
                <div className="text-3xl mb-3">{card.icon}</div>
                <h3 className="font-bold text-base mb-2" style={{ color: card.accent }}>{card.title}</h3>
                <p className="text-sm text-red-100 leading-relaxed">{card.body}</p>
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
              A systematic process to uncover and correct the biological drivers of your mental health.
            </p>
          </div>
          <div className="relative">
            <div className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-transparent via-red-200 dark:via-red-900 to-transparent" />
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
              Our Body Treatments
            </h2>
            <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-sm">
              Each assessment targets a specific biological system that may be driving your mental health challenges.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {SERVICES.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-shadow flex flex-col"
              >
                <div className="p-6 pb-4" style={{ background: `${s.color}10` }}>
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
      <section className="py-16 bg-gradient-to-br from-[#200a0a] to-[#2d1010] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Conditions We Address</h2>
            <p className="text-red-200 max-w-xl mx-auto text-sm">
              The Body dimension is especially relevant when mental health challenges have a physiological driver.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {CONDITIONS.map((c) => (
              <span
                key={c}
                className="px-4 py-2 rounded-full text-sm font-medium border"
                style={{ background: `${ACCENT}20`, borderColor: `${ACCENT}40`, color: '#fca5a5' }}
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Neurogenetics for Body ────────────────────────────────────── */}
      <section className="py-16 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 heading-underline text-blue-900 dark:text-blue-300">
                Why Address the Body for Mental Health?
              </h2>
              <div className="space-y-5">
                {[
                  {
                    icon: '🔍',
                    title: 'Finding What Others Miss',
                    desc: 'Thyroid dysfunction, cortisol dysregulation, and nutrient deficiencies are routinely overlooked in standard psychiatric care. We test for and address these directly.',
                  },
                  {
                    icon: '🔗',
                    title: 'Integrated with Mind and Brain',
                    desc: 'Functional nutrition findings inform the neurofeedback protocol and the psychotherapy approach. The body, brain, and mind are treated as one interconnected system.',
                  },
                  {
                    icon: '🧬',
                    title: 'Root Cause, Not Suppression',
                    desc: 'Rather than suppressing symptoms with medication, we identify and correct the underlying physiological imbalances that are generating those symptoms in the first place.',
                  },
                  {
                    icon: '📋',
                    title: 'Personalised to Your Biology',
                    desc: 'No generic protocols. Every intervention is based on your specific test results, ensuring that what you receive is tailored precisely to your body\'s actual needs.',
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
                { num: '90%', label: 'of serotonin produced in the gut' },
                { num: '35+', label: 'minerals and metals tested via HTMA' },
                { num: '4', label: 'body systems assessed and addressed' },
                { num: '4D', label: 'integrated healing model' },
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
                  &ldquo;A thyroid imbalance can cause depression. A disrupted cortisol cycle can
                  trigger anxiety. When we treat only the symptoms, we miss the deeper picture
                  entirely. The body always has something to say.&rdquo;
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
              The Body Does Not Work Alone
            </h2>
            <p className="mt-3 text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-sm">
              For complete healing, our 4D model addresses all interconnected dimensions simultaneously.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { href: '/services/mind', icon: '🧠', label: 'Mind', sub: 'Psychology & Psychotherapy', color: '#4f6fd4' },
              { href: '/services/neuro', icon: '⚡', label: 'Brain', sub: 'QEEG, Neurofeedback & Photobiomodulation', color: '#2dd4bf' },
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
      <section className="py-20 text-white text-center bg-gradient-to-br from-red-700 to-[#1a0808]">
        <div className="max-w-2xl mx-auto px-4">
          <div className="text-4xl mb-4">🔬</div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Is Your Body Driving Your Mental Health?
          </h2>
          <p className="text-red-100 mb-8 text-sm leading-relaxed max-w-lg mx-auto">
            A functional medicine consultation with Prabhu begins with listening and testing,
            not assumptions. Book your consultation and let the biology tell its own story.
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
