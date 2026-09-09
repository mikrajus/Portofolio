import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

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
    <Reveal className={cn("section-head", center && "center")}>
      <span className="section-eyebrow">{eyebrow}</span>
      <h2 className="section-title">{title}</h2>
    </Reveal>
  );
}
