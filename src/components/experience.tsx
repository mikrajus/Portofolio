import { SectionHead } from "@/components/section-head";
import { Reveal } from "@/components/reveal";
import { activities } from "@/lib/data";
import { usePortfolioData } from "@/lib/portfolio-context";

const renderRoleIcon = (iconName?: string) => {
  switch (iconName) {
    case "cpu":
      return (
        <svg className="w-4 h-4 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="4" y="4" width="16" height="16" rx="2"/>
          <rect x="9" y="9" width="6" height="6"/>
        </svg>
      );
    case "code":
      return (
        <svg className="w-4 h-4 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="16 18 22 12 16 6"/>
          <polyline points="8 6 2 12 8 18"/>
        </svg>
      );
    case "server":
      return (
        <svg className="w-4 h-4 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="2" width="20" height="8" rx="2"/>
          <rect x="2" y="14" width="20" height="8" rx="2"/>
          <line x1="6" y1="6" x2="6.01" y2="6"/>
          <line x1="6" y1="18" x2="6.01" y2="18"/>
        </svg>
      );
    default:
      return (
        <svg className="w-4 h-4 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
        </svg>
      );
  }
};

export default function Experience() {
  const { experience } = usePortfolioData();

  return (
    <section id="experience" className="section" aria-labelledby="experience-title">
      <div className="container">
        <SectionHead eyebrow="Experience & Leadership" title="Roles & Activities" />
        
        {/* Work & Teaching Assistant Experience */}
        <div className="relative pl-6 md:pl-8 border-l-2 border-neutral-300 space-y-10 md:space-y-12 my-10 text-left">
          {experience.map((item, idx) => (
            <Reveal key={idx}>
              <div className="relative group">
                {/* Node icon */}
                <div className="absolute -left-[35px] md:-left-[43px] top-1 p-2 rounded-full bg-white border border-neutral-300 group-hover:border-amber-500 transition-colors shadow-md">
                  {renderRoleIcon(item.icon)}
                </div>

                <div className="p-6 md:p-7 rounded-2xl bg-white border border-neutral-200/90 group-hover:border-amber-500/60 transition-all duration-300 shadow-lg">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/15 border border-amber-500/30 text-amber-800">
                      {item.period}
                    </span>
                    <span className="text-xs text-neutral-600 font-bold">
                      {item.org}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-neutral-900 mb-1 group-hover:text-amber-600 transition-colors">
                    {item.role}
                  </h3>
                  <p className="text-neutral-700 text-sm leading-relaxed mb-4 font-medium">
                    {item.desc}
                  </p>

                  {item.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-3 border-t border-neutral-200">
                      {item.tags.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-neutral-100 text-neutral-800 border border-neutral-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Organizational Activities */}
        <div className="mt-14 text-left">
          <h3 className="text-lg font-bold text-neutral-900 mb-6 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
            Leadership & Organizational Involvement
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {activities.map((act, i) => (
              <Reveal key={i}>
                <div className="h-full p-6 rounded-2xl bg-white border border-neutral-200/90 hover:border-neutral-400 transition-all shadow-md">
                  <span className="text-xs text-amber-700 font-bold block mb-1">
                    {act.period} &middot; {act.org}
                  </span>
                  <h4 className="font-bold text-neutral-900 mb-2">{act.title}</h4>
                  <p className="text-xs text-neutral-600 leading-relaxed font-medium">{act.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
