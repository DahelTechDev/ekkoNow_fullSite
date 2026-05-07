'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, MapPin, Clock, Wrench, CheckCircle, Phone, Mail, MessageSquare, ChevronDown } from 'lucide-react';

const URGENCY_OPTIONS = [
  { value: 'asap', label: 'ASAP — Emergency (within hours)', color: '#EF4444' },
  { value: '24h', label: 'Within 24 hours', color: '#F59E0B' },
  { value: '48h', label: 'Within 48 hours', color: '#1F8BFF' },
  { value: 'week', label: 'Within a week', color: '#2EE6A6' },
  { value: 'flexible', label: 'Flexible — No rush', color: '#94A3B8' },
];

const MOUNT_TYPES = [
  'Rooftop (Residential)',
  'Rooftop (Commercial / Industrial)',
  'Ground-mounted Array',
  'Carport / Parking Shade',
  'Pole / Street-light Mount',
  'Wall-mounted Panels',
  'Floating / Water Mount',
  'Not sure — need advice',
];

const NIGERIAN_STATES = [
  'Abia','Adamawa','Akwa Ibom','Anambra','Bauchi','Bayelsa','Benue','Borno',
  'Cross River','Delta','Ebonyi','Edo','Ekiti','Enugu','FCT (Abuja)','Gombe',
  'Imo','Jigawa','Kaduna','Kano','Katsina','Kebbi','Kogi','Kwara',
  'Lagos','Nasarawa','Niger','Ogun','Ondo','Osun','Oyo','Plateau',
  'Rivers','Sokoto','Taraba','Yobe','Zamfara',
  // Other African locations
  'Accra, Ghana','Nairobi, Kenya','Kampala, Uganda','Dar es Salaam, Tanzania',
  'Johannesburg, South Africa','Cairo, Egypt','Other (specify in notes)',
];

