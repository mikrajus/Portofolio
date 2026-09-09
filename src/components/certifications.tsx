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
      <div className="container flex flex-col items-center text-center">
        <SectionHead eyebrow="Certifications" title="Verified Continuous Learning" center />
        
        {/* Organization Switcher Tabs */}
        <Reveal className="w-full flex justify-center">
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            {certifications.map((c) => (
              <button
                key={c.org}
                onClick={() => setActiveOrg(c.org)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-200 ${
                  activeOrg === c.org
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/25 scale-105"
                    : "bg-white border border-neutral-200 text-neutral-700 hover:text-neutral-900 hover:border-neutral-400"
                }`}
              >
                {c.org} ({c.items.length})
              </button>
            ))}
          </div>
        </Reveal>

        {/* Selected Organization Certifications Centered Card */}
        <div className="w-full flex justify-center">
          <Reveal className="w-full max-w-3xl">
            <div className="w-full p-6 md:p-8 rounded-3xl bg-white border border-neutral-200/90 shadow-2xl text-left mx-auto">
              <div className="flex items-center gap-3.5 pb-4 mb-6 border-b border-neutral-200">
                <div className="w-11 h-11 rounded-2xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-700 font-extrabold text-xl shadow-xs shrink-0">
                  {currentOrgData.org.charAt(0)}
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-neutral-900">{currentOrgData.org}</h3>
                  <p className="text-xs text-neutral-600 font-semibold">Verified credentials & course completions</p>
                </div>
              </div>

              <div className="space-y-4 md:space-y-5">
                {currentOrgData.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-4.5 rounded-2xl bg-neutral-50/90 border border-neutral-200 hover:border-blue-500/50 hover:shadow-md transition-all gap-3"
                  >
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                        <polyline points="22 4 12 14.01 9 11.01"/>
                      </svg>
                      <div>
                        <h4 className="font-bold text-neutral-900 text-sm leading-snug">{item.name}</h4>
                        {item.tag && (
                          <span className="inline-block mt-1.5 px-2.5 py-0.5 rounded-md text-[10px] uppercase font-bold tracking-wider bg-neutral-200/90 text-neutral-800">
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
      </div>
    </section>
  );
}
