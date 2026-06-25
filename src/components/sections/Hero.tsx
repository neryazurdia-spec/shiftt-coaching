'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { DotTexture, SectionLabel, Button } from '@/components/ui';

interface FadeUpProps {
  initial: { opacity: number; y: number };
  animate: { opacity: number; y: number };
  transition: { duration: number; delay: number; ease: 'easeOut' };
}

function fadeUp(delay: number): FadeUpProps {
  return {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: 'easeOut' },
  };
}

/**
 * Hero — sección principal de SHIFTT Coaching.
 * Muestra eyebrow, H1 en dos líneas, divider, subtítulo y CTA
 * con animaciones stagger via Framer Motion sobre fondo DotTexture.
 */
export function Hero() {
  return (
    <DotTexture glowPosition="top-right" className="min-h-screen relative overflow-hidden">
      {/* Decorative circles */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none z-0"
        style={{
          width: '380px',
          height: '380px',
          border: '1px solid #141414',
          borderRadius: '50%',
          right: '-80px',
          bottom: '100px',
        }}
      />
      <div
        aria-hidden="true"
        className="absolute pointer-events-none z-0"
        style={{
          width: '210px',
          height: '210px',
          border: '1px solid #161616',
          borderRadius: '50%',
          right: '10px',
          bottom: '200px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex items-center min-h-screen">
        <div className="w-full max-w-[1200px] mx-auto px-6 pt-20">

          {/* Eyebrow */}
          <motion.div {...fadeUp(0.1)}>
            <SectionLabel light>Coaching de carrera · Marca personal</SectionLabel>
          </motion.div>

          {/* H1 línea 1 */}
          <motion.h1
            {...fadeUp(0.2)}
            className="font-display font-bold text-white mt-6"
            style={{
              fontSize: 'clamp(48px, 8vw, 72px)',
              letterSpacing: '-3px',
              lineHeight: 0.95,
            }}
          >
            De invisible
          </motion.h1>

          {/* H1 línea 2 */}
          <motion.h1
            {...fadeUp(0.3)}
            className="font-display font-bold"
            style={{
              fontSize: 'clamp(48px, 8vw, 72px)',
              letterSpacing: '-3px',
              lineHeight: 0.95,
              color: '#374151',
            }}
          >
            a entrevistable.
          </motion.h1>

          {/* Divider */}
          <motion.div
            {...fadeUp(0.4)}
            aria-hidden="true"
            style={{
              width: '48px',
              height: '2px',
              background: '#1B4ED8',
              marginTop: '28px',
              marginBottom: '28px',
            }}
          />

          {/* Subtítulo */}
          <motion.p
            {...fadeUp(0.5)}
            className="font-body font-normal"
            style={{
              fontSize: '15px',
              color: '#6B7280',
              lineHeight: 1.7,
              maxWidth: '480px',
            }}
          >
            Coaching de carrera y posicionamiento de marca personal
            para profesionales que desean sobresalir dentro de un sector.
          </motion.p>

          {/* CTA */}
          <motion.div {...fadeUp(0.6)} className="mt-8">
            <Button
              variant="primary"
              href="https://calendar.app.google/4Be7DMWFuFzKJqDv7"
              target="_blank"
              className="px-8 py-4 text-base"
            >
              Agendar discovery call gratuita
            </Button>
          </motion.div>

          {/* Sub-CTA caption */}
          <motion.p
            {...fadeUp(0.7)}
            className="font-body font-normal"
            style={{
              fontSize: '12px',
              color: '#4B5563',
              marginTop: '12px',
            }}
          >
            30 minutos · Sin compromiso
          </motion.p>

        </div>
      </div>
    </DotTexture>
  );
}

export default Hero;
