import { ArrowUpRight, FileText, Mail } from "lucide-react";

export function ContactSection() {
  return (
    <section className="contact-band reveal-block" id="contact">
      <div className="footer-top">
        <div className="footer-actions">
          <a href="/cv-diaz-amantajati.pdf" target="_blank" rel="noreferrer">
            View CV
          </a>
        </div>
      </div>

      <span className="footer-orb" aria-hidden="true" />

      <h2 className="line-reveal contact-title">
        Let&apos;s build the next useful thing, beautifully.
      </h2>

      <div className="contact-links">
        <a href="mailto:amantajati15@gmail.com">
          <Mail aria-hidden="true" size={18} />
          amantajati15@gmail.com
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

      <p className="footer-credit">
        Shaped by Diaz <ArrowUpRight aria-hidden="true" size={18} />
      </p>
    </section>
  );
}
