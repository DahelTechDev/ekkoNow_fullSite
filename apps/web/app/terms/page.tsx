import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service | Ekko Now',
  description: 'Read the Ekko Now Terms of Service governing your access to our platform, marketplace, and services.',
};

const SECTIONS = [
  {
    num: '1',
    title: 'About Ekko Now',
    content: (
      <div className="space-y-3 text-slate-300 text-sm leading-relaxed">
        <p>EKKO NOW is a climate-tech company focused on:</p>
        <ul className="space-y-2">
          {['Recycling and waste recovery','Eco-friendly product development','Solar and renewable energy solutions','Sustainability education and partnerships','Climate-tech innovation and advisory services'].map(i => (
            <li key={i} className="flex items-start gap-2"><span className="text-[#2EE6A6] mt-1">▸</span>{i}</li>
          ))}
        </ul>
        <p>Our platform may also include a marketplace connecting users with verified solar and green energy vendors.</p>
      </div>
    ),
  },
  {
    num: '2',
    title: 'Eligibility',
    content: (
      <div className="space-y-3 text-slate-300 text-sm leading-relaxed">
        <p>By using our Services, you confirm that:</p>
        <ul className="space-y-2">
          {['You are at least 18 years old or using the platform under proper supervision','You have the legal authority to enter into agreements','Your use of the platform complies with applicable laws'].map(i => (
            <li key={i} className="flex items-start gap-2"><span className="text-[#1F8BFF] mt-1">▸</span>{i}</li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    num: '3',
    title: 'Use of Our Services',
    content: (
      <div className="space-y-3 text-slate-300 text-sm leading-relaxed">
        <p>You agree <strong className="text-white">not</strong> to:</p>
        <ul className="space-y-2">
          {['Use the platform for fraudulent activities','Upload false or misleading information','Attempt unauthorized access to our systems','Interfere with platform security or operations','Use our brand, content, or materials without permission'].map(i => (
            <li key={i} className="flex items-start gap-2"><span className="text-red-400 mt-1">✕</span>{i}</li>
          ))}
        </ul>
        <p className="mt-3 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-300">EKKO NOW reserves the right to suspend or terminate accounts that violate these Terms.</p>
      </div>
    ),
  },
  {
    num: '4',
    title: 'Marketplace & Third-Party Vendors',
    content: (
      <div className="space-y-3 text-slate-300 text-sm leading-relaxed">
        <p>EKKO NOW may allow third-party vendors to list and sell products on our platform.</p>
        <ul className="space-y-2">
          {['Vendors are responsible for their products, pricing, warranties, and delivery','EKKO NOW may verify vendors but does not manufacture all products listed','We are not liable for disputes arising directly between buyers and vendors','Users are encouraged to verify product details before purchase'].map(i => (
            <li key={i} className="flex items-start gap-2"><span className="text-amber-400 mt-1">▸</span>{i}</li>
          ))}
        </ul>
        <p>We reserve the right to remove vendors or listings that violate our standards.</p>
      </div>
    ),
  },
  {
    num: '5',
    title: 'Payments',
    content: (
      <div className="space-y-3 text-slate-300 text-sm leading-relaxed">
        <p>Payments made through the platform may be processed through secure third-party providers. Users agree that:</p>
        <ul className="space-y-2">
          {['Prices may change without notice','Transactions may be subject to verification','Refunds and returns may depend on vendor-specific policies'].map(i => (
            <li key={i} className="flex items-start gap-2"><span className="text-[#1F8BFF] mt-1">▸</span>{i}</li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    num: '6',
    title: 'Intellectual Property',
    content: (
      <div className="space-y-3 text-slate-300 text-sm leading-relaxed">
        <p>All EKKO NOW branding, logos, content, designs, visuals, text, and platform materials are protected intellectual property. You may not copy, redistribute, modify, or reproduce them without written permission from EKKO NOW.</p>
      </div>
    ),
  },
  {
    num: '7',
    title: 'User Content',
    content: (
      <div className="space-y-3 text-slate-300 text-sm leading-relaxed">
        <p>If you submit reviews, feedback, comments, photos, or suggestions — you grant EKKO NOW a non-exclusive right to use, display, and improve such content for operational and marketing purposes. You remain responsible for the content you submit.</p>
      </div>
    ),
  },
  {
    num: '8',
    title: 'Limitation of Liability',
    content: (
      <div className="space-y-3 text-slate-300 text-sm leading-relaxed">
        <p>EKKO NOW shall not be liable for:</p>
        <ul className="space-y-2">
          {['Indirect or consequential damages','Loss of profits or business','Marketplace disputes between users and vendors','Delays caused by third parties','Technical interruptions beyond our control'].map(i => (
            <li key={i} className="flex items-start gap-2"><span className="text-slate-500 mt-1">▸</span>{i}</li>
          ))}
        </ul>
        <p className="text-slate-500 italic">Services are provided "as available" and "as is."</p>
      </div>
    ),
  },
  {
    num: '9',
    title: 'Termination',
    content: <p className="text-slate-300 text-sm leading-relaxed">We reserve the right to restrict access, suspend accounts, remove listings, or terminate services where necessary to protect users, operations, or legal compliance.</p>,
  },
  {
    num: '10',
    title: 'Changes to Terms',
    content: <p className="text-slate-300 text-sm leading-relaxed">EKKO NOW may update these Terms periodically. Continued use of the platform after updates constitutes acceptance of revised Terms.</p>,
  },
  {
    num: '11',
    title: 'Governing Law',
    content: <p className="text-slate-300 text-sm leading-relaxed">These Terms shall be governed in accordance with applicable laws in Nigeria and relevant international commercial standards where applicable.</p>,
  },
  {
    num: '12',
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

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#1A0B4F] pt-20">
      {/* Hero */}
      <section className="relative py-20 px-4 overflow-hidden" style={{ background: 'linear-gradient(160deg, #1A0B4F 0%, #12093A 100%)' }}>
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#1F8BFF]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <Link href="/" className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-[#1F8BFF]/15 flex items-center justify-center">
              <Shield className="w-7 h-7 text-[#1F8BFF]" />
            </div>
            <div>
              <p className="text-xs text-[#1F8BFF] font-semibold uppercase tracking-widest mb-1">Legal</p>
              <h1 style={{ fontFamily: 'Outfit, sans-serif' }} className="text-4xl sm:text-5xl font-extrabold text-white">Terms of Service</h1>
            </div>
          </div>
          <p className="text-slate-400 text-sm">Last Updated: May 2026</p>
          <p className="text-slate-300 mt-4 max-w-xl leading-relaxed">
            By accessing or using EKKO NOW, you agree to comply with these Terms. If you do not agree, please do not use our Services.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 py-16 space-y-6">
        {SECTIONS.map((s) => (
          <div key={s.num} className="glass rounded-2xl p-6 border border-white/5 hover:border-[#1F8BFF]/20 transition-colors">
            <h2 style={{ fontFamily: 'Outfit, sans-serif' }} className="text-lg font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-[#1F8BFF]/15 text-[#1F8BFF] flex items-center justify-center text-sm font-bold flex-shrink-0">{s.num}</span>
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
