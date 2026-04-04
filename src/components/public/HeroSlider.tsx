'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import { flushSync } from 'react-dom';
import Image from 'next/image';
import Link from 'next/link';

const SLIDES = [
  {
    id: 'integrative',
    tag: "Malaysia's Premier",
    headline: 'Integrative Mental\nHealth Centre',
    sub: '',
    desc: 'The Neuro-Genetics 4D Model addresses mental health across four interconnected dimensions, because true healing cannot come from treating just one layer.',
    image: '/images/slide-interactive.png',
    imageAlt: 'Malaysian woman in a holistic wellness consultation',
    accent: '#fdbb2d',
    accentText: 'text-yellow-400',
    accentBg: 'bg-yellow-400',
    accentHover: 'hover:bg-yellow-300',
    accentTextDark: 'text-blue-900',
    glow: '#fdbb2d',
    bg: ['#1a2a6c', '#163570', '#0d5c69'],
    cta: { label: 'Book a Consultation', href: '/contact' },
    ctaSecondary: { label: 'Explore the 4D Model', href: '#model' },
    badge: null,
  },
  {
    id: 'mind',
    tag: 'Dimension 01',
    headline: 'The Mind\nDimension',
    sub: 'Psychology & Psychotherapy',
    desc: 'Comprehensive psychological assessments and psychotherapy to uncover deeper patterns, behaviours, and emotional challenges. We work at the subconscious level to identify and release root causes, retraining the mind towards calmness, clarity, and lasting emotional resilience.',
    image: '/images/slide-mind.png',
    imageAlt: 'Malaysian woman in a calm therapy session',
    accent: '#818cf8',
    accentText: 'text-indigo-400',
    accentBg: 'bg-indigo-400',
    accentHover: 'hover:bg-indigo-300',
    accentTextDark: 'text-indigo-900',
    glow: '#818cf8',
    bg: ['#0f1340', '#16186a', '#0d1050'],
    cta: { label: 'Explore Mind Services', href: '/services/mind' },
    ctaSecondary: { label: 'Book a Consultation', href: '/contact' },
    badge: '🧠',
  },
  {
    id: 'brain',
    tag: 'Dimension 02',
    headline: 'The Brain\nDimension',
    sub: 'QEEG, Neurofeedback & Transcranial Photobiomodulation',
    desc: 'We assess how your brain is functioning using QEEG brain mapping, then retrain brainwave patterns through neurofeedback. We also use transcranial photobiomodulation to support brain function at a cellular level, enhancing focus, emotional regulation, and mental clarity.',
    image: '/images/slide-brain.png',
    imageAlt: 'QEEG brain mapping session with a Malaysian patient',
    accent: '#2dd4bf',
    accentText: 'text-teal-400',
    accentBg: 'bg-teal-400',
    accentHover: 'hover:bg-teal-300',
    accentTextDark: 'text-teal-900',
    glow: '#2dd4bf',
    bg: ['#061f1f', '#082a2e', '#072030'],
    cta: { label: 'Explore Brain Science', href: '/services/neuro' },
    ctaSecondary: { label: 'Book a Consultation', href: '/contact' },
    badge: '⚡',
  },
  {
    id: 'body',
    tag: 'Dimension 03',
    headline: 'The Body\nDimension',
    sub: 'Functional Medicine',
    desc: 'Psychonutritional diagnostics evaluates how diet, nutrient status, and gut health influence mood and cognitive function, applying targeted interventions to restore balance.',
    image: '/images/slide-body.png',
    imageAlt: 'Fresh functional nutrition spread with Malaysian ingredients',
    accent: '#f87171',
    accentText: 'text-red-400',
    accentBg: 'bg-red-400',
    accentHover: 'hover:bg-red-300',
    accentTextDark: 'text-red-900',
    glow: '#f87171',
    bg: ['#200a0a', '#331010', '#1a0808'],
    cta: { label: 'Explore Body Medicine', href: '/services/body' },
    ctaSecondary: { label: 'Book a Consultation', href: '/contact' },
    badge: '🔬',
  },
  {
    id: 'energy',
    tag: 'Dimension 04',
    headline: 'Bio-Resonance\nTherapy',
    sub: 'Resonance & Frequency',
    desc: 'Bioresonance scanning and frequency-based treatments aim to influence the body and mind using electromagnetic frequencies, evaluated through Bio-Well and Cell Wellbeing technology.',
    image: '/images/slide-energy.png',
    imageAlt: 'Bio-resonance frequency energy field visualization with a Malaysian subject',
    accent: '#c084fc',
    accentText: 'text-purple-400',
    accentBg: 'bg-purple-400',
    accentHover: 'hover:bg-purple-300',
    accentTextDark: 'text-purple-900',
    glow: '#c084fc',
    bg: ['#100820', '#1a0a30', '#0d0618'],
    cta: { label: 'Explore Bio-Resonance', href: '/services/energy' },
    ctaSecondary: { label: 'Book a Consultation', href: '/contact' },
    badge: '✨',
  },
];

const INTERVAL = 5500;
const DURATION = 850;

type Slide = typeof SLIDES[0];

