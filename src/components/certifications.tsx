import { useState } from "react";
import { SectionHead } from "@/components/section-head";
import { Reveal } from "@/components/reveal";
import { usePortfolioData } from "@/lib/portfolio-context";

export default function Certifications() {
  const { certifications } = usePortfolioData();
  const [activeOrg, setActiveOrg] = useState(certifications[0]?.org || "Dicoding Indonesia");

  const currentOrgData =
    certifications.find((c) => c.org === activeOrg) || certifications[0] || { org: activeOrg, items: [] };

  return (
    <section id="certifications" className="section" aria-labelledby="certs-title">
      <div className="container">
        <SectionHead eyebrow="Certifications" title="Verified Continuous Learning" center />
        
        {/* Organization Switcher Tabs */}
        <Reveal>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            {certifications.map((c) => (
              <button
                key={c.org}
                onClick={() => setActiveOrg(c.org)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-200 ${
                  activeOrg === c.org
                    ? "bg-amber-500 text-neutral-950 shadow-md shadow-amber-500/20"
                    : "bg-white border border-neutral-200 text-neutral-700 hover:text-neutral-900 hover:border-neutral-400"
                }`}
              >
                {c.org} ({c.items.length})
              </button>
            ))}
          </div>
        </Reveal>

        {/* Selected Organization Certifications Card - Centered */}
        <Reveal className="max-w-3xl mx-auto">
          <div className="p-6 md:p-9 rounded-3xl bg-white border border-neutral-200/90 shadow-2xl text-center flex flex-col items-center">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pb-5 mb-6 border-b border-neutral-200 w-full text-center">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-700 font-extrabold text-xl shadow-sm">
                {currentOrgData.org.charAt(0)}
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-xl md:text-2xl font-extrabold text-neutral-900">{currentOrgData.org}</h3>
                <p className="text-xs text-neutral-600 font-medium mt-0.5">Verified credentials & course completions</p>
              </div>
            </div>

            <div className="space-y-4 w-full">
              {currentOrgData.items.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col sm:flex-row sm:items-center justify-between p-4.5 rounded-2xl bg-neutral-50 border border-neutral-200/90 hover:border-amber-500/50 transition-all duration-200 gap-3 text-left shadow-xs"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-1.5 rounded-lg bg-amber-500/10 border border-amber-500/20 shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                        <polyline points="22 4 12 14.01 9 11.01"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-neutral-900 text-sm">{item.name}</h4>
                      {item.tag && (
                        <span className="inline-block mt-1.5 px-2.5 py-0.5 rounded-md text-[10px] uppercase font-extrabold tracking-wider bg-neutral-200 text-neutral-800">
                          {item.tag}
                        </span>
                      )}
                    </div>
                  </div>
                  <span className="text-xs font-mono text-neutral-600 font-bold sm:text-right shrink-0">
                    {item.date}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
