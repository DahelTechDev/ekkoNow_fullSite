import Link from 'next/link';
import Image from 'next/image';
import { Zap, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

// Inline SVG brand icons (lucide-react removed all brand icons)
const TwitterIcon = () => (
  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const YouTubeIcon = () => (
  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const FOOTER_LINKS = {
  Platform: [
    { label: 'Solar Marketplace', href: '/solar-marketplace' },
    { label: 'Solar Panels', href: '/solar-marketplace/categories/solar-panels' },
    { label: 'Batteries', href: '/solar-marketplace/categories/batteries' },
    { label: 'Inverters', href: '/solar-marketplace/categories/inverters' },
  ],
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Solutions', href: '/solutions' },
    { label: 'Impact', href: '/impact' },
    { label: 'Partners', href: '/partners' },
  ],
  Investors: [
    { label: 'Investor Relations', href: '/investors' },
    { label: 'Media Kit', href: '#' },
    { label: 'Press', href: '#' },
  ],
  Support: [
    { label: 'Contact Us', href: '/contact' },
    { label: 'FAQs', href: '/faq' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
};

const SOCIALS = [
  { icon: TwitterIcon, href: 'https://twitter.com/ekkonow', label: 'Twitter' },
  { icon: LinkedInIcon, href: 'https://linkedin.com/company/ekkonow', label: 'LinkedIn' },
  { icon: InstagramIcon, href: 'https://www.instagram.com/official_ekkonow?igsh=OHd3aXN2MndhYm1w', label: 'Instagram' },
  { icon: YouTubeIcon, href: 'https://youtube.com/@ekkonow', label: 'YouTube' },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#06040F] border-t border-blue-500/10 overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] rounded-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #3B82F6 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-5 group">
              <div className="relative w-10 h-10 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                <Image 
                  src="/Ekko now logo.webp" 
                  alt="Ekko Now Logo" 
                  fill 
                  className="object-contain" 
                />
              </div>
              <span style={{ fontFamily: 'Outfit, sans-serif' }} className="text-xl font-bold tracking-tight">
                <span className="gradient-text">Ekko</span>
                <span className="text-white">Now</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
              Africa&apos;s leading solar energy marketplace. Connecting homes, businesses,
              and communities with clean, affordable solar solutions.
            </p>
            {/* Contact info */}
            <div className="space-y-2.5 mb-6">
              <a href="mailto:info.ekkonow@gmail.com" className="flex items-center gap-2 text-sm text-slate-400 hover:text-blue-400 transition-colors">
                <Mail className="w-4 h-4 flex-shrink-0 text-blue-500" />
                info.ekkonow@gmail.com
              </a>
              <a href="tel:+2347047581704" className="flex items-center gap-2 text-sm text-slate-400 hover:text-blue-400 transition-colors">
                <Phone className="w-4 h-4 flex-shrink-0 text-emerald-500" />
                +2347047581704
              </a>
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <MapPin className="w-4 h-4 flex-shrink-0 text-blue-500" />
                Lagos, Nigeria
              </div>
            </div>
            {/* Social */}
            <div className="flex items-center gap-3">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg glass flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500/40 transition-all duration-200"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <h4 style={{ fontFamily: 'Outfit, sans-serif' }} className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>

                    <Link
                      href={link.href}
                      className="flex items-center gap-1 text-sm text-slate-400 hover:text-white transition-colors group"
                    >
                      <ArrowRight className="w-3 h-3 text-blue-500 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="glass rounded-2xl p-6 md:p-8 mb-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 style={{ fontFamily: 'Outfit, sans-serif' }} className="text-lg font-bold text-white mb-1">
                Stay in the loop
              </h3>
              <p className="text-sm text-slate-400">Get solar insights, marketplace updates, and impact reports.</p>
            </div>
            <form className="flex w-full md:w-auto gap-2">
              <input
                id="newsletter-email"
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-2.5 rounded-lg bg-white/5 border border-blue-500/20 text-sm text-white placeholder-slate-500 outline-none focus:border-blue-500/50 transition-colors"
              />
              <button type="submit" className="btn-primary text-sm py-2.5 px-5 whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/5">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} EkkoNow. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-xs text-slate-500">
            <span>Built with</span>
            <span className="text-blue-400 mx-1">⚡</span>
            <span>for a solar-powered future</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
