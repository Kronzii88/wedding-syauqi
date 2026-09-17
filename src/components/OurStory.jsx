"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

// Story data
const storyCards = [
  {
    id: 1,
    title: "Awal Cerita",
    date: "2015",
    desc: "Cerita kami bermula di SMA. Berada di kelas yang sama saat kelas 11 membuat kami tumbuh sebagai teman dekat, berjalan di alur kehidupan masing-masing tanpa pernah menduga arah takdir di masa depan.",
    image: "images/DSC01369.webp",
  },
  {
    id: 2,
    title: "Takdir yang Mempertemukan Kembali",
    date: "2021",
    desc: "Setelah sempat terpisah jarak dan waktu selama tiga tahun, kami dipertemukan kembali di masa-masa akhir perkuliahan. Berjuang melewati masa skripsi bersama hingga lulus di tahun 2022, rasa nyaman itu tumbuh perlahan. Kehadiran satu sama lain yang tadinya sebatas tempat berbagi cerita, berubah menjadi alasan untuk saling menjaga.",
    image: "images/DSC01460.webp",
  },
  {
    id: 3,
    title: "Langkah Serius",
    date: "Mei 2026",
    desc: "Melewati berbagai proses dan pendewasaan bersama, niat baik itu akhirnya diwujudkan. Pada Mei 2026, Syauqi beserta keluarga datang bersilaturahmi ke rumah Siwi untuk mengikat komitmen ke jenjang yang lebih serius.",
    image: "images/DSC01505.webp",
  },
  {
    id: 4,
    title: "Menuju Babak Baru",
    date: "8 November, 2026",
    desc: "Dari teman sekelas hingga menjadi pasangan hidup, kami bersyukur atas perjalanan panjang yang membawa kami sampai ke titik ini. Merupakan suatu kebahagiaan bagi kami jika Kamu bisa hadir dan memberikan doa restu di hari bahagia ini.",
    image: "images/DSC01746.webp",
    isFinal: true,
  },
];

// Single Story Card with image shuffle animation
function StoryCard({ card, index }) {
  const [isHovered, setIsHovered] = useState(false);
  const isLeft = index % 2 === 0;

  return (
    <motion.article
      className="story-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "480px",
        alignSelf: isLeft ? "flex-start" : "flex-end",
        marginLeft: isLeft ? 0 : "20%",
        marginRight: isLeft ? "20%" : 0,
      }}
    >
      {/* Square Container - transparent background */}
      <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "3 / 5",
          overflow: "hidden",
          borderRadius: "12px",
          boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
          border: "1px solid rgba(197, 162, 106, 0.12)",
          backgroundColor: "#1a1218",
        }}
      >
        {/* Image Box - behind text initially */}
        <motion.div
          className="story-card__image-box"
          animate={{
            zIndex: isHovered ? 15 : 5,
            scale: isHovered ? 1.08 : 1,
          }}
          transition={{
            type: "spring",
            stiffness: 250,
            damping: 24,
          }}
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 5,
          }}
        >
          <img
            src={card.image}
            alt={card.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
              filter: isHovered ? "brightness(0.95)" : "brightness(0.8)",
              transition: "filter 0.4s ease",
            }}
          />

          {/* Date badge */}
          <div
            style={{
              position: "absolute",
              bottom: "16px",
              left: "16px",
              right: "16px",
              backgroundColor: "rgba(0,0,0,0.7)",
              backdropFilter: "blur(8px)",
              padding: "8px 12px",
              borderRadius: "6px",
            }}
          >
            <span
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "0.75rem",
                color: "rgba(255, 221, 183, 0.95)",
                letterSpacing: "0.03em",
              }}
            >
              {card.date}
            </span>
          </div>
        </motion.div>

        {/* Text Box - in front, centered */}
        <motion.div
          className="story-card__text-box"
          animate={{
            zIndex: isHovered ? 5 : 15,
          }}
          transition={{
            type: "spring",
            stiffness: 250,
            damping: 24,
          }}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "80%",
            zIndex: 15,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "24px 20px",
            backgroundColor: "#1a1218",
            borderRadius: "8px",
            boxShadow: "0 10px 40px rgba(0,0,0,0.5)",
          }}
        >
          {/* Decorative line */}
          <div
            style={{
              width: "30px",
              height: "2px",
              backgroundColor: "var(--caramel)",
              marginBottom: "14px",
              opacity: 0.7,
            }}
          />

          <h3
            className="display"
            style={{
              fontFamily:
                "var(--font-display), 'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(1rem, 2vw, 1.3rem)",
              fontWeight: 600,
              color: "#ffffff",
              marginBottom: "10px",
              lineHeight: 1.2,
            }}
          >
            {card.title}
          </h3>

          <p
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "clamp(0.7rem, 1vw, 0.8rem)",
              lineHeight: 1.6,
              color: "rgba(255, 221, 183, 0.7)",
            }}
          >
            {card.desc}
          </p>

          {card.isFinal && (
            <div
              style={{
                marginTop: "14px",
                padding: "10px 14px",
                background: "rgba(197, 162, 106, 0.1)",
                borderRadius: "6px",
                border: "1px solid rgba(197, 162, 106, 0.2)",
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontSize: "0.75rem",
                  color: "rgba(255, 221, 183, 0.9)",
                  fontStyle: "italic",
                }}
              >
                "Two souls, one journey."
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </motion.article>
  );
}

