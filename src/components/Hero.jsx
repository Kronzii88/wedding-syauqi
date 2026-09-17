import React, { useState, useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import art1 from "/images/art1.webp";
import art2 from "/images/art2.webp";
import art3 from "/images/art10.webp";

gsap.registerPlugin(ScrollTrigger);

const images = [art1, art2, art3];
const INTERVAL = 3800;

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [currentIdx, setCurrentIdx] = useState(0);

  const heroRef = useRef(null);
  const bgLayersRef = useRef([]);
  const contentRef = useRef(null);
  const titleRef = useRef(null);
  const dateRef = useRef(null);
  const countdownRef = useRef(null);

  useEffect(() => {
    const targetDate = new Date("2026-11-08T08:00:00+07:00").getTime();

    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const t = setInterval(() => {
      setCurrentIdx((i) => (i + 1) % images.length);
    }, INTERVAL);
    return () => clearInterval(t);
  }, []);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(
        {
          isDesktop: "(min-width: 768px)",
          isMobile: "(max-width: 767px)",
        },
        (context) => {
          const { isMobile } = context.conditions;

          const bgY = isMobile ? 12 : 22;
          const contentY = isMobile ? 28 : 52;
          const contentFade = isMobile ? 0.45 : 0.28;
          const titleY = isMobile ? 40 : 78;
          const dateY = isMobile ? 32 : 62;
          const countdownY = isMobile ? 22 : 42;

          const bgLayers = bgLayersRef.current.filter(Boolean);
          if (bgLayers.length) {
            gsap.to(bgLayers, {
              yPercent: bgY,
              ease: "none",
              scrollTrigger: {
                trigger: heroRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true,
              },
            });
          }

          if (titleRef.current) {
            gsap.to(titleRef.current, {
              yPercent: titleY,
              ease: "none",
              scrollTrigger: {
                trigger: heroRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true,
              },
            });
          }

          if (dateRef.current) {
            gsap.to(dateRef.current, {
              yPercent: dateY,
              ease: "none",
              scrollTrigger: {
                trigger: heroRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true,
              },
            });
          }

          if (countdownRef.current) {
            gsap.to(countdownRef.current, {
              yPercent: countdownY,
              ease: "none",
              scrollTrigger: {
                trigger: heroRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true,
              },
            });
          }

          if (contentRef.current) {
            gsap.to(contentRef.current, {
              yPercent: contentY,
              opacity: contentFade,
              ease: "none",
              scrollTrigger: {
                trigger: heroRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true,
              },
            });
          }
        },
      );
    },
    { scope: heroRef },
  );

  return (
    <section
      id="hero"
      ref={heroRef}
      style={{
        minHeight: "100svh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "60px 24px",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "var(--paper)",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "-15%",
          left: 0,
          right: 0,
          bottom: "-15%",
          overflow: "hidden",
          pointerEvents: "none",
        }}
        aria-hidden="true"
      >
        {images.map((src, i) => (
          <div
            key={src}
            ref={(el) => (bgLayersRef.current[i] = el)}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: `url(${src})`,
              backgroundSize: "cover",
              backgroundPosition: "center 40%",
              opacity: i === currentIdx ? 1 : 0,
              transform: i === currentIdx ? "scale(1.08)" : "scale(1.04)",
              transition: "opacity 2.2s ease-in-out, transform 8s ease-out",
              willChange: "opacity, transform",
            }}
          />
        ))}
      </div>

      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at center, rgba(255,221,183,0.72) 0%, rgba(236,197,154,0.85) 55%, rgba(197,162,106,0.95) 100%)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(70,12,24,0.06) 0%, transparent 40%, rgba(50,7,16,0.2) 100%)",
          zIndex: 1,
          pointerEvents: "none",
          mixBlendMode: "multiply",
        }}
      />

      <div ref={contentRef} style={{ position: "relative", zIndex: 2 }}>
        <span
          className="eyebrow"
          style={{
            marginBottom: "16px",
            display: "inline-block",
            color: "var(--brown-deep)",
          }}
        >
          The Wedding Of
        </span>

        <h1
          ref={titleRef}
          className="script-font"
          style={{
            fontSize: "clamp(3.2rem, 9vw, 6rem)",
            color: "var(--brown-deep)",
            lineHeight: 1.1,
            marginBottom: "20px",
            fontWeight: 1000,
            willChange: "transform",
          }}
        >
          Siwi &amp; Syauqi
        </h1>

        <p
          ref={dateRef}
          className="display"
          style={{
            fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)",
            color: "var(--ink-soft)",
            letterSpacing: "0.05em",
            marginBottom: "40px",
            willChange: "transform",
          }}
        >
          Minggu, 08 November 2026
        </p>

        <div
          ref={countdownRef}
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            flexWrap: "wrap",
            maxWidth: "1028px",
            width: "100%",
            willChange: "transform",
          }}
        >
          {[
            { label: "Hari", value: timeLeft.days },
            { label: "Jam", value: timeLeft.hours },
            { label: "Menit", value: timeLeft.minutes },
            { label: "Detik", value: timeLeft.seconds },
          ].map((item, index) => (
            <div
              key={index}
              style={{
                flex: "1 1 68px",
                minWidth: "64px",
                maxWidth: "96px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {/* Box Angka Timer */}
              <div
                style={{
                  width: "100%",
                  aspectRatio: "1 / 1",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "var(--brown)",
                  borderRadius: "10px",
                  border: "1px solid var(--caramel)",
                  boxShadow: "0 6px 16px rgba(50, 7, 16, 0.2)",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "clamp(2rem, 5vw, 2.8rem)",
                    fontWeight: 700,
                    color: "var(--paper)",
                    lineHeight: 1,
                  }}
                >
                  {String(item.value).padStart(2, "0")}
                </span>
              </div>

              {/* Label Waktu di Luar Box */}
              <span
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  color: "var(--ink)",
                  marginTop: "8px",
                }}
              >
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
