import React from 'react';

const Quote = () => {
  return (
    <section
      id="quote"
      style={{
        padding: '80px 24px',
        backgroundColor: 'var(--paper-deep)',
        textAlign: 'center',
        position: 'relative',
      }}
    >
      <div className="container" style={{ maxWidth: '720px' }}>
        <div
          className="display"
          style={{
            fontSize: '4rem',
            lineHeight: 1,
            color: 'var(--caramel)',
            marginBottom: '-20px',
            opacity: 0.6,
          }}
        >
          &ldquo;
        </div>
        <p
          className="display"
          style={{
            fontSize: 'clamp(1.2rem, 3vw, 1.6rem)',
            fontStyle: 'italic',
            color: 'var(--ink)',
            lineHeight: 1.6,
            marginBottom: '20px',
          }}
        >
          Dan di antara tanda-tanda (kebesaran-Nya) ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang.
        </p>
        <span
          className="eyebrow"
          style={{
            fontSize: '0.8rem',
            color: 'var(--ink-soft)',
          }}
        >
          Q.S. Ar-Rum : 21
        </span>
      </div>
    </section>
  );
};

export default Quote;
