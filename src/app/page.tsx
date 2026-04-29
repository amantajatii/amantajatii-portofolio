import {
  ArrowUpRight,
  FileText,
  Mail,
  MoveUpRight,
  Sparkles,
} from "lucide-react";
import { PortfolioMotion } from "@/components/PortfolioMotion";

const makingLines = [
  "I make it legible.",
  "I make it fast.",
  "I make it feel calm.",
  "I make it launch.",
];

const capabilities = [
  "Frontend Architecture",
  "Product UI",
  "Web3 Integration",
  "Smart Contract Flow",
  "Performance Tuning",
  "Interaction Design",
  "API Integration",
  "Anti-Cheat Logic",
];

const work = [
  {
    name: "Pass Chick",
    year: "2026",
    label: "1st Place - Blitz Monad Jogja Hackathon",
    summary:
      "Monad arcade gameplay with EIP-712 settlement, Trust Passport verification, Foundry contracts, and backend-authoritative result flow.",
    href: "https://lnkd.in/gaWrQbkK",
  },
  {
    name: "RecruitPro",
    year: "2025",
    label: "AI recruitment platform",
    summary:
      "A CV analysis product with responsive upload flow, evaluation output, and real-time backend API integration.",
    href: "https://gdgoc-1.vercel.app",
  },
  {
    name: "Movo",
    year: "2025",
    label: "Web3 payment platform",
    summary:
      "Frontend structure, real-time chart optimization, state management, and wallet interaction planning for a finance product.",
    href: "https://movopay.vercel.app",
  },
  {
    name: "NusaPay",
    year: "2025",
    label: "Cross-chain payment interface",
    summary:
      "Trust-first payment UX with reusable components and a clearer multi-step transaction experience.",
    href: "https://nusapayfinance.vercel.app",
  },
];

const experience = [
  "Information Technology student at Universitas Gadjah Mada",
  "Frontend Engineer and Performance Contributor at Movo",
  "Frontend Member at Google Developer Groups on Campus",
  "Design and Documentation Sub-Coordinator at Find IT! 2026",
];

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1}>
      <a className="skip-link" href="#main-content">
        Skip To Content
      </a>
      <div className="scroll-progress" aria-hidden="true" />
      <PortfolioMotion />

      <header className="onda-header" data-animate="nav">
        <a className="wordmark" href="#home" aria-label="Diaz portfolio home">
          amantajatii
        </a>
        <nav aria-label="Primary navigation">
          <a href="#approach">About</a>
          <a href="#work">Work</a>
          <a href="#profile">Stack</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="nav-cta" href="mailto:amantajati15@gmail.com">
          Let&apos;s Talk
        </a>
      </header>

      <section className="question-hero" id="home">
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
            web products.
          </h2>
          <a href="mailto:amantajati15@gmail.com">
            Start a conversation <ArrowUpRight aria-hidden="true" size={18} />
          </a>
        </div>
      </section>

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

      <section className="partnership-section reveal-block">
          <h2 className="line-reveal">
            I treat every product as a new system to understand, simplify, and
            make usable.
          </h2>
        <p>
          My sweet spot is the messy middle between design and engineering:
          turning unclear flows into interfaces that can be shipped, tested, and
          trusted by real users.
        </p>
      </section>

      <section className="capability-marquee" aria-label="Capabilities">
        <div className="marquee-track">
          {[...capabilities, ...capabilities].map((item, index) => (
            <span className="capability-chip" key={`${item}-${index}`}>
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="work-section" id="work">
        <div className="section-intro reveal-block">
          <p className="section-kicker">Selected Work</p>
          <h2 className="line-reveal">Some problems I helped untangle.</h2>
        </div>

        <div className="work-index">
          {work.map((item, index) => (
            <a
              className="work-row reveal-block"
              href={item.href}
              target="_blank"
              rel="noreferrer"
              key={item.name}
            >
              <span className="work-number">0{index + 1}</span>
              <span className="work-name">{item.name}</span>
              <span className="work-label">{item.label}</span>
              <span className="work-summary">{item.summary}</span>
              <span className="work-year">{item.year}</span>
              <MoveUpRight aria-hidden="true" size={22} />
            </a>
          ))}
        </div>
      </section>

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

      <section className="contact-band reveal-block" id="contact">
        <Sparkles aria-hidden="true" size={28} />
          <h2 className="line-reveal contact-title">
            Let&apos;s build the next useful thing, beautifully.
          </h2>
        <div className="contact-links">
          <a href="mailto:amantajati15@gmail.com">
            <Mail aria-hidden="true" size={18} />
            Email
          </a>
          <a href="/cv-diaz-amantajati.pdf" target="_blank" rel="noreferrer">
            <FileText aria-hidden="true" size={18} />
            CV
          </a>
          <a
            href="https://github.com/amantajatii"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/diazamantajatisusilo/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </main>
  );
}
