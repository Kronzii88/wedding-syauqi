import React from 'react';
import { MapPin, CalendarPlus } from 'lucide-react';

const EventDetails = () => {
  const handleAddToCalendar = () => {
    const title = encodeURIComponent('Resepsi Pernikahan Syauqi & Siwi');
    const details = encodeURIComponent('Resepsi Pernikahan Muhammad Syauqi Mubarak & Rakasiwi Ayu Wulandari');
    const location = encodeURIComponent('SMA Nasima International School, Jl. Yos Sudarso No.17, Tawangsari, Semarang');
    const startDate = '20261108T110000';
    const endDate = '20261108T130000';

    const gcalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startDate}/${endDate}&details=${details}&location=${location}`;
    window.open(gcalUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="acara"
      style={{
        padding: '100px 24px',
        backgroundColor: 'var(--paper-deep)',
        textAlign: 'center',
      }}
    >
      <div className="container" style={{ maxWidth: '720px' }}>
        <span className="eyebrow" style={{ marginBottom: '12px' }}>
          Acara Pernikahan
        </span>
        <h2
          className="display"
          style={{
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
            marginBottom: '48px',
          }}
        >
          Waktu &amp; Tempat
        </h2>

        {/* Resepsi Card */}
        <div
          style={{
            backgroundColor: 'var(--paper)',
            borderRadius: '16px',
            padding: '40px 32px',
            boxShadow: '0 10px 30px rgba(46, 31, 22, 0.08)',
            border: '1px solid var(--line)',
            textAlign: 'left',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '24px',
              borderBottom: '1px solid var(--line)',
              paddingBottom: '16px',
            }}
          >
            <h3 className="display" style={{ fontSize: '1.8rem', color: 'var(--brown-deep)' }}>
              Resepsi
            </h3>
            <span
              style={{
                backgroundColor: 'var(--paper-deep)',
                color: 'var(--brown)',
                padding: '4px 12px',
                borderRadius: '20px',
                fontSize: '0.8rem',
                fontWeight: 600,
              }}
            >
              Utama
            </span>
          </div>

          <div style={{ display: 'grid', gap: '16px', marginBottom: '32px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '100px 1fr' }}>
              <b style={{ color: 'var(--ink-soft)', fontSize: '0.9rem' }}>Tanggal</b>
              <span style={{ fontWeight: 600, color: 'var(--ink)' }}>Minggu, 8 November 2026</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '100px 1fr' }}>
              <b style={{ color: 'var(--ink-soft)', fontSize: '0.9rem' }}>Waktu</b>
              <span style={{ fontWeight: 600, color: 'var(--ink)' }}>11.00 – 13.00 WIB</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '100px 1fr' }}>
              <b style={{ color: 'var(--ink-soft)', fontSize: '0.9rem' }}>Lokasi</b>
              <span style={{ color: 'var(--ink)', lineHeight: 1.5 }}>
                SMA Nasima International School, Jl. Yos Sudarso No.17, RT.1/RW.1, Tawangsari, Kec. Semarang Barat, Kota Semarang, Jawa Tengah 50144
              </span>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              gap: '12px',
              flexWrap: 'wrap',
            }}
          >
            <a
              href="https://maps.app.goo.gl/w8duscfSyaqKkbWv5?g_st=ac"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm"
              style={{ gap: '8px', flex: '1 1 140px' }}
            >
              <MapPin className="w-4 h-4" />
              Buka Peta
            </a>

            <button
              type="button"
              onClick={handleAddToCalendar}
              className="btn btn-sm btn-outline"
              style={{ gap: '8px', flex: '1 1 140px' }}
            >
              <CalendarPlus className="w-4 h-4" />
              + Kalender
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
