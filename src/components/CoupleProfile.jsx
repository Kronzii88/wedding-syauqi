import React from "react";

const CoupleProfile = () => {
  return (
    <section
      id="mempelai"
      style={{
        padding: "100px 24px",
        backgroundColor: "var(--paper)",
        textAlign: "center",
      }}
    >
      <style>{`
        @media (min-width: 768px) {
          .couple-grid {
            grid-template-columns: 1fr auto 1fr !important;
          }
        }
        @media (max-width: 767px) {
          .couple-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>

      <div className="container">
        <span className="eyebrow" style={{ marginBottom: "12px" }}>
          Mempelai
        </span>
        <h2
          className="display"
          style={{
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            marginBottom: "60px",
          }}
        >
          Siwi &amp; Syauqi
        </h2>

        <div
          className="couple-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto 1fr",
            gap: "40px",
            alignItems: "center",
            maxWidth: "1040px",
            margin: "0 auto",
            width: "100%",
          }}
        >
          {/* Bride Profile */}
          <div>
            <div
              style={{
                width: "200px",
                height: "260px",
                margin: "0 auto 24px auto",
                borderRadius: "120px 120px 0 0",
                overflow: "hidden",
                boxShadow: "0 12px 30px rgba(46, 31, 22, 0.12)",
                border: "4px solid var(--paper-deep)",
              }}
            >
              <img
                src="images/DSC01686.webp"
                alt="Rakasiwi Ayu Wulandari"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </div>
            <h3
              className="display"
              style={{
                fontSize: "1.6rem",
                marginBottom: "8px",
                color: "var(--brown-deep)",
              }}
            >
              Rakasiwi Ayu Wulandari
            </h3>
            <p
              style={{
                fontSize: "0.95rem",
                color: "var(--ink-soft)",
                lineHeight: 1.6,
              }}
            >
              Putri dari
              <br />
              <b>Bapak Munasir (alm)</b> &amp; <b>Ibu Sri Wahyuni</b>
            </p>
          </div>

          {/* Ampersand Divider */}
          <div
            className="script-font"
            style={{
              fontSize: "3.5rem",
              color: "var(--caramel)",
              margin: "10px 0",
            }}
          >
            &amp;
          </div>

          {/* Groom Profile */}
          <div>
            <div
              style={{
                width: "200px",
                height: "260px",
                margin: "0 auto 24px auto",
                borderRadius: "120px 120px 0 0",
                overflow: "hidden",
                boxShadow: "0 12px 30px rgba(46, 31, 22, 0.12)",
                border: "4px solid var(--paper-deep)",
              }}
            >
              <img
                src="images/DSC01695.webp"
                alt="Muhammad Syauqi Mubarak"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </div>
            <h3
              className="display"
              style={{
                fontSize: "1.6rem",
                marginBottom: "8px",
                color: "var(--brown-deep)",
              }}
            >
              Muhammad Syauqi Mubarak
            </h3>
            <p
              style={{
                fontSize: "0.95rem",
                color: "var(--ink-soft)",
                lineHeight: 1.6,
              }}
            >
              Putra dari
              <br />
              <b>Bapak Arief Effendi</b> &amp; <b>Ibu Asmanah</b>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoupleProfile;
