"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", service: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setSubmitted(true);
    } catch (err) {
      setError('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <main>
        <section className="relative py-20 bg-brand-dark-2 overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-50" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent" />
          <div className="relative max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-brand-gold" />
              <span className="text-brand-gold text-xs font-semibold uppercase tracking-[0.3em]">Get In Touch</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-white">
              Contact <span className="text-gold-gradient">Us</span>
            </h1>
          </div>
        </section>

        <section className="py-24 bg-brand-dark">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Info */}
              <div>
                <h2 className="font-display text-3xl font-bold text-white mb-6">
                  Speak to an <span className="text-gold-gradient">Expert</span>
                </h2>
                <p className="text-gray-400 leading-relaxed mb-10">
                  Whether you&apos;ve been scammed, hacked, or defrauded, our team is ready to evaluate your case and build a recovery plan. Reach out through any channel below — we&apos;re available 24/7.
                </p>

                <div className="space-y-6">
                  {[
                    {
                      icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>,
                      label: "Address",
                      value: "4789 Ersel Street, Dallas, Texas, USA",
                      href: "#",
                    },
                  ].map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="flex gap-4 bg-brand-dark-2 border border-brand-gold/20 rounded p-5 hover:border-brand-gold/40 transition-all group"
                    >
                      <div className="w-12 h-12 rounded bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 uppercase tracking-widest mb-1">{item.label}</div>
                        <div className="text-white group-hover:text-brand-gold transition-colors text-sm">{item.value}</div>
                      </div>
                    </a>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-brand-gold/10 border border-brand-gold/20 rounded">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-brand-gold text-sm font-semibold">Available 24/7</span>
                  </div>
                  <p className="text-gray-400 text-sm">Our experts are standing by around the clock to handle your case with urgency and care.</p>
                </div>
              </div>

              {/* Form */}
              <div className="bg-brand-dark-2 border border-brand-gold/20 rounded p-8">
                {submitted ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-brand-gold/20 border-2 border-brand-gold flex items-center justify-center text-brand-gold text-2xl mb-6">
                      ✓
                    </div>
                    <h3 className="font-display text-2xl font-bold text-white mb-3">Message Received!</h3>
                    <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                      Thank you for reaching out. A member of our expert team will contact you within 24 hours to review your case.
                    </p>
                  </div>
                ) : (
                  <>
                    <h3 className="font-display text-2xl font-bold text-white mb-8">Send Us a Message</h3>
                    <div className="space-y-5">
                      {[
                        { id: "name", label: "Full Name", type: "text", placeholder: "Your full name" },
                        { id: "email", label: "Email Address", type: "email", placeholder: "you@example.com" },
                        { id: "phone", label: "Phone Number", type: "tel", placeholder: "+1 (000) 000-0000" },
                      ].map((field) => (
                        <div key={field.id}>
                          <label className="block text-xs text-gray-400 uppercase tracking-widest mb-2">
                            {field.label}
                          </label>
                          <input
                            type={field.type}
                            placeholder={field.placeholder}
                            value={formData[field.id as keyof typeof formData]}
                            onChange={(e) => setFormData({ ...formData, [field.id]: e.target.value })}
                            className="w-full bg-brand-dark border border-white/10 focus:border-brand-gold/50 rounded px-4 py-3 text-white placeholder-gray-600 text-sm outline-none transition-colors"
                          />
                        </div>
                      ))}

                      <div>
                        <label className="block text-xs text-gray-400 uppercase tracking-widest mb-2">Service Needed</label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full bg-brand-dark border border-white/10 focus:border-brand-gold/50 rounded px-4 py-3 text-white text-sm outline-none transition-colors"
                        >
                          <option value="">Select a service...</option>
                          <option value="crypto">Crypto Fraud Recovery</option>
                          <option value="loan">Loan Scam Recovery</option>
                          <option value="credit">Credit Score Fix</option>
                          <option value="email">Email Hack Recovery</option>
                          <option value="social">Phone/Social Media Hack</option>
                          <option value="investment">Investment Fund Recovery</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs text-gray-400 uppercase tracking-widest mb-2">Describe Your Situation</label>
                        <textarea
                          rows={4}
                          placeholder="Tell us what happened..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full bg-brand-dark border border-white/10 focus:border-brand-gold/50 rounded px-4 py-3 text-white placeholder-gray-600 text-sm outline-none transition-colors resize-none"
                        />
                      </div>

                      <button
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                        className="w-full bg-brand-gold text-brand-dark font-bold py-4 rounded-sm hover:bg-brand-gold-light transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                        {!isSubmitting && (
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        )}
                      </button>
                      {error && (
                        <p className="text-red-500 text-sm mt-2 text-center">{error}</p>
                      )}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
