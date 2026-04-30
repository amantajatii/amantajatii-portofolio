import { experience } from "@/data/portfolio";

export function ProfileSection() {
  return (
    <section className="profile-section reveal-block" id="profile">
      <div className="profile-copy">
        <p className="section-kicker">Profile</p>
        <h2 className="line-reveal">
          Product-minded frontend engineering.
        </h2>
        <p>
          I&apos;m Diaz, an Information Technology student at UGM. I work across
          interface systems, Web3 product flows, performance details, and
          community-led product work.
        </p>
        <div className="profile-tags" aria-label="Focus areas">
          <span>Frontend</span>
          <span>Web3</span>
          <span>Product UI</span>
          <span>Performance</span>
        </div>
      </div>

      <div className="profile-ledger" aria-label="Profile highlights">
        <div className="profile-ledger-heading">
          <span>Selected Signals</span>
          <p>Study, ship, document, repeat.</p>
        </div>

        <ul className="profile-list">
          {experience.map((item, index) => (
            <li key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
