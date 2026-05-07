import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Lock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | Ekko Now',
  description: 'Learn how Ekko Now collects, uses, and protects your personal information.',
};

const SECTIONS = [
  {
    num: '1',
    title: 'Information We Collect',
    content: (
      <div className="space-y-3 text-slate-300 text-sm leading-relaxed">
        <p>We may collect:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {['Name','Email address','Phone number','Delivery address','Payment information','Marketplace activity','Device/browser information','Messages or inquiries sent to us'].map(i => (
            <div key={i} className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2EE6A6] flex-shrink-0" />
              {i}
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    num: '2',
    title: 'How We Use Your Information',
    content: (
      <div className="space-y-2 text-slate-300 text-sm leading-relaxed">
        <p>We use information to:</p>
        <ul className="space-y-2 mt-2">
          {['Provide services','Process transactions','Improve user experience','Respond to inquiries','Send updates and notifications','Support marketplace operations','Enhance security and fraud prevention'].map(i => (
            <li key={i} className="flex items-start gap-2"><span className="text-[#2EE6A6] mt-1">▸</span>{i}</li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    num: '3',
    title: 'Marketplace Data',
    content: (
      <div className="space-y-3 text-slate-300 text-sm leading-relaxed">
        <p>If you are a vendor, we may collect business information, product details, banking/payment information, and verification documents. This helps maintain marketplace trust and compliance.</p>
      </div>
    ),
  },
  {
    num: '4',
    title: 'Cookies & Analytics',
    content: (
      <div className="space-y-2 text-slate-300 text-sm leading-relaxed">
        <p>We may use cookies and analytics tools to understand platform usage, improve performance, and enhance user experience. Users may disable cookies in browser settings.</p>
      </div>
    ),
  },
  {
    num: '5',
    title: 'Data Sharing',
    content: (
      <div className="space-y-3 text-slate-300 text-sm leading-relaxed">
        <p className="text-[#2EE6A6] font-semibold">We do not sell personal data.</p>
        <p>We may share information with:</p>
        <ul className="space-y-2">
          {['Payment processors','Delivery/logistics partners','Legal authorities when required','Service providers supporting our operations'].map(i => (
            <li key={i} className="flex items-start gap-2"><span className="text-[#1F8BFF] mt-1">▸</span>{i}</li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    num: '6',
    title: 'Data Security',
    content: (
      <div className="space-y-2 text-slate-300 text-sm leading-relaxed">
        <p>We implement reasonable security measures to protect information from unauthorized access, misuse, loss, or alteration.</p>
        <p className="text-slate-500 italic">However, no online platform is completely secure.</p>
      </div>
    ),
  },
  {
    num: '7',
    title: 'User Rights',
    content: (
      <div className="space-y-3 text-slate-300 text-sm leading-relaxed">
        <p>Users may request:</p>
        <ul className="space-y-2">
          {['Access to personal information','Corrections to inaccurate data','Deletion of certain information','Opt-out from communications'].map(i => (
            <li key={i} className="flex items-start gap-2"><span className="text-[#2EE6A6] mt-1">▸</span>{i}</li>
          ))}
        </ul>
        <p>Requests may be sent to: <a href="mailto:info.ekkonow@gmail.com" className="text-[#1F8BFF] hover:text-[#2EE6A6] transition-colors">info.ekkonow@gmail.com</a></p>
      </div>
    ),
  },
  {
    num: '8',
    title: 'Third-Party Links',
    content: <p className="text-slate-300 text-sm leading-relaxed">Our platform may contain links to third-party websites or vendors. EKKO NOW is not responsible for external privacy practices.</p>,
  },
  {
    num: '9',
    title: 'Policy Updates',
    content: <p className="text-slate-300 text-sm leading-relaxed">We may revise this Privacy Policy periodically. Updated versions will be posted on the platform.</p>,
  },
  {
    num: '10',
    title: 'Contact',
    content: (
      <div className="space-y-2 text-slate-300 text-sm">
        <p className="font-semibold text-white">EKKO NOW</p>
        <p>📧 <a href="mailto:info.ekkonow@gmail.com" className="text-[#1F8BFF] hover:text-[#2EE6A6] transition-colors">info.ekkonow@gmail.com</a></p>
        <p>🌐 <a href="https://www.ekkonow.com" className="text-[#1F8BFF] hover:text-[#2EE6A6] transition-colors">www.ekkonow.com</a></p>
      </div>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#1A0B4F] pt-20">
      <section className="relative py-20 px-4 overflow-hidden" style={{ background: 'linear-gradient(160deg, #1A0B4F 0%, #12093A 100%)' }}>
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#2EE6A6]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <Link href="/" className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-[#2EE6A6]/15 flex items-center justify-center">
              <Lock className="w-7 h-7 text-[#2EE6A6]" />
            </div>
            <div>
              <p className="text-xs text-[#2EE6A6] font-semibold uppercase tracking-widest mb-1">Legal</p>
              <h1 style={{ fontFamily: 'Outfit, sans-serif' }} className="text-4xl sm:text-5xl font-extrabold text-white">Privacy Policy</h1>
            </div>
          </div>
          <p className="text-slate-400 text-sm">Last Updated: May 2026</p>
          <p className="text-slate-300 mt-4 max-w-xl leading-relaxed">
            EKKO NOW respects your privacy and is committed to protecting your personal information.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16 space-y-6">
        {SECTIONS.map((s) => (
          <div key={s.num} className="glass rounded-2xl p-6 border border-white/5 hover:border-[#2EE6A6]/20 transition-colors">
            <h2 style={{ fontFamily: 'Outfit, sans-serif' }} className="text-lg font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-[#2EE6A6]/15 text-[#2EE6A6] flex items-center justify-center text-sm font-bold flex-shrink-0">{s.num}</span>
              {s.title}
            </h2>
            {s.content}
          </div>
        ))}
        <div className="text-center pt-8 pb-4">
          <p className="text-slate-500 text-xs">© {new Date().getFullYear()} EKKO NOW. All rights reserved.</p>
        </div>
      </section>
    </div>
  );
}
