import { Reveal } from "@/components/reveal";

export function SectionHead({
  eyebrow,
  title,
  center = false,
}: {
  eyebrow: string;
  title: string;
  center?: boolean;
}) {
  return (
    <Reveal className={`section-head ${center ? "center mx-auto text-center" : ""}`}>
      <span className="section-eyebrow">{eyebrow}</span>
      <h2 className="section-title">{title}</h2>
    </Reveal>
  );
}
