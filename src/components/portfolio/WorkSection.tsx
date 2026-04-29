import { MoveUpRight } from "lucide-react";
import { work } from "@/data/portfolio";

export function WorkSection() {
  return (
    <section className="work-section" id="work">
      <div className="section-intro reveal-block">
        <p className="section-kicker">Selected Work</p>
        <h2 className="line-reveal">Some problems I helped untangle.</h2>
      </div>

      <div className="work-bento">
        {work.map((item, index) => (
          <a
            className={`work-card work-card-${index + 1} reveal-block`}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            key={item.name}
          >
            <span className="work-shape work-shape-one" aria-hidden="true" />
            <span className="work-shape work-shape-two" aria-hidden="true" />
            <span className="work-meta">
              <span>0{index + 1}</span>
              <span>{item.year}</span>
            </span>
            <span className="work-copy">
              <span className="work-label">{item.label}</span>
              <span className="work-name">{item.name}</span>
              <span className="work-summary">{item.summary}</span>
            </span>
            <span className="work-cta">
              View project <MoveUpRight aria-hidden="true" size={18} />
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
