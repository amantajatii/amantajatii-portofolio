"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function PortfolioMotion() {
  useEffect(() => {
    const mm = gsap.matchMedia();
    const header = document.querySelector<HTMLElement>(".onda-header");
    const navTween = header
      ? gsap.to(header, {
          "--nav-progress": 1,
          duration: 0.55,
          ease: "power3.out",
          paused: true,
          overwrite: "auto",
        })
      : null;
    const updateHeader = () => {
      navTween?.progress(Math.min(window.scrollY / 96, 1));
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
          gsap.set(
            "[data-animate], .reveal-block, .line-reveal, .capability-chip",
            {
              autoAlpha: 1,
              y: 0,
              rotation: 0,
              scale: 1,
              clearProps: "transform,visibility,opacity",
            },
          );
          gsap.set(".loader", { autoAlpha: 0, display: "none" });
          gsap.set(".contact-band", { "--footer-radius": "0%" });
          return;
        }

        const loaderCount = document.querySelector<HTMLElement>(".loader-count");
        const counter = { value: 0 };
        const intro = gsap.timeline({
          defaults: { duration: 0.9, ease: "power4.out" },
        });

        gsap.set(".scroll-progress", {
          scaleX: 0,
          transformOrigin: "left center",
        });
        gsap.to(".scroll-progress", {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: document.documentElement,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.2,
          },
        });

        intro
          .set("body", { overflow: "hidden" })
          .from(".loader-mark", { y: 18, autoAlpha: 0, duration: 0.5 })
          .from(
            ".loader-words span",
            {
              yPercent: 110,
              autoAlpha: 0,
              filter: "blur(12px)",
              clearProps: "filter",
              stagger: 0.08,
              duration: 0.75,
            },
            "-=0.22",
          )
          .to(
            ".loader-bar",
            { scaleX: 1, duration: 0.95, ease: "power3.inOut" },
            "-=0.45",
          )
          .to(
            counter,
            {
              value: 100,
              duration: 0.95,
              ease: "power3.inOut",
              onUpdate: () => {
                if (loaderCount) {
                  loaderCount.textContent = String(
                    Math.round(counter.value),
                  ).padStart(2, "0");
                }
              },
            },
            "<",
          )
          .to(".loader-words span", {
            yPercent: -110,
            autoAlpha: 0,
            stagger: 0.045,
            duration: 0.55,
            ease: "power3.in",
          })
          .to(
            ".loader",
            {
              "--loader-radius": "100%",
              yPercent: -100,
              clipPath: "inset(0 0 0 0 round 0 0 100% 100%)",
              duration: 1,
              ease: "power4.inOut",
            },
            "-=0.2",
          )
          .set(".loader", { display: "none" })
          .set("body", { overflow: "" })
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

        gsap.to(".dot-line", {
          xPercent: -7,
          ease: "none",
          scrollTrigger: {
            trigger: ".question-hero",
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });

        gsap.utils.toArray<HTMLElement>("section").forEach((section) => {
          gsap.fromTo(
            section,
            { "--section-wash": 0 },
            {
              "--section-wash": 1,
              ease: "none",
              scrollTrigger: {
                trigger: section,
                start: "top 75%",
                end: "bottom 25%",
                scrub: true,
              },
            },
          );
        });

        gsap.utils
          .toArray<HTMLElement>(".question-hero, .capability-marquee")
          .forEach((panel) => {
            const isHero = panel.classList.contains("question-hero");

            gsap.fromTo(
              panel,
              { "--panel-progress": 0 },
              {
                "--panel-progress": 1,
                ease: "none",
                scrollTrigger: {
                  trigger: panel,
                  start: isHero ? "top top" : "top 82%",
                  end: isHero ? "35% top" : "top 28%",
                  scrub: true,
                },
              },
            );
          });

        gsap.utils.toArray<HTMLElement>(".reveal-block").forEach((element) => {
          gsap.fromTo(element, {
            y: 90,
            autoAlpha: 0.25,
            scale: 0.985,
          }, {
            y: 0,
            autoAlpha: 1,
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: element,
              start: "top 96%",
              end: "top 56%",
              scrub: true,
            },
          });
        });

        gsap.utils
          .toArray<HTMLElement>(".line-reveal:not(.contact-title)")
          .forEach((element) => {
          gsap.fromTo(element, {
            y: 110,
            autoAlpha: 0.18,
            scale: 0.96,
            filter: "blur(14px)",
          }, {
            y: 0,
            autoAlpha: 1,
            scale: 1,
            filter: "blur(0px)",
            ease: "none",
            scrollTrigger: {
              trigger: element,
              start: "top 100%",
              end: "top 45%",
              scrub: true,
            },
          });
        });

        gsap.fromTo(".contact-title", {
          y: 60,
          autoAlpha: 0,
          scale: 0.985,
          filter: "blur(10px)",
        }, {
          y: 0,
          autoAlpha: 1,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.85,
          ease: "power4.out",
          clearProps: "filter",
          scrollTrigger: {
            trigger: ".contact-band",
            start: "top 74%",
            once: true,
          },
        });

        gsap.fromTo(".contact-band", {
          "--footer-radius": "100%",
        }, {
          "--footer-radius": "0%",
          ease: "none",
          scrollTrigger: {
            trigger: ".contact-band",
            start: "top 92%",
            end: "top 34%",
            scrub: true,
          },
        });

        gsap.fromTo(".contact-links a", {
          y: 26,
          autoAlpha: 0,
          scale: 0.92,
        }, {
          y: 0,
          autoAlpha: 1,
          scale: 1,
          duration: 0.55,
          ease: "back.out(1.45)",
          stagger: 0.06,
          scrollTrigger: {
            trigger: ".contact-band",
            start: "top 68%",
            once: true,
          },
        });

        gsap.utils.toArray<HTMLElement>(".make-stack .line-reveal").forEach((line, index) => {
          gsap.fromTo(line, {
            xPercent: index % 2 === 0 ? -8 : 8,
          }, {
            xPercent: index % 2 === 0 ? 7 : -7,
            ease: "none",
            scrollTrigger: {
              trigger: ".make-section",
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          });
        });

        gsap.fromTo(".partnership-section p", {
          y: 60,
          autoAlpha: 0.2,
        }, {
          y: -24,
          autoAlpha: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ".partnership-section",
            start: "top 90%",
            end: "bottom 35%",
            scrub: true,
          },
        });

        gsap.fromTo(".capability-chip", {
          y: 90,
          autoAlpha: 0.15,
          scale: 0.82,
          rotation: (index) => (index % 2 === 0 ? -7 : 7),
        }, {
          y: 0,
          autoAlpha: 1,
          scale: 1,
          rotation: 0,
          ease: "none",
          stagger: { each: 0.02, from: "center" },
          scrollTrigger: {
            trigger: ".capability-marquee",
            start: "top 95%",
            end: "center 45%",
            scrub: true,
          },
        });

        gsap.utils.toArray<HTMLElement>(".capability-chip").forEach((chip, index) => {
          gsap.to(chip, {
            y: index % 2 === 0 ? -34 : 28,
            ease: "none",
            scrollTrigger: {
              trigger: ".capability-marquee",
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          });
        });

        gsap.utils.toArray<HTMLElement>(".work-card").forEach((card) => {
          gsap.fromTo(
            card,
            { y: 110, autoAlpha: 0.2, scale: 0.94 },
            {
              y: 0,
              autoAlpha: 1,
              scale: 1,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                start: "top 98%",
                end: "top 48%",
                scrub: true,
              },
            },
          );
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

          gsap.utils.toArray<HTMLElement>(".work-card").forEach((card) => {
            const icon = card.querySelector("svg");
            const name = card.querySelector(".work-name");
            const shapes = card.querySelectorAll(".work-shape");

            const handleEnter = () => {
              gsap.to(card, {
                y: -8,
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
                x: 10,
                duration: 0.28,
                ease: "power3.out",
                overwrite: "auto",
              });
              gsap.to(shapes, {
                scale: 2.55,
                duration: 0.95,
                ease: "power3.inOut",
                stagger: 0.03,
                overwrite: "auto",
              });
            };

            const handleLeave = () => {
              gsap.to([card, icon, name], {
                x: 0,
                y: 0,
                rotation: 0,
                scale: 1,
                duration: 0.36,
                ease: "elastic.out(1, 0.55)",
                overwrite: "auto",
              });
              gsap.to(shapes, {
                x: 0,
                y: 0,
                rotation: 0,
                scale: 1,
                duration: 0.85,
                ease: "power3.out",
                overwrite: "auto",
              });
            };

            card.addEventListener("pointerenter", handleEnter);
            card.addEventListener("pointerleave", handleLeave);
            cleanupHoverHandlers.push(() => {
              card.removeEventListener("pointerenter", handleEnter);
              card.removeEventListener("pointerleave", handleLeave);
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
