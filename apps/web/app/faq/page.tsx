import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, HelpCircle, ChevronDown } from 'lucide-react';

export const metadata: Metadata = {
  title: 'FAQs | Ekko Now',
  description: 'Frequently asked questions about Ekko Now — solar, recycling, marketplace, partnerships, and more.',
};

const FAQ_SECTIONS = [
  {
    category: '🌍 General',
    color: '#1F8BFF',
    questions: [
      {
        q: 'What is EKKO NOW?',
        a: 'EKKO NOW is a climate-tech company focused on recycling, sustainability, eco-friendly products, and renewable energy solutions.',
      },
      {
        q: 'What does "Turning Waste Into Worth" mean?',
        a: 'It means transforming waste materials into valuable products, opportunities, and sustainable systems.',
      },
      {
        q: 'Does EKKO NOW only focus on recycling?',
        a: 'No. We also work in solar energy, renewable energy partnerships, sustainability consulting, climate education, and green innovation.',
      },
    ],
  },
  {
    category: '♻️ Recycling & Sustainability',
    color: '#2EE6A6',
    questions: [
      {
        q: 'What materials do you recycle?',
        a: 'We currently focus on plastic bottles, cans, recyclable packaging, and select reusable materials.',
      },
      {
        q: 'Do you organize cleanup programs?',
        a: 'Yes. We collaborate with schools, communities, organizations, and volunteers on environmental cleanup and awareness initiatives.',
      },
      {
        q: 'Can organizations partner with EKKO NOW?',
        a: 'Absolutely. We work with governments, NGOs, schools, businesses, and community organizations.',
      },
    ],
  },
  {
    category: '☀️ Solar & Renewable Energy',
    color: '#F59E0B',
    questions: [
      {
        q: 'Does EKKO NOW install solar systems?',
        a: 'We work with trusted solar installation and renewable energy partners and vendors to get systems installed correctly.',
      },
      {
        q: 'Can I buy solar products on your platform?',
        a: 'Yes. Our Solar Marketplace allows users to discover and purchase solar and clean energy products from verified vendors.',
      },
      {
        q: 'How do I become a solar vendor?',
        a: 'You can apply through the marketplace vendor onboarding process. Contact us at info.ekkonow@gmail.com to get started.',
      },
    ],
  },
  {
    category: '🛒 Marketplace',
    color: '#8B5CF6',
    questions: [
      {
        q: 'Are all vendors verified?',
        a: 'We aim to verify vendors before listing them, but users should still review product details carefully before purchasing.',
      },
      {
        q: 'Does EKKO NOW handle delivery?',
        a: 'Delivery responsibilities may depend on the vendor and logistics arrangements. Confirm delivery terms with the vendor before purchasing.',
      },
      {
        q: 'What payment methods are accepted?',
        a: 'Supported payment methods will be displayed during checkout. We work to support multiple options for convenience.',
      },
    ],
  },
  {
    category: '💼 Careers & Partnerships',
    color: '#EC4899',
    questions: [
      {
        q: 'Can I work with EKKO NOW?',
        a: 'Yes. We periodically announce job openings, volunteer opportunities, and partnerships. Follow our social channels or email us to stay informed.',
      },
      {
        q: 'Does EKKO NOW offer training?',
        a: 'Yes. We provide climate, recycling, sustainability, and renewable energy awareness and training programs for individuals and organizations.',
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-[#1A0B4F] pt-20">
      {/* Hero */}
      <section className="relative py-20 px-4 overflow-hidden" style={{ background: 'linear-gradient(160deg, #1A0B4F 0%, #12093A 100%)' }}>
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-[#1F8BFF]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <Link href="/" className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <div className="w-16 h-16 rounded-2xl bg-[#1F8BFF]/15 flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="w-8 h-8 text-[#1F8BFF]" />
          </div>
          <h1 style={{ fontFamily: 'Outfit, sans-serif' }} className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h1>
          <p className="text-slate-400 max-w-xl mx-auto leading-relaxed">
            Everything you need to know about Ekko Now — solar, recycling, our marketplace, and more.
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="max-w-4xl mx-auto px-4 py-16 space-y-10">
        {FAQ_SECTIONS.map((section) => (
          <div key={section.category}>
            {/* Section header */}
            <h2
              style={{ fontFamily: 'Outfit, sans-serif', color: section.color }}
              className="text-xl font-bold mb-5 flex items-center gap-2"
            >
              {section.category}
            </h2>

            <div className="space-y-3">
              {section.questions.map((item, i) => (
                <details
                  key={i}
                  className="glass rounded-2xl border border-white/5 group open:border-white/10 transition-all"
                >
                  <summary className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer list-none">
                    <span
                      style={{ fontFamily: 'Outfit, sans-serif' }}
                      className="text-white font-semibold text-sm sm:text-base"
                    >
                      {item.q}
                    </span>
                    <ChevronDown
                      className="w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-200 group-open:rotate-180"
                      style={{ color: section.color }}
                    />
                  </summary>
                  <div className="px-6 pb-5">
                    <div className="h-px bg-white/5 mb-4" />
                    <p className="text-slate-300 text-sm leading-relaxed">{item.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        ))}

        {/* Still have questions CTA */}
        <div className="glass rounded-3xl p-10 text-center border border-[#1F8BFF]/15 mt-10">
          <h3 style={{ fontFamily: 'Outfit, sans-serif' }} className="text-2xl font-bold text-white mb-3">
            Still have questions?
          </h3>
          <p className="text-slate-400 mb-6">
            Our team is happy to help — reach out directly.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/2347047581704"
              className="btn-primary text-sm py-3 px-6"
            >
              Chat on WhatsApp
            </a>
            <a
              href="mailto:info.ekkonow@gmail.com"
              className="btn-secondary text-sm py-3 px-6"
            >
              Send an Email
            </a>
          </div>
        </div>

        <div className="text-center pb-4">
          <p className="text-slate-500 text-xs">© {new Date().getFullYear()} EKKO NOW. All rights reserved.</p>
        </div>
      </section>
    </div>
  );
}
