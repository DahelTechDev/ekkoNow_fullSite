import type { Metadata } from 'next';
import Image from 'next/image';
import { Zap, ArrowRight, CheckCircle } from 'lucide-react';
import PageHero from '@/components/layout/PageHero';

export const metadata: Metadata = {
  title: 'Solutions',
  description: 'Complete solar energy solutions — panels, batteries, inverters, installation, monitoring, and financing from EkkoNow.',
};

const SOLUTIONS = [
  {
    imageSrc: '/images/sol_solar_panels.png', color: '#F59E0B',
    title: 'Solar Panel Systems',
    subtitle: 'Residential & Commercial',
    description: 'We offer a curated selection of the world\'s best solar panels — from 300W residential modules to 550W bifacial commercial panels. Our certified engineers design custom systems optimized for your energy consumption, roof type, and local climate.',
    features: ['Free site survey & system design', 'All major brands: SunPower, JinkoSolar, LONGi', 'Financing options available', '25-year performance warranty'],
    href: '/solar-marketplace/categories/solar-panels',
  },
  {
    imageSrc: '/images/sol_energy_storage.png', color: '#10B981',
    title: 'Energy Storage',
    subtitle: 'Batteries & Backup',
    description: 'Never lose power again. Our LiFePO4 and lithium-ion battery systems store your solar energy for use at night or during outages. Scalable from 5kWh home systems to 1MWh commercial installations.',
    features: ['LiFePO4 & lithium-ion options', 'Integrated BMS protection', 'Stackable & modular designs', '10-year battery warranty'],
    href: '/solar-marketplace/categories/batteries',
  },
  {
    imageSrc: '/images/sol_hybrid_inverters.png', color: '#3B82F6',
    title: 'Hybrid Inverters',
    subtitle: 'Pure Sine & MPPT',
    description: 'The brain of your solar system. Our hybrid inverters seamlessly switch between solar, battery, and grid power to maximize your energy independence. All units include MPPT charge control and remote monitoring.',
    features: ['Pure sine wave output', 'Built-in MPPT controller', 'Grid-tie & off-grid capable', 'Wi-Fi monitoring included'],
    href: '/solar-marketplace/categories/inverters',
  },
  {
    imageSrc: '/images/sol_installation.png', color: '#8B5CF6',
    title: 'Installation Services',
    subtitle: 'End-to-End Support',
    description: 'Our network of certified solar engineers handles everything — from site survey and system design to installation, commissioning, and ongoing maintenance. Serving 15+ African countries.',
    features: ['Certified installation teams', 'Full system commissioning', '1-year installation warranty', 'Ongoing maintenance plans'],
    href: '/contact',
  },
  {
    imageSrc: '/images/sol_smart_monitoring.png', color: '#06B6D4',
    title: 'Smart Monitoring',
    subtitle: 'Real-Time Dashboard',
    description: 'Track your energy production, consumption, savings, and carbon offset in real-time from any device. Get intelligent alerts, performance reports, and predictive maintenance notifications.',
    features: ['Real-time production tracking', 'Mobile & web dashboard', 'Automated fault alerts', 'Monthly savings reports'],
    href: '/contact',
  },
  {
    imageSrc: '/images/sol_finance.png', color: '#EC4899',
    title: 'Solar Financing',
    subtitle: 'Own Your Power',
    description: 'Going solar shouldn\'t require upfront capital. EkkoNow offers flexible payment plans, zero-down leases, and access to our EkkoNow Solar Credit program — making solar affordable for every income level.',
    features: ['0% interest plans available', 'Zero-down lease options', 'EkkoNow Solar Credit', 'Payoff in 3–7 years'],
    href: '/investors',
  },
  {
    imageSrc: '/images/sol_waste_recovery.png', color: '#10B981',
    title: 'Waste Recovery & Recycling',
    subtitle: 'Circular Economy',
    description: 'We collect and process plastic and recyclable materials at scale. Our systems transform environmental waste into usable value, reducing pollution while creating economic opportunity.',
    features: ['Large-scale waste collection', 'Advanced material processing', 'Community recycling programs', 'Eco-friendly product conversion'],
    href: '/impact',
  },
  {
    imageSrc: '/images/sol_solar_energy.png', color: '#F59E0B',
    title: 'Solar & Renewable Energy',
    subtitle: 'Clean Power Access',
    description: 'We enable clean energy through comprehensive solar solutions and strategic partnerships. From rural electrification to commercial solar deployments across African communities.',
    features: ['Community mini-grids', 'Commercial solar systems', 'Strategic energy partnerships', 'Sustainable power delivery'],
    href: '/solar-marketplace',
  },
  {
    imageSrc: '/images/sol_training.png', color: '#3B82F6',
    title: 'Training & Education',
    subtitle: 'Capacity Building',
    description: 'We build local capacity by training individuals and teams in advanced recycling processes and solar systems, creating green jobs and fostering environmental stewardship.',
    features: ['Solar technician training', 'Recycling operations courses', 'Community safety awareness', 'Green job creation'],
    href: '/about',
  },
  {
    imageSrc: '/images/sol_advisory.png', color: '#8B5CF6',
    title: 'Advisory',
    subtitle: 'Strategic Consulting',
    description: 'We support organizations, governments, and businesses with end-to-end sustainability and energy strategies to help them meet their climate goals effectively.',
    features: ['Sustainability consulting', 'Energy strategy design', 'Policy advisory', 'Climate impact assessment'],
    href: '/contact',
  },
];

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-[#1A0B4F]">
      <PageHero
        title="What We Do"
        subtitle="Hardware, installation, monitoring, and financing. Ekko Now covers every step of your solar journey, alongside scalable waste recovery and climate innovation."
        badgeText="Full-Stack Solar & Climate Tech"
        imageSrc="/images/hero_solutions.png"
      />

      {/* Solutions list */}
      <section className="section-padding bg-[#1A0B4F]">
        <div className="max-w-7xl mx-auto space-y-8">
          {SOLUTIONS.map((sol, idx) => (
              <div
                key={sol.title}
                className={`group glass rounded-3xl overflow-hidden flex flex-col lg:flex-row items-stretch transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-500/30 ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Image Section */}
                <div className="w-full lg:w-5/12 h-64 lg:h-auto relative overflow-hidden">
                  <Image 
                    src={sol.imageSrc} 
                    alt={sol.title} 
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#0D0A2E]/80 to-transparent lg:opacity-50" />
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-7/12 p-8 lg:p-12 flex flex-col justify-center">
                  <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: sol.color }}>{sol.subtitle}</p>
                  <h2 style={{ fontFamily: 'Outfit, sans-serif' }} className="text-3xl font-extrabold text-white mb-4">{sol.title}</h2>
                  <p className="text-slate-300 leading-relaxed mb-8 text-lg">{sol.description}</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {sol.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: sol.color }} />
                        <span className="text-sm text-slate-300">{feat}</span>
                      </div>
                    ))}
                  </div>

                  <a href={sol.href} className="btn-secondary text-sm inline-flex w-max items-center gap-2">
                    Learn more <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
}
