import { SectionHead } from "@/components/section-head";
import { Reveal } from "@/components/reveal";
import { activities } from "@/lib/data";

export default function Organizations() {
  return (
    <section className="section" aria-labelledby="orgs-title">
      <div className="container">
        <SectionHead
          eyebrow="Organizations"
          title="Campus & community involvement"
        />
        <div className="activities">
          {activities.map((a) => (
            <Reveal key={a.title} className="activity">
              <span className="activity__period">{a.period}</span>
              <h3>{a.title}</h3>
              <p className="org">{a.org}</p>
              <p>{a.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
