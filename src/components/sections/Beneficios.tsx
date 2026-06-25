import React from 'react';
import { DotTexture, SectionLabel, SlashItem } from '@/components/ui';

interface Benefit {
  label: string;
  text: string;
}

interface SeasonalCard {
  price: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    label: '2x1 en complementarios',
    text: 'Al adquirir el Plan SHIFTT más un complementario, el segundo no tiene costo. Se cobra el de precio mayor.',
  },
  {
    label: 'Paquetes personalizados',
    text: 'Si tu situación requiere un enfoque diferente, consulta disponibilidad para armar un paquete a tu medida.',
  },
  {
    label: 'Programa de referidos',
    text: 'Cuando tu referido realice su primer pago, recibes una sesión de 45 minutos sin costo.',
  },
];

const seasonalCards: SeasonalCard[] = [
  {
    price: 'Q50',
    description: 'Sesión de seguimiento (30 min): avance en tu búsqueda o preparación para entrevistas',
  },
  {
    price: 'Q50',
    description: 'Revisión trimestral de CV y LinkedIn: actualización según tus nuevos logros',
  },
];

/**
 * Beneficios — lista de beneficios incluidos en los servicios de SHIFTT Coaching
 * y sub-sección de beneficios de temporada para clientes activos sobre fondo oscuro.
 */
export function Beneficios() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionLabel>Además del servicio</SectionLabel>
        <h2
          className="font-display font-bold text-[#0A0A0A] mt-3"
          style={{ fontSize: '48px', letterSpacing: '-1.5px', marginBottom: '32px' }}
        >
          Beneficios
        </h2>

        {/* Benefits list */}
        <div>
          {benefits.map((benefit, index) => (
            <div
              key={benefit.label}
              style={{
                borderTop: '1px solid #E5E7EB',
                borderBottom: index === benefits.length - 1 ? '1px solid #E5E7EB' : undefined,
                padding: '20px 0',
              }}
            >
              <SlashItem title={benefit.label} description={benefit.text} />
            </div>
          ))}
        </div>

        {/* Seasonal benefits */}
        <div style={{ marginTop: '48px' }}>
          <DotTexture className="px-8 py-7">
            <p
              className="font-body font-semibold uppercase"
              style={{ fontSize: '10px', color: '#1B4ED8', letterSpacing: '3px', marginBottom: '4px' }}
            >
              PARA CLIENTES ACTIVOS
            </p>
            <h3
              className="font-display font-bold text-white"
              style={{ fontSize: '18px', marginBottom: '16px' }}
            >
              Beneficios de temporada
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[10px]">
              {seasonalCards.map((card) => (
                <div
                  key={card.description}
                  style={{ backgroundColor: '#141414', padding: '14px 16px' }}
                >
                  <p className="font-display font-bold text-white" style={{ fontSize: '18px' }}>
                    {card.price}
                  </p>
                  <p
                    className="font-body font-normal"
                    style={{ fontSize: '12px', color: '#9CA3AF', lineHeight: 1.5, marginTop: '3px' }}
                  >
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </DotTexture>
        </div>
      </div>
    </section>
  );
}

export default Beneficios;
