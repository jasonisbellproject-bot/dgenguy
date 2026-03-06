import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const testimonials = [
  { name: "Alex Jason", role: "Finance Consultant", initials: "AJ", text: "KRYPTONITE ASSET RECOVERY SLEUTHS is a lifesaver! They helped me recover my stolen cryptocurrency and brought the scammers to justice. Their expertise and professionalism are unmatched. 10/10 would recommend!" },
  { name: "Martin Doe", role: "Founder & CEO", initials: "MD", text: "KRYPTONITE ASSET RECOVERY SLEUTHS is the best in the business! They successfully recovered my assets from a fraudulent investment scheme. Their knowledge and expertise in crypto forensics is impressive. Highly recommended!" },
  { name: "Jin Steven", role: "Product Manager", initials: "JS", text: "KRYPTONITE ASSET RECOVERY SLEUTHS exceeded my expectations! They not only recovered my stolen crypto but also helped me understand how to protect myself from future scams. Their education and support are priceless." },
  { name: "Mona Kamal", role: "Founder & CEO", initials: "MK", text: "I'm grateful for KRYPTONITE ASSET RECOVERY SLEUTHS's expertise in recovering my assets from a hacked wallet. Their attention to detail and commitment to justice are admirable. If you're a victim of crypto fraud, look no further!" },
  { name: "Sarah Williams", role: "Investor", initials: "SW", text: "After losing over $50,000 in a fake trading platform, I had lost all hope. KRYPTONITE ASSET RECOVERY SLEUTHS not only recovered most of my funds but guided me through every step of the process with transparency and care." },
  { name: "David Chen", role: "Business Owner", initials: "DC", text: "When our company's crypto wallet was compromised, we feared the worst. The KRYPTONITE team acted swiftly and professionally, tracing the funds and working with law enforcement to recover our assets." },
];

export default function TestimonialsPage() {
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
              <span className="text-brand-gold text-xs font-semibold uppercase tracking-[0.3em]">Client Stories</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-white">
              What Clients <span className="text-gold-gradient">Say</span>
            </h1>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 bg-brand-gold">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-3 gap-8 text-brand-dark text-center">
              {[
                { v: "98%", l: "Satisfaction Rate" },
                { v: "440+", l: "Cases Resolved" },
                { v: "99%", l: "Positive Feedback" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="text-4xl font-bold font-display">{s.v}</div>
                  <div className="text-brand-dark/70 text-sm font-medium mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-brand-dark">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  className="bg-brand-dark-2 border border-white/5 hover:border-brand-gold/20 rounded p-8 transition-all flex flex-col"
                >
                  <div className="flex gap-1 mb-5">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-brand-gold" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-gray-300 text-sm leading-relaxed italic flex-1 mb-6">
                    &ldquo;{t.text}&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-4 pt-4 border-t border-white/5">
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
      </main>
      <Footer />
    </>
  );
}
