'use client';

/**
 * Preview index: agency-style visual exploration deliverable for SHIFTT Coaching.
 * Two directional proposals, color system documentation, and brand resources.
 * Isolated route — does not affect production.
 */

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface ColorToken {
  name: string;
  hex: string;
  role: string;
}

const COLORS: ColorToken[] = [
  { name: 'Negro',       hex: '#0A0A0A', role: 'Fondo principal, texto sobre claro' },
  { name: 'Blanco',      hex: '#FFFFFF', role: 'Texto principal, fondos limpios' },
  { name: 'Superficie',  hex: '#F8F8F8', role: 'Secciones de fondo claro' },
  { name: 'Texto medio', hex: '#6B7280', role: 'Cuerpo y subtítulos' },
  { name: 'Borde',       hex: '#E5E7EB', role: 'Divisores y contornos' },
  { name: 'Azul acento', hex: '#1B4ED8', role: 'CTAs, firma "/" de marca' },
];

/** Dot grid repeated across a surface */
function DotGrid({ cols = 16, rows = 8 }: { cols?: number; rows?: number }) {
  return (
    <>
      {Array.from({ length: rows }, (_, r) =>
        Array.from({ length: cols }, (_, c) => (
          <circle
            key={`${r}-${c}`}
            cx={`${((c + 0.5) / cols) * 100}%`}
            cy={`${((r + 0.5) / rows) * 100}%`}
            r={1.2}
            fill="#252525"
          />
        ))
      )}
    </>
  );
}

/** Small thumbnail preview for Proposal A — Minimal Journey */
function ThumbA() {
  return (
    <svg viewBox="0 0 320 180" width="100%" aria-label="Vista previa Propuesta A">
      <rect width="320" height="180" fill="#0A0A0A" />
      <DotGrid cols={16} rows={9} />
      {/* Gray slouched figure */}
      <g transform="translate(105, 155)">
        <g transform="rotate(14, 0, -30)">
          <circle cx="0" cy="-120" r="16" fill="#6B7280" />
          <rect x="-18" y="-102" width="36" height="54" rx="7" fill="#6B7280" />
          <rect x="-34" y="-100" width="14" height="50" rx="6" fill="#6B7280" transform="rotate(14, -27, -75)" />
          <rect x="20" y="-100" width="14" height="50" rx="6" fill="#6B7280" transform="rotate(-10, 27, -75)" />
        </g>
        <rect x="-18" y="-46" width="15" height="46" rx="5" fill="#6B7280" />
        <rect x="3"   y="-46" width="15" height="46" rx="5" fill="#6B7280" />
      </g>
      {/* Arrow */}
      <text x="147" y="100" fill="#1B4ED8" fontSize="22" fontFamily="monospace" fontWeight="700">→</text>
      {/* Blue upright figure */}
      <g transform="translate(225, 155)">
        <circle cx="0" cy="-120" r="16" fill="#1B4ED8" />
        <rect x="-18" y="-102" width="36" height="54" rx="7" fill="#1B4ED8" />
        <rect x="-34" y="-100" width="14" height="50" rx="6" fill="#1B4ED8" />
        <rect x="20"  y="-100" width="14" height="50" rx="6" fill="#1B4ED8" />
        <rect x="-18" y="-46"  width="15" height="46" rx="5" fill="#1B4ED8" />
        <rect x="3"   y="-46"  width="15" height="46" rx="5" fill="#1B4ED8" />
      </g>
      <text x="12" y="170" fill="#6B7280" fontSize="9" fontFamily="monospace" letterSpacing="2">MINIMAL JOURNEY</text>
    </svg>
  );
}

