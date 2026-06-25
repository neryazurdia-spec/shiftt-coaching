'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionLabel } from '@/components/ui';

interface PainPoint {
  question: string;
  explanation: string;
}

const painPoints: PainPoint[] = [
  {
    question: '¿Por qué no me llaman?',
    explanation: 'Tu CV puede estar siendo descartado por filtros automáticos antes de que alguien lo lea.',
  },
  {
    question: '¿Estoy aplicando a los puestos correctos?',
    explanation: 'Aplicar sin estrategia es gastar energía en lugares equivocados.',
  },
  {
    question: '¿Mi LinkedIn trabaja para mí?',
    explanation: 'El 87% de los reclutadores revisa LinkedIn antes de contactarte. ¿Qué encuentran cuando buscan tu nombre?',
  },
  {
    question: '¿Cuánto debo pedir de salario?',
    explanation: 'Sin un número basado en datos, dejás dinero sobre la mesa desde el primer día.',
  },
];

/**
 * PainPoints — sección de preguntas que reflejan los dolores del candidato en búsqueda laboral.
 * Grid 2×2 en desktop, 1 columna en mobile. Cada card anima al entrar al viewport con stagger.
 */
export function PainPoints() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionLabel>¿Te suena familiar?</SectionLabel>
        <h2
          className="font-display font-bold text-[#0A0A0A] mt-3 mb-12"
          style={{
            fontSize: 'clamp(32px, 5vw, 48px)',
            letterSpacing: '-2px',
            maxWidth: '640px',
          }}
        >
          Las preguntas que no deberían quedarse sin respuesta.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {painPoints.map((point, index) => (
            <motion.div
              key={point.question}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              style={{
                backgroundColor: '#FFFFFF',
                borderLeft: '3px solid #1B4ED8',
                padding: '24px',
                borderRadius: 0,
                boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
              }}
            >
              <p
                className="font-display font-semibold"
                style={{ fontSize: '18px', color: '#0A0A0A', marginBottom: '8px' }}
              >
                {point.question}
              </p>
              <p
                className="font-body font-normal"
                style={{ fontSize: '14px', color: '#6B7280', lineHeight: 1.6 }}
              >
                {point.explanation}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PainPoints;
