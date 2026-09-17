import React from 'react';

const WaveDivider = ({ variant = 'light-top' }) => {
  const isLightTop = variant === 'light-top';

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
        lineHeight: 0,
        backgroundColor: isLightTop ? 'var(--paper)' : 'var(--paper-deep)',
      }}
    >
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        style={{
          width: '100%',
          height: '80px',
          display: 'block',
        }}
      >
        {/* Main wave */}
        <path
          d="M0,60 C150,120 350,0 600,60 C850,120 1050,0 1200,60 L1200,0 L0,0 Z"
          fill={isLightTop ? 'var(--paper-deep)' : 'var(--paper)'}
        />
        {/* Secondary wave for depth */}
        <path
          d="M0,50 C200,10 400,90 600,50 C800,10 1000,90 1200,50 L1200,0 L0,0 Z"
          fill={isLightTop ? 'var(--paper-deep)' : 'var(--paper)'}
          opacity="0.5"
        />
      </svg>
    </div>
  );
};

export default WaveDivider;
