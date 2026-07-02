'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionLabel } from '@/components/ui';

interface Service {
  price: string;
  priceNote: string;
  title: string;
  description: string;
  highlight?: boolean;
  backDescription: string;
}

const services: Service[] = [
  {
    price: 'Q75', priceNote: '/ sesión',
    title: 'Preparación para entrevista',
    description: 'Modalidad 1: simulación en vivo (1:1)',
    backDescription: 'Sesión 1:1 donde simulamos la entrevista en tiempo real. Practicas bajo presión y recibes retroalimentación inmediata sobre estructura de respuestas y manejo del tiempo. Aplicamos metodología STAR para convertir tus experiencias en historias de alto impacto.',
  },
  {
    price: 'Q50', priceNote: '/ sesión',
    title: 'Preparación para entrevista',
    description: 'A tu ritmo por escrito o en nota de voz',
    backDescription: 'Recibes un banco de preguntas adaptadas al puesto específico. Las respondes a tu ritmo por escrito o en nota de voz y recibes retroalimentación detallada con versiones mejoradas de cada respuesta. Ideal si tienes tiempo limitado antes de la entrevista.',
  },
  {
    price: 'Q100', priceNote: '· Q150 para 2',
    title: 'Clase: filtros de LinkedIn',
    description: 'Cómo encontrar a tu próximo jefe directo',
    backDescription: 'Aprendes a usar la búsqueda avanzada de LinkedIn para identificar hiring managers en las empresas que te interesan. Una clase práctica que transforma LinkedIn de red pasiva en herramienta activa de prospección laboral con resultados inmediatos.',
  },
  {
    price: 'Q50', priceNote: '',
    title: 'Presupuesto personal',
    description: '¿Cuánto debo pedir o aceptar de salario?',
    backDescription: 'Calculamos tu número real: cuánto necesitas ganar para cubrir gastos y ahorrar. Con esa base construimos tu rango salarial negociable respaldado por datos de mercado. Sales con una respuesta concreta para cuáles son tus expectativas salariales.',
  },
  {
    price: 'Q50', priceNote: '',
    title: 'Header de LinkedIn personalizado',
    description: 'Diseñado según tus objetivos de carrera',
    backDescription: 'Tu banner es lo primero que ve un reclutador. Diseñamos uno que comunica tu propuesta de valor e industria objetivo en menos de 3 segundos. Formato optimizado para desktop y mobile, entregado listo para subir directamente a tu perfil de LinkedIn.',
  },
  {
    price: 'Q125', priceNote: '',
    title: 'Asesoría Claude IA & Capabilities',
    description: 'Cómo aprender a usar Claude AI, conocer habilidades productivas y su uso aplicado en el ámbito profesional.',
    backDescription: 'Sesión práctica para usar Claude como herramienta real de trabajo: prompts efectivos, automatización de tareas repetitivas y aceleración de tu búsqueda laboral. Sales aplicando IA de forma concreta, con ventaja inmediata sobre otros candidatos.',
  },
];

function ChevronRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1B4ED8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

const CARD_HEIGHT = 180;

const faceBase: React.CSSProperties = {
  position: 'absolute',
  top: 0, left: 0, right: 0, bottom: 0,
  backfaceVisibility: 'hidden',
  WebkitBackfaceVisibility: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
};

/**
 * Complementarios — catálogo de servicios a la carta de SHIFTT Coaching.
 * Grid 3×2 en desktop. Cada card voltea al hacer clic mostrando
 * una descripción extendida del servicio en la cara trasera.
 */
export function Complementarios() {
  const [flipped, setFlipped] = useState<Set<number>>(new Set());

  const toggle = (index: number) => {
    setFlipped(prev => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index); else next.add(index);
      return next;
    });
  };

  return (
    <section id="servicios" className="py-16 md:py-24" style={{ backgroundColor: '#F8F8F8' }}>
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionLabel>A la carta</SectionLabel>
        <h2
          className="font-display font-bold text-[#0A0A0A] mt-3 mb-8"
          style={{ fontSize: '40px', letterSpacing: '-1.5px' }}
        >
          Servicios complementarios
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {services.map((service, index) => {
            const isFlipped = flipped.has(index);
            return (
              <motion.div
                key={`${service.title}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
              >
                {/* Perspective wrapper */}
                <div
                  onClick={() => toggle(index)}
                  style={{ perspective: '1000px', cursor: 'pointer', height: `${CARD_HEIGHT}px` }}
                  role="button"
                  aria-pressed={isFlipped}
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && toggle(index)}
                >
                  {/* Rotating inner */}
                  <div
                    style={{
                      position: 'relative',
                      width: '100%',
                      height: '100%',
                      transformStyle: 'preserve-3d',
                      transition: 'transform 180ms ease',
                      transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                    }}
                  >
                    {/* FRONT */}
                    <div
                      className="bg-white"
                      style={{ ...faceBase, padding: '18px 20px' }}
                    >
                      <div>
                        <div className="flex items-baseline">
                          <span
                            className="font-display font-bold"
                            style={{ fontSize: '20px', color: service.highlight ? '#1B4ED8' : '#0A0A0A' }}
                          >
                            {service.price}
                          </span>
                          {service.priceNote && (
                            <span
                              className="font-body font-normal"
                              style={{ fontSize: '11px', color: '#9CA3AF', marginLeft: '4px' }}
                            >
                              {service.priceNote}
                            </span>
                          )}
                        </div>
                        <p
                          className="font-body font-semibold"
                          style={{ fontSize: '13px', color: '#0A0A0A', marginTop: '6px' }}
                        >
                          {service.title}
                        </p>
                        <p
                          className="font-body font-normal"
                          style={{ fontSize: '11px', color: '#9CA3AF', marginTop: '2px' }}
                        >
                          {service.description}
                        </p>
                      </div>
                      <div className="flex justify-end">
                        <ChevronRight />
                      </div>
                    </div>

                    {/* BACK */}
                    <div
                      style={{
                        ...faceBase,
                        transform: 'rotateY(180deg)',
                        backgroundColor: '#0A0A0A',
                        padding: '20px',
                      }}
                    >
                      <p
                        className="font-body font-normal"
                        style={{ fontSize: '13px', color: '#9CA3AF', lineHeight: 1.6 }}
                      >
                        {service.backDescription}
                      </p>
                      <div className="flex justify-end">
                        <CloseIcon />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Complementarios;
