'use client';
import { useState } from 'react';
import { useTheme } from 'next-themes';

const DIMENSIONS = [
  {
    id: 'mind',
    label: 'Mind',
    subtitle: 'Psychology & Therapy',
    color: '#4f6fd4',
    lightColor: '#e8ecf7',
    darkColor: 'rgba(79,111,212,0.15)',
    icon: '🧠',
    href: '/services/mind',
    services: ['Hypnotherapy', 'Psychotherapy', 'Psychological Assessment'],
    description:
      'Professional psychological therapy addressing anxiety, depression, trauma, and emotional wellbeing through evidence-based techniques including hypnotherapy.',
  },
  {
    id: 'neuro',
    label: 'Neuro',
    subtitle: 'Brain Science',
    color: '#2dd4bf',
    lightColor: '#e0f5f3',
    darkColor: 'rgba(45,212,191,0.15)',
    icon: '⚡',
    href: '/services/neuro',
    services: ['QEEG Brain Mapping', 'Neurofeedback Therapy', 'BrainMaster Technology'],
    description:
      'Advanced brain scanning (QEEG) and neurofeedback therapy to retrain brainwave patterns, improving focus, mood regulation, and cognitive function.',
  },
  {
    id: 'body',
    label: 'Body',
    subtitle: 'Functional Medicine',
    color: '#e05252',
    lightColor: '#fbe9e9',
    darkColor: 'rgba(224,82,82,0.15)',
    icon: '🔬',
    href: '/services/body',
    services: ['Functional Nutrition', 'Hormone & Cortisol Testing', 'Thyroid & Postpartum Support'],
    description:
      'Addressing the physiological roots of mental health — thyroid imbalances, hormonal disruption, nutritional deficiencies, and inflammation.',
  },
  {
    id: 'energy',
    label: 'Energy',
    subtitle: 'Bioenergetics',
    color: '#a855f7',
    lightColor: '#f0ebfe',
    darkColor: 'rgba(168,85,247,0.15)',
    icon: '✨',
    href: '/services/energy',
    services: ['Bio-Well Analysis', 'Cell Wellbeing Assessment', 'Chakra & Meridian Balancing'],
    description:
      'Subtle energy assessment using Bio-Well and Cell Wellbeing technology, evaluating meridian systems and energetic balance for whole-person wellness.',
  },
];

export default function FourDModel() {
  const [active, setActive] = useState<string | null>(null);
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  const activeDim = DIMENSIONS.find((d) => d.id === active);

  function getBg(dim: typeof DIMENSIONS[0], isActive: boolean) {
    if (isActive) return dim.color;
    return isDark ? dim.darkColor : dim.lightColor;
  }

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

        {/* Visual grid */}
        <div className="relative">
          <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
            {/* Animated rings */}
            <svg className="absolute inset-0 w-full h-full fourd-ring opacity-40 dark:opacity-20" viewBox="0 0 320 320">
              <circle cx="160" cy="160" r="150" fill="none" stroke="#fdbb2d" strokeWidth="1.5" strokeDasharray="8 4" />
            </svg>
            <svg className="absolute inset-0 w-full h-full fourd-ring-reverse opacity-0 dark:opacity-10" viewBox="0 0 320 320">
              <circle cx="160" cy="160" r="130" fill="none" stroke="#4f6fd4" strokeWidth="1" strokeDasharray="4 8" />
            </svg>

            {/* Centre */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-1 shadow-lg bg-gradient-to-br from-blue-800 to-teal-700">
                  <span className="text-white font-bold text-xl">4D</span>
                </div>
                <p className="text-xs font-semibold text-gray-400 dark:text-gray-500">Integrated</p>
              </div>
            </div>

            {/* Quadrants */}
            <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-2 p-8">
              {DIMENSIONS.map((dim) => (
                <button
                  key={dim.id}
                  className={`fourd-quadrant rounded-2xl flex flex-col items-center justify-center gap-1 shadow-md border-2 transition-all ${
                    active === dim.id ? 'scale-105 shadow-xl' : ''
                  }`}
                  style={{
                    background: getBg(dim, active === dim.id),
                    borderColor: active === dim.id ? dim.color : 'transparent',
                  }}
                  onClick={() => setActive(active === dim.id ? null : dim.id)}
                >
                  <span className="text-2xl">{dim.icon}</span>
                  <span
                    className="text-xs font-bold"
                    style={{ color: active === dim.id ? '#fff' : dim.color }}
                  >
                    {dim.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Info panel */}
        <div className="min-h-48">
          {activeDim ? (
            <div
              className="rounded-2xl p-6 shadow-lg border-l-4"
              style={{
                borderLeftColor: activeDim.color,
                background: isDark ? activeDim.darkColor : activeDim.lightColor,
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">{activeDim.icon}</span>
                <div>
                  <h3 className="text-xl font-bold" style={{ color: activeDim.color }}>
                    {activeDim.label}
                  </h3>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{activeDim.subtitle}</p>
                </div>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">{activeDim.description}</p>
              <ul className="space-y-1.5 mb-4">
                {activeDim.services.map((s) => (
                  <li key={s} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: activeDim.color }} />
                    {s}
                  </li>
                ))}
              </ul>
              <a
                href={activeDim.href}
                className="inline-block text-sm font-semibold px-4 py-2 rounded-lg text-white transition-opacity hover:opacity-90"
                style={{ background: activeDim.color }}
              >
                Learn more →
              </a>
            </div>
          ) : (
            <div className="rounded-2xl p-6 bg-white/60 dark:bg-gray-800/60 border border-gray-100 dark:border-gray-700 flex flex-col items-center justify-center text-center min-h-48">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3 bg-yellow-400">
                <span className="text-xl">👆</span>
              </div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Select a dimension to explore how we address your wellbeing
              </p>
              <div className="flex gap-2 mt-4 flex-wrap justify-center">
                {DIMENSIONS.map((d) => (
                  <span
                    key={d.id}
                    className="text-xs px-3 py-1 rounded-full font-medium"
                    style={{
                      background: isDark ? d.darkColor : d.lightColor,
                      color: d.color,
                    }}
                  >
                    {d.label}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
