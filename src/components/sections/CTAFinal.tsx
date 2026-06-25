'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { DotTexture, SectionLabel, Button } from '@/components/ui';

const paymentMethods = ['Transferencia BAC', 'Transferencia BI', 'Link de pago al agendar'] as const;

/**
 * CTAFinal — dos zonas: CTA de agendamiento sobre DotTexture
 * y bloque de confirmación de pago sobre fondo #111.
 */
export function CTAFinal() {
  return (
    <div>
      {/* ZONA 1 — Acción */}
      <DotTexture glowPosition="center" className="py-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-[520px] mx-auto px-6 text-center"
        >
          <SectionLabel light>¿Listo para el cambio?</SectionLabel>

          <h2
            className="font-display font-bold text-white"
            style={{ fontSize: 'clamp(28px, 4vw, 36px)', letterSpacing: '-1px', margin: '16px 0' }}
          >
            Agenda tu discovery call gratuita
          </h2>

          <p
            className="font-body font-normal"
            style={{ fontSize: '15px', color: '#6B7280', lineHeight: 1.7, marginBottom: '32px' }}
          >
            30 minutos. Sin compromiso.
          </p>

          <Button
            variant="primary"
            href="https://calendar.app.google/4Be7DMWFuFzKJqDv7"
            target="_blank"
            className="px-10 py-4 text-base"
          >
            Agendar ahora
          </Button>

          <p
            className="font-body font-normal"
            style={{ fontSize: '12px', color: '#4B5563', marginTop: '12px' }}
          >
            Google Calendar · Confirmas en segundos
          </p>
        </motion.div>
      </DotTexture>

      {/* ZONA 2 — Confirmación de pago */}
      <div style={{ backgroundColor: '#111111', padding: '40px 24px' }}>
        <div className="max-w-[520px] mx-auto text-center">
          <p
            className="font-body font-semibold uppercase"
            style={{ fontSize: '10px', color: '#4B5563', letterSpacing: '3px', marginBottom: '16px' }}
          >
            ¿YA AGENDASTE? CONFIRMA TU LUGAR
          </p>

          <div
            aria-hidden="true"
            style={{ width: '32px', height: '1px', background: '#2A2A2A', margin: '0 auto 20px' }}
          />

          <p
            className="font-body font-medium"
            style={{ fontSize: '14px', color: '#9CA3AF' }}
          >
            Para garantizar tu espacio aplica tu pago previamente.
          </p>

          <div className="flex items-center justify-center flex-wrap" style={{ gap: '20px', marginTop: '14px' }}>
            {paymentMethods.map((method) => (
              <span
                key={method}
                className="font-body font-normal"
                style={{ fontSize: '12px', color: '#6B7280' }}
              >
                {method}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CTAFinal;
