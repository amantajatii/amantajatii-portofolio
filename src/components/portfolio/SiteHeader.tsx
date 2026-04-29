"use client";

import { useEffect, useRef, useState } from "react";

const NAV_LINKS = [
  { href: "#approach", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#profile", label: "Stack" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Track active section via IntersectionObserver
  useEffect(() => {
    const sectionIds = ["work", "approach", "profile", "contact"];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(`#${id}`);
        },
        { threshold: 0.35 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Close drawer on outside click
  useEffect(() => {
    if (!open) return;
    const handleClick = (e: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        toggleRef.current &&
        !toggleRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  const handleNavClick = (href: string) => {
    setOpen(false);
    setActive(href);
  };

  return (
    <>
      <header className="onda-header" data-animate="nav">
        <a className="wordmark" href="#home" aria-label="Diaz portfolio home">
          amantajatii
        </a>

        <div className="nav-right-cluster">
          {/* Desktop nav */}
          <nav aria-label="Primary navigation" className="desktop-nav">
            {NAV_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className={active === href ? "nav-active" : ""}
                onClick={() => handleNavClick(href)}
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Email — desktop only */}
          <a className="nav-email" href="mailto:amantajati15@gmail.com">
            Let&apos;s Talk
          </a>

          {/* Hamburger — mobile only */}
          <button
            ref={toggleRef}
            className={`nav-hamburger${open ? " is-open" : ""}`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        ref={menuRef}
        className={`mobile-drawer${open ? " is-open" : ""}`}
        aria-hidden={!open}
      >
        <nav aria-label="Mobile navigation">
          {NAV_LINKS.map(({ href, label }, i) => (
            <a
              key={href}
              href={href}
              className={active === href ? "nav-active" : ""}
              style={{ "--i": i } as React.CSSProperties}
              onClick={() => handleNavClick(href)}
            >
              {label}
            </a>
          ))}
        </nav>
        <a
          className="drawer-email"
          href="mailto:amantajati15@gmail.com"
          style={{ "--i": NAV_LINKS.length } as React.CSSProperties}
          onClick={() => setOpen(false)}
        >
          amantajati15@gmail.com
        </a>
      </div>
    </>
  );
}
