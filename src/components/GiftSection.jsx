import React, { useState } from 'react';
import { Gift, Copy, Check, ChevronDown, ChevronUp } from 'lucide-react';

const GiftSection = ({ showGift, onToggle }) => {
  const [copiedBank, setCopiedBank] = useState(null);

  const bankAccounts = [
    {
      bank: 'BCA',
      accountNumber: '1234567890',
      accountName: 'Muhammad Syauqi Mubarak',
    },
    {
      bank: 'Mandiri',
      accountNumber: '0987654321',
      accountName: 'Rakasiwi Ayu Wulandari',
    },
  ];

  const handleCopy = (accountNumber, bankName) => {
    navigator.clipboard.writeText(accountNumber);
    setCopiedBank(bankName);
    setTimeout(() => setCopiedBank(null), 2500);
  };

  return (
    <section
      id="kado"
      style={{
        padding: '80px 24px',
        backgroundColor: 'var(--paper)',
        textAlign: 'center',
      }}
    >
      <div className="container" style={{ maxWidth: '640px' }}>
        <span className="eyebrow" style={{ marginBottom: '12px' }}>
          Tanda Kasih
        </span>
        <h2
          className="display"
          style={{
            fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
            marginBottom: '20px',
          }}
        >
          Hadiah Digital
        </h2>

        <p
          style={{
            fontSize: '0.95rem',
            color: 'var(--ink-soft)',
            marginBottom: '32px',
            lineHeight: 1.6,
          }}
        >
          Doa restu Anda merupakan hadiah terindah bagi kami. Namun jika Anda ingin memberikan tanda kasih secara digital, Anda dapat menekan tombol di bawah ini.
        </p>

        {/* State-driven Toggle Button */}
        <button
          type="button"
          onClick={onToggle}
          className="btn"
          style={{
            minHeight: '48px',
            padding: '0 32px',
            gap: '10px',
            margin: '0 auto',
          }}
        >
          <Gift className="w-5 h-5" />
          {showGift ? 'Tutup Section Kado' : 'Berikan Kado'}
          {showGift ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>

        {/* Collapsible Content Area controlled by React State */}
        {showGift && (
          <div
            style={{
              marginTop: '40px',
              display: 'grid',
              gap: '24px',
              animation: 'fadeIn 0.4s var(--ease)',
            }}
          >
            {bankAccounts.map((acc, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: 'var(--paper-deep)',
                  padding: '28px 24px',
                  borderRadius: '12px',
                  border: '1px solid var(--line)',
                  textAlign: 'center',
                }}
              >
                <div
                  className="display"
                  style={{
                    fontSize: '1.4rem',
                    fontWeight: 700,
                    color: 'var(--brown-deep)',
                    marginBottom: '8px',
                  }}
                >
                  Bank {acc.bank}
                </div>
                <div
                  style={{
                    fontSize: '1.2rem',
                    fontWeight: 600,
                    color: 'var(--ink)',
                    letterSpacing: '0.05em',
                    marginBottom: '4px',
                  }}
                >
                  {acc.accountNumber}
                </div>
                <div
                  style={{
                    fontSize: '0.85rem',
                    color: 'var(--ink-soft)',
                    marginBottom: '16px',
                  }}
                >
                  a.n {acc.accountName}
                </div>

                <button
                  type="button"
                  onClick={() => handleCopy(acc.accountNumber, acc.bank)}
                  className="btn btn-sm btn-outline"
                  style={{ gap: '8px', margin: '0 auto' }}
                >
                  {copiedBank === acc.bank ? (
                    <>
                      <Check className="w-4 h-4" style={{ color: 'green' }} />
                      Tersalin!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      Salin Rekening
                    </>
                  )}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default GiftSection;
