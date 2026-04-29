import { experience } from "@/data/portfolio";

export function ProfileSection() {
  return (
    <section className="profile-section reveal-block" id="profile">
      <div>
        <p className="section-kicker">Profile</p>
        <h2 className="line-reveal">
          Built from engineering practice, design taste, and community work.
        </h2>
      </div>
      <ul>
        {experience.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