/** Small thumbnail preview for Proposal B — Abstract Transformation */
function ThumbB() {
  const assembled = [
    { x: 190, y: 38,  w: 80, h: 8,  fill: '#1B4ED8', op: 0.9 },
    { x: 190, y: 54,  w: 65, h: 6,  fill: '#6B7280', op: 0.6 },
    { x: 190, y: 66,  w: 70, h: 6,  fill: '#6B7280', op: 0.5 },
    { x: 190, y: 78,  w: 60, h: 6,  fill: '#6B7280', op: 0.4 },
    { x: 190, y: 92,  w: 68, h: 6,  fill: '#6B7280', op: 0.35 },
    { x: 190, y: 104, w: 55, h: 6,  fill: '#6B7280', op: 0.3 },
  ];
  const scattered = [
    { x: 55,  y: 50,  w: 70, h: 8  },
    { x: 110, y: 120, w: 50, h: 7  },
    { x: 40,  y: 140, w: 80, h: 7  },
    { x: 80,  y: 80,  w: 55, h: 7  },
    { x: 30,  y: 95,  w: 60, h: 7  },
  ];
  return (
    <svg viewBox="0 0 320 180" width="100%" aria-label="Vista previa Propuesta B">
      <rect width="320" height="180" fill="#0A0A0A" />
      <DotGrid cols={16} rows={9} />
      {/* Scattered fragments */}
      {scattered.map((f, i) => (
        <rect key={i} x={f.x} y={f.y} width={f.w} height={f.h} rx="3" fill="#6B7280" opacity={0.3 + i * 0.06} />
      ))}
      {/* Assembled CV */}
      <rect x="186" y="28" width="104" height="100" rx="5" fill="none" stroke="#1B4ED8" strokeWidth="1.5" opacity="0.5" />
      {assembled.map((r, i) => (
        <rect key={i} x={r.x} y={r.y} width={r.w} height={r.h} rx="2" fill={r.fill} opacity={r.op} />
      ))}
      <text x="12" y="170" fill="#6B7280" fontSize="9" fontFamily="monospace" letterSpacing="2">ABSTRACT TRANSFORMATION</text>
    </svg>
  );
}

/** Diagonal "/" repeat pattern — brand motif */
function PatternSwatch() {
  return (
    <svg viewBox="0 0 120 80" width="100%" aria-label="Patrón de marca">
      <defs>
        <pattern id="previewSlash" x="0" y="0" width="22" height="22" patternUnits="userSpaceOnUse">
          <text x="2" y="17" fill="#1B4ED8" fontSize="18" fontFamily="DM Sans, sans-serif" fontWeight="700" opacity="0.18">/</text>
        </pattern>
      </defs>
      <rect width="120" height="80" fill="#0A0A0A" />
      <rect width="120" height="80" fill="url(#previewSlash)" />
    </svg>
  );
}

/** LinkedIn banner — Minimal Journey direction (1584×396 ratio) */
function BannerA() {
  return (
    <svg viewBox="0 0 1584 396" width="100%" aria-label="Banner LinkedIn Propuesta A">
      <rect width="1584" height="396" fill="#0A0A0A" />
      {Array.from({ length: 10 }, (_, r) =>
        Array.from({ length: 42 }, (_, c) => (
          <circle key={`${r}-${c}`} cx={c * 38 + 8} cy={r * 40 + 8} r={1.4} fill="#1C1C1C" />
        ))
      )}
      {/* Blue upright silhouette */}
      <g transform="translate(1300, 370)">
        <circle cx="0" cy="-220" r="34" fill="#1B4ED8" />
        <rect x="-34" y="-183" width="68" height="110" rx="14" fill="#1B4ED8" />
        <rect x="-68" y="-180" width="30" height="98"  rx="12" fill="#1B4ED8" />
        <rect x="38"  y="-180" width="30" height="98"  rx="12" fill="#1B4ED8" />
        <rect x="-34" y="-70"  width="28" height="70"  rx="12" fill="#1B4ED8" />
        <rect x="6"   y="-70"  width="28" height="70"  rx="12" fill="#1B4ED8" />
      </g>
      {/* Logo */}
      <text x="72" y="180" fill="#FFFFFF" fontSize="80" fontFamily="DM Sans, sans-serif" fontWeight="700" letterSpacing="-3">SH</text>
      <text x="242" y="180" fill="#1B4ED8" fontSize="80" fontFamily="DM Sans, sans-serif" fontWeight="700">/</text>
      <text x="270" y="180" fill="#FFFFFF" fontSize="80" fontFamily="DM Sans, sans-serif" fontWeight="700" letterSpacing="-3">FTT</text>
      <text x="72" y="230" fill="#6B7280" fontSize="26" fontFamily="Inter, sans-serif" letterSpacing="5">COACHING DE CARRERA  ·  GUATEMALA</text>
      <line x1="72" y1="260" x2="620" y2="260" stroke="#1B4ED8" strokeWidth="2" />
      <text x="72" y="300" fill="#4B5563" fontSize="22" fontFamily="Inter, sans-serif" letterSpacing="2">De invisible a entrevistable.</text>
    </svg>
  );
}

