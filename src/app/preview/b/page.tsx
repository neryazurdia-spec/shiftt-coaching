'use client';

/**
 * Preview B — Abstract Transformation
 * Concepto: sin personas. Documentos y datos que se ensamblan.
 * Lenguaje técnico alineado con el dot matrix existente.
 * Aislado de producción — vive en /preview/b.
 */

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

// ─── CV Assembly ─────────────────────────────────────────────────────────────

interface CVLine {
  width: number;
  color: string;
  opacity: number;
  targetX: number;
  targetY: number;
  initX: number;
  initY: number;
}

const CV_LINES: CVLine[] = [
  { width: 140, color: '#1B4ED8', opacity: 0.95, targetX: 0,  targetY: 0,   initX: -80,  initY: -60  },
  { width: 100, color: '#6B7280', opacity: 0.7,  targetX: 0,  targetY: 20,  initX: 60,   initY: -90  },
  { width: 120, color: '#6B7280', opacity: 0.6,  targetX: 0,  targetY: 38,  initX: -40,  initY: 80   },
  { width: 88,  color: '#6B7280', opacity: 0.5,  targetX: 0,  targetY: 56,  initX: 100,  initY: 50   },
  { width: 110, color: '#6B7280', opacity: 0.45, targetX: 0,  targetY: 76,  initX: -70,  initY: 40   },
  { width: 76,  color: '#6B7280', opacity: 0.4,  targetX: 0,  targetY: 94,  initX: 50,   initY: -40  },
  { width: 96,  color: '#6B7280', opacity: 0.35, targetX: 0,  targetY: 112, initX: -30,  initY: 110  },
  { width: 64,  color: '#6B7280', opacity: 0.3,  targetX: 0,  targetY: 130, initX: 90,   initY: -20  },
];

/** Assembling CV hero illustration */
function CVAssembly() {
  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: 560, margin: '0 auto' }}>
      <svg
        viewBox="-160 -100 400 340"
        width="100%"
        aria-label="CV fragmentado ensamblándose en estructura ordenada"
        style={{ overflow: 'visible' }}
      >
        {/* CV frame */}
        <motion.rect
          x="-10" y="-20" width="180" height="200" rx="8"
          fill="none"
          stroke="#1B4ED8"
          strokeWidth="1.5"
          opacity="0.25"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.25 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        />

        {/* CV lines animating from scattered to assembled */}
        {CV_LINES.map((line, i) => (
          <motion.rect
            key={i}
            height={8}
            width={line.width}
            rx={4}
            fill={line.color}
            opacity={line.opacity}
            initial={{ x: line.initX, y: line.initY, opacity: 0 }}
            animate={{ x: line.targetX, y: line.targetY, opacity: line.opacity }}
            transition={{
              duration: 0.65,
              delay: 0.25 + i * 0.09,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          />
        ))}

        {/* Accent dot */}
        <motion.circle
          cx="160" cy="60" r="40"
          fill="#1B4ED8"
          opacity="0.06"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        />
      </svg>
    </div>
  );
}

// ─── Keywords ─────────────────────────────────────────────────────────────────

const KEYWORDS = [
  'CV ATS', 'LinkedIn SSI', 'Metodología STAR',
  'Rango salarial', 'Hiring Manager', 'Open to Work',
  'Keywords', 'Marca personal',
];

const KEYWORD_OFFSETS = [28, -18, 40, -10, 32, -24, 20, -14];

/** Keyword chips that align from scattered y positions on scroll */
function Keywords() {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 10,
        maxWidth: 680,
        margin: '0 auto',
      }}
    >
      {KEYWORDS.map((kw, i) => (
        <motion.div
          key={kw}
          initial={{ y: KEYWORD_OFFSETS[i], opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.48, delay: i * 0.08, ease: 'easeOut' }}
          style={{
            padding: '8px 18px',
            border: '1px solid #1B4ED8',
            borderRadius: 100,
            color: '#1B4ED8',
            fontSize: 13,
            fontFamily: 'var(--font-body)',
            letterSpacing: '0.04em',
            background: 'rgba(27,78,216,0.05)',
          }}
        >
          {kw}
        </motion.div>
      ))}
    </div>
  );
}

