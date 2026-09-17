import React from "react";

const Footer = () => {
  return (
    <footer
      id="penutup"
      style={{
        padding: "80px 24px 40px 24px",
        backgroundColor: "var(--paper)",
        textAlign: "center",
        borderTop: "1px solid var(--line)",
      }}
    >
      <div className="container" style={{ maxWidth: "600px" }}>
        <p
          className="display"
          style={{
            fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
            color: "var(--ink-soft)",
            lineHeight: 1.6,
            marginBottom: "32px",
          }}
        >
          Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila
          Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada
          kami.
        </p>

        <span className="eyebrow" style={{ marginBottom: "12px" }}>
          Kami Yang Berbahagia
        </span>

        <h2
          className="script-font"
          style={{
            fontSize: "clamp(2.8rem, 7vw, 4.5rem)",
            color: "var(--brown-deep)",
            marginBottom: "48px",
            fontWeight: 400,
          }}
        >
          Siwi &amp; Syauqi
        </h2>

        <div
          style={{
            fontSize: "0.8rem",
            color: "var(--ink-soft)",
            letterSpacing: "0.05em",
          }}
        >
          &copy; 2026 Siwi &amp; Syauqi. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
