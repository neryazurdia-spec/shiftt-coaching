import React from 'react';
import { Button, SlashItem } from '@/components/ui';

const tips = [
  'Anota 3 logros concretos de tu carrera con números',
  'Revisa tu LinkedIn SSI en linkedin.com/sales/ssi',
  'Prepara la pregunta más importante que quieres responder',
] as const;

/**
 * Página de confirmación que se muestra tras agendar una discovery call.
 * Muestra check visual, instrucciones previas a la sesión y enlace de regreso.
 */
export default function GraciasPage() {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-6"
      style={{ backgroundColor: '#0A0A0A' }}
    >
      <div className="max-w-[520px] w-full text-center">

        {/* Check icon */}
        <div
          className="flex items-center justify-center mx-auto"
          style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            backgroundColor: '#1B4ED8',
            marginBottom: '24px',
          }}
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>

        {/* Heading */}
        <h1
          className="font-display font-bold text-white"
          style={{ fontSize: '28px', letterSpacing: '-0.5px' }}
        >
          Tu discovery call está agendada.
        </h1>

        {/* Subtitle */}
        <p
          className="font-body font-normal"
          style={{ fontSize: '15px', color: '#6B7280', marginTop: '12px' }}
        >
          Revisa tu email para los detalles de la videollamada.
        </p>

        {/* Divider */}
        <div
          aria-hidden="true"
          style={{ width: '48px', height: '2px', background: '#1B4ED8', margin: '32px auto' }}
        />

        {/* Tips label */}
        <p
          className="font-body font-semibold uppercase text-left"
          style={{ fontSize: '11px', letterSpacing: '3px', color: '#4B5563', marginBottom: '16px' }}
        >
          Mientras tanto:
        </p>

        {/* Tips list */}
        <div className="flex flex-col text-left" style={{ gap: '12px' }}>
          {tips.map((tip) => (
            <SlashItem key={tip} title={tip} titleColor="#9CA3AF" />
          ))}
        </div>

        {/* Back button */}
        <div style={{ marginTop: '40px' }}>
          <Button variant="secondary" href="/">
            Volver al inicio
          </Button>
        </div>
      </div>
    </div>
  );
}