// ─── SSI Bars ─────────────────────────────────────────────────────────────────

interface SSIMetric {
  label: string;
  value: number;
}

const SSI_METRICS: SSIMetric[] = [
  { label: 'Identidad profesional', value: 78 },
  { label: 'Personas correctas',    value: 65 },
  { label: 'Información relevante', value: 72 },
  { label: 'Relaciones',            value: 58 },
];

/** Single animated SSI progress bar */
function SSIBar({ label, value, delay = 0 }: SSIMetric & { delay?: number }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ color: '#9CA3AF', fontSize: 13, fontFamily: 'var(--font-body)' }}>{label}</span>
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: delay + 0.7 }}
          style={{ color: '#1B4ED8', fontSize: 13, fontFamily: 'monospace' }}
        >
          {value}
        </motion.span>
      </div>
      <div style={{ height: 4, background: '#1A1A1A', borderRadius: 2 }}>
        <motion.div
          style={{ height: '100%', background: '#1B4ED8', borderRadius: 2, transformOrigin: 'left' }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: value / 100 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.9, delay, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}

// ─── Node Network ─────────────────────────────────────────────────────────────

interface Node {
  x: number;
  y: number;
  active: boolean;
}

const NODES: Node[] = [
  { x: 30,  y: 30,  active: true  },
  { x: 120, y: 20,  active: true  },
  { x: 210, y: 35,  active: false },
  { x: 300, y: 25,  active: true  },
  { x: 60,  y: 100, active: false },
  { x: 150, y: 95,  active: true  },
  { x: 240, y: 105, active: true  },
  { x: 330, y: 90,  active: false },
  { x: 30,  y: 170, active: false },
  { x: 120, y: 165, active: true  },
  { x: 210, y: 175, active: false },
  { x: 300, y: 160, active: true  },
];

const NODE_EDGES: [number, number][] = [
  [0,1],[1,2],[2,3],[4,5],[5,6],[6,7],
  [8,9],[9,10],[10,11],[0,4],[1,5],[2,6],
  [3,7],[4,8],[5,9],[6,10],[7,11],[1,6],[5,10],
];

/** Node grid that illuminates in sequence on scroll */
function NodeNetwork() {
  return (
    <svg viewBox="0 0 360 200" width="100%" aria-label="Red de contactos iluminándose">
      {/* Edges */}
      {NODE_EDGES.map(([a, b], i) => (
        <motion.line
          key={i}
          x1={NODES[a].x} y1={NODES[a].y}
          x2={NODES[b].x} y2={NODES[b].y}
          stroke="#1B4ED8"
          strokeWidth="1"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: NODES[a].active && NODES[b].active ? 0.22 : 0.07 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.4, delay: 0.4 + i * 0.04 }}
        />
      ))}
      {/* Nodes */}
      {NODES.map((node, i) => (
        <motion.circle
          key={i}
          cx={node.x}
          cy={node.y}
          r={node.active ? 7 : 4}
          fill={node.active ? '#1B4ED8' : '#333333'}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: node.active ? 1 : 0.4 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.35, delay: i * 0.07, ease: 'easeOut' }}
        />
      ))}
    </svg>
  );
}

// ─── Gauge Meters ─────────────────────────────────────────────────────────────

interface GaugeProps {
  label: string;
  percent: number;
  delay?: number;
}

const R = 54;
const HALF_CIRC = Math.PI * R; // ≈ 169.6