function SlideContent({ slide }: { slide: Slide }) {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row items-center gap-8 py-16 md:py-20 min-h-[520px]">

        {/* Text */}
        <div className="flex-1 text-center lg:text-left text-white z-10">
          <div className="inline-flex items-center gap-2 mb-4">
            {slide.badge && <span className="text-lg">{slide.badge}</span>}
            <p className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: slide.accent }}>
              {slide.tag}
            </p>
          </div>

          <h1
            className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-2 ${slide.accentText}`}
            style={{ whiteSpace: 'pre-line' }}
          >
            {slide.headline}
          </h1>

          {slide.sub && (
            <p className="text-base font-semibold text-white/70 mb-4 tracking-wide">
              {slide.sub}
            </p>
          )}

          <p className="text-base text-blue-200 max-w-xl mb-8 leading-relaxed mx-auto lg:mx-0">
            {slide.desc}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              href={slide.cta.href}
              className={`px-8 py-3.5 rounded-xl font-semibold text-sm transition-colors ${slide.accentBg} ${slide.accentHover} ${slide.accentTextDark}`}
            >
              {slide.cta.label}
            </Link>
            <Link
              href={slide.ctaSecondary.href}
              className="px-8 py-3.5 rounded-xl font-semibold text-sm border border-white/30 hover:bg-white/10 transition-colors text-white"
            >
              {slide.ctaSecondary.label}
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="flex-1 w-full max-w-lg lg:max-w-none relative flex items-center justify-center">
          <div className="relative w-full" style={{ maxWidth: 480 }}>
            <div
              className="absolute inset-0 rounded-3xl blur-2xl scale-95"
              style={{ background: `${slide.glow}30` }}
            />
            <div
              className="relative rounded-3xl overflow-visible shadow-2xl"
              style={{ filter: `drop-shadow(0 32px 48px ${slide.glow}40)` }}
            >
              <div className="relative rounded-3xl overflow-hidden" style={{ aspectRatio: '4/3' }}>
                <Image
                  src={slide.image}
                  alt={slide.imageAlt}
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: `linear-gradient(to top, ${slide.bg[0]}80 0%, transparent 60%)` }}
                />
              </div>
              <div
                className="absolute -top-4 -right-4 w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-xl"
                style={{ background: slide.accent }}
              >
                {slide.badge ?? '✦'}
              </div>
              <div
                className="absolute bottom-0 left-0 right-0 h-1 rounded-b-3xl"
                style={{ background: slide.accent }}
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default function HeroSlider() {
  const [current, setCurrent]   = useState(0);
  const [outgoing, setOutgoing] = useState<number | null>(null);
  const [sliding, setSliding]   = useState(false);
  const [paused, setPaused]     = useState(false);

  const busy       = useRef(false);
  const currentRef = useRef(0);          // always reflects latest current without stale closure
  currentRef.current = current;

  const goTo = useCallback((index: number) => {
    if (busy.current) return;
    if (index === currentRef.current) return;
    busy.current = true;

    // flushSync forces React to paint the 'ready' position synchronously
    // before we trigger the CSS transition — this is the production-safe fix
    flushSync(() => {
      setOutgoing(currentRef.current);
      setCurrent(index);
      setSliding(false);   // incoming starts off-screen right (translateX 100%)
    });

    // One rAF is enough after flushSync — browser has already painted
    requestAnimationFrame(() => {
      setSliding(true);    // both slides now transition smoothly

      setTimeout(() => {
        setOutgoing(null);
        setSliding(false);
        busy.current = false;
      }, DURATION + 60);
    });
  }, []);

  // Stable interval — uses currentRef so it never goes stale
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      const next = (currentRef.current + 1) % SLIDES.length;
      goTo(next);
    }, INTERVAL);
    return () => clearInterval(id);
  }, [paused, goTo]);

  const slide           = SLIDES[current];
  const transitionStyle = `transform ${DURATION}ms cubic-bezier(0.4, 0, 0.2, 1)`;

  return (
    <section
      className="relative overflow-hidden transition-colors duration-700"
      style={{ background: `linear-gradient(135deg, ${slide.bg[0]}, ${slide.bg[1]}, ${slide.bg[2]})` }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Glow orbs */}
      <div
        className="absolute -top-24 -right-24 w-[480px] h-[480px] rounded-full blur-3xl pointer-events-none transition-all duration-700"
        style={{ background: slide.glow, opacity: 0.07 }}
      />
      <div
        className="absolute -bottom-32 -left-16 w-80 h-80 rounded-full blur-3xl pointer-events-none transition-all duration-700"
        style={{ background: slide.glow, opacity: 0.06 }}
      />

      {/* Viewport */}
      <div className="relative overflow-hidden">

        {/* Outgoing — exits left */}
        {outgoing !== null && (
          <div
            style={{
              position: 'absolute',
              inset: 0,
              transform: sliding ? 'translateX(-100%)' : 'translateX(0)',
              transition: sliding ? transitionStyle : 'none',
              willChange: 'transform',
              zIndex: 1,
            }}
          >
            <SlideContent slide={SLIDES[outgoing]} />
          </div>
        )}

        {/* Incoming — enters from right */}
        <div
          style={{
            transform: sliding ? 'translateX(0)' : outgoing !== null ? 'translateX(100%)' : 'translateX(0)',
            transition: sliding ? transitionStyle : 'none',
            willChange: 'transform',
            zIndex: 2,
          }}
        >
          <SlideContent slide={slide} />
        </div>

      </div>

      {/* Progress dots */}
      <div className="relative pb-8 flex gap-2 justify-center">
        {SLIDES.map((s, i) => (
          <button
            key={s.id}
            onClick={() => goTo(i)}
            className="transition-all duration-300 rounded-full"
            style={{
              width: i === current ? 28 : 8,
              height: 8,
              background: i === current ? slide.accent : 'rgba(255,255,255,0.25)',
            }}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
