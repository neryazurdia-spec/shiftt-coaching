'use client';

/**
 * Preview A — Minimal Journey
 * Concepto: siluetas geométricas sin rostro (pictograma profesional).
 * La transformación se lee en la postura: encorvado → erguido.
 * Aislado de producción — vive en /preview/a.
 */

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

/** Dot matrix full-cover background */
function DotMatrix() {
  return (
    <svg
      width="100%"
      height="100%"
      style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      {Array.from({ length: 14 }, (_, r) =>
        Array.from({ length: 30 }, (_, c) => (
          <circle
            key={`${r}-${c}`}
            cx={`${((c + 0.5) / 30) * 100}%`}
            cy={`${((r + 0.5) / 14) * 100}%`}
            r={1.3}
            fill="#1E1E1E"
          />
        ))
      )}
    </svg>
  );
}

/** Upright silhouette body parts in local coords (feet at y=0) */
function UprightBody({ color }: { color: string }) {
  return (
    <>
      <circle cx="0"   cy="-148" r="22"  fill={color} />
      <rect   x="-24"  y="-123"  width="48"  height="74"  rx="12" fill={color} />
      <rect   x="-46"  y="-120"  width="19"  height="68"  rx="8"  fill={color} />
      <rect   x="27"   y="-120"  width="19"  height="68"  rx="8"  fill={color} />
      <rect   x="-24"  y="-46"   width="21"  height="46"  rx="8"  fill={color} />
      <rect   x="3"    y="-46"   width="21"  height="46"  rx="8"  fill={color} />
    </>
  );
}

/** Hero section: two silhouettes side-by-side, right one animates from slouched to upright */
function HeroIllustration() {
  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: 640, margin: '0 auto' }}>
      <svg
        viewBox="0 0 640 320"
        width="100%"
        aria-label="De encorvado a erguido — transformación profesional"
        style={{ overflow: 'visible' }}
      >
        {/* Gray slouched figure — static, left side */}
        <g transform="translate(175, 295)">
          {/* Upper body tilted forward */}
          <g transform="rotate(14, 0, -46)">
            <circle cx="-8"  cy="-148" r="22"  fill="#6B7280" />
            <rect   x="-30"  y="-123"  width="46"  height="72"  rx="12" fill="#6B7280" />
            <rect   x="-50"  y="-118"  width="18"  height="66"  rx="8"  fill="#6B7280" transform="rotate(12, -41, -85)" />
            <rect   x="18"   y="-116"  width="18"  height="62"  rx="8"  fill="#6B7280" transform="rotate(-8, 27, -85)" />
          </g>
          {/* Legs stay vertical */}
          <rect x="-22" y="-46" width="20" height="46" rx="8" fill="#6B7280" />
          <rect x="2"   y="-46" width="20" height="46" rx="8" fill="#6B7280" />
        </g>

        {/* Divider arrow */}
        <text x="292" y="168" fill="#1B4ED8" fontSize="28" fontFamily="monospace" fontWeight="700" opacity="0.8">→</text>

        {/* Blue upright figure — animates from slouched to erguido */}
        <g transform="translate(465, 295)">
          <motion.g
            style={{ transformOrigin: '0px 0px' }}
            initial={{ rotate: 14, x: -14, y: 14 }}
            animate={{ rotate: 0, x: 0, y: 0 }}
            transition={{ duration: 0.95, delay: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <UprightBody color="#1B4ED8" />
          </motion.g>
        </g>
      </svg>
    </div>
  );
}

interface JourneyStageData {
  label: string;
  sublabel: string;
  color: string;
  detail: 'lost' | 'cv' | 'network' | 'door';
}

const STAGES: JourneyStageData[] = [
  { label: '01', sublabel: 'Invisible',     color: '#4B5563', detail: 'lost'    },
  { label: '02', sublabel: 'Con perfil',    color: '#6B7280', detail: 'cv'      },
  { label: '03', sublabel: 'Con red',       color: '#9CA3AF', detail: 'network' },
  { label: '04', sublabel: 'Entrevistable', color: '#1B4ED8', detail: 'door'    },
];