/** LinkedIn banner — Abstract Transformation direction (1584×396 ratio) */
function BannerB() {
  return (
    <svg viewBox="0 0 1584 396" width="100%" aria-label="Banner LinkedIn Propuesta B">
      <rect width="1584" height="396" fill="#0A0A0A" />
      {Array.from({ length: 10 }, (_, r) =>
        Array.from({ length: 42 }, (_, c) => (
          <circle key={`${r}-${c}`} cx={c * 38 + 8} cy={r * 40 + 8} r={1.4} fill="#1C1C1C" />
        ))
      )}
      {/* Abstract geometric shapes */}
      <rect x="1140" y="40"  width="200" height="200" rx="14" fill="none" stroke="#1B4ED8" strokeWidth="2" opacity="0.35" />
      <rect x="1200" y="100" width="200" height="200" rx="14" fill="none" stroke="#1B4ED8" strokeWidth="2" opacity="0.2" />
      <rect x="1260" y="160" width="200" height="200" rx="14" fill="none" stroke="#1B4ED8" strokeWidth="2" opacity="0.1" />
      {/* CV lines in box */}
      {[0, 1, 2, 3, 4].map((i) => (
        <rect key={i} x={1160} y={70 + i * 30} width={100 - i * 12} height={8} rx="3" fill="#1B4ED8" opacity={0.55 - i * 0.08} />
      ))}
      {/* Logo */}
      <text x="72" y="180" fill="#FFFFFF" fontSize="80" fontFamily="DM Sans, sans-serif" fontWeight="700" letterSpacing="-3">SH</text>
      <text x="242" y="180" fill="#1B4ED8" fontSize="80" fontFamily="DM Sans, sans-serif" fontWeight="700">/</text>
      <text x="270" y="180" fill="#FFFFFF" fontSize="80" fontFamily="DM Sans, sans-serif" fontWeight="700" letterSpacing="-3">FTT</text>
      <text x="72" y="230" fill="#6B7280" fontSize="26" fontFamily="Inter, sans-serif" letterSpacing="5">COACHING DE CARRERA  ·  GUATEMALA</text>
      <line x1="72" y1="260" x2="620" y2="260" stroke="#1B4ED8" strokeWidth="2" />
      <text x="72" y="300" fill="#4B5563" fontSize="22" fontFamily="Inter, sans-serif" letterSpacing="2">De invisible a entrevistable.</text>
    </svg>
  );
}

