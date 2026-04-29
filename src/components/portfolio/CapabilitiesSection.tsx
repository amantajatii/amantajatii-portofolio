import { capabilities } from "@/data/portfolio";

export function CapabilitiesSection() {
  return (
    <section className="capability-marquee" aria-label="Capabilities">
      <div className="marquee-track">
        {[...capabilities, ...capabilities].map((item, index) => (
          <span className="capability-chip" key={`${item}-${index}`}>
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
