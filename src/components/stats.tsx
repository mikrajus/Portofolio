import { statsData } from "@/lib/data";
import { Reveal } from "@/components/reveal";

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case "academic":
      return (
        <svg className="w-6 h-6 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
          <path d="M6 12v5c3 3 9 3 12 0v-5"/>
        </svg>
      );
    case "briefcase":
      return (
        <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
        </svg>
      );
    case "code":
      return (
        <svg className="w-6 h-6 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="16 18 22 12 16 6"/>
          <polyline points="8 6 2 12 8 18"/>
        </svg>
      );
    case "award":
      return (
        <svg className="w-6 h-6 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="8" r="7"/>
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
        </svg>
      );
    default:
      return null;
  }
};

export default function Stats() {
  return (
    <section className="stats-section py-8 bg-neutral-900/20 border-y border-neutral-800/40 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {statsData.map((stat, idx) => (
              <div
                key={idx}
                className="stat-card p-5 rounded-2xl bg-white border border-neutral-200/90 hover:border-amber-500/60 transition-all duration-300 shadow-xl flex flex-col items-center text-center group"
              >
                <div className="p-3 rounded-xl bg-neutral-100 border border-neutral-200 mb-3 group-hover:scale-110 transition-transform">
                  {renderIcon(stat.icon)}
                </div>
                <div className="text-3xl font-extrabold tracking-tight text-neutral-900">
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-neutral-800 mt-1">
                  {stat.label}
                </div>
                <div className="text-xs text-neutral-600 mt-1 leading-tight font-medium">
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
