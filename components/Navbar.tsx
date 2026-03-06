"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top bar */}
      <div className="bg-brand-gold text-brand-dark text-xs font-semibold py-2 px-6 flex flex-wrap gap-4 justify-between items-center">
        <span className="flex items-center gap-2">
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
          </svg>
          We are Open 24/7
        </span>
        <span className="flex items-center gap-2">
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          4789 Ersel Street, Dallas, Texas, USA
        </span>
        <span className="flex items-center gap-2">
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 4.5A1.5 1.5 0 013.5 3H6a1.5 1.5 0 011.5 1.5v2A1.5 1.5 0 016 8H5a9 9 0 004.5 4.5v-1A1.5 1.5 0 0111 10h2a1.5 1.5 0 011.5 1.5v3A1.5 1.5 0 0113 16h-1A10 10 0 012 6V5a1.5 1.5 0 011.5-1.5z" />
          </svg>
          +1 458 2234139
        </span>
      </div>

      {/* Main Navbar */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-brand-dark/95 backdrop-blur-lg shadow-2xl border-b border-brand-gold/10"
            : "bg-brand-dark-2"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-brand-gold/20 border border-brand-gold/40 flex items-center justify-center text-brand-gold font-bold text-lg">
              K
            </div>
            <div>
              <div className="text-white font-bold text-sm leading-tight font-display">KRYPTONITE</div>
              <div className="text-brand-gold text-xs tracking-widest uppercase">ASSET RECOVERY SLEUTHS</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-gray-300 hover:text-brand-gold transition-colors text-sm font-medium animated-underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center gap-2 bg-brand-gold text-brand-dark font-semibold text-sm px-5 py-2.5 rounded-sm hover:bg-brand-gold-light transition-colors"
          >
            Hire an Expert
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            <div className={`w-6 h-0.5 bg-current mb-1.5 transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <div className={`w-6 h-0.5 bg-current mb-1.5 transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <div className={`w-6 h-0.5 bg-current transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-brand-dark-3 border-t border-brand-gold/10 px-6 py-4">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-gray-300 hover:text-brand-gold block text-sm font-medium py-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="inline-block bg-brand-gold text-brand-dark font-semibold text-sm px-5 py-2.5 rounded-sm mt-2"
                >
                  Hire an Expert
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}
