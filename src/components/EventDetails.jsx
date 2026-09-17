import React from "react";
import { MapPin, CalendarPlus } from "lucide-react";

const EventDetails = () => {
  return (
    <section
      id="acara"
      style={{
        padding: "100px 24px",
        backgroundColor: "var(--paper-deep)",
        textAlign: "center",
      }}
    >
      <div className="container" style={{ maxWidth: "720px" }}>
        <span className="eyebrow" style={{ marginBottom: "12px" }}>
          Acara Pernikahan
        </span>
        <h2
          className="display"
          style={{
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            marginBottom: "48px",
          }}
        >
          Waktu &amp; Tempat
        </h2>

        {/* Event Card */}
        <div
          style={{
            backgroundColor: "var(--paper)",
            borderRadius: "16px",
            padding: "40px 32px",
            boxShadow: "0 10px 30px rgba(46, 31, 22, 0.08)",
            border: "1px solid var(--line)",
            textAlign: "left",
          }}
        >
          {/* Akad Section */}
          <div
            style={{
              marginBottom: "32px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "24px",
                borderBottom: "1px solid var(--line)",
                paddingBottom: "16px",
              }}
            >
              <h3
                className="display"
                style={{ fontSize: "1.5rem", color: "var(--brown-deep)" }}
              >
                Akad
              </h3>
            </div>

            <div style={{ display: "grid", gap: "12px" }}>
              <div
                style={{ display: "grid", gridTemplateColumns: "100px 1fr" }}
              >
                <b style={{ color: "var(--ink-soft)", fontSize: "0.85rem" }}>
                  Tanggal
                </b>
                <span
                  style={{
                    fontWeight: 600,
                    color: "var(--ink)",
                    fontSize: "0.9rem",
                  }}
                >
                  Minggu, 8 November 2026
                </span>
              </div>
              <div
                style={{ display: "grid", gridTemplateColumns: "100px 1fr" }}
              >
                <b style={{ color: "var(--ink-soft)", fontSize: "0.85rem" }}>
                  Waktu
                </b>
                <span
                  style={{
                    fontWeight: 600,
                    color: "var(--ink)",
                    fontSize: "0.9rem",
                  }}
                >
                  08.00 – 09.00 WIB
                </span>
              </div>
              <div
                style={{ display: "grid", gridTemplateColumns: "100px 1fr" }}
              >
                <b style={{ color: "var(--ink-soft)", fontSize: "0.85rem" }}>
                  Lokasi
                </b>
                <span
                  style={{
                    color: "var(--ink)",
                    lineHeight: 1.4,
                    fontSize: "0.9rem",
                  }}
                >
                  <strong>Masjid Baitul Masykur</strong> <br />
                  SMA Nasima International School, Jl. Yos Sudarso No.17, Kota
                  Semarang
                </span>
              </div>
            </div>
          </div>

          {/* Resepsi Section */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "24px",
                borderBottom: "1px solid var(--line)",
                paddingBottom: "16px",
              }}
            >
              <h3
                className="display"
                style={{ fontSize: "1.5rem", color: "var(--brown-deep)" }}
              >
                Resepsi
              </h3>
              <span
                style={{
                  backgroundColor: "var(--paper-deep)",
                  color: "var(--brown)",
                  padding: "4px 12px",
                  borderRadius: "20px",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                }}
              >
                Utama
              </span>
            </div>

            <div style={{ display: "grid", gap: "12px" }}>
              <div
                style={{ display: "grid", gridTemplateColumns: "100px 1fr" }}
              >
                <b style={{ color: "var(--ink-soft)", fontSize: "0.85rem" }}>
                  Tanggal
                </b>
                <span
                  style={{
                    fontWeight: 600,
                    color: "var(--ink)",
                    fontSize: "0.9rem",
                  }}
                >
                  Minggu, 8 November 2026
                </span>
              </div>
              <div
                style={{ display: "grid", gridTemplateColumns: "100px 1fr" }}
              >
                <b style={{ color: "var(--ink-soft)", fontSize: "0.85rem" }}>
                  Waktu
                </b>
                <span
                  style={{
                    fontWeight: 600,
                    color: "var(--ink)",
                    fontSize: "0.9rem",
                  }}
                >
                  11.00 – 13.00 WIB
                </span>
              </div>
              <div
                style={{ display: "grid", gridTemplateColumns: "100px 1fr" }}
              >
                <b style={{ color: "var(--ink-soft)", fontSize: "0.85rem" }}>
                  Lokasi
                </b>
                <span
                  style={{
                    color: "var(--ink)",
                    lineHeight: 1.4,
                    fontSize: "0.9rem",
                  }}
                >
                  <strong>Hall Kaimana</strong> <br />
                  SMA Nasima International School, Jl. Yos Sudarso No.17, Kota
                  Semarang
                </span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div
            style={{
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
              marginTop: "32px",
              paddingTop: "24px",
              borderTop: "1px solid var(--line)",
            }}
          >
            <a
              href="https://maps.app.goo.gl/w8duscfSyaqKkbWv5?g_st=ac"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm"
              style={{ gap: "8px", flex: "1 1 140px" }}
            >
              <MapPin className="w-4 h-4" />
              Buka Peta
            </a>

            <button
              type="button"
              onClick={() => {
                const title = encodeURIComponent("Pernikahan Syauqi & Siwi");
                const details = encodeURIComponent(
                  "Akad: 08.00 - 09.00 WIB | Resepsi: 11.00 - 13.00 WIB",
                );
                const location = encodeURIComponent(
                  "SMA Nasima International School, Jl. Yos Sudarso No.17, Tawangsari, Semarang",
                );
                const gcalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=20261108T080000/20261108T130000&details=${details}&location=${location}`;
                window.open(gcalUrl, "_blank", "noopener,noreferrer");
              }}
              className="btn btn-sm btn-outline"
              style={{ gap: "8px", flex: "1 1 140px" }}
            >
              <CalendarPlus className="w-4 h-4" />+ Kalender
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