export default function MountingPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="pt-20 min-h-screen bg-[#1A0B4F]">
      {/* Hero */}
      <section
        className="section-padding relative overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #1A0B4F 0%, #12093A 100%)' }}
      >
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#1F8BFF]/10 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <Link
            href="/solar-marketplace"
            className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Marketplace
          </Link>

          <div className="flex items-center gap-4 mb-5">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl" style={{ background: 'rgba(139,92,246,0.15)' }}>🏗️</div>
            <div>
              <p className="text-xs text-purple-400 font-semibold uppercase tracking-widest mb-1">Category</p>
              <h1 style={{ fontFamily: 'Outfit, sans-serif' }} className="text-4xl font-extrabold text-white">Solar Mounting</h1>
            </div>
          </div>

          <p className="text-slate-300 max-w-2xl text-lg leading-relaxed mb-8">
            Don't guess your mounting setup — get it right the first time.
            Our certified <span className="text-[#2EE6A6] font-semibold">solar engineers and field agents</span> across Africa will assess your site, 
            recommend the right structure, and handle installation safely.
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-4">
            {[
              { icon: Wrench, label: 'Certified Engineers' },
              { icon: MapPin, label: 'Nationwide Coverage' },
              { icon: Clock, label: '24–48 hr Response' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 glass px-4 py-2 rounded-full text-sm text-[#2EE6A6] border-[#2EE6A6]/20">
                <Icon className="w-3.5 h-3.5" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding bg-[#1A0B4F]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Info sidebar */}
          <div className="space-y-5">
            <div className="glass rounded-2xl p-6 border border-[#1F8BFF]/15">
              <h3 style={{ fontFamily: 'Outfit, sans-serif' }} className="text-white font-bold mb-4">How It Works</h3>
              <ol className="space-y-4">
                {[
                  'Fill in the form — takes 2 minutes',
                  'Our agent calls or WhatsApps you within your chosen timeframe',
                  'We assess your site (remotely or in person)',
                  'Get a quote, schedule installation',
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                    <span className="w-6 h-6 rounded-full bg-[#1F8BFF]/20 text-[#1F8BFF] flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            <div className="glass rounded-2xl p-6 border border-[#2EE6A6]/15">
              <h3 style={{ fontFamily: 'Outfit, sans-serif' }} className="text-white font-bold mb-3">Prefer to call?</h3>
              <a
                href="https://wa.me/2347047581704"
                className="flex items-center gap-3 text-[#2EE6A6] hover:text-white transition-colors text-sm mb-3"
              >
                <Phone className="w-4 h-4" />
                +2347047581704 (WhatsApp)
              </a>
              <a
                href="mailto:info.ekkonow@gmail.com"
                className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                info.ekkonow@gmail.com
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="glass rounded-3xl p-14 text-center border border-[#2EE6A6]/20">
                <div className="w-20 h-20 rounded-full bg-[#2EE6A6]/15 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-[#2EE6A6]" />
                </div>
                <h3 style={{ fontFamily: 'Outfit, sans-serif' }} className="text-2xl font-bold text-white mb-3">
                  Request Received! 🎉
                </h3>
                <p className="text-slate-400 max-w-md mx-auto mb-6">
                  A solar engineer or field agent near you will contact you within your chosen timeframe. 
                  Keep your phone handy!
                </p>
                <Link href="/solar-marketplace" className="btn-primary">
                  Back to Marketplace
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass rounded-3xl p-8 border border-[#1F8BFF]/15 space-y-5">
                <h2 style={{ fontFamily: 'Outfit, sans-serif' }} className="text-2xl font-bold text-white mb-1">
                  Connect With a Mounting Expert
                </h2>
                <p className="text-slate-400 text-sm mb-6">
                  Tell us about your project and we'll match you with the right engineer.
                </p>

                {/* Name + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="mount-name" className="block text-sm text-slate-400 mb-2">Full Name *</label>
                    <input
                      id="mount-name"
                      type="text"
                      required
                      placeholder="Your full name"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-[#1F8BFF]/15 text-white placeholder-slate-600 outline-none focus:border-[#1F8BFF]/50 transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="mount-phone" className="block text-sm text-slate-400 mb-2">Phone / WhatsApp *</label>
                    <input
                      id="mount-phone"
                      type="tel"
                      required
                      placeholder="+234 ..."
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-[#1F8BFF]/15 text-white placeholder-slate-600 outline-none focus:border-[#1F8BFF]/50 transition-colors text-sm"
                    />
                  </div>
                </div>

                {/* What are you mounting? */}
                <div>
                  <label htmlFor="mount-type" className="block text-sm text-slate-400 mb-2">What are you mounting? *</label>
                  <select
                    id="mount-type"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[#12093A] border border-[#1F8BFF]/15 text-white outline-none focus:border-[#1F8BFF]/50 transition-colors text-sm appearance-none"
                  >
                    <option value="">Select mounting type</option>
                    {MOUNT_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>

                {/* Location */}
                <div>
                  <label htmlFor="mount-location" className="block text-sm text-slate-400 mb-2">Your Location (State / City) *</label>
                  <select
                    id="mount-location"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[#12093A] border border-[#1F8BFF]/15 text-white outline-none focus:border-[#1F8BFF]/50 transition-colors text-sm appearance-none"
                  >
                    <option value="">Select your location</option>
                    {NIGERIAN_STATES.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                {/* Specific address */}
                <div>
                  <label htmlFor="mount-address" className="block text-sm text-slate-400 mb-2">Specific Address or Landmark</label>
                  <input
                    id="mount-address"
                    type="text"
                    placeholder="e.g. 12 Bode Thomas Street, Surulere, Lagos"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-[#1F8BFF]/15 text-white placeholder-slate-600 outline-none focus:border-[#1F8BFF]/50 transition-colors text-sm"
                  />
                </div>

                {/* Panel size / system */}
                <div>
                  <label htmlFor="mount-system" className="block text-sm text-slate-400 mb-2">System Size (if known)</label>
                  <input
                    id="mount-system"
                    type="text"
                    placeholder="e.g. 8 panels × 400W, or 5kW system"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-[#1F8BFF]/15 text-white placeholder-slate-600 outline-none focus:border-[#1F8BFF]/50 transition-colors text-sm"
                  />
                </div>

                {/* Urgency */}
                <div>
                  <label className="block text-sm text-slate-400 mb-3">How soon do you need this? *</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {URGENCY_OPTIONS.map(opt => (
                      <label key={opt.value} className="flex items-center gap-3 glass rounded-xl px-4 py-3 cursor-pointer hover:border-white/20 transition-all group">
                        <input
                          type="radio"
                          name="urgency"
                          value={opt.value}
                          required
                          className="accent-[#1F8BFF] w-4 h-4"
                        />
                        <span className="text-sm text-slate-300 group-hover:text-white transition-colors">{opt.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Preferred contact method */}
                <div>
                  <label htmlFor="mount-contact-pref" className="block text-sm text-slate-400 mb-2">Preferred Contact Method</label>
                  <select
                    id="mount-contact-pref"
                    className="w-full px-4 py-3 rounded-xl bg-[#12093A] border border-[#1F8BFF]/15 text-white outline-none focus:border-[#1F8BFF]/50 transition-colors text-sm appearance-none"
                  >
                    <option value="whatsapp">WhatsApp</option>
                    <option value="call">Phone Call</option>
                    <option value="email">Email</option>
                  </select>
                </div>

                {/* Notes */}
                <div>
                  <label htmlFor="mount-notes" className="block text-sm text-slate-400 mb-2">Additional Notes</label>
                  <textarea
                    id="mount-notes"
                    rows={4}
                    placeholder="Roof type, existing electrical setup, special conditions, questions..."
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-[#1F8BFF]/15 text-white placeholder-slate-600 outline-none focus:border-[#1F8BFF]/50 transition-colors text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  id="mount-submit"
                  disabled={loading}
                  className="btn-primary w-full justify-center text-base py-4"
                >
                  {loading ? (
                    <span className="flex items-center gap-2 justify-center">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending your request...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2 justify-center">
                      <MessageSquare className="w-4 h-4" />
                      Connect Me With a Solar Agent
                    </span>
                  )}
                </button>

                <p className="text-xs text-slate-500 text-center">
                  By submitting, you agree to be contacted by an EkkoNow certified agent or partner engineer near you.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
