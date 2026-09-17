import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const storyCards = [
  {
    year: "2015",
    title: "Awal Cerita",
    desc: "Cerita kami bermula di SMA. Berada di kelas yang sama saat kelas 11 membuat kami tumbuh sebagai teman dekat, berjalan di alur kehidupan masing-masing tanpa pernah menduga arah takdir di masa depan.",
    bg: "var(--paper)",
  },
  {
    year: "2021",
    title: "Takdir yang Mempertemukan Kembali",
    desc: "Setelah sempat terpisah jarak dan waktu selama tiga tahun, kami dipertemukan kembali di masa-masa akhir perkuliahan. Berjuang melewati masa skripsi bersama hingga lulus di tahun 2022, rasa nyaman itu tumbuh perlahan. Kehadiran satu sama lain yang tadinya sebatas tempat berbagi cerita, berubah menjadi alasan untuk saling menjaga.",
    bg: "var(--paper-deep)",
  },
  {
    year: "Mei 2026",
    title: "Langkah Serius",
    desc: "Melewati berbagai proses dan pendewasaan bersama, niat baik itu akhirnya diwujudkan. Pada Mei 2026, Syauqi beserta keluarga datang bersilaturahmi ke rumah Siwi untuk mengikat komitmen ke jenjang yang lebih serius.",
    bg: "var(--caramel)",
  },
  {
    year: "♥",
    title: "Menuju Babak Baru",
    desc: "Dari teman sekelas hingga menjadi pasangan hidup, kami bersyukur atas perjalanan panjang yang membawa kami sampai ke titik ini. Merupakan suatu kebahagiaan bagi kami jika Kamu bisa hadir dan memberikan doa restu di hari bahagia ini.",
    bg: "var(--brown)",
    isFinal: true,
  },
];

const OurStory = () => {
  const containerRef = useRef(null);
  const triggerRef = useRef(null);
  const cardRefs = useRef([]);

  useGSAP(
    () => {
      const cards = cardRefs.current.filter(Boolean);
      const totalCards = cards.length;
      if (totalCards < 2) return;

      const mm = gsap.matchMedia();

      // Define responsive media queries
      mm.add(
        {
          isDesktop: "(min-width: 768px)",
          isMobile: "(max-width: 767px)",
        },
        (context) => {
          const { isMobile } = context.conditions;

          // Set initial card positions
          gsap.set(cards[0], { y: "0%", scale: 1, rotation: 0 });
          for (let i = 1; i < totalCards; i++) {
            gsap.set(cards[i], { y: "100%", scale: 1, rotation: 0 });
          }

          const scrollDistance = isMobile
            ? () => document.documentElement.clientHeight * (totalCards - 1)
            : () => window.innerHeight * (totalCards - 1);

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: triggerRef.current,
              start: "top top",
              end: `+=${scrollDistance()}`,
              pin: true,
              scrub: 0.5,
              pinSpacing: true,
              invalidateOnRefresh: true,
            },
          });

          for (let i = 0; i < totalCards - 1; i++) {
            const currentCard = cards[i];
            const nextCard = cards[i + 1];

            tl.to(
              currentCard,
              {
                scale: 0.85,
                rotation: 4,
                duration: 1,
                ease: "none",
              },
              i,
            ).to(
              nextCard,
              {
                y: "0%",
                duration: 1,
                ease: "none",
              },
              i,
            );
          }
        },
      );

      return () => mm.revert();
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      id="story"
      style={{ backgroundColor: "var(--paper)" }}
    >
      <div
        ref={triggerRef}
        style={{
          minHeight: "100dvh",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px 20px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          className="story-head"
          style={{ textAlign: "center", marginBottom: "32px", zIndex: 2 }}
        >
          <span className="eyebrow">Our Story</span>
          <h2
            className="display"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", marginTop: "8px" }}
          >
            Kisah Cinta Siwi &amp; Syauqi
          </h2>
        </div>

        {/* Sticky Cards Stack Stage */}
        <div
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "520px",
            height: "380px",
            margin: "0 auto",
            overflow: "hidden",
            borderRadius: "16px",
          }}
        >
          {storyCards.map((card, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                transform: index === 0 ? "translateY(0%)" : "translateY(100%)",
                backgroundColor: card.bg,
                color: card.isFinal ? "var(--paper)" : "var(--ink)",
                borderRadius: "16px",
                padding: "36px 32px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                boxShadow: "0 12px 36px rgba(46, 31, 22, 0.15)",
                border: "1px solid var(--line)",
                willChange: "transform",
              }}
            >
              <div
                className="eyebrow"
                style={{
                  color: card.isFinal ? "var(--paper)" : "var(--caramel)",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  marginBottom: "12px",
                }}
              >
                {card.year}
              </div>
              <h3
                className="display"
                style={{
                  fontSize: "clamp(1.3rem, 3vw, 1.8rem)",
                  marginBottom: "16px",
                  color: card.isFinal ? "var(--paper)" : "var(--brown-deep)",
                }}
              >
                {card.title}
              </h3>
              <p
                style={{
                  fontSize: "0.95rem",
                  lineHeight: 1.6,
                  color: card.isFinal
                    ? "rgba(255,255,255,0.9)"
                    : "var(--ink-soft)",
                }}
              >
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurStory;
