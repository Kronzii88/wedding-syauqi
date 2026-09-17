import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { X, ChevronLeft, ChevronRight, Maximize2, Sparkles } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// 12 authentic wedding photos
const galleryPhotos = [
  { id: 1, src: "images/DSC01369.webp", title: "Langkah Pertama", desc: "Awal dari perjalanan cinta yang abadi" },
  { id: 2, src: "images/DSC01460.webp", title: "Senyuman Hangat", desc: "Keceriaan yang meluluhkan segala gundah" },
  { id: 3, src: "images/DSC01479.webp", title: "Janji Suci", desc: "Dua hati yang berpadu dalam satu tujuan" },
  { id: 4, src: "images/DSC01505.webp", title: "Dekapan Damai", desc: "Rumah terindah untuk berpulang" },
  { id: 5, src: "images/DSC01602.webp", title: "Melangkah Bersama", desc: "Bergandengan tangan melintasi waktu" },
  { id: 6, src: "images/DSC01640.webp", title: "Tatapan Penuh Makna", desc: "Cerita tanpa kata yang selalu dimengerti" },
  { id: 7, src: "images/DSC01650.webp", title: "Bahagia Sederhana", desc: "Menikmati setiap detik yang dianugerahkan" },
  { id: 8, src: "images/DSC01686.webp", title: "Sentuhan Kasih", desc: "Ketulusan yang tertaut dalam keheningan" },
  { id: 9, src: "images/DSC01695.webp", title: "Sinar Harapan", desc: "Cahaya baru menuju masa depan berdua" },
  { id: 10, src: "images/DSC01746.webp", title: "Satu Irama Jiwa", desc: "Harmoni cinta yang tak lekang oleh waktu" },
  { id: 11, src: "images/DSC01805.webp", title: "Rangkaian Doa", desc: "Memohon restu semesta untuk selamanya" },
  { id: 12, src: "images/DSC01872.webp", title: "Menuju Keabadian", desc: "Bersama merajut asa dan cinta sejati" },
];

