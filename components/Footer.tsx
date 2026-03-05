import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-dark border-t border-brand-gold/10">
      {/* CTA Banner */}
      <div className="bg-brand-gold/10 border-y border-brand-gold/20 py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-brand-gold text-sm font-semibold uppercase tracking-widest mb-1">
              Start Your Recovery
            </p>
            <h3 className="text-white text-2xl font-bold font-display">
              We Protect, We Support & We Recover
            </h3>
          </div>
          <div className="flex gap-4">
            <Link
              href="/contact"
              className="bg-brand-gold text-brand-dark px-5 py-2.5 text-sm font-semibold rounded-sm hover:bg-brand-gold-light transition-all"
            >
              Speak to an Expert
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand Info */}
        <div className="mb-10 md:mb-0 max-w-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-brand-gold/20 border border-brand-gold/40 flex items-center justify-center text-brand-gold font-bold text-lg">
              S
            </div>
            <div>
              <div className="text-white font-bold text-sm font-display">SMART TECH</div>
              <div className="text-brand-gold text-xs tracking-widest uppercase">Recovery Pro</div>
            </div>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            We specialize in crypto fraud investigation and asset recovery solutions. Your trusted ally in recovering stolen cryptocurrencies.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-6 pb-2 border-b border-brand-gold/20">
            Quick Links
          </h4>
          <ul className="space-y-3">
            {["Home", "About", "Services", "Testimonials", "Contact Us"].map((item) => (
              <li key={item}>
                <Link
                  href={`/${item === "Home" ? "" : item.toLowerCase().replace(" ", "-")}`}
                  className="text-gray-400 hover:text-brand-gold text-sm transition-colors flex items-center gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-brand-gold/50" />
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-6 pb-2 border-b border-brand-gold/20">
            Contact
          </h4>
          <div className="space-y-4 text-sm text-gray-400">
            <div className="flex items-start gap-3">
              <svg className="w-4 h-4 text-brand-gold mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span>4789 Ersel Street, Dallas,<br />Texas, United States.</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-4 h-4 text-brand-gold shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span>Open 24/7, 365 days</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-brand-gold/10 py-5 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Smart Tech Recovery Pro. All rights reserved.</p>
          <p>Crypto Fraud Investigation & Asset Recovery Specialists</p>
        </div>
      </div>
    </footer>
  );
}
