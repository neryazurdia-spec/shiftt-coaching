'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { DotTexture, SectionLabel, SlashItem } from '@/components/ui';

interface Service {
  title: string;
  description?: string;
}

const services: Service[] = [
  {
    title: 'Revisión y reestructuración de CV a formato ATS',
    description: 'Applicant Tracking System · redirección de keywords',
  },
  {
    title: 'Prospección, análisis y diagnóstico de marca personal',
  },
  {
    title: 'Diagnóstico y reajuste de LinkedIn',
    description: 'Mediante Social Selling Index (SSI)',
  },
  {
    title: 'Orientación de carrera: ¿A qué puestos aplicar? ¿Cómo dar el salto de industria? ¿Qué te falta para llegar donde quieres?',
  },
  {
    title: 'Informe personal con plan de acción de 3 meses y estrategias para aumentar tus probabilidades de contratación',
  },
];

const questions = [
  '¿Qué puntuación objetiva tiene tu LinkedIn?',
  '¿Estás aplicando a los puestos correctos?',
  '¿Estás aprovechando tu red de contactos?',
  '¿Qué información estás colocando en tu CV?',
];

const tags = ['2 sesiones 1:1', '70 min máximo c/u', 'Virtual'] as const;

const bonusItems = [
  'Elaboración de presupuesto personal',
  'Header personalizado de LinkedIn',
] as const;

/**
 * PlanShiftt — sección del paquete principal de coaching.
 * Muestra precio, servicios incluidos, preguntas del proceso y banner de oferta de lanzamiento.
 * Usa DotTexture como fondo con glow azul. Anima al entrar en viewport.
 */
export function PlanShiftt() {
  return (
    <section id="plan">
      <DotTexture glowPosition="top-left" className="py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-[1200px] mx-auto px-6"
        >
          {/* Header */}
          <SectionLabel light>Paquete principal</SectionLabel>
          <h2
            className="font-display font-bold text-white mt-2"
            style={{ fontSize: '52px', letterSpacing: '-2px', marginBottom: '20px' }}
          >
            Plan SHIFTT
          </h2>

          {/* Tags */}
          <div className="flex flex-wrap gap-[10px] mb-8">
            {tags.map((tag) => (
              <span
                key={tag}
                className="font-body font-medium uppercase"
                style={{
                  border: '1px solid #2A2A2A',
                  padding: '4px 14px',
                  color: '#6B7280',
                  fontSize: '11px',
                  letterSpacing: '1px',
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Price block */}
          <div className="flex items-end gap-[6px]">
            <span
              className="font-display font-light"
              style={{ fontSize: '18px', color: '#6B7280', marginBottom: '14px' }}
            >
              Q
            </span>
            <span
              className="font-display font-bold text-white"
              style={{ fontSize: '88px', letterSpacing: '-4px', lineHeight: 1 }}
            >
              150
            </span>
            <span
              className="font-body font-normal"
              style={{
                fontSize: '11px',
                color: '#4B5563',
                marginBottom: '18px',
                marginLeft: '4px',
                lineHeight: 1.6,
              }}
            >
              paquete completo
            </span>
          </div>

          {/* Divider */}
          <div aria-hidden="true" style={{ height: '1px', background: '#1A1A1A', margin: '32px 0' }} />

          {/* Services list */}
          <div className="flex flex-col">
            {services.map((service, index) => (
              <div
                key={service.title}
                style={{
                  borderBottom: index < services.length - 1 ? '1px solid #1A1A1A' : undefined,
                  paddingBottom: '16px',
                  paddingTop: index > 0 ? '16px' : '0',
                }}
              >
                <SlashItem title={service.title} description={service.description} titleColor="#FFFFFF" />
              </div>
            ))}
          </div>

          {/* Questions block */}
          <div
            style={{
              background: 'rgba(255,255,255,0.04)',
              borderLeft: '3px solid #374151',
              padding: '20px 24px',
              marginTop: '32px',
            }}
          >
            <p
              className="font-body font-semibold uppercase"
              style={{ fontSize: '10px', letterSpacing: '3px', color: '#4B5563', marginBottom: '12px' }}
            >
              DURANTE ESTAS SESIONES RESPONDEREMOS
            </p>
            {questions.map((q) => (
              <p
                key={q}
                className="font-body font-normal"
                style={{ fontSize: '13px', color: '#6B7280', lineHeight: 1.8 }}
              >
                — {q}
              </p>
            ))}
          </div>

          {/* Launch banner */}
          <div
            className="relative"
            style={{ marginTop: '32px', border: '1.5px solid #1B4ED8', padding: '20px 24px' }}
          >
            <span
              className="absolute font-body font-bold uppercase"
              style={{
                top: '-10px',
                left: '16px',
                background: '#1B4ED8',
                color: '#FFFFFF',
                fontSize: '9px',
                letterSpacing: '2px',
                padding: '3px 10px',
              }}
            >
              Oferta de lanzamiento
            </span>

            <p
              className="font-display font-semibold text-white"
              style={{ fontSize: '14px', marginBottom: '10px' }}
            >
              Al adquirir el Plan SHIFTT recibes sin costo adicional:
            </p>

            <div className="flex flex-wrap gap-6">
              {bonusItems.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: '#1B4ED8',
                      flexShrink: 0,
                    }}
                  />
                  <span
                    className="font-body font-normal"
                    style={{ fontSize: '12px', color: '#D1D5DB' }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <p
              className="font-body font-normal"
              style={{ fontSize: '10px', color: '#4B5563', letterSpacing: '1px', marginTop: '10px' }}
            >
              PRIMEROS 12 CUPOS · SUJETA A DISPONIBILIDAD
            </p>
          </div>
        </motion.div>
      </DotTexture>
    </section>
  );
}

export default PlanShiftt;