/** Proposal card linking to a preview sub-route */
function ProposalCard({
  href,
  label,
  code,
  description,
  thumb,
}: {
  href: string;
  label: string;
  code: string;
  description: string;
  thumb: React.ReactNode;
}) {
  return (
    <Link href={href} style={{ textDecoration: 'none', display: 'block' }}>
      <motion.div
        whileHover={{ y: -6, borderColor: '#1B4ED8' }}
        transition={{ duration: 0.22 }}
        style={{
          background: '#111111',
          border: '1px solid #222222',
          borderRadius: 12,
          overflow: 'hidden',
          cursor: 'pointer',
        }}
      >
        <div style={{ borderBottom: '1px solid #1A1A1A' }}>{thumb}</div>
        <div style={{ padding: '24px 28px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 20, color: '#FFFFFF' }}>
              {label}
            </span>
            <span style={{ color: '#1B4ED8', fontSize: 18, lineHeight: 1 }}>→</span>
          </div>
          <p style={{ color: '#1B4ED8', fontSize: 11, letterSpacing: '0.18em', marginBottom: 10, fontFamily: 'var(--font-body)' }}>
            {code}
          </p>
          <p style={{ color: '#6B7280', fontSize: 14, lineHeight: 1.65, fontFamily: 'var(--font-body)' }}>
            {description}
          </p>
        </div>
      </motion.div>
    </Link>
  );
}

/** Preview index page — agency-style direction comparison */
export default function PreviewIndex() {
  return (
    <div
      style={{
        background: '#0A0A0A',
        minHeight: '100vh',
        color: '#FFFFFF',
        fontFamily: 'var(--font-body)',
      }}
    >
      {/* Header */}
      <header
        style={{
          borderBottom: '1px solid #161616',
          padding: '18px 40px',
          display: 'flex',
          alignItems: 'center',
          gap: 20,
          position: 'sticky',
          top: 0,
          background: 'rgba(10,10,10,0.92)',
          backdropFilter: 'blur(10px)',
          zIndex: 50,
        }}
      >
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, letterSpacing: '-0.5px' }}>
          SH<span style={{ color: '#1B4ED8' }}>/</span>FTT
        </span>
        <span style={{ color: '#3A3A3A', fontSize: 13 }}>|</span>
        <span style={{ color: '#6B7280', fontSize: 12, letterSpacing: '0.06em' }}>
          Exploración visual · Dirección de arte
        </span>
      </header>

      {/* Hero */}
      <section style={{ padding: '88px 40px 72px', maxWidth: 1200, margin: '0 auto' }}>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ color: '#1B4ED8', fontSize: 11, letterSpacing: '0.28em', marginBottom: 18 }}
        >
          ENTREGABLE INTERNO — NO AFECTA PRODUCCIÓN
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(44px, 7vw, 80px)',
            fontWeight: 700,
            letterSpacing: '-2.5px',
            lineHeight: 1.04,
            marginBottom: 28,
          }}
        >
          Exploración<br />visual
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.16 }}
          style={{ color: '#6B7280', fontSize: 16, lineHeight: 1.75, maxWidth: 520 }}
        >
          Dos propuestas de dirección visual para hacer tangible el viaje del candidato:
          de invisible a entrevistable. Ambas respetan el design system y la identidad de
          marca existentes.
        </motion.p>
      </section>

      {/* Proposals */}
      <section style={{ padding: '0 40px 96px', maxWidth: 1200, margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 24,
          }}
        >
          <ProposalCard
            href="/preview/a"
            label="Propuesta A"
            code="MINIMAL JOURNEY"
            description="Siluetas geométricas sin rostro. La transformación se lee en la postura: encorvado → erguido. Lenguaje pictograma tipo Linear/Raycast."
            thumb={<ThumbA />}
          />
          <ProposalCard
            href="/preview/b"
            label="Propuesta B"
            code="ABSTRACT TRANSFORMATION"
            description="Sin personas. Documentos y datos que se ensamblan. Más técnico, alineado con el dot matrix existente. Lenguaje de datos."
            thumb={<ThumbB />}
          />
        </div>
      </section>

      {/* Color system */}
      <section
        style={{
          borderTop: '1px solid #161616',
          padding: '80px 40px',
          maxWidth: 1200,
          margin: '0 auto',
        }}
      >
        <p style={{ color: '#6B7280', fontSize: 11, letterSpacing: '0.28em', marginBottom: 18 }}>
          DESIGN SYSTEM
        </p>
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(28px, 4vw, 40px)',
            fontWeight: 700,
            letterSpacing: '-1px',
            marginBottom: 48,
          }}
        >
          Sistema de color
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(148px, 1fr))',
            gap: 20,
          }}
        >
          {COLORS.map((c) => (
            <div key={c.hex}>
              <div
                style={{
                  height: 60,
                  background: c.hex,
                  border: c.hex === '#FFFFFF' || c.hex === '#F8F8F8' ? '1px solid #2A2A2A' : 'none',
                  borderRadius: 8,
                  marginBottom: 12,
                }}
              />
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 13, color: '#FFFFFF', marginBottom: 3 }}>
                {c.name}
              </p>
              <p style={{ color: '#1B4ED8', fontFamily: 'monospace', fontSize: 11, marginBottom: 5 }}>
                {c.hex}
              </p>
              <p style={{ color: '#6B7280', fontSize: 11, lineHeight: 1.5 }}>{c.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Brand resources */}
      <section
        style={{
          borderTop: '1px solid #161616',
          padding: '80px 40px',
          maxWidth: 1200,
          margin: '0 auto',
        }}
      >
        <p style={{ color: '#6B7280', fontSize: 11, letterSpacing: '0.28em', marginBottom: 18 }}>
          RECURSOS DE MARCA
        </p>
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(28px, 4vw, 40px)',
            fontWeight: 700,
            letterSpacing: '-1px',
            marginBottom: 48,
          }}
        >
          Logo y patrón
        </h2>

        {/* Logo variants + pattern */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 20,
            marginBottom: 56,
          }}
        >
          <div>
            <p style={{ color: '#6B7280', fontSize: 11, letterSpacing: '0.18em', marginBottom: 12 }}>
              SOBRE NEGRO
            </p>
            <div
              style={{
                background: '#0A0A0A',
                border: '1px solid #222',
                borderRadius: 10,
                padding: '36px 28px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 30, color: '#FFFFFF' }}>
                SH<span style={{ color: '#1B4ED8' }}>/</span>FTT
              </span>
            </div>
          </div>
          <div>
            <p style={{ color: '#6B7280', fontSize: 11, letterSpacing: '0.18em', marginBottom: 12 }}>
              SOBRE BLANCO
            </p>
            <div
              style={{
                background: '#FFFFFF',
                border: '1px solid #E5E7EB',
                borderRadius: 10,
                padding: '36px 28px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 30, color: '#0A0A0A' }}>
                SH<span style={{ color: '#1B4ED8' }}>/</span>FTT
              </span>
            </div>
          </div>
          <div>
            <p style={{ color: '#6B7280', fontSize: 11, letterSpacing: '0.18em', marginBottom: 12 }}>
              PATRÓN DE MARCA
            </p>
            <div style={{ borderRadius: 10, overflow: 'hidden', border: '1px solid #222' }}>
              <PatternSwatch />
            </div>
          </div>
        </div>

        {/* LinkedIn banners */}
        <p style={{ color: '#6B7280', fontSize: 11, letterSpacing: '0.18em', marginBottom: 20 }}>
          BANNER LINKEDIN — PROPORCIÓN 1584×396
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div>
            <p style={{ color: '#4B5563', fontSize: 12, marginBottom: 10 }}>
              Dirección A · Minimal Journey
            </p>
            <div style={{ borderRadius: 8, overflow: 'hidden', border: '1px solid #222' }}>
              <BannerA />
            </div>
          </div>
          <div>
            <p style={{ color: '#4B5563', fontSize: 12, marginBottom: 10 }}>
              Dirección B · Abstract Transformation
            </p>
            <div style={{ borderRadius: 8, overflow: 'hidden', border: '1px solid #222' }}>
              <BannerB />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          borderTop: '1px solid #161616',
          padding: '24px 40px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 8,
        }}
      >
        <span style={{ color: '#3A3A3A', fontSize: 12 }}>
          Entregable de exploración. No afecta producción.
        </span>
        <span style={{ color: '#2A2A2A', fontSize: 12 }}>SHIFTT Coaching</span>
      </footer>
    </div>
  );
}
