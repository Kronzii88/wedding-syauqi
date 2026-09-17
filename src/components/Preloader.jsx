import React, { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Preloader = ({ isOpened, onOpen }) => {
  const stageRef = useRef(null);
  const envelopeSceneRef = useRef(null);
  const envelopeBackRef = useRef(null);
  const envelopeFrontRef = useRef(null);
  const envelopeFlapRef = useRef(null);
  const letterRef = useRef(null);
  const sealRef = useRef(null);
  const overlayContentRef = useRef(null);

  const [guestName, setGuestName] = useState("Tamu Undangan");
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const nameParam = params.get("to") || params.get("n") || params.get("nama");
    if (nameParam) {
      setGuestName(decodeURIComponent(nameParam));
    }
  }, []);

  const { contextSafe } = useGSAP({ scope: stageRef });

  const handleOpenClick = contextSafe(() => {
    if (onOpen) onOpen();

    const sceneEl = envelopeSceneRef.current;
    const letterEl = letterRef.current;

    const tl = gsap.timeline({
      onComplete: () => {
        setIsDismissed(true);
      },
    });

    // Initial state — letter awalnya diposisikan 58% dari ATAS (di bawah mulut amplop)
    // sehingga 100% tersembunyi sebelum animasi mulai
    gsap.set(envelopeSceneRef.current, { opacity: 0, scale: 0.92 });
    gsap.set(letterRef.current, { y: 0, opacity: 1, scale: 1 });
    gsap.set(envelopeFlapRef.current, { rotationX: 0 });
    gsap.set(sealRef.current, { scale: 1, rotation: 0, opacity: 1 });

    // Scene fade in
    tl.to(envelopeSceneRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.4,
      ease: "power2.out",
    });

    // Step 0 — Overlay teks + tombol fade out
    tl.to(
      overlayContentRef.current,
      {
        opacity: 0,
        y: -10,
        duration: 0.35,
        ease: "power2.in",
        pointerEvents: "none",
      },
      "-=0.2",
    )
      // 1 — Seal Crack: scale + rotate kecil, hilang
      .to(
        sealRef.current,
        {
          keyframes: [
            {
              scale: 1.15,
              rotation: -6,
              opacity: 1,
              duration: 0.3,
              ease: "power2.out",
            },
            {
              scale: 1.6,
              rotation: 8,
              opacity: 0,
              duration: 0.2,
              ease: "power2.in",
            },
          ],
        },
        "-=0.1",
      )
      // 2 — Flap Open: rotateX -165°
      .to(
        envelopeFlapRef.current,
        {
          rotationX: -165,
          duration: 0.9,
          ease: "cubic-bezier(.6,0,.35,1)",
          onStart: () => {
            gsap.set(envelopeFlapRef.current, { zIndex: 9 });
            // Hide the inner brown overlay on flap
            const flapOverlay = envelopeFlapRef.current.nextElementSibling;
            if (flapOverlay) flapOverlay.style.opacity = "0";
            // Hide seal behind flap
            gsap.set(sealRef.current, { zIndex: 8, opacity: 0 });
          },
          onUpdate: function () {
            const progress = this.progress();
            if (progress > 0.5) {
              envelopeFlapRef.current.style.opacity = 0.9;
            }
          },
        },
        "-=0.1",
      )
      // 3 — Letter Rise: surat naik KELUAR dari mulut amplop ke ATAS
      //    dari posisi awal top:58% (di dalam) → ke atas keluar viewport sambil scale
      .add(() => {
        gsap.set(letterEl, { zIndex: 20 });
      })
      .to(
        letterRef.current,
        {
          keyframes: [
            {
              top: "-30%",
              duration: 0.7,
              ease: "power3.out",
            },
            {
              left: "50%",
              top: "50%",
              xPercent: -50,
              yPercent: -50,
              width: "100vw",
              height: "100svh",
              borderRadius: 0,
              scale: 2.6,
              opacity: 1,
              duration: 0.4,
              ease: "cubic-bezier(.4,0,.2,1)",
              onStart: () => {
                gsap.set(sceneEl, { overflow: "visible" });
                gsap.set(letterEl, { zIndex: 50 });
              },
            },
          ],
        },
        "-=0.55",
      )
      // 4 — Envelope scene fade out (seluruh amplop menghilang saat letter sudah besar)
      .to(
        [
          envelopeBackRef.current,
          envelopeFrontRef.current,
          envelopeFlapRef.current,
          sealRef.current,
          envelopeSceneRef.current,
        ],
        {
          opacity: 0,
          duration: 0.5,
          ease: "power2.in",
        },
        "-=0.25",
      );
  });

  if (isDismissed) {
    return null;
  }

  return (
    <div
      ref={stageRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100svh",
        zIndex: 9999,
        overflow: "hidden",
        backgroundColor: "var(--brown)",
        backgroundImage:
          "radial-gradient(circle at 50% 40%, rgba(255,255,255,0.06), transparent 60%), linear-gradient(180deg, #460C18 0%, var(--brown-deep) 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "32px",
        padding: "24px",
        perspective: "1400px",
        pointerEvents: isOpened ? "none" : "auto",
      }}
    >
      {/* ===== Overlay teks + tombol (interaksi user di ATAS amplop, flex-column rapi) ===== */}
      <div
        ref={overlayContentRef}
        style={{
          width: "min(480px, 86vw)",
          zIndex: 40,
          pointerEvents: "auto",
          position: "relative",
        }}
      >
        <div
          style={{
            backgroundColor: "var(--paper)",
            padding: "26px 24px 22px 24px",
            borderRadius: "8px",
            textAlign: "center",
            boxShadow: "0 18px 48px rgba(50,7,16,0.4)",
            border: "1px solid var(--paper-deep)",
          }}
        >
          <span
            className="eyebrow"
            style={{
              display: "block",
              marginBottom: "8px",
              color: "var(--brown-deep)",
              fontSize: "0.78rem",
            }}
          >
            Kepada Yth. Bapak/Ibu/Saudara/i
          </span>
          <h1
            className="display"
            style={{
              fontSize: "clamp(1.4rem, 3.6vw, 2.1rem)",
              marginBottom: "10px",
              color: "var(--ink)",
              lineHeight: 1.15,
            }}
          >
            {guestName}
          </h1>
          <p
            style={{
              fontSize: "0.88rem",
              color: "var(--ink-soft)",
              lineHeight: 1.55,
              marginBottom: "18px",
            }}
          >
            Tanpa mengurangi rasa hormat, kami mengundang Anda untuk menghadiri
            hari bahagia pernikahan kami.
          </p>
          <button
            type="button"
            className="btn"
            onClick={handleOpenClick}
            style={{
              minHeight: "48px",
              padding: "0 32px",
              fontSize: "0.95rem",
              boxShadow: "0 6px 20px rgba(107,66,38,0.28)",
            }}
          >
            Buka Undangan
          </button>
        </div>
      </div>

      {/* ===== ENVELOPE SCENE (sesuai referensi HTML) ===== */}
      <div
        ref={envelopeSceneRef}
        style={{
          position: "relative",
          width: "min(340px, 72vw)",
          aspectRatio: "3 / 2",
          transformStyle: "preserve-3d",
          overflow: "hidden",
          borderRadius: "12px",
        }}
      >
        {/* 1 — Envelope Back (punggung amplop) */}
        <div
          ref={envelopeBackRef}
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "var(--brown-deep)",
            borderRadius: "12px",
            boxShadow: "0 30px 60px -20px rgba(0,0,0,0.6)",
            zIndex: 1,
          }}
        />

        {/* 2 — Letter (kertas surat) — diantara back & front, initial: BENAR-BENAR tersembunyi di dalam */}
        <div
          ref={letterRef}
          style={{
            position: "absolute",
            left: "3.2%",
            right: "3.2%",
            top: "100%",
            height: "86%",
            backgroundColor: "var(--paper)",
            borderRadius: "3px",
            boxShadow: "0 4px 18px rgba(0,0,0,0.35)",
            padding: "22px 20px",
            zIndex: 10,
            overflow: "hidden",
            transformOrigin: "50% 50%",
          }}
        ></div>

        {/* 3 — Envelope Front (saku depan: segitiga terbalik bawah) — DI ATAS letter */}
        <div
          ref={envelopeFrontRef}
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "var(--paper-deep)",
            borderRadius: "12px",
            zIndex: 11,
            pointerEvents: "none",
            overflow: "hidden",
          }}
        >
          {/* Inner fold triangle - darker shade for depth */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              height: "62%",
              backgroundColor: "var(--paper-deep)",
              clipPath: "polygon(0 38%, 50% 100%, 100% 38%, 100% 100%, 0 100%)",
              borderRadius: "0 0 12px 12px",
            }}
          />
        </div>

        {/* 4 — Envelope Flap (segitiga ATAS: clipPath sama persis ref) */}
        <div
          ref={envelopeFlapRef}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "var(--brown-deep)",
            clipPath: "polygon(0 0, 100% 0, 50% 62%)",
            transformOrigin: "top center",
            transformStyle: "preserve-3d",
            zIndex: 12,
            borderRadius: "12px 12px 0 0",
            boxShadow: "inset 0 -20px 30px -20px rgba(0,0,0,0.4)",
          }}
        />
        {/* Flap inner triangle overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "62%",
            backgroundColor: "var(--brown-deep)",
            clipPath: "polygon(0 0, 100% 0, 50% 62%)",
            zIndex: 13,
            pointerEvents: "none",
          }}
        />

        {/* 5 — Wax Seal (segel lilin bulat merah, di atas flap & front) */}
        <img
          ref={sealRef}
          src="/images/seal.png"
          alt="Seal"
          draggable={false}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "52px",
            height: "52px",
            margin: "-26px 0 0 -26px",
            zIndex: 15,
            objectFit: "cover",
            userSelect: "none",
          }}
        />
      </div>
    </div>
  );
};

export default Preloader;
