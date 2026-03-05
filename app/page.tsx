import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
  {
    icon: "₿",
    title: "Crypto Fraud Recovery",
    desc: "We trace and recover stolen Bitcoin, Ethereum, and all major cryptocurrencies using advanced blockchain analysis.",
  },
  {
    icon: "🔒",
    title: "Loan Scam Recovery",
    desc: "Victims of advance-fee loan fraud can recoup lost funds through our targeted investigation and legal escalation.",
  },
  {
    icon: "📊",
    title: "Credit Score Fix / Upgrade",
    desc: "Our financial experts work to remediate fraudulent activity affecting your credit profile and restore your score.",
  },
  {
    icon: "📧",
    title: "Email Hack Recovery",
    desc: "We secure compromised accounts and recover data lost through phishing, spoofing, and business email compromise.",
  },
  {
    icon: "📱",
    title: "Phone / Social Media Hack",
    desc: "Recover hacked social media profiles and mobile accounts with our digital forensics and platform escalation team.",
  },
  {
    icon: "💼",
    title: "Investment Fund Recovery",
    desc: "Defrauded by a fake investment platform? We pursue asset repatriation across jurisdictions worldwide.",
  },
];

const stats = [
  { value: "98%", label: "Customer Satisfaction", desc: "We engage beyond the conventional client relationship." },
  { value: "440+", label: "Problems Solved", desc: "Affordable solutions to reduce costs and improve security." },
  { value: "99%", label: "Positive Feedback", desc: "Our success guarantees the effectiveness of our methods." },
];

const testimonials = [
  {
    name: "Alex Jason",
    role: "Finance Consultant",
    text: "Metatech Recoverypro is a lifesaver! They helped me recover my stolen cryptocurrency and brought the scammers to justice. Their expertise and professionalism are unmatched.",
    initials: "AJ",
  },
  {
    name: "Martin Doe",
    role: "Founder & CEO",
    text: "Metatech Recovery Pro is the best in the business! They successfully recovered my assets from a fraudulent investment scheme. Their knowledge in crypto forensics is impressive.",
    initials: "MD",
  },
  {
    name: "Jin Steven",
    role: "Product Manager",
    text: "Metatech Recovery Pro exceeded my expectations! They not only recovered my stolen crypto but also helped me understand how to protect myself from future scams.",
    initials: "JS",
  },
  {
    name: "Mona Kamal",
    role: "Founder & CEO",
    text: "I'm grateful for their expertise in recovering my assets from a hacked wallet. Their attention to detail and commitment to justice are admirable.",
    initials: "MK",
  },
];

