'use client';

import type { Metadata } from 'next';
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Loader2 } from 'lucide-react';
import PageHero from '@/components/layout/PageHero';

const CONTACT_METHODS = [
  { icon: Mail, color: '#3B82F6', label: 'Send Email', value: 'info.ekkonow@gmail.com', href: 'mailto:info.ekkonow@gmail.com' },
  { icon: Phone, color: '#10B981', label: 'Chat on WhatsApp', value: '+2347047581704', href: 'https://wa.me/2347047581704' },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#1A0B4F]">
      <PageHero
        title="Let's Build"
        titleHighlight="Together"
        subtitle="Whether you're a homeowner, business, partner, or investor — we want to hear from you."
        badgeText="Get in Touch"
        imageSrc="/images/hero_contact.png"
      />

      {/* Contact Grid */}
      <section className="section-padding" style={{ background: '#0D0A2E' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left — Contact methods */}
          <div className="space-y-5">
            {CONTACT_METHODS.map(({ icon: Icon, color, label, value, href }) => (
              <a
                key={label}
                href={href}
                className="glass rounded-2xl p-6 flex items-start gap-4 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 block"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${color}18` }}>
                  <Icon className="w-6 h-6" style={{ color }} />
                </div>
                <div>
                  <div className="text-slate-400 text-xs font-medium uppercase tracking-wider mb-1">{label}</div>
                  <div className="text-white font-semibold" style={{ fontFamily: 'Outfit, sans-serif' }}>{value}</div>
                </div>
              </a>
            ))}

            {/* Office hours */}
            <div className="glass rounded-2xl p-6">
              <h3 style={{ fontFamily: 'Outfit, sans-serif' }} className="text-white font-semibold mb-3">Office Hours</h3>
              <div className="space-y-2 text-sm text-slate-400">
                <div className="flex justify-between">
                  <span>Monday – Friday</span>
                  <span className="text-white">8am – 6pm WAT</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="text-white">9am – 2pm WAT</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-slate-500">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="lg:col-span-2 glass rounded-2xl p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-500/15 flex items-center justify-center mb-5">
                  <CheckCircle className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 style={{ fontFamily: 'Outfit, sans-serif' }} className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-slate-400">We&apos;ll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form id="contact-form" onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm text-slate-400 mb-2">Full Name *</label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="John Adewale"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-blue-500/15 text-white placeholder-slate-600 outline-none focus:border-blue-500/40 transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-sm text-slate-400 mb-2">Email Address *</label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-blue-500/15 text-white placeholder-slate-600 outline-none focus:border-blue-500/40 transition-colors text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-company" className="block text-sm text-slate-400 mb-2">Company / Organization</label>
                  <input
                    id="contact-company"
                    type="text"
                    placeholder="Optional"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-blue-500/15 text-white placeholder-slate-600 outline-none focus:border-blue-500/40 transition-colors text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="contact-subject" className="block text-sm text-slate-400 mb-2">Subject *</label>
                  <select
                    id="contact-subject"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[#120E3A] border border-blue-500/15 text-white outline-none focus:border-blue-500/40 transition-colors text-sm"
                  >
                    <option value="">Select a topic</option>
                    <option value="solar">Solar System Inquiry</option>
                    <option value="marketplace">Marketplace Support</option>
                    <option value="partnership">Partnership</option>
                    <option value="investment">Investment</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-sm text-slate-400 mb-2">Message *</label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    placeholder="Tell us how we can help..."
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-blue-500/15 text-white placeholder-slate-600 outline-none focus:border-blue-500/40 transition-colors text-sm resize-none"
                  />
                </div>
                <button
                  type="submit"
                  id="contact-submit"
                  disabled={loading}
                  className="btn-primary w-full justify-center text-base py-3.5"
                >
                  {loading ? (
                    <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>
                  ) : (
                    <><Send className="w-4 h-4" /> Send Message</>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
