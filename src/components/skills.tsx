import { SectionHead } from "@/components/section-head";
import { Reveal } from "@/components/reveal";
import { usePortfolioData } from "@/lib/portfolio-context";

const renderCategoryIcon = (iconName: string) => {
  switch (iconName) {
    case "code":
      return (
        <svg className="w-5 h-5 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="16 18 22 12 16 6"/>
          <polyline points="8 6 2 12 8 18"/>
        </svg>
      );
    case "cpu":
      return (
        <svg className="w-5 h-5 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="4" y="4" width="16" height="16" rx="2"/>
          <rect x="9" y="9" width="6" height="6"/>
          <line x1="9" y1="1" x2="9" y2="4"/>
          <line x1="15" y1="1" x2="15" y2="4"/>
          <line x1="9" y1="20" x2="9" y2="23"/>
          <line x1="15" y1="20" x2="15" y2="23"/>
          <line x1="20" y1="9" x2="23" y2="9"/>
          <line x1="20" y1="15" x2="23" y2="15"/>
          <line x1="1" y1="9" x2="4" y2="9"/>
          <line x1="1" y1="15" x2="4" y2="15"/>
        </svg>
      );
    case "database":
      return (
        <svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <ellipse cx="12" cy="5" rx="9" ry="3"/>
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
          <path d="M21 19c0 1.66-4 3-9 3s-9-1.34-9-3"/>
        </svg>
      );
    default:
      return null;
  }
};

export default function Skills() {
  const { skills } = usePortfolioData();

  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <div className="container">
        <SectionHead eyebrow="Skills & Technologies" title="What I work with" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mt-8 text-left">
          {skills.map((group) => (
            <Reveal key={group.group}>
              <div className="h-full p-6 md:p-7 rounded-3xl bg-white border border-neutral-200/90 hover:border-amber-500/60 transition-all duration-300 shadow-xl group">
                <div className="flex items-center gap-3 mb-5 pb-4 border-b border-neutral-200">
                  <div className="p-2.5 rounded-xl bg-neutral-100 border border-neutral-200 group-hover:scale-105 transition-transform">
                    {renderCategoryIcon(group.icon)}
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 group-hover:text-amber-600 transition-colors">
                    {group.group}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-neutral-100 border border-neutral-200/90 text-neutral-800 hover:text-amber-700 hover:bg-amber-500/10 hover:border-amber-500/40 transition-all duration-200 shadow-xs cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
