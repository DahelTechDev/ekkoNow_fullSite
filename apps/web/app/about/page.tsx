import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  Globe2,
  TrendingUp,
  Building2,
  Users,
  Sun,
  ShieldCheck,
  Lightbulb,
  Truck,
  Wrench,
  SunMedium,
  Network,
  Landmark,
  Building,
  Handshake,
  HeartHandshake
} from 'lucide-react';
import PageHero from '@/components/layout/PageHero';

export const metadata: Metadata = {
  title: 'About | Ekko Now',
  description:
    'Ekko Now is a climate-tech company solving waste pollution and energy access through scalable, real-world systems across Africa.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#1A0B4F]">
      <PageHero
        title="Building Africa's"
        titleHighlight="Climate Infrastructure"
        subtitle="Ekko Now is a climate-tech company solving waste pollution and energy access through scalable, real-world systems."
        badgeText="Waste to Value. Sunlight to Power."
        imageSrc="/images/hero_about.png"
      />

      {/* ── 2. OUR STORY ──────────────────────────────────────────────────── */}
      <section className="section-padding relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2
                style={{ fontFamily: 'Outfit, sans-serif' }}
                className="text-3xl sm:text-4xl font-extrabold text-white mb-6"
              >
                Why Ekko Now Exists
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  Across many African cities, waste is visible everywhere — in
                  streets, in drainage systems, in communities.
                </p>
                <p>
                  At the same time, millions of people operate without reliable
                  electricity.
                </p>
                <p className="text-blue-300 font-medium text-xl">
                  Two major challenges. One opportunity to build differently.
                </p>
                <p>
                  Ekko Now was created to design systems that don&apos;t just clean
                  environments — but create value, generate income, and power
                  communities.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="glass rounded-3xl p-8 aspect-square flex flex-col items-center justify-center text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-emerald-500/5" />
                <Globe2 className="w-32 h-32 text-blue-400/50 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>Impact at Scale</h3>
                <p className="text-slate-400">Building resilient systems for the future.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. WHAT WE BUILD ──────────────────────────────────────────────── */}
      <section className="section-padding bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2
              style={{ fontFamily: 'Outfit, sans-serif' }}
              className="text-3xl sm:text-4xl font-extrabold text-white mb-6"
            >
              What We Build
            </h2>
            <p className="text-lg text-slate-300">
              Ekko Now develops integrated systems that combine physical operations
              with technology and partnerships to scale impact.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                imageSrc: '/images/about_recover.png',
                title: 'Recover',
                desc: 'Recover waste from the environment',
              },
              {
                imageSrc: '/images/about_convert.png',
                title: 'Convert',
                desc: 'Convert materials into usable products',
              },
              {
                imageSrc: '/images/about_deploy.png',
                title: 'Deploy',
                desc: 'Deploy solar energy solutions',
              },
              {
                imageSrc: '/images/about_enable.png',
                title: 'Enable',
                desc: 'Enable green jobs and local economies',
              },
            ].map((item, i) => (
              <div key={i} className="group glass rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-blue-500/30 flex flex-col h-full">
                <div className="relative w-full h-48 overflow-hidden">
                  <Image 
                    src={item.imageSrc} 
                    alt={item.title} 
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0A2E] to-transparent opacity-80" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>
                    {item.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed flex-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. HOW OUR SYSTEM WORKS (Model) ───────────────────────────────── */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            style={{ fontFamily: 'Outfit, sans-serif' }}
            className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-16"
          >
            How Our System Works
          </h2>

          <div className="relative">
            {/* Connecting line (desktop only) */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500/20 via-blue-500/20 to-purple-500/20 -translate-y-1/2" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: '1. Recover',
                  desc: 'We collect recyclable waste from communities and partners.',
                  icon: Truck,
                  color: 'text-emerald-400',
                  border: 'border-emerald-500/30',
                },
                {
                  step: '2. Transform',
                  desc: 'We convert materials into eco-friendly products.',
                  icon: Wrench,
                  color: 'text-blue-400',
                  border: 'border-blue-500/30',
                },
                {
                  step: '3. Power',
                  desc: 'We integrate solar energy into operations and communities.',
                  icon: SunMedium,
                  color: 'text-amber-400',
                  border: 'border-amber-500/30',
                },
                {
                  step: '4. Scale',
                  desc: 'We expand through partnerships and infrastructure.',
                  icon: Network,
                  color: 'text-purple-400',
                  border: 'border-purple-500/30',
                },
              ].map((item, i) => (
                <div key={i} className="relative z-10 glass rounded-3xl p-8 text-center bg-[#120E3A]">
                  <div className={`w-16 h-16 mx-auto rounded-full border-2 ${item.border} flex items-center justify-center bg-[#0D0A2E] mb-6`}>
                    <item.icon className={`w-7 h-7 ${item.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>
                    {item.step}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. SOLAR & ENERGY ─────────────────────────────────────────────── */}
      <section className="section-padding bg-blue-900/10 border-y border-blue-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="glass rounded-3xl p-10 overflow-hidden relative">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <Sun className="w-48 h-48 text-amber-400" />
                </div>
                <ul className="space-y-6 relative z-10">
                  {[
                    'Solar product distribution',
                    'Installation partnerships',
                    'Technical advisory',
                    'Training and safety awareness',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-lg text-slate-200">
                      <ShieldCheck className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2
                style={{ fontFamily: 'Outfit, sans-serif' }}
                className="text-3xl sm:text-4xl font-extrabold text-white mb-6"
              >
                Clean Energy Is Core — <span className="text-blue-400">Not Optional</span>
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                Solar energy is central to Ekko Now&apos;s growth and impact.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                Our goal is to power both our systems and the communities we serve.
                We enable access to clean energy through a comprehensive approach
                to distribution, installation, and education.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. OUR ECOSYSTEM ──────────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            style={{ fontFamily: 'Outfit, sans-serif' }}
            className="text-3xl sm:text-4xl font-extrabold text-white mb-16"
          >
            Our Ecosystem
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { label: 'Governments', icon: Landmark },
              { label: 'Private Companies', icon: Building },
              { label: 'NGOs & Development Orgs', icon: Handshake },
              { label: 'Solar Providers & Techs', icon: Wrench },
              { label: 'Communities & Individuals', icon: HeartHandshake },
            ].map((entity, i) => (
              <div key={i} className="glass rounded-2xl p-6 hover:bg-white/5 transition-colors">
                <entity.icon className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider">{entity.label}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. VISION & CTA ───────────────────────────────────────────────── */}
      <section className="pb-32 pt-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-3xl p-12 md:p-16 text-center border-t border-blue-500/30 shadow-2xl shadow-blue-500/10">
            <Lightbulb className="w-12 h-12 text-amber-400 mx-auto mb-6" />
            <h2
              style={{ fontFamily: 'Outfit, sans-serif' }}
              className="text-3xl font-extrabold text-white mb-6 uppercase tracking-widest"
            >
              Our Vision
            </h2>
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-light mb-12 italic">
              "To build a future where waste becomes value, clean energy is accessible,
              and sustainable systems drive economic growth across Africa."
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/partners" className="btn-primary text-base py-4 px-10">
                Partner With Us <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/solutions" className="btn-secondary text-base py-4 px-10">
                Explore Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
