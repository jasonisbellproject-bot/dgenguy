import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Page Header */}
        <section className="relative py-20 bg-brand-dark-2 overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-50" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent" />
          <div className="relative max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-brand-gold" />
              <span className="text-brand-gold text-xs font-semibold uppercase tracking-[0.3em]">About Us</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-white">
              Who We <span className="text-gold-gradient">Are</span>
            </h1>
          </div>
        </section>

        {/* About Content */}
        <section className="py-24 bg-brand-dark">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
                  A Team Dedicated to <span className="text-gold-gradient">Crypto Justice</span>
                </h2>
                <div className="space-y-5 text-gray-400 leading-relaxed">
                  <p>
                    We are a team of expert cryptographers, cybersecurity specialists, and financial analysts dedicated to helping individuals and institutions recover from crypto fraud and asset theft.
                  </p>
                  <p>
                    Our mission is to provide cutting-edge solutions and unparalleled support to those affected by the growing threat of cryptocurrency scams and cybercrime.
                  </p>
                  <p>
                    Founded by victims who experienced crypto fraud firsthand, KRYPTONITE ASSET RECOVERY SLEUTHS understands the emotional and financial toll of these crimes. We&apos;ve built our company around a single mission: to fight back against digital fraud and help victims reclaim what is rightfully theirs.
                  </p>
                </div>
                <div className="mt-10">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-brand-gold text-brand-dark font-semibold px-7 py-3.5 rounded-sm hover:bg-brand-gold-light transition-all"
                  >
                    Get a Free Consultation
                  </Link>
                </div>
              </div>

              <div className="space-y-6">
                {[
                  { title: "Our Mission", text: "To provide cutting-edge crypto fraud investigation and asset recovery solutions that give victims a fighting chance against sophisticated digital criminals." },
                  { title: "Our Vision", text: "A digital financial ecosystem where scammers are held accountable and victims have access to powerful recovery tools and expert support." },
                  { title: "Our Values", text: "Integrity, transparency, relentless advocacy for our clients, and commitment to staying ahead of evolving cyber threats." },
                ].map((item) => (
                  <div key={item.title} className="bg-brand-dark-2 border border-brand-gold/20 rounded p-6">
                    <h3 className="text-brand-gold font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team section */}
        <section className="py-24 bg-brand-dark-2">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl font-bold text-white mb-4">
                Our <span className="text-gold-gradient">Expert Team</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                A multidisciplinary team of professionals united by a passion for digital justice.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { role: "Blockchain Forensics Lead", dept: "Technical Division", initial: "BF" },
                { role: "Cybersecurity Director", dept: "Security Division", initial: "CD" },
                { role: "Financial Intelligence Analyst", dept: "Recovery Division", initial: "FI" },
              ].map((member) => (
                <div key={member.role} className="text-center bg-brand-dark border border-white/5 rounded p-8">
                  <div className="w-20 h-20 rounded-full bg-brand-gold/10 border-2 border-brand-gold/30 flex items-center justify-center text-brand-gold font-bold text-xl mx-auto mb-4">
                    {member.initial}
                  </div>
                  <h3 className="text-white font-semibold mb-1">{member.role}</h3>
                  <p className="text-brand-gold/70 text-sm">{member.dept}</p>
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