const OurStory = () => {
  return (
    <section
      id="story"
      style={{
        backgroundColor: "#1c0309",
        backgroundImage:
          "radial-gradient(ellipse at 50% 50%, rgba(70, 12, 24, 0.4) 0%, rgba(18, 2, 7, 0.98) 75%)",
        color: "#ffffff",
        padding: "120px 0 140px",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Ambient glow */}
      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "50vw",
          height: "500px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(197, 162, 106, 0.06) 0%, rgba(0,0,0,0) 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 40px",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Section Header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "80px",
          }}
        >
          <span
            className="eyebrow"
            style={{
              color: "var(--caramel)",
              letterSpacing: "0.3em",
              fontSize: "clamp(0.65rem, 1vw, 0.8rem)",
              textTransform: "uppercase",
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <span style={{ fontSize: "0.8em", opacity: 0.5 }}>✦</span>
            CERITA KITA
            <span style={{ fontSize: "0.8em", opacity: 0.5 }}>✦</span>
          </span>
        </div>

        {/* Story Cards */}
        <div
          className="story-cards-container"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "40px",
          }}
        >
          {storyCards.map((card, index) => (
            <StoryCard key={card.id} card={card} index={index} />
          ))}
        </div>
      </div>

      {/* Decorative divider */}
      <div
        style={{
          position: "absolute",
          bottom: "50px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          alignItems: "center",
          gap: "16px",
          color: "rgba(197, 162, 106, 0.4)",
        }}
      >
        <div
          style={{
            width: "50px",
            height: "1px",
            background: "linear-gradient(to right, transparent, currentColor)",
          }}
        />
        <span style={{ fontSize: "1rem" }}>♥</span>
        <div
          style={{
            width: "50px",
            height: "1px",
            background: "linear-gradient(to left, transparent, currentColor)",
          }}
        />
      </div>

      {/* Styles */}
      <style>{`
        .story-card {
          cursor: pointer;
          transition: box-shadow 0.4s ease;
        }

        .story-card:hover {
          box-shadow: 0 25px 70px rgba(0,0,0,0.6), 0 0 30px rgba(197, 162, 106, 0.15);
        }

        /* Desktop: Zig-zag layout */
        @media (min-width: 769px) {
          .story-cards-container {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
        }

        /* Mobile: all centered */
        @media (max-width: 768px) {
          .story-card {
            align-self: center !important;
            margin-left: 0 !important;
            margin-right: 0 !important;
            max-width: 280px !important;
          }
          .story-card .story-card__image-box,
          .story-card > div {
            aspect-ratio: 3 / 5 !important;
          }
        }

        @media (min-width: 769px) {
          .story-card > div {
            aspect-ratio: 1 / 1 !important;
          }
        }

        @media (max-width: 640px) {
          #story {
            padding: 80px 0 100px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default OurStory;