const Gallery = () => {
  const containerRef = useRef(null);
  const gridRef = useRef(null);
  const wrapRef = useRef(null);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Initialize Lenis smooth scroll synchronized with GSAP ScrollTrigger
  useEffect(() => {
    let lenis;
    try {
      lenis = new Lenis({
        lerp: 0.08,
        smoothWheel: true,
      });

      lenis.on("scroll", ScrollTrigger.update);

      const updateTicker = (time) => {
        lenis.raf(time * 1000);
      };

      gsap.ticker.add(updateTicker);
      gsap.ticker.lagSmoothing(0);

      return () => {
        gsap.ticker.remove(updateTicker);
        lenis.destroy();
      };
    } catch (e) {
      console.warn("Lenis skipped:", e);
    }
  }, []);

  // Animation Type 6: Roll-in 3D (Skiper33 / Codrops Scroll3DGrid)
  useEffect(() => {
    const gridWrap = wrapRef.current;
    if (!gridWrap) return;

    const gridItems = gridWrap.querySelectorAll(".grid__item");
    const gridInners = gridWrap.querySelectorAll(".grid__item-inner");
    if (!gridItems.length) return;

    // Reset initial transforms
    gsap.set(gridItems, {
      transformOrigin: "50% 120%",
      rotationY: 0,
      rotationX: 25,
      y: 200,
      opacity: 0.2,
      scale: 0.8,
    });

    gsap.set(gridInners, {
      scale: 1.25,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: gridWrap,
        start: "top bottom-=8%",
        end: "bottom top+=8%",
        scrub: 1.2,
        invalidateOnRefresh: true,
      },
    });

    // 360-degree Roll-in 3D stagger animation
    tl.to(
      gridItems,
      {
        ease: "power2.out",
        y: 0,
        rotationY: 360,
        rotationX: 0,
        opacity: 1,
        scale: 1,
        stagger: {
          each: 0.07,
          from: "start",
        },
      },
      0
    );

    // Inner parallax scale relaxation
    tl.to(
      gridInners,
      {
        ease: "power2.out",
        scale: 1,
        stagger: {
          each: 0.07,
          from: "start",
        },
      },
      0
    );

    ScrollTrigger.refresh();

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  const openLightbox = (photo, index) => {
    setSelectedPhoto(photo);
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
  };

  const nextPhoto = (e) => {
    e.stopPropagation();
    const nextIdx = (selectedIndex + 1) % galleryPhotos.length;
    setSelectedIndex(nextIdx);
    setSelectedPhoto(galleryPhotos[nextIdx]);
  };

  const prevPhoto = (e) => {
    e.stopPropagation();
    const prevIdx = (selectedIndex - 1 + galleryPhotos.length) % galleryPhotos.length;
    setSelectedIndex(prevIdx);
    setSelectedPhoto(galleryPhotos[prevIdx]);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedPhoto) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextPhoto(e);
      if (e.key === "ArrowLeft") prevPhoto(e);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedPhoto, selectedIndex]);

  return (
    <section
      ref={containerRef}
      id="gallery"
      className="gallery-section"
      style={{
        position: "relative",
        width: "100%",
        backgroundColor: "#1c0309",
        backgroundImage: "radial-gradient(ellipse at 50% 15%, rgba(70, 12, 24, 0.6) 0%, rgba(18, 2, 7, 0.98) 75%)",
        color: "#ffffff",
        padding: "110px 0 130px",
        overflow: "hidden",
      }}
    >
      {/* Ambient background illumination */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "75vw",
          height: "450px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(197, 162, 106, 0.12) 0%, rgba(0,0,0,0) 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Atmospheric Wedding Section Header */}
      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          maxWidth: "840px",
          margin: "0 auto 64px",
          padding: "0 24px",
        }}
      >
        <span
          className="eyebrow"
          style={{
            color: "var(--caramel)",
            letterSpacing: "0.35em",
            fontSize: "clamp(0.72rem, 1.4vw, 0.92rem)",
            marginBottom: "0.85rem",
            textTransform: "uppercase",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
          }}
        >
          <Sparkles size={14} color="var(--caramel)" />
          GALERI KENANGAN INDAH
          <Sparkles size={14} color="var(--caramel)" />
        </span>

        <h2
          className="display"
          style={{
            fontSize: "clamp(2.5rem, 6.5vw, 5.2rem)",
            fontWeight: 600,
            lineHeight: 1.05,
            color: "#ffffff",
            textShadow: "0 4px 30px rgba(0,0,0,0.85), 0 0 50px rgba(197,162,106,0.3)",
            fontFamily: "var(--font-display), 'Cormorant Garamond', Georgia, serif",
            margin: 0,
            textTransform: "lowercase",
          }}
        >
          kenangan yang
          <br />
          <span
            style={{
              fontFamily: "var(--font-script), 'Petit Formal Script', cursive",
              fontSize: "1.18em",
              color: "var(--paper)",
              textShadow: "0 0 25px rgba(255, 221, 183, 0.5)",
              display: "inline-block",
              paddingTop: "0.25rem",
            }}
          >
            kami rayakan
          </span>
        </h2>

        <p
          style={{
            margin: "1.25rem auto 0",
            maxWidth: "520px",
            fontSize: "clamp(0.85rem, 1.35vw, 1.05rem)",
            color: "rgba(255, 221, 183, 0.8)",
            fontStyle: "italic",
            letterSpacing: "0.02em",
            lineHeight: 1.6,
          }}
        >
          "Setiap potret mengabadikan langkah, tawa, dan janji yang kami rajut bersama."
        </p>

        <div
          style={{
            marginTop: "1.2rem",
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            fontSize: "0.75rem",
            letterSpacing: "0.18em",
            color: "rgba(197, 162, 106, 0.75)",
            textTransform: "uppercase",
          }}
        >
          <span>↓ Scroll untuk melihat Roll-in 3D</span>
        </div>
      </div>

      {/* 3D Perspective Stage (.grid) */}
      <div
        ref={gridRef}
        className="grid gallery-3d-viewport"
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 24px",
          perspective: "2000px",
          zIndex: 1,
        }}
      >
        {/* 3D Stage (.grid-wrap) */}
        <div
          ref={wrapRef}
          className="grid-wrap"
          style={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "2.5rem",
            transformStyle: "preserve-3d",
          }}
        >
          {galleryPhotos.map((photo, i) => (
            <div
              key={photo.id}
              className="grid__item"
              onClick={() => openLightbox(photo, i)}
              title={`Klik untuk memperbesar: ${photo.title}`}
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "3 / 4",
                overflow: "hidden",
                borderRadius: "16px",
                cursor: "pointer",
                transformStyle: "preserve-3d",
                boxShadow: "0 20px 45px rgba(0,0,0,0.65), 0 0 0 1px rgba(197, 162, 106, 0.2)",
                backgroundColor: "#2a050d",
                transition: "box-shadow 0.35s ease, border-color 0.35s ease",
              }}
            >
              {/* Image with object-fit cover */}
              <img
                src={photo.src}
                alt={photo.title}
                loading="eager"
                className="grid__item-inner"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "50% 50%",
                  display: "block",
                  willChange: "transform",
                }}
              />

              {/* Glassmorphic Caption Overlay */}
              <div
                className="grid__item-caption"
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(18, 2, 7, 0.9) 0%, rgba(18, 2, 7, 0.25) 45%, rgba(0,0,0,0) 100%)",
                  opacity: 0,
                  transition: "opacity 0.35s ease",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  padding: "20px",
                  zIndex: 3,
                  pointerEvents: "none",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-display), Georgia, serif",
                    fontSize: "1.2rem",
                    fontWeight: 600,
                    color: "var(--paper)",
                  }}
                >
                  {photo.title}
                </span>
                <span
                  style={{
                    fontSize: "0.78rem",
                    color: "rgba(255,255,255,0.75)",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    marginTop: "3px",
                  }}
                >
                  <Maximize2 size={13} /> Klik untuk perbesar
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Lightbox Modal */}
      {selectedPhoto && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={closeLightbox}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 1000,
            backgroundColor: "rgba(14, 1, 5, 0.94)",
            backdropFilter: "blur(18px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            animation: "fadeInModal 0.25s ease forwards",
          }}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            aria-label="Tutup foto"
            style={{
              position: "absolute",
              top: "24px",
              right: "24px",
              background: "rgba(255, 255, 255, 0.12)",
              border: "1px solid rgba(255, 255, 255, 0.25)",
              color: "#ffffff",
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "transform 0.2s, background 0.2s",
              zIndex: 1010,
            }}
          >
            <X size={22} />
          </button>

          {/* Previous Arrow */}
          <button
            onClick={prevPhoto}
            aria-label="Foto sebelumnya"
            style={{
              position: "absolute",
              left: "20px",
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(255, 255, 255, 0.12)",
              border: "1px solid rgba(255, 255, 255, 0.25)",
              color: "#ffffff",
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              zIndex: 1010,
            }}
          >
            <ChevronLeft size={26} />
          </button>

          {/* Next Arrow */}
          <button
            onClick={nextPhoto}
            aria-label="Foto berikutnya"
            style={{
              position: "absolute",
              right: "20px",
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(255, 255, 255, 0.12)",
              border: "1px solid rgba(255, 255, 255, 0.25)",
              color: "#ffffff",
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              zIndex: 1010,
            }}
          >
            <ChevronRight size={26} />
          </button>

          {/* Photo Card Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              maxWidth: "880px",
              maxHeight: "88vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 25px 70px rgba(0,0,0,0.85), 0 0 0 1px rgba(197,162,106,0.3)",
              background: "#24040d",
            }}
          >
            <img
              src={selectedPhoto.src}
              alt={selectedPhoto.title}
              style={{
                maxWidth: "100%",
                maxHeight: "72vh",
                objectFit: "contain",
                display: "block",
                background: "#160208",
              }}
            />

            <div
              style={{
                width: "100%",
                padding: "16px 24px",
                background: "linear-gradient(to right, #2c0611, #1a0208)",
                borderTop: "1px solid rgba(197, 162, 106, 0.2)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <h4
                  style={{
                    margin: 0,
                    fontSize: "1.25rem",
                    fontFamily: "var(--font-display), Georgia, serif",
                    color: "var(--paper)",
                    fontWeight: 600,
                  }}
                >
                  {selectedPhoto.title}
                </h4>
                <p
                  style={{
                    margin: "2px 0 0",
                    fontSize: "0.85rem",
                    color: "rgba(255, 221, 183, 0.75)",
                  }}
                >
                  {selectedPhoto.desc}
                </p>
              </div>

              <span
                style={{
                  fontSize: "0.8rem",
                  color: "var(--caramel)",
                  fontWeight: 500,
                  padding: "4px 10px",
                  borderRadius: "12px",
                  background: "rgba(197, 162, 106, 0.12)",
                }}
              >
                {selectedIndex + 1} / {galleryPhotos.length}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Responsive Styles */}
      <style>{`
        @keyframes fadeInModal {
          from { opacity: 0; transform: scale(0.97); }
          to { opacity: 1; transform: scale(1); }
        }

        .grid__item:hover {
          box-shadow: 0 25px 60px rgba(0,0,0,0.85), 0 0 25px rgba(197, 162, 106, 0.45) !important;
        }

        .grid__item:hover .grid__item-caption {
          opacity: 1 !important;
        }

        @media (max-width: 960px) {
          .gallery-3d-viewport .grid-wrap {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1.5rem !important;
          }
        }

        @media (max-width: 540px) {
          .gallery-3d-viewport .grid-wrap {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Gallery;
