import { experience } from "@/data/portfolio";

export function ProfileSection() {
  return (
    <section className="profile-section reveal-block" id="profile">
      <div className="profile-copy">
        <p className="section-kicker">Profile</p>
        <h2 className="line-reveal">
          Engineering clarity with a designer&apos;s eye.
        </h2>
        <p>
          I&apos;m Diaz, an Information Technology student at UGM who enjoys
          turning messy product ideas into interfaces that feel clear, fast,
          and ready to ship.
        </p>
        <div className="profile-tags" aria-label="Focus areas">
          <span>Frontend</span>
          <span>Web3</span>
          <span>Product UI</span>
          <span>Performance</span>
        </div>
      </div>

      <ul className="profile-list">
        {experience.map((item, index) => (
          <li key={item}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <p>{item}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
