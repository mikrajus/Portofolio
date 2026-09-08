import { SectionHead } from "@/components/section-head";
import { Reveal } from "@/components/reveal";
import { education } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="section" aria-labelledby="education-title">
      <div className="container">
        <SectionHead eyebrow="Education" title="Academic Background" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 text-left">
          {education.map((e) => (
            <Reveal key={e.school}>
              <div className="h-full p-6 rounded-2xl bg-white border border-neutral-200/90 hover:border-amber-500/60 transition-all shadow-xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-800">
                      {e.meta}
                    </span>
                  </div>
                  <h3 className="text-xl font-extrabold text-neutral-900 mb-1">{e.school}</h3>
                  <p className="text-sm font-bold text-amber-700 mb-3">{e.program}</p>
                  {e.note && (
                    <p className="text-xs text-neutral-600 leading-relaxed font-medium border-t border-neutral-200 pt-3">
                      {e.note}
                    </p>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
