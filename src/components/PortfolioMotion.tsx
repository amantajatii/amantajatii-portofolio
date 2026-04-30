"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const loaderPalette = [
  "#f1785e",
  "#f6c5bf",
  "#e8cfc1",
  "#d99a82",
  "#e6ab94",
  "#c98a76",
  "#f0b6a4",
];

const loaderColorStorageKey = "amantajatii-loader-color";

function pickLoaderColor() {
  const fallbackColor = loaderPalette[0];

  try {
    const previousColor = window.localStorage.getItem(loaderColorStorageKey);
    const nextPalette = loaderPalette.filter((color) => color !== previousColor);
    const nextColor =
      nextPalette[Math.floor(Math.random() * nextPalette.length)] ??
      fallbackColor;

    window.localStorage.setItem(loaderColorStorageKey, nextColor);
    return nextColor;
  } catch {
    return loaderPalette[Math.floor(Math.random() * loaderPalette.length)] ?? fallbackColor;
  }
}

function pickDifferentLoaderColor(colorToAvoid: string) {
  const nextPalette = loaderPalette.filter((color) => color !== colorToAvoid);

  return (
    nextPalette[Math.floor(Math.random() * nextPalette.length)] ??
    loaderPalette[0]
  );
}

function createLoaderShuffle(finalColor: string) {
  return Array.from({ length: 6 }, (_, index) =>
    index === 5 ? finalColor : pickDifferentLoaderColor(finalColor),
  );
}

export function PortfolioMotion() {
  const finalLoaderColor = useRef(loaderPalette[0]);

  useLayoutEffect(() => {
    const loader = document.querySelector<HTMLElement>(".loader");
    const nextColor = pickLoaderColor();

    finalLoaderColor.current = nextColor;

    if (loader) {
      loader.style.setProperty("--loader-bg", pickDifferentLoaderColor(nextColor));
    }
  }, []);

  useEffect(() => {
    const mm = gsap.matchMedia();
    let loaderDone = false;
    const hideLoader = () => {
      if (loaderDone) return;
      loaderDone = true;
      gsap.killTweensOf(".loader");
      gsap.to(".loader", {
        y: () => -(window.innerHeight + 120),
        borderBottomLeftRadius: "100%",
        borderBottomRightRadius: "100%",
        duration: 0.72,
        ease: "power3.inOut",
        overwrite: true,
        onComplete: () => {
          gsap.set(".loader", {
            autoAlpha: 0,
            display: "none",
            pointerEvents: "none",
            clearProps: "transform,borderRadius",
          });
          document.querySelector(".loader")?.classList.remove("is-animating");
          ScrollTrigger.refresh();
        },
      });
      gsap.set("body", { overflow: "" });
    };
    const loaderFailSafe = window.setTimeout(hideLoader, 8000);

    mm.add(
      {
        all: "(min-width: 0px)",
        isMobile: "(max-width: 768px)",
        reduceMotion: "(prefers-reduced-motion: reduce)",
        pointerFine: "(pointer: fine)",
      },
      (context) => {
        const { isMobile, reduceMotion, pointerFine } = context.conditions ?? {};

        if (reduceMotion) {
          window.clearTimeout(loaderFailSafe);
          loaderDone = true;
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
          gsap.set(".loader", {
            autoAlpha: 1,
            display: "grid",
            pointerEvents: "auto",
          });
          gsap.to(".loader-bar", {
            scaleX: 1,
            duration: 0.45,
            ease: "power2.out",
          });
          gsap.to(".loader", {
            y: () => -(window.innerHeight + 120),
            borderBottomLeftRadius: "100%",
            borderBottomRightRadius: "100%",
            duration: 0.5,
            delay: 0.48,
            ease: "power2.inOut",
            onComplete: () => {
              gsap.set(".loader", {
                autoAlpha: 0,
                display: "none",
                pointerEvents: "none",
                clearProps: "transform,borderRadius",
              });
              gsap.set("body", { overflow: "" });
              ScrollTrigger.refresh();
            },
          });
          gsap.set(".contact-band", { "--footer-radius": "0%" });
          return;
        }

        const loaderCount = document.querySelector<HTMLElement>(".loader-count");
        const loaderShuffle = createLoaderShuffle(finalLoaderColor.current);
        const counter = { value: 0 };
        const intro = gsap.timeline({
          defaults: { duration: 0.9, ease: "power4.out" },
        });

        if (loaderCount) {
          loaderCount.textContent = "00";
        }

        gsap.set(".loader", {
          autoAlpha: 1,
          display: "grid",
          pointerEvents: "auto",
          clearProps: "transform",
          borderRadius: "0 0 0% 0%",
        });
        document.querySelector(".loader")?.classList.add("is-animating");
        gsap.set(".scroll-progress", {
          scaleX: 0,
          transformOrigin: "left center",
        });
        gsap.set(".loader-bar", {
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

        intro.set("body", { overflow: "hidden" });
        loaderShuffle.forEach((color, index) => {
          intro.set(".loader", { "--loader-bg": color }, index * 0.1);
        });

        intro
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
          .to(
            ".loader-bar",
            {
              scaleX: 1,
              duration: 1.55,
              ease: "power3.inOut",
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
          .to(".loader", {
            y: () => -(window.innerHeight + 120),
            borderBottomLeftRadius: "100%",
            borderBottomRightRadius: "100%",
            duration: 1.25,
            ease: "power4.inOut",
            force3D: true,
          }, "-=0.12")
          .call(() => {
            loaderDone = true;
            window.clearTimeout(loaderFailSafe);
            const loader = document.querySelector(".loader");
            loader?.classList.remove("is-animating");
          })
          .set(".loader", {
            autoAlpha: 0,
            display: "none",
            pointerEvents: "none",
            clearProps: "transform,borderRadius",
          })
          .set("body", { overflow: "" })
          .call(() => {
            ScrollTrigger.refresh();
          })
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
            y: isMobile ? 10 : 36,
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
          y: isMobile ? -4 : -18,
          scale: isMobile ? 1.04 : 1.12,
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
            end: "top 18%",
            scrub: true,
          },
        });

        gsap.fromTo(".footer-orb", {
          y: 80,
          scale: 0.86,
        }, {
          y: -32,
          scale: 1.06,
          ease: "none",
          scrollTrigger: {
            trigger: ".contact-band",
            start: "top bottom",
            end: "center center",
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
          y: isMobile ? 34 : 90,
          autoAlpha: 0.15,
          scale: isMobile ? 0.96 : 0.82,
          rotation: (index) => (isMobile ? 0 : index % 2 === 0 ? -7 : 7),
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

        if (!isMobile) {
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
        }

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
      window.clearTimeout(loaderFailSafe);
      mm.revert();
    };
  }, []);

  return <div className="spotlight" aria-hidden="true" />;
}
