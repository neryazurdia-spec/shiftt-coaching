'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionLabel } from '@/components/ui';

interface Service {
  price: string;
  priceNote: string;
  title: string;
  description: string;
  highlight?: boolean;
  fullWidth?: boolean;
}

const services: Service[] = [
  {
    price: 'Q75', priceNote: '/ sesión',
    title: 'Preparación para entrevista',
    description: 'Modalidad 1: simulación en vivo (1:1)',
  },
  {
    price: 'Q50', priceNote: '/ sesión',
    title: 'Preparación para entrevista',
    description: 'Modalidad 2: preguntas en formato de texto',
  },
  {
    price: 'Q100', priceNote: '· Q150 para 2',
    title: 'Clase: filtros de LinkedIn',
    description: 'Cómo encontrar a tu próximo jefe directo',
  },
  {
    price: 'Q50', priceNote: '',
    title: 'Presupuesto personal',
    description: '¿Cuánto debo pedir o aceptar de salario?',
  },
  {
    price: 'Q50', priceNote: '',
    title: 'Header de LinkedIn personalizado',
    description: 'Diseñado según tus objetivos de carrera',
  },
  {
    price: 'Q125', priceNote: '',
    title: 'Asesoría Claude IA & Capabilities',
    description: 'Cómo aprender a usar Claude AI, conocer habilidades productivas y su uso aplicado en el ámbito profesional.',
  },
];

/**
 * Complementarios — catálogo de servicios a la carta de SHIFTT Coaching.
 * Grid de cards con precio. El ítem fullWidth ocupa las 2 columnas en desktop.
 * Animación stagger al entrar en viewport.
 */
export function Complementarios() {
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
          {services.map((service, index) => (
            <motion.div
              key={`${service.title}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              className={[
                'bg-white border-b-2 border-b-transparent hover:border-b-accent transition-colors duration-200',
                service.fullWidth ? 'md:col-span-2' : '',
              ].filter(Boolean).join(' ')}
              style={{ padding: '18px 20px' }}
            >
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Complementarios;
