import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const services = [
  {
    icon: "₿",
    title: "Crypto Fraud Recovery",
    desc: "We use advanced blockchain analytics to trace stolen Bitcoin, Ethereum, and all major cryptocurrencies. Our team works with exchanges and law enforcement to freeze and recover stolen funds.",
    features: ["Blockchain transaction tracing", "Exchange coordination", "Wallet analysis", "Legal documentation"],
  },
  {
    icon: "🔒",
    title: "Loan Scam Recovery",
    desc: "Advance-fee loan scams are rampant. We investigate and pursue restitution for victims who paid fees upfront for loans that never arrived.",
    features: ["Scammer identification", "Fund tracing", "Legal escalation", "Financial institution liaison"],
  },
  {
    icon: "📊",
    title: "Credit Score Fix / Upgrade",
    desc: "Identity theft and fraud can devastate credit scores. Our financial experts work to remediate fraudulent activity and help restore your financial health.",
    features: ["Credit report analysis", "Dispute filing", "Identity theft remediation", "Score optimization"],
  },
  {
    icon: "📧",
    title: "Email Hack Recovery",
    desc: "Business Email Compromise (BEC) and personal email hacks cause billions in losses annually. We secure compromised accounts and pursue recovery of misdirected funds.",
    features: ["Account security restoration", "Email forensics", "BEC investigation", "Legal support"],
  },
  {
    icon: "📱",
    title: "Phone / Social Media Hack Recovery",
    desc: "SIM swaps, account takeovers, and social media fraud — we investigate, document, and escalate to carriers and platforms to restore access and pursue damages.",
    features: ["SIM swap investigation", "Account recovery", "Platform escalation", "Evidence collection"],
  },
  {
    icon: "💼",
    title: "Investment Fund Recovery",
    desc: "Fake investment platforms and Ponzi schemes steal billions. We pursue asset repatriation across jurisdictions using a combination of legal tools and financial intelligence.",
    features: ["Investment fraud analysis", "Asset tracing", "Multi-jurisdiction recovery", "Regulatory reporting"],
  },
];

export default function ServicesPage() {
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
              <span className="text-brand-gold text-xs font-semibold uppercase tracking-[0.3em]">What We Do</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-white">
              Our <span className="text-gold-gradient">Services</span>
            </h1>
          </div>
        </section>

        <section className="py-24 bg-brand-dark">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((svc) => (
                <div
                  key={svc.title}
                  className="bg-brand-dark-2 border border-white/5 hover:border-brand-gold/20 rounded p-8 group transition-all"
                >
                  <div className="text-4xl mb-5">{svc.icon}</div>
                  <h2 className="font-display text-2xl font-bold text-white mb-4 group-hover:text-brand-gold transition-colors">
                    {svc.title}
                  </h2>
                  <p className="text-gray-400 leading-relaxed mb-6">{svc.desc}</p>
                  <ul className="space-y-2">
                    {svc.features.map((f) => (
                      <li key={f} className="flex items-center gap-3 text-sm text-gray-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 pt-6 border-t border-white/5">
                    <Link
                      href="/contact"
                      className="text-brand-gold text-sm font-semibold flex items-center gap-2 hover:gap-3 transition-all"
                    >
                      Inquire about this service
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