const whyUs = [
  {
    title: "Due Diligence",
    desc: "Background Reports for individuals and corporate entities. Comprehensive appraisals of assets, risk, historic data, and liabilities.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Asset Recovery",
    desc: "Full end-to-end solutions for Asset Tracing and Recovery. If you have recoverable assets, we build a plan tailored to your case.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    title: "Cyber Tools",
    desc: "State-of-the-art software solutions, closed databases, Open Intelligence, Human Intelligence, Cyber Intelligence, and Financial Intelligence.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── HERO ── */}
        <section className="relative min-h-[92vh] flex items-center grid-bg overflow-hidden">
          {/* Background layers */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand-dark-2 to-brand-dark" />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-gold/5 to-transparent" />
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-brand-gold/5 blur-[100px]" />
          <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-brand-accent/10 blur-[80px]" />

          {/* Decorative lines */}
          <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent" />
          <div className="absolute bottom-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/10 to-transparent" />

          <div className="relative max-w-7xl mx-auto px-6 py-24">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-brand-gold" />
                <span className="text-brand-gold text-xs font-semibold uppercase tracking-[0.3em]">
                  Trusted Crypto Recovery Experts
                </span>
              </div>

              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-white mb-6">
                Recovering{" "}
                <span className="text-gold-gradient">Stolen Crypto</span>{" "}
                Assets &amp; Fighting Fraud
              </h1>

              <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-xl">
                Advanced blockchain forensics, cybersecurity tools, and a team of dedicated experts ready to help you reclaim what&apos;s rightfully yours — 24 hours a day.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-brand-gold text-brand-dark font-bold px-8 py-4 rounded-sm hover:bg-brand-gold-light transition-all glow-gold"
                >
                  Get Started Now
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 border border-brand-gold/30 text-gray-300 px-8 py-4 rounded-sm hover:border-brand-gold hover:text-brand-gold transition-all"
                >
                  Our Services
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap items-center gap-6 mt-12 pt-10 border-t border-white/5">
                {[
                  { v: "98%", l: "Success Rate" },
                  { v: "440+", l: "Cases Solved" },
                  { v: "24/7", l: "Available" },
                ].map((b) => (
                  <div key={b.l} className="flex items-center gap-3">
                    <div className="text-2xl font-bold text-brand-gold font-display">{b.v}</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">{b.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Floating card */}
          <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:block">
            <div className="bg-brand-dark-3 border border-brand-gold/20 rounded p-6 w-72 shadow-2xl">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs text-gray-400 uppercase tracking-widest">Live Recovery Status</span>
              </div>
              <div className="space-y-3">
                {[
                  { label: "Blockchain Analysis", pct: 92 },
                  { label: "Asset Tracing", pct: 87 },
                  { label: "Fund Recovery", pct: 98 },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-400">{item.label}</span>
                      <span className="text-brand-gold">{item.pct}%</span>
                    </div>
                    <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-brand-gold to-brand-gold-light rounded-full"
                        style={{ width: `${item.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-5 pt-4 border-t border-white/5 text-xs text-gray-500 text-center">
                Powered by Advanced Forensics
              </div>
            </div>
          </div>
        </section>

        {/* ── SERVICES ── */}
        <section className="py-24 bg-brand-dark-2 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent" />
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-brand-gold" />
                <span className="text-brand-gold text-xs font-semibold uppercase tracking-[0.3em]">Our Services</span>
                <div className="h-px w-8 bg-brand-gold" />
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
                Our Expertly Shaped{" "}
                <span className="text-gold-gradient">Recovery Solutions</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Specialized services to recover stolen cryptocurrency, investigate digital fraud, and secure digital assets with advanced hacking tools and a skilled team.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((svc, i) => (
                <div
                  key={svc.title}
                  className="group bg-brand-dark border border-white/5 hover:border-brand-gold/30 rounded p-8 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-gold/5"
                >
                  <div className="text-3xl mb-5">{svc.icon}</div>
                  <h3 className="text-white font-semibold text-lg mb-3 group-hover:text-brand-gold transition-colors font-display">
                    {svc.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{svc.desc}</p>
                  <div className="mt-6 flex items-center gap-2 text-brand-gold text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ABOUT ── */}
        <section className="py-24 bg-brand-dark relative overflow-hidden">
          <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-brand-gold/3 to-transparent" />
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px w-8 bg-brand-gold" />
                  <span className="text-brand-gold text-xs font-semibold uppercase tracking-[0.3em]">About Us</span>
                </div>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  We specialize in{" "}
                  <span className="text-gold-gradient">crypto fraud investigation</span>{" "}
                  and asset recovery solutions.
                </h2>
                <p className="text-gray-400 leading-relaxed mb-8">
                  We are a team of expert cryptographers, cybersecurity specialists, and financial analysts dedicated to helping individuals and institutions recover from crypto fraud and asset theft. Our mission is to provide cutting-edge solutions and unparalleled support to those affected by the growing threat of cryptocurrency scams.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {["Expertise", "Result Driven", "Fast & Reliable", "24 Hour Support"].map((item) => (
                    <div key={item} className="flex items-center gap-3 bg-brand-dark-2 border border-white/5 rounded p-4">
                      <div className="w-2 h-2 rounded-full bg-brand-gold shrink-0" />
                      <span className="text-gray-300 text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 bg-brand-gold text-brand-dark font-semibold px-7 py-3.5 rounded-sm hover:bg-brand-gold-light transition-all"
                >
                  More About Us
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* Visual */}
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-brand-dark-2 border border-brand-gold/20 rounded p-6 text-center">
                    <div className="text-4xl font-bold text-brand-gold font-display mb-1">98%</div>
                    <div className="text-gray-400 text-sm">Success Rate</div>
                  </div>
                  <div className="bg-brand-gold border border-brand-gold rounded p-6 text-center">
                    <div className="text-4xl font-bold text-brand-dark font-display mb-1">440+</div>
                    <div className="text-brand-dark/70 text-sm font-medium">Cases Solved</div>
                  </div>
                  <div className="bg-brand-dark-3 border border-white/5 rounded p-6 text-center">
                    <div className="text-4xl font-bold text-white font-display mb-1">10+</div>
                    <div className="text-gray-400 text-sm">Years Experience</div>
                  </div>
                  <div className="bg-brand-dark-2 border border-brand-gold/20 rounded p-6 text-center">
                    <div className="text-4xl font-bold text-brand-gold font-display mb-1">24/7</div>
                    <div className="text-gray-400 text-sm">Support Available</div>
                  </div>
                </div>
                <div className="absolute -inset-4 bg-brand-gold/5 blur-3xl rounded-full -z-10" />
              </div>
            </div>
          </div>
        </section>

        {/* ── WHY CHOOSE US ── */}
        <section className="py-24 bg-brand-dark-2 relative overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-50" />
          <div className="relative max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px w-8 bg-brand-gold" />
                  <span className="text-brand-gold text-xs font-semibold uppercase tracking-[0.3em]">Industry Expert Solutions</span>
                </div>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  Your trusted ally in recovering{" "}
                  <span className="text-gold-gradient">stolen cryptocurrencies</span>
                </h2>
                <p className="text-gray-400 leading-relaxed mb-8">
                  Worry less about your crypto &amp; cyber fraud invasion. METATECH RECOVERY PRO has got you. Let us provide the support you deserve.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-brand-gold text-brand-dark font-semibold px-7 py-3.5 rounded-sm hover:bg-brand-gold-light transition-all"
                >
                  Speak to an Expert
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              <div className="space-y-5">
                {whyUs.map((item) => (
                  <div
                    key={item.title}
                    className="flex gap-5 bg-brand-dark border border-white/5 hover:border-brand-gold/20 rounded p-6 group transition-all"
                  >
                    <div className="w-12 h-12 rounded bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold shrink-0 group-hover:bg-brand-gold/20 transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-2 group-hover:text-brand-gold transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── STATS ── */}
        <section className="py-20 bg-brand-gold relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(0,0,0,0.5)_0%,_transparent_100%)]" />
          </div>
          <div className="relative max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-brand-dark">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-6xl font-bold font-display mb-2">{stat.value}</div>
                  <div className="font-semibold text-lg mb-2">{stat.label}</div>
                  <p className="text-brand-dark/70 text-sm leading-relaxed max-w-xs mx-auto">{stat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY CHOOSE US (detail) ── */}
        <section className="py-24 bg-brand-dark relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-brand-gold" />
                <span className="text-brand-gold text-xs font-semibold uppercase tracking-[0.3em]">Why Choose Us</span>
                <div className="h-px w-8 bg-brand-gold" />
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
                Metatech <span className="text-gold-gradient">RecoveryPro</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Our team of expert private investigators specializes in crypto fraud and asset recovery, with years of experience tracking down scammers and recovering stolen assets.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Expertise", icon: "🎯", desc: "Years of hands-on experience in crypto forensics, blockchain analysis, and digital fraud investigation." },
                { title: "Personalized Support", icon: "🤝", desc: "We treat every case uniquely, providing dedicated support tailored to your specific situation." },
                { title: "Cutting-edge Technology", icon: "⚡", desc: "State-of-the-art cyber tools, closed databases, and multi-source intelligence methods." },
              ].map((item) => (
                <div key={item.title} className="text-center group">
                  <div className="w-20 h-20 rounded-full bg-brand-gold/10 border-2 border-brand-gold/20 flex items-center justify-center text-3xl mx-auto mb-6 group-hover:border-brand-gold group-hover:bg-brand-gold/20 transition-all">
                    {item.icon}
                  </div>
                  <h3 className="text-white font-semibold text-xl mb-3 font-display">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-brand-gold text-brand-dark font-semibold px-8 py-4 rounded-sm hover:bg-brand-gold-light transition-all"
              >
                Get Started Now
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section className="py-24 bg-brand-dark-2 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent" />
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-brand-gold" />
                <span className="text-brand-gold text-xs font-semibold uppercase tracking-[0.3em]">Testimonials</span>
                <div className="h-px w-8 bg-brand-gold" />
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
                Hear from our <span className="text-gold-gradient">happy clients</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  className="bg-brand-dark border border-white/5 hover:border-brand-gold/20 rounded p-8 transition-all group"
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-5">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-brand-gold" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-gray-300 text-sm leading-relaxed mb-6 italic">
                    &ldquo;{t.text}&rdquo;
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-brand-gold/20 border border-brand-gold/30 flex items-center justify-center text-brand-gold font-bold text-sm">
                      {t.initials}
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">{t.name}</div>
                      <div className="text-gray-500 text-xs">{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA SECTION ── */}
        <section className="py-24 bg-brand-dark relative overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-brand-gold/5 blur-[120px] rounded-full" />
          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-brand-gold" />
              <span className="text-brand-gold text-xs font-semibold uppercase tracking-[0.3em]">Reclaim What&apos;s Yours</span>
              <div className="h-px w-8 bg-brand-gold" />
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to Recover Your{" "}
              <span className="text-gold-gradient">Stolen Assets?</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              Don&apos;t let fraudsters get away with your hard-earned cryptocurrency. Our expert team is ready to fight for you around the clock.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-brand-gold text-brand-dark font-bold px-10 py-4 rounded-sm hover:bg-brand-gold-light transition-all text-lg glow-gold"
              >
                Start Recovery Now
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
