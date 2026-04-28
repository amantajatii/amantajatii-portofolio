"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function PortfolioMotion() {
  useEffect(() => {
    const mm = gsap.matchMedia();
    const header = document.querySelector<HTMLElement>(".onda-header");
    const updateHeader = () => {
      header?.classList.toggle("is-scrolled", window.scrollY > 24);
    };

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });

    mm.add(
      {
        reduceMotion: "(prefers-reduced-motion: reduce)",
        pointerFine: "(pointer: fine)",
      },
      (context) => {
        const { reduceMotion, pointerFine } = context.conditions ?? {};

        if (reduceMotion) {
          gsap.set("[data-animate], .reveal-block, .line-reveal, .capability-chip", {
            autoAlpha: 1,
            y: 0,
            rotation: 0,
            scale: 1,
            clearProps: "transform,visibility,opacity",
          });
          return;
        }

        const intro = gsap.timeline({
          defaults: { duration: 0.9, ease: "power4.out" },
        });

        intro
          .from("[data-animate='nav']", { y: -42, autoAlpha: 0, scale: 0.985 })
          .from(
            "[data-animate='headline']",
            {
              y: 72,
              autoAlpha: 0,
              scale: 0.96,
              filter: "blur(10px)",
              clearProps: "filter",
            },
            "-=0.35",
          )
          .from("[data-animate='dots'] span", {
            y: 36,
            autoAlpha: 0,
            scale: 0,
            stagger: { amount: 0.55, from: "center" },
          }, "-=0.5")
          .from(
            "[data-animate='fade']",
            { y: 34, autoAlpha: 0, filter: "blur(8px)", clearProps: "filter", stagger: 0.12 },
            "-=0.45",
          );

        gsap.to("[data-animate='dots'] span", {
          y: -18,
          scale: 1.12,
          duration: 1.35,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          stagger: { each: 0.055, from: "center" },
        });

        gsap.to("[data-depth='slow']", {
          y: -70,
          ease: "none",
          scrollTrigger: {
            trigger: ".question-hero",
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });

        gsap.to("[data-depth='fast']", {
          y: -125,
          ease: "none",
          scrollTrigger: {
            trigger: ".question-hero",
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });

        gsap.utils.toArray<HTMLElement>(".reveal-block").forEach((element) => {
          gsap.from(element, {
            y: 60,
            autoAlpha: 0,
            duration: 0.95,
            ease: "power4.out",
            scrollTrigger: {
              trigger: element,
              start: "top 86%",
              once: true,
            },
          });
        });

        gsap.utils.toArray<HTMLElement>(".line-reveal").forEach((element) => {
          gsap.from(element, {
            y: 58,
            autoAlpha: 0,
            filter: "blur(12px)",
            duration: 1,
            ease: "power4.out",
            clearProps: "filter",
            scrollTrigger: {
              trigger: element,
              start: "top 88%",
              once: true,
            },
          });
        });

        gsap.from(".capability-chip", {
          y: 42,
          autoAlpha: 0,
          scale: 0.88,
          rotation: (index) => (index % 2 === 0 ? -2 : 2),
          duration: 0.85,
          ease: "back.out(1.45)",
          stagger: { each: 0.055, from: "random" },
          scrollTrigger: {
            trigger: ".capability-marquee",
            start: "top 72%",
            once: true,
          },
        });

        if (pointerFine) {
          const spotlight = document.querySelector<HTMLElement>(".spotlight");
          if (!spotlight) return;
          const cleanupHoverHandlers: Array<() => void> = [];

          const xTo = gsap.quickTo(spotlight, "x", {
            duration: 0.55,
            ease: "power3.out",
          });
          const yTo = gsap.quickTo(spotlight, "y", {
            duration: 0.55,
            ease: "power3.out",
          });

          const moveSpotlight = (event: PointerEvent) => {
            xTo(event.clientX);
            yTo(event.clientY);
          };

          window.addEventListener("pointermove", moveSpotlight, {
            passive: true,
          });

          gsap.utils.toArray<HTMLElement>(".work-row").forEach((row) => {
            const icon = row.querySelector("svg");
            const name = row.querySelector(".work-name");

            const handleEnter = () => {
              gsap.to(row, {
                x: 14,
                duration: 0.28,
                ease: "power3.out",
                overwrite: "auto",
              });
              gsap.to(icon, {
                x: 7,
                y: -7,
                rotation: 8,
                duration: 0.28,
                ease: "power3.out",
                overwrite: "auto",
              });
              gsap.to(name, {
                x: 8,
                duration: 0.28,
                ease: "power3.out",
                overwrite: "auto",
              });
            };

            const handleLeave = () => {
              gsap.to([row, icon, name], {
                x: 0,
                y: 0,
                rotation: 0,
                duration: 0.36,
                ease: "elastic.out(1, 0.55)",
                overwrite: "auto",
              });
            };

            row.addEventListener("pointerenter", handleEnter);
            row.addEventListener("pointerleave", handleLeave);
            cleanupHoverHandlers.push(() => {
              row.removeEventListener("pointerenter", handleEnter);
              row.removeEventListener("pointerleave", handleLeave);
            });
          });

          return () => {
            window.removeEventListener("pointermove", moveSpotlight);
            cleanupHoverHandlers.forEach((cleanup) => cleanup());
          };
        }
      },
    );

    return () => {
      window.removeEventListener("scroll", updateHeader);
      mm.revert();
    };
  }, []);

  return <div className="spotlight" aria-hidden="true" />;
}