/** Abstract semicircle gauge meter with animated fill */
function GaugeMeter({ label, percent, delay = 0 }: GaugeProps) {
  const targetOffset = HALF_CIRC * (1 - percent / 100);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
      <div style={{ position: 'relative' }}>
        <svg
          width={R * 2 + 20}
          height={R + 20}
          viewBox={`${-R - 10} ${-R - 10} ${(R + 10) * 2} ${R + 10}`}
          aria-label={`${label}: ${percent}%`}
        >
          {/* Track */}
          <path
            d={`M ${-R},0 A ${R},${R} 0 0,1 ${R},0`}
            fill="none"
            stroke="#1A1A1A"
            strokeWidth={9}
            strokeLinecap="round"
          />
          {/* Animated fill */}
          <motion.path
            d={`M ${-R},0 A ${R},${R} 0 0,1 ${R},0`}
            fill="none"
            stroke="#1B4ED8"
            strokeWidth={9}
            strokeLinecap="round"
            strokeDasharray={HALF_CIRC}
            initial={{ strokeDashoffset: HALF_CIRC }}
            whileInView={{ strokeDashoffset: targetOffset }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 1.2, delay, ease: 'easeOut' }}
          />
          {/* Value */}
          <text
            x="0" y="-12"
            textAnchor="middle"
            fill="#FFFFFF"
            fontSize="22"
            fontFamily="DM Sans, sans-serif"
            fontWeight="700"
          >
            {percent}%
          </text>
        </svg>
      </div>
      <p style={{ color: '#6B7280', fontSize: 12, textAlign: 'center', letterSpacing: '0.06em', fontFamily: 'var(--font-body)' }}>
        {label}
      </p>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

