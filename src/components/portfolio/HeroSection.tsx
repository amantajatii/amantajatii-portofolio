import { ArrowUpRight } from "lucide-react";
import { SiteHeader } from "./SiteHeader";

export function HeroSection() {
  return (
    <section className="question-hero" id="home">
      <SiteHeader />

      <div className="hero-left" data-depth="slow">
        <h1 data-animate="headline">
          Hi, I&apos;m
          <br />
          Diaz.
        </h1>
        <p data-animate="fade">
          A frontend engineer and Information Technology student at UGM,
          building polished interfaces for Web3, AI, and payment products.
        </p>
      </div>

      <div className="dot-line" aria-hidden="true" data-animate="dots">
        {Array.from({ length: 16 }).map((_, index) => (
          <span key={index} />
        ))}
      </div>

      <div className="hero-right" data-animate="fade" data-depth="fast">
        <h2>
          I build
          <br />
          web <br className="mobile-break" />
          products.
        </h2>
        <a href="mailto:amantajati15@gmail.com">
          Start a conversation <ArrowUpRight aria-hidden="true" size={18} />
        </a>
      </div>
    </section>
  );
}
