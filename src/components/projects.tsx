import { useState } from "react";
import { SectionHead } from "@/components/section-head";
import { Reveal } from "@/components/reveal";
import { usePortfolioData } from "@/lib/portfolio-context";

const CheckIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5"
  >
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

function ProjectCard({ project }: { project: ReturnType<typeof usePortfolioData>["projects"][number] }) {
  return (
    <Reveal className="w-full">
      <div className="p-5 md:p-6 lg:p-7 rounded-2xl bg-white border border-neutral-200/90 hover:border-amber-500/60 transition-all duration-300 shadow-xl group text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Left Column: Details & Flow */}
          <div className={`${project.image ? "lg:col-span-7" : "lg:col-span-12"} space-y-3.5`}>
            {/* Header: Title & Badges */}
            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-lg md:text-xl font-bold text-neutral-900 group-hover:text-amber-600 transition-colors">
                  {project.name}
                </h3>
                {project.badge && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-500/15 border border-amber-500/30 text-amber-800 shadow-sm">
                    {project.badge}
                  </span>
                )}
                {project.flag && (
                  <span className="px-2 py-0.5 rounded-full text-[10px] uppercase font-bold tracking-wider bg-neutral-100 text-neutral-700 border border-neutral-300">
                    {project.flag}
                  </span>
                )}
              </div>
              <p className="text-[11px] font-mono text-neutral-500 font-semibold">{project.category}</p>
            </div>

            <p className="text-xs md:text-sm text-neutral-700 leading-relaxed font-medium">{project.desc}</p>

            {/* Architecture Flow Stepper */}
            {project.architectureFlow && project.architectureFlow.length > 0 && (
              <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200">
                <div className="text-[10px] font-extrabold uppercase tracking-wider text-amber-700 mb-2 flex items-center gap-1">
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="8" height="8" rx="2"/>
                    <rect x="14" y="2" width="8" height="8" rx="2"/>
                    <rect x="14" y="14" width="8" height="8" rx="2"/>
                    <rect x="2" y="14" width="8" height="8" rx="2"/>
                  </svg>
                  Architecture Flow
                </div>
                <div className="flex flex-wrap items-center gap-1.5 text-xs">
                  {project.architectureFlow.map((step, idx) => (
                    <div key={idx} className="flex items-center gap-1.5">
                      <span className="px-2.5 py-0.5 rounded-lg bg-white text-neutral-900 border border-neutral-300 font-mono text-[10px] font-bold shadow-xs">
                        {step}
                      </span>
                      {idx < project.architectureFlow!.length - 1 && (
                        <span className="text-amber-600 font-bold text-[10px]">➔</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Features Bullet List */}
            {project.features && (
              <ul className="space-y-1.5 text-xs text-neutral-700 font-medium">
                {project.features.map((f) => (
                  <li key={f.strong} className="flex items-start gap-2 leading-relaxed">
                    <CheckIcon />
                    <span>
                      <strong className="text-neutral-900 font-bold">{f.strong}</strong> — {f.text}
                    </span>
                  </li>
                ))}
              </ul>
            )}

            {/* Tech Stack Chips */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {project.stack.map((c) => (
                <span
                  key={c}
                  className="px-2.5 py-0.5 rounded-lg text-[11px] font-mono font-semibold bg-neutral-100 text-neutral-700 border border-neutral-300"
                >
                  {c}
                </span>
              ))}
            </div>

            {/* Repository Links */}
            {project.github && (
              <div className="pt-2">
                <a
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold bg-neutral-900 text-white hover:bg-amber-600 transition-all shadow-sm"
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.27-.01-1.03-.02-2.01-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.33.95.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.27-5.23-5.66 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.45.11-3.03 0 0 .96-.31 3.15 1.17a10.9 10.9 0 0 1 5.74 0c2.18-1.48 3.14-1.17 3.14-1.17.63 1.58.24 2.74.12 3.03.74.8 1.18 1.82 1.18 3.07 0 4.4-2.69 5.37-5.25 5.65.41.35.77 1.05.77 2.12 0 1.53-.01 2.76-.01 3.14 0 .31.21.68.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"/>
                  </svg>
                  View on GitHub
                </a>
              </div>
            )}
          </div>

          {/* Right Column: Screenshot Preview */}
          {project.image && (
            <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
              <div className="relative overflow-hidden rounded-xl border border-neutral-200 group-hover:border-amber-500/40 transition-colors shadow-md bg-white p-1.5">
                <img
                  src={project.image}
                  alt={project.imageAlt || project.name}
                  width={380}
                  loading="lazy"
                  className="rounded-lg object-contain max-h-56 md:max-h-64 w-auto transform group-hover:scale-102 transition-transform duration-500"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </Reveal>
  );
}

export default function Projects() {
  const { projects } = usePortfolioData();
  const [activeTab, setActiveTab] = useState<"all" | "iot" | "mobile">("all");

  const filteredProjects = projects.filter((p) => {
    if (activeTab === "all") return true;
    return p.tabCategory === activeTab;
  });

  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <div className="container">
        <SectionHead eyebrow="Featured Work" title="Projects & Engineering Showcase" />

        {/* Category Filter Tabs */}
        <Reveal>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8 mt-4">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-200 ${
                activeTab === "all"
                  ? "bg-amber-500 text-neutral-950 shadow-sm shadow-amber-500/20"
                  : "bg-white border border-neutral-200 text-neutral-700 hover:text-neutral-900 hover:border-neutral-400"
              }`}
            >
              All Projects ({projects.length})
            </button>
            <button
              onClick={() => setActiveTab("iot")}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-200 ${
                activeTab === "iot"
                  ? "bg-amber-500 text-neutral-950 shadow-sm shadow-amber-500/20"
                  : "bg-white border border-neutral-200 text-neutral-700 hover:text-neutral-900 hover:border-neutral-400"
              }`}
            >
              📡 IoT & Embedded Systems ({projects.filter((p) => p.tabCategory === "iot").length})
            </button>
            <button
              onClick={() => setActiveTab("mobile")}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-200 ${
                activeTab === "mobile"
                  ? "bg-amber-500 text-neutral-950 shadow-sm shadow-amber-500/20"
                  : "bg-white border border-neutral-200 text-neutral-700 hover:text-neutral-900 hover:border-neutral-400"
              }`}
            >
              📱 Mobile App & AI ({projects.filter((p) => p.tabCategory === "mobile").length})
            </button>
          </div>
        </Reveal>

        {/* Projects List with Compact Spacing */}
        <div className="flex flex-col gap-6 md:gap-8 my-4">
          {filteredProjects.map((p, idx) => (
            <ProjectCard key={idx} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
