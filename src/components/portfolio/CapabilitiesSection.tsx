import { capabilities } from "@/data/portfolio";

export function CapabilitiesSection() {
  return (
    <section className="capability-marquee" aria-label="Capabilities">
      <div className="marquee-track">
        {capabilities.map((item, index) => (
          <span className={`capability-chip chip-${index + 1}`} key={item}>
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
