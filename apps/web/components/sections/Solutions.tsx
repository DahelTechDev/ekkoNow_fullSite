import Link from 'next/link';
import Image from 'next/image';
import { Zap, ArrowRight } from 'lucide-react';

const SOLUTIONS = [
  {
    imageSrc: '/generated/sol_solar_panels_1777645712391.png',
    color: '#F59E0B',
    title: 'Solar Panel Systems',
    description: 'From 300W monocrystalline to 550W bifacial panels. Residential, commercial, and utility-scale systems available.',
    href: '/solar-marketplace/categories/solar-panels',
    tags: ['Residential', 'Commercial', 'Utility'],
  },
  {
    imageSrc: '/generated/sol_energy_storage_1777645731592.png',
    color: '#10B981',
    title: 'Energy Storage',
    description: 'LiFePO4 and lithium-ion battery banks from 5kWh to 100kWh+. Store energy, eliminate blackouts, go off-grid.',
    href: '/solar-marketplace/categories/batteries',
    tags: ['LiFePO4', 'Lithium-Ion', 'Off-Grid'],
  },
  {
    imageSrc: '/generated/sol_hybrid_inverters_1777645746901.png',
    color: '#3B82F6',
    title: 'Hybrid Inverters',
    description: 'Pure sine wave and hybrid inverters supporting solar, grid, and battery. Smart MPPT charge controllers included.',
    href: '/solar-marketplace/categories/inverters',
    tags: ['Hybrid', 'MPPT', 'Pure Sine'],
  },
  {
    imageSrc: '/generated/sol_installation_1777645762611.png',
    color: '#8B5CF6',
    title: 'Installation & Support',
    description: 'End-to-end installation by certified engineers. Site surveys, system design, commissioning, and warranties.',
    href: '/solutions',
    tags: ['Certified', 'Warranty', 'Design'],
  },
  {
    imageSrc: '/generated/sol_smart_monitoring_1777645778538.png',
    color: '#06B6D4',
    title: 'Smart Monitoring',
    description: 'Real-time energy dashboards. Track production, consumption, savings, and carbon offset from any device.',
    href: '/solutions',
    tags: ['Real-Time', 'Mobile App', 'Alerts'],
  },
  {
    imageSrc: '/generated/sol_finance_1777645794382.png',
    color: '#EC4899',
    title: 'Finance & Leasing',
    description: 'Own your solar system with flexible payment plans. Zero-down lease options and EkkoNow Solar Credit available.',
    href: '/investors',
    tags: ['Lease', '0% Down', 'Credit'],
  },
  {
    imageSrc: '/generated/sol_waste_recovery_1777645821609.png',
    color: '#10B981',
    title: 'Waste Recovery & Recycling',
    description: 'We collect and process plastic and recyclable materials at scale, transforming waste into usable value.',
    href: '/solutions',
    tags: ['Recycling', 'Circular Economy', 'Scale'],
  },
  {
    imageSrc: '/generated/sol_solar_energy_1777645846697.png',
    color: '#F59E0B',
    title: 'Solar & Renewable Energy',
    description: 'We enable clean energy through comprehensive solar solutions and strategic partnerships across communities.',
    href: '/solutions',
    tags: ['Clean Energy', 'Partnerships', 'Access'],
  },
  {
    imageSrc: '/generated/sol_training_1777645867044.png',
    color: '#3B82F6',
    title: 'Training & Education',
    description: 'We build local capacity by training individuals and teams in advanced recycling processes and solar systems.',
    href: '/solutions',
    tags: ['Capacity Building', 'Green Jobs', 'Skills'],
  },
  {
    imageSrc: '/generated/sol_advisory_1777645881702.png',
    color: '#8B5CF6',
    title: 'Advisory',
    description: 'We support organizations, governments, and businesses with end-to-end sustainability and energy strategies.',
    href: '/solutions',
    tags: ['Strategy', 'Consulting', 'Sustainability'],
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="section-padding" style={{ background: '#0D0A2E' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm text-emerald-300 mb-6 border-emerald-500/20">
            <Zap className="w-3.5 h-3.5" />
            Complete Solar Platform
          </div>
          <h2
            style={{ fontFamily: 'Outfit, sans-serif' }}
            className="text-4xl sm:text-5xl font-extrabold text-white mb-5"
          >
            Everything You Need to{' '}
            <span className="gradient-text">Go Solar</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            From hardware to financing to monitoring — EkkoNow is your complete
            solar energy partner across Africa.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SOLUTIONS.map((sol, idx) => (
            <Link
              key={idx}
              href={sol.href}
              className="group glass rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-blue-500/30 flex flex-col h-full"
            >
              {/* Image Header */}
              <div className="relative w-full h-48 overflow-hidden">
                <Image 
                  src={sol.imageSrc} 
                  alt={sol.title} 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0A2E] via-transparent to-transparent opacity-90" />
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3
                  style={{ fontFamily: 'Outfit, sans-serif' }}
                  className="text-xl font-bold text-white mb-3"
                >
                  {sol.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-1">
                  {sol.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {sol.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-0.5 rounded-full bg-white/5 text-slate-400 border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div
                  className="flex items-center gap-1.5 text-sm font-medium transition-colors duration-200"
                  style={{ color: sol.color }}
                >
                  Learn more{' '}
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
