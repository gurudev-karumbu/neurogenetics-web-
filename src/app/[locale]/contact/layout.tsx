import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Book a Consultation — Neurogenetics.my',
  description:
    'Book a consultation with Prabhu Sithamparam at Neurogenetics.my. Appointments available for QEEG Brain Mapping, Neurofeedback, Hypnotherapy, Functional Medicine, and Corporate Wellness programmes.',
  keywords: [
    'book consultation neurogenetics',
    'book appointment prabhu sithamparam',
    'mental health consultation malaysia',
    'neurofeedback appointment kuala lumpur',
    'hypnotherapy appointment malaysia',
    'corporate wellness enquiry malaysia',
  ],
  openGraph: {
    title: 'Book a Consultation — Neurogenetics.my',
    description:
      'Take the first step. Book a consultation for integrative mental health, QEEG, Neurofeedback, Hypnotherapy or Corporate Wellness.',
    url: 'https://neurogenetics.my/contact',
    siteName: 'Neurogenetics.my',
    locale: 'en_MY',
    type: 'website',
    images: [{ url: 'https://neurogenetics.my/images/prabhu-large-workshop-kl.jpeg', width: 1200, height: 800, alt: 'Book a Consultation — Neurogenetics.my' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book a Consultation — Neurogenetics.my',
    description: 'Book an appointment for integrative mental health, QEEG, Neurofeedback, Hypnotherapy or Corporate Wellness.',
    images: ['https://neurogenetics.my/images/prabhu-large-workshop-kl.jpeg'],
  },
  alternates: {
    canonical: 'https://neurogenetics.my/contact',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