/** Per-stage SVG figure variant */
function StageFigure({ detail, color }: { detail: JourneyStageData['detail']; color: string }) {
  return (
    <svg viewBox="-70 -200 140 210" width="80" height="170" aria-hidden="true">
      {detail === 'lost' && (
        <g transform="rotate(12, 0, -46)">
          <circle cx="-6" cy="-148" r="18" fill={color} />
          <rect x="-20" y="-128" width="38" height="60" rx="10" fill={color} />
          <rect x="-38" y="-124" width="16" height="54" rx="7" fill={color} transform="rotate(14,-30,-96)" />
          <rect x="22"  y="-122" width="16" height="50" rx="7" fill={color} transform="rotate(-10,30,-96)" />
          <rect x="-20" y="-66"  width="17" height="66" rx="7" fill={color} />
          <rect x="3"   y="-66"  width="17" height="66" rx="7" fill={color} />
          <text x="14" y="-172" fill={color} fontSize="20" fontFamily="DM Sans, sans-serif" fontWeight="700" opacity="0.7">?</text>
        </g>
      )}
      {detail === 'cv' && (
        <>
          <circle cx="0"  cy="-148" r="18" fill={color} />
          <rect x="-20"  y="-128"  width="38"  height="60" rx="10" fill={color} />
          <rect x="-38"  y="-124"  width="16"  height="54" rx="7"  fill={color} />
          <rect x="22"   y="-124"  width="16"  height="54" rx="7"  fill={color} />
          <rect x="-20"  y="-66"   width="17"  height="66" rx="7"  fill={color} />
          <rect x="3"    y="-66"   width="17"  height="66" rx="7"  fill={color} />
          {/* Document */}
          <rect x="26"  y="-178" width="32" height="42" rx="4" fill="none" stroke={color} strokeWidth="2" opacity="0.6" />
          <rect x="30"  y="-172" width="20" height="3"  rx="1" fill={color} opacity="0.8" />
          <rect x="30"  y="-166" width="16" height="2"  rx="1" fill={color} opacity="0.55" />
          <rect x="30"  y="-161" width="18" height="2"  rx="1" fill={color} opacity="0.45" />
          <rect x="30"  y="-156" width="14" height="2"  rx="1" fill={color} opacity="0.4" />
        </>
      )}
      {detail === 'network' && (
        <>
          <circle cx="0"  cy="-148" r="18" fill={color} />
          <rect x="-20"  y="-128"  width="38"  height="60" rx="10" fill={color} />
          <rect x="-38"  y="-124"  width="16"  height="54" rx="7"  fill={color} />
          <rect x="22"   y="-124"  width="16"  height="54" rx="7"  fill={color} />
          <rect x="-20"  y="-66"   width="17"  height="66" rx="7"  fill={color} />
          <rect x="3"    y="-66"   width="17"  height="66" rx="7"  fill={color} />
          {/* Network nodes */}
          {([[-50,-178],[50,-178],[-58,-140],[58,-140],[0,-195]] as [number,number][]).map(([nx,ny], i) => (
            <g key={i}>
              <line x1="0" y1="-148" x2={nx} y2={ny} stroke={color} strokeWidth="1.2" opacity="0.3" />
              <circle cx={nx} cy={ny} r="6" fill={color} opacity="0.55" />
            </g>
          ))}
        </>
      )}
      {detail === 'door' && (
        <>
          <circle cx="-12" cy="-148" r="18" fill={color} />
          <rect x="-30"  y="-128"  width="38"  height="60" rx="10" fill={color} />
          <rect x="-48"  y="-124"  width="16"  height="54" rx="7"  fill={color} />
          <rect x="10"   y="-124"  width="16"  height="54" rx="7"  fill={color} />
          <rect x="-30"  y="-66"   width="17"  height="66" rx="7"  fill={color} />
          <rect x="-10"  y="-66"   width="17"  height="66" rx="7"  fill={color} />
          {/* Door frame */}
          <rect x="24"   y="-196"  width="46"  height="196" rx="4" fill="none" stroke={color} strokeWidth="2.5" opacity="0.5" />
          <line x1="24"  y1="-196" x2="70" y2="-196" stroke={color} strokeWidth="2.5" opacity="0.5" />
          <circle cx="28" cy="-96" r="4" fill={color} opacity="0.5" />
        </>
      )}
    </svg>
  );
}

/** Journey section: 4 stages in sequence with animated connecting line */
function JourneySection() {
  return (
    <section style={{ padding: '96px 24px', maxWidth: 1200, margin: '0 auto' }}>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        style={{ color: '#1B4ED8', fontSize: 11, letterSpacing: '0.28em', marginBottom: 16 }}
      >
        EL VIAJE
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.48, delay: 0.06 }}
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(28px, 4vw, 44px)',
          fontWeight: 700,
          letterSpacing: '-1.2px',
          marginBottom: 72,
          color: '#FFFFFF',
        }}
      >
        Cuatro momentos de transformación
      </motion.h2>

      {/* Stage grid + connecting line */}
      <div style={{ position: 'relative' }}>
        {/* Animated connecting line (draw-on) */}
        <div
          style={{
            position: 'absolute',
            top: 80,
            left: '12%',
            right: '12%',
            height: 2,
            background: '#161616',
            zIndex: 0,
          }}
        >
          <motion.div
            style={{ height: '100%', background: '#1B4ED8', transformOrigin: 'left', opacity: 0.55 }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 1.6, delay: 0.3, ease: 'easeOut' }}
          />
        </div>

        {/* Stages — stagger on scroll */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 16,
            position: 'relative',
            zIndex: 1,
          }}
        >
          {STAGES.map((stage, i) => (
            <motion.div
              key={stage.label}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.11, ease: 'easeOut' }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}
            >
              <StageFigure detail={stage.detail} color={stage.color} />

              {/* Node dot on line */}
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: '50%',
                  background: stage.color,
                  border: `2px solid #0A0A0A`,
                  marginTop: -4,
                }}
              />

              <div style={{ textAlign: 'center' }}>
                <p style={{ color: '#3A3A3A', fontSize: 10, letterSpacing: '0.2em', marginBottom: 4 }}>
                  {stage.label}
                </p>
                <p style={{ color: stage.color, fontSize: 13, fontFamily: 'var(--font-body)', fontWeight: 500 }}>
                  {stage.sublabel}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Minimal Journey — /preview/a */
