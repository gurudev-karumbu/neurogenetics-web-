import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="text-white mt-auto bg-[#1a2a6c] dark:bg-gray-950 dark:border-t dark:border-gray-800 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4 hover:opacity-90 transition-opacity">
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
            </Link>
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
              <li>
                <a href="https://www.linkedin.com/in/prabhu-sithamparam-602bb6a3/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors inline-flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  LinkedIn
                </a>
              </li>
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
