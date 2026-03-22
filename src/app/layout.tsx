import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ThemeProvider from '@/components/ThemeProvider';

const inter = Inter({ subsets: ['latin', 'latin-ext'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Neurogenetics.my — Integrative Mental Health Malaysia',
  description:
    'The Neuro-Genetics 4D Mental Health Model: Mind, Neuro, Body & Energy. Holistic, science-backed mental wellbeing care in Malaysia.',
  keywords: [
    'neurogenetics malaysia',
    'neurofeedback therapy',
    'QEEG brain mapping',
    'hypnotherapy malaysia',
    'integrative mental health',
    'functional medicine mental health',
    'anxiety depression treatment malaysia',
  ],
  openGraph: {
    title: 'Neurogenetics.my — Integrative Mental Health',
    description:
      'Science-backed holistic mental health care using the 4D Model: Mind, Neuro, Body & Energy.',
    url: 'https://neurogenetics.my',
    siteName: 'Neurogenetics.my',
    locale: 'en_MY',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning className={`${inter.variable} h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