export default function MinimalJourney() {
  return (
    <div style={{ background: '#0A0A0A', minHeight: '100vh', color: '#FFFFFF', fontFamily: 'var(--font-body)' }}>
      {/* Back nav */}
      <div style={{ padding: '20px 40px', borderBottom: '1px solid #161616', display: 'flex', alignItems: 'center', gap: 16 }}>
        <Link href="/preview" style={{ color: '#6B7280', fontSize: 13, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6 }}>
          ← Volver al índice
        </Link>
        <span style={{ color: '#2A2A2A' }}>|</span>
        <span style={{ color: '#1B4ED8', fontSize: 11, letterSpacing: '0.2em' }}>PROPUESTA A — MINIMAL JOURNEY</span>
      </div>

      {/* Hero */}
      <section style={{ position: 'relative', padding: '96px 24px 80px', overflow: 'hidden' }}>
        <DotMatrix />

        {/* Glow */}
        <div style={{
          position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)',
          width: 600, height: 600,
          background: 'radial-gradient(circle, rgba(27,78,216,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 64,
              alignItems: 'center',
            }}
          >
            {/* Text */}
            <div>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                style={{ color: '#1B4ED8', fontSize: 11, letterSpacing: '0.28em', marginBottom: 20 }}
              >
                MINIMAL JOURNEY
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.08 }}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(36px, 5vw, 60px)',
                  fontWeight: 700,
                  letterSpacing: '-2px',
                  lineHeight: 1.06,
                  marginBottom: 24,
                }}
              >
                De invisible<br />
                <span style={{ color: '#1B4ED8' }}>/</span> a entrevistable.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.18 }}
                style={{ color: '#6B7280', fontSize: 15, lineHeight: 1.75 }}
              >
                Siluetas pictograma sin rostro. La transformación no está
                en las palabras — está en la postura. De encorvado a erguido.
                Del candidato invisible al que consigue entrevistas.
              </motion.p>
            </div>

            {/* Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              <HeroIllustration />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Journey */}
      <JourneySection />

      {/* Design rationale */}
      <section
        style={{
          borderTop: '1px solid #161616',
          padding: '80px 40px',
          maxWidth: 1200,
          margin: '0 auto',
        }}
      >
        <p style={{ color: '#6B7280', fontSize: 11, letterSpacing: '0.28em', marginBottom: 18 }}>
          DECISIONES DE DISEÑO
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 32 }}>
          {[
            { title: 'Sin rostro', body: 'Los pictogramas sin rasgos faciales son universales. Cualquier candidato se proyecta en la figura. Lenguaje de Linear, Raycast y apps B2B de alto nivel.' },
            { title: 'Postura como narrativa', body: 'La transformación no requiere texto. La inclinación del cuerpo de 14° a 0° cuenta la historia completa en una sola animación de 0.9 segundos.' },
            { title: 'Stagger on-scroll', body: 'Las 4 etapas del viaje aparecen con 110ms de separación. La línea conectora se dibuja (draw-on) en 1.6s. El usuario ve el progreso como una secuencia.' },
            { title: 'Azul como logro', body: 'Solo la figura final (la del candidato entrevistable) está en azul #1B4ED8. Las etapas previas van del gris al neutro. El color es la recompensa.' },
          ].map((item) => (
            <div key={item.title}>
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 15, color: '#FFFFFF', marginBottom: 8 }}>
                {item.title}
              </p>
              <p style={{ color: '#6B7280', fontSize: 13, lineHeight: 1.7 }}>{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid #161616', padding: '20px 40px', display: 'flex', justifyContent: 'space-between' }}>
        <span style={{ color: '#3A3A3A', fontSize: 12 }}>Entregable de exploración. No afecta producción.</span>
        <Link href="/preview/b" style={{ color: '#6B7280', fontSize: 12, textDecoration: 'none' }}>
          Ver Propuesta B →
        </Link>
      </footer>
    </div>
  );
}
