import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

const RSVPForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    attendance: 'hadir',
    guests: '1',
    message: '',
  });

  const [wishes, setWishes] = useState([
    {
      name: 'Ahmad & Keluarga',
      status: 'Hadir',
      message: 'Selamat untuk Syauqi & Siwi! Semoga menjadi keluarga yang sakinah, mawaddah, warahmah. Aamiin.',
    },
    {
      name: 'Dinda Rahma',
      status: 'Hadir',
      message: 'Happy wedding ya guys! Lancar sampai hari H!',
    },
  ]);

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.message.trim()) return;

    const newWish = {
      name: formData.name,
      status: formData.attendance === 'hadir' ? 'Hadir' : 'Tidak Hadir',
      message: formData.message,
    };

    setWishes([newWish, ...wishes]);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', attendance: 'hadir', guests: '1', message: '' });
    }, 4000);
  };

  return (
    <section
      id="rsvp"
      style={{
        padding: '100px 24px',
        backgroundColor: 'var(--paper-deep)',
      }}
    >
      <div className="container" style={{ maxWidth: '680px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span className="eyebrow" style={{ marginBottom: '12px' }}>
            Konfirmasi Kehadiran
          </span>
          <h2
            className="display"
            style={{
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
              marginBottom: '12px',
            }}
          >
            RSVP &amp; Ucapan
          </h2>
          <p style={{ color: 'var(--ink-soft)', fontSize: '0.95rem' }}>
            Mohon konfirmasikan kehadiran Anda untuk membantu kami mempersiapkan acara dengan baik.
          </p>
        </div>

        {/* RSVP Form Card */}
        <div
          style={{
            backgroundColor: 'var(--paper)',
            borderRadius: '16px',
            padding: '36px 28px',
            boxShadow: '0 10px 30px rgba(46, 31, 22, 0.08)',
            border: '1px solid var(--line)',
            marginBottom: '60px',
          }}
        >
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '32px 16px' }}>
              <CheckCircle2 className="w-12 h-12" style={{ color: 'var(--brown)', margin: '0 auto 16px auto' }} />
              <h3 className="display" style={{ fontSize: '1.5rem', marginBottom: '8px', color: 'var(--brown-deep)' }}>
                Terima Kasih!
              </h3>
              <p style={{ color: 'var(--ink-soft)', fontSize: '0.95rem' }}>
                Konfirmasi dan ucapan Anda telah berhasil dikirimkan.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '20px' }}>
              <div>
                <label
                  htmlFor="rsvp-name"
                  style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '8px', color: 'var(--ink)' }}
                >
                  Nama Lengkap *
                </label>
                <input
                  id="rsvp-name"
                  type="text"
                  required
                  placeholder="Masukkan nama Anda"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: '100%',
                    minHeight: '48px',
                    padding: '0 16px',
                    borderRadius: '6px',
                    border: '1px solid var(--line)',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.95rem',
                    backgroundColor: 'var(--paper-deep)',
                    color: 'var(--ink)',
                    outline: 'none',
                  }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <label
                    htmlFor="rsvp-attendance"
                    style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '8px', color: 'var(--ink)' }}
                  >
                    Kehadiran
                  </label>
                  <select
                    id="rsvp-attendance"
                    value={formData.attendance}
                    onChange={(e) => setFormData({ ...formData, attendance: e.target.value })}
                    style={{
                      width: '100%',
                      minHeight: '48px',
                      padding: '0 16px',
                      borderRadius: '6px',
                      border: '1px solid var(--line)',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.95rem',
                      backgroundColor: 'var(--paper-deep)',
                      color: 'var(--ink)',
                      outline: 'none',
                    }}
                  >
                    <option value="hadir">Hadir</option>
                    <option value="tidak">Tidak Hadir</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="rsvp-guests"
                    style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '8px', color: 'var(--ink)' }}
                  >
                    Jumlah Tamu
                  </label>
                  <select
                    id="rsvp-guests"
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    style={{
                      width: '100%',
                      minHeight: '48px',
                      padding: '0 16px',
                      borderRadius: '6px',
                      border: '1px solid var(--line)',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.95rem',
                      backgroundColor: 'var(--paper-deep)',
                      color: 'var(--ink)',
                      outline: 'none',
                    }}
                  >
                    <option value="1">1 Orang</option>
                    <option value="2">2 Orang</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="rsvp-message"
                  style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '8px', color: 'var(--ink)' }}
                >
                  Ucapan &amp; Doa *
                </label>
                <textarea
                  id="rsvp-message"
                  required
                  rows={4}
                  placeholder="Tuliskan ucapan dan doa untuk kedua mempelai"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '6px',
                    border: '1px solid var(--line)',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.95rem',
                    backgroundColor: 'var(--paper-deep)',
                    color: 'var(--ink)',
                    outline: 'none',
                    resize: 'vertical',
                  }}
                />
              </div>

              <button type="submit" className="btn" style={{ minHeight: '48px', gap: '8px', marginTop: '8px' }}>
                <Send className="w-4 h-4" />
                Kirim Konfirmasi &amp; Ucapan
              </button>
            </form>
          )}
        </div>

        {/* Wishes List */}
        <div>
          <h3 className="display" style={{ fontSize: '1.4rem', marginBottom: '20px', textAlign: 'center' }}>
            Ucapan dari Sahabat &amp; Keluarga ({wishes.length})
          </h3>

          <div style={{ display: 'grid', gap: '16px' }}>
            {wishes.map((item, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: 'var(--paper)',
                  padding: '20px',
                  borderRadius: '10px',
                  border: '1px solid var(--line)',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <b style={{ color: 'var(--brown-deep)', fontSize: '0.95rem' }}>{item.name}</b>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      padding: '2px 8px',
                      borderRadius: '12px',
                      backgroundColor: item.status === 'Hadir' ? 'var(--caramel)' : 'var(--brown)',
                      color: item.status === 'Hadir' ? 'var(--brown-deep)' : 'var(--paper)',
                      fontWeight: 600,
                    }}
                  >
                    {item.status}
                  </span>
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--ink-soft)', lineHeight: 1.5 }}>
                  {item.message}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RSVPForm;
