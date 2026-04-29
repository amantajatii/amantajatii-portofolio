import { FileText, Mail, Sparkles } from "lucide-react";

export function ContactSection() {
  return (
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
  );
}
