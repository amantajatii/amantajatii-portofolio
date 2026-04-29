import { makingLines } from "@/data/portfolio";

export function ApproachSection() {
  return (
    <section className="make-section reveal-block" id="approach">
      <p className="section-kicker">How I Work</p>
      <div className="make-stack" aria-label="Approach statements">
        {makingLines.map((line) => (
          <h2 className="line-reveal" key={line}>
            {line}
          </h2>
        ))}
      </div>
    </section>
  );
}