/** Abstract Transformation — /preview/b */
export default function AbstractTransformation() {
  return (
    <div style={{ background: '#0A0A0A', minHeight: '100vh', color: '#FFFFFF', fontFamily: 'var(--font-body)' }}>
      {/* Back nav */}
      <div style={{ padding: '20px 40px', borderBottom: '1px solid #161616', display: 'flex', alignItems: 'center', gap: 16 }}>
        <Link href="/preview" style={{ color: '#6B7280', fontSize: 13, textDecoration: 'none' }}>
          ← Volver al índice
        </Link>
        <span style={{ color: '#2A2A2A' }}>|</span>
        <span style={{ color: '#1B4ED8', fontSize: 11, letterSpacing: '0.2em' }}>PROPUESTA B — ABSTRACT TRANSFORMATION</span>
      </div>

      {/* Hero */}
      <section style={{ padding: '96px 24px 80px', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              style={{ color: '#1B4ED8', fontSize: 11, letterSpacing: '0.28em', marginBottom: 20 }}
            >
              ABSTRACT TRANSFORMATION
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(34px, 5vw, 58px)',
                fontWeight: 700,
                letterSpacing: '-2px',
                lineHeight: 1.07,
                marginBottom: 24,
              }}
            >
              Un perfil<br />
              <span style={{ color: '#1B4ED8' }}>/</span> que se lee solo.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
              style={{ color: '#6B7280', fontSize: 15, lineHeight: 1.75 }}
            >
              Sin personas. Las formas de tus documentos y datos son el
              lenguaje. Un CV fragmentado que se ensambla en estructura
              ordenada — eso es lo que SHIFTT hace por ti.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.22 }}
          >
            <CVAssembly />
          </motion.div>
        </div>
      </section>

      {/* Anatomía de un perfil ganador */}
      <section style={{ background: '#080808', padding: '96px 40px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            style={{ color: '#1B4ED8', fontSize: 11, letterSpacing: '0.28em', marginBottom: 16 }}
          >
            ANATOMÍA
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.48, delay: 0.07 }}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(26px, 4vw, 42px)',
              fontWeight: 700,
              letterSpacing: '-1.2px',
              marginBottom: 64,
            }}
          >
            Anatomía de un perfil ganador
          </motion.h2>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }}>
            {/* Keywords */}
            <div>
              <p style={{ color: '#6B7280', fontSize: 12, letterSpacing: '0.2em', marginBottom: 32 }}>
                KEYWORDS QUE SE ALINEAN
              </p>
              <Keywords />
              <p style={{ color: '#3A3A3A', fontSize: 12, marginTop: 28, textAlign: 'center' }}>
                Las palabras clave del puesto al que aplicas, presentes en tu CV y LinkedIn.
              </p>
            </div>

            {/* SSI bars */}
            <div>
              <p style={{ color: '#6B7280', fontSize: 12, letterSpacing: '0.2em', marginBottom: 32 }}>
                SOCIAL SELLING INDEX — ANTES
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                {SSI_METRICS.map((m, i) => (
                  <SSIBar key={m.label} {...m} delay={i * 0.12} />
                ))}
              </div>
            </div>
          </div>

          {/* Node network */}
          <div style={{ marginTop: 80 }}>
            <p style={{ color: '#6B7280', fontSize: 12, letterSpacing: '0.2em', marginBottom: 32 }}>
              RED QUE SE ILUMINA
            </p>
            <NodeNetwork />
            <p style={{ color: '#3A3A3A', fontSize: 12, marginTop: 16, textAlign: 'center' }}>
              Cada nodo azul es un hiring manager al que llegas. La red crece con el SSI.
            </p>
          </div>
        </div>
      </section>

      {/* Gauge meters */}
      <section style={{ padding: '96px 40px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            style={{ color: '#1B4ED8', fontSize: 11, letterSpacing: '0.28em', marginBottom: 16 }}
          >
            MÉTRICAS QUE IMPORTAN
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.48, delay: 0.07 }}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(26px, 4vw, 42px)',
              fontWeight: 700,
              letterSpacing: '-1.2px',
              marginBottom: 64,
            }}
          >
            Tres medidores de empleabilidad
          </motion.h2>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 64,
              flexWrap: 'wrap',
            }}
          >
            <GaugeMeter label="Visibilidad ATS"    percent={82} delay={0}    />
            <GaugeMeter label="SSI LinkedIn"        percent={71} delay={0.18} />
            <GaugeMeter label="Alcance de red"      percent={64} delay={0.36} />
          </div>

          <p style={{ color: '#3A3A3A', fontSize: 13, textAlign: 'center', marginTop: 48 }}>
            Los tres medidores suben con el Plan SHIFTT. Partimos del diagnóstico, no de suposiciones.
          </p>
        </div>
      </section>

      {/* Design rationale */}
      <section style={{ borderTop: '1px solid #161616', padding: '80px 40px', maxWidth: 1200, margin: '0 auto' }}>
        <p style={{ color: '#6B7280', fontSize: 11, letterSpacing: '0.28em', marginBottom: 18 }}>
          DECISIONES DE DISEÑO
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 32 }}>
          {[
            { title: 'Ensamble como metáfora', body: 'Los rectángulos del CV empiezan dispersos y se organizan en 0.65s con stagger de 90ms por línea. El usuario ve literalmente el orden que SHIFTT crea.' },
            { title: 'Keywords que se alinean', body: 'Los chips empiezan en posiciones y alturas aleatorias. Al hacer scroll se alinean en una fila horizontal. La alineación es el mensaje.' },
            { title: 'Gauges semicirculares', body: 'Tres medidores abstractos (ATS, SSI, Red) se llenan al entrar en viewport. Stroke-dashoffset animado de 1.2 segundos con ease-out.' },
            { title: 'Red de nodos', body: 'Grid de 12 nodos con 19 aristas. Los nodos activos (azul) aparecen con stagger de 70ms. Las conexiones entre nodos activos brillan más.' },
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
        <Link href="/preview/a" style={{ color: '#6B7280', fontSize: 12, textDecoration: 'none' }}>
          ← Ver Propuesta A
        </Link>
      </footer>
    </div>
  );
}
