import React from 'react';

const CarDivider = () => {
  return (
    <section
      id="car-divider"
      aria-hidden="true"
      style={{
        position: 'relative',
        width: '100%',
        height: '110px',
        backgroundColor: 'var(--paper-deep)',
        overflow: 'hidden',
        borderTop: '1px solid var(--line)',
        borderBottom: '1px solid var(--line)',
      }}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'flex-end',
        }}
      >
        {/* Continuous Infinite Flower Ground Path */}
        <div
          className="car-ground-path"
          style={{
            position: 'absolute',
            bottom: '10px',
            left: 0,
            width: '2000px',
            height: '40px',
            display: 'flex',
          }}
        >
          <svg viewBox="0 0 1000 40" width="1000" height="40" preserveAspectRatio="none">
            {/* Flower Ground Path */}
            <path
              d="M0 35 Q 50 20 100 35 T 200 35 T 300 35 T 400 35 T 500 35 T 600 35 T 700 35 T 800 35 T 900 35 T 1000 35"
              fill="none"
              stroke="var(--caramel)"
              strokeWidth="2"
            />
            {/* Decorative Flower Dots */}
            {[50, 150, 250, 350, 450, 550, 650, 750, 850, 950].map((cx, i) => (
              <g key={i}>
                <circle cx={cx} cy={22 - (i % 3) * 4} r="5" fill="var(--brown)" />
                <circle cx={cx} cy={22 - (i % 3) * 4} r="2" fill="var(--paper)" />
              </g>
            ))}
          </svg>
          <svg viewBox="0 0 1000 40" width="1000" height="40" preserveAspectRatio="none">
            <path
              d="M0 35 Q 50 20 100 35 T 200 35 T 300 35 T 400 35 T 500 35 T 600 35 T 700 35 T 800 35 T 900 35 T 1000 35"
              fill="none"
              stroke="var(--caramel)"
              strokeWidth="2"
            />
            {[50, 150, 250, 350, 450, 550, 650, 750, 850, 950].map((cx, i) => (
              <g key={i}>
                <circle cx={cx} cy={22 - (i % 3) * 4} r="5" fill="var(--brown)" />
                <circle cx={cx} cy={22 - (i % 3) * 4} r="2" fill="var(--paper)" />
              </g>
            ))}
          </svg>
        </div>

        {/* Fixed Car with Spinning Wheels */}
        <div
          style={{
            position: 'absolute',
            left: '12%',
            bottom: '18px',
            zIndex: 2,
          }}
        >
          <svg viewBox="0 0 140 70" width="130" height="65">
            {/* Car Body */}
            <rect x="10" y="30" width="110" height="24" rx="6" fill="var(--brown)" />
            <path d="M30 30 L45 12 L85 12 L100 30 Z" fill="var(--brown)" />
            <path d="M34 28 L46 16 L64 16 L64 28 Z" fill="var(--paper)" opacity="0.9" />
            <path d="M68 28 L68 16 L82 16 L96 28 Z" fill="var(--paper)" opacity="0.9" />

            {/* Front & Rear Wheels */}
            <g className="car-wheel-rotate" style={{ transformOrigin: '38px 56px' }}>
              <circle cx="38" cy="56" r="11" fill="var(--ink)" />
              <circle cx="38" cy="56" r="4" fill="var(--caramel)" />
              <line x1="38" y1="45" x2="38" y2="67" stroke="var(--caramel)" strokeWidth="1.5" />
            </g>
            <g className="car-wheel-rotate" style={{ transformOrigin: '96px 56px' }}>
              <circle cx="96" cy="56" r="11" fill="var(--ink)" />
              <circle cx="96" cy="56" r="4" fill="var(--caramel)" />
              <line x1="96" y1="45" x2="96" y2="67" stroke="var(--caramel)" strokeWidth="1.5" />
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default CarDivider;
