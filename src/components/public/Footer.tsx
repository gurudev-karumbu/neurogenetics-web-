import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="text-white mt-auto bg-[#1a2a6c] dark:bg-gray-950 dark:border-t dark:border-gray-800 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="rounded-xl overflow-hidden flex-shrink-0" style={{ background: '#0d1b2e' }}>
                <Image
                  src="/images/logo.png"
                  alt="Neuro-Genetics logo"
                  width={64}
                  height={70}
                  className="block"
                />
              </div>
              <p className="text-xl font-bold">
                Neuro<span style={{ color: 'var(--teal-light)' }}>genetics</span>
                <span style={{ color: 'var(--gold)' }}>.my</span>
              </p>
            </div>
            <p className="text-sm text-blue-200 leading-relaxed">
              Integrative mental health using the Neuro-Genetics 4D Model — Mind, Brain, Body &amp; Bio-Resonance.
            </p>
            <p className="text-sm text-blue-200 mt-4">
              <strong className="text-white">Malaysia</strong><br />
              By appointment only
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-3" style={{ color: 'var(--gold)' }}>Services</h4>
            <ul className="space-y-2 text-sm text-blue-200">
              <li><Link href="/services/mind" className="hover:text-white transition-colors">Mind — Psychology &amp; Therapy</Link></li>
              <li><Link href="/services/neuro" className="hover:text-white transition-colors">Brain — Brain Science</Link></li>
              <li><Link href="/services/body" className="hover:text-white transition-colors">Body — Functional Medicine</Link></li>
              <li><Link href="/services/energy" className="hover:text-white transition-colors">Bio-Resonance &amp; Frequency</Link></li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-3" style={{ color: 'var(--gold)' }}>Quick Links</h4>
            <ul className="space-y-2 text-sm text-blue-200">
              <li><Link href="/about" className="hover:text-white transition-colors">About Prabhu</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog &amp; Resources</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Book a Consultation</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-blue-800 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-blue-300">
          <p>© {new Date().getFullYear()} Neurogenetics.my. All rights reserved.</p>
          <p>
            The information on this website is for educational purposes only and does not constitute medical advice.
            Always consult a qualified professional.
          </p>
        </div>
      </div>
    </footer>
  );
}
