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
        <SectionHead eyebrow="Certifications" title="Verified Continuous Learning" />
        
        {/* Organization Switcher Tabs */}
        <Reveal>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {certifications.map((c) => (
              <button
                key={c.org}
                onClick={() => setActiveOrg(c.org)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
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

        {/* Selected Organization Certifications */}
        <Reveal>
          <div className="p-6 md:p-8 rounded-2xl bg-white border border-neutral-200/90 shadow-xl max-w-3xl mx-auto text-left">
            <div className="flex items-center gap-3 pb-4 mb-6 border-b border-neutral-200">
              <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-700 font-bold text-lg">
                {currentOrgData.org.charAt(0)}
              </div>
              <div>
                <h3 className="text-xl font-bold text-neutral-900">{currentOrgData.org}</h3>
                <p className="text-xs text-neutral-600 font-medium">Verified credentials & course completions</p>
              </div>
            </div>

            <div className="space-y-4">
              {currentOrgData.items.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl bg-neutral-50 border border-neutral-200 hover:border-amber-500/50 transition-colors gap-2"
                >
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                      <polyline points="22 4 12 14.01 9 11.01"/>
                    </svg>
                    <div>
                      <h4 className="font-bold text-neutral-900 text-sm">{item.name}</h4>
                      {item.tag && (
                        <span className="inline-block mt-1 px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider bg-neutral-200 text-neutral-800">
                          {item.tag}
                        </span>
                      )}
                    </div>
                  </div>
                  <span className="text-xs font-mono text-neutral-600 font-semibold sm:text-right shrink-0">
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
