'use client';

import React, { useState, useEffect } from 'react';
import { SectionLabel } from '@/components/ui';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: '¿Qué es un CV ATS friendly?',
    answer:
      'Un ATS (Applicant Tracking System) es el software que las empresas usan para filtrar CVs automáticamente antes de que un humano los vea. Un CV ATS friendly está estructurado para pasar ese filtro: sin columnas, sin íconos, con las keywords exactas del puesto. Si tu CV no lo pasa, nadie lo lee sin importar qué tan buena sea tu experiencia.',
  },
  {
    question: '¿Ya apliqué a muchos empleos sin respuesta. ¿Por qué no me llaman?',
    answer:
      'Hay tres causas frecuentes: tu CV no pasa los filtros automáticos antes de que alguien lo vea, estás aplicando a puestos donde el perfil no conecta con lo que buscan, o tu presencia digital no respalda lo que dice tu CV. En la discovery call identificamos cuál de las tres es tu caso y construimos un plan de acción concreto.',
  },
  {
    question: '¿Cómo sé si el problema es mi CV, mi LinkedIn o los puestos a los que aplico?',
    answer:
      'Los tres son parte del mismo sistema. Si tienes vistas en LinkedIn pero pocos mensajes, el problema es tu perfil. Si aplicas directo y no recibes respuesta, el CV no está pasando el ATS. Si recibes entrevistas pero no ofertas, el problema está en la preparación. En la discovery call diagnosticamos tu punto de quiebre exacto.',
  },
  {
    question: '¿En qué se diferencia SHIFTT Coaching de otros coaches de carrera?',
    answer:
      'Metodología INCAE Business School aplicada al mercado guatemalteco. No vendemos motivación: comenzamos con un proceso de introspección estructurado para redirigir tu CV y marca personal hacia donde realmente quieres llegar. Luego entregamos un CV optimizado para ATS, un perfil de LinkedIn con Social Selling Index medido y un plan de acción de 3 meses. Todo respaldado por datos, no por intuición.',
  },
  {
    question: '¿Cómo funciona el proceso desde que agendo hasta que recibo mi plan?',
    answer:
      'Primero una discovery call gratuita de 30 minutos para diagnosticar tu situación. Si hay fit, agendamos las 2 sesiones del Plan SHIFTT. Sesión 1: análisis de CV, LinkedIn SSI y orientación de carrera. Sesión 2: entrega de tu informe personal con plan de acción de 3 meses. Todo en un máximo de 2 semanas.',
  },
];

/** FAQ accordion with typewriter animation for SHIFTT Coaching. */
export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [displayedText, setDisplayedText] = useState('');

  const toggle = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
    setDisplayedText('');
  };

  useEffect(() => {
    if (openIndex === null) {
      setDisplayedText('');
      return;
    }

    const fullText = faqs[openIndex].answer;
    let i = 0;
    setDisplayedText('');

    const interval = setInterval(() => {
      i++;
      setDisplayedText(fullText.slice(0, i));
      if (i >= fullText.length) clearInterval(interval);
    }, 18);

    return () => clearInterval(interval);
  }, [openIndex]);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionLabel>Resolvemos tus dudas</SectionLabel>
        <h2
          className="font-display font-bold text-[#0A0A0A] mt-3 mb-12 text-[32px] md:text-[48px]"
          style={{ letterSpacing: '-1.5px' }}
        >
          Preguntas frecuentes
        </h2>

        <div>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className={`border-b border-[#E5E7EB]${index === 0 ? ' border-t' : ''}`}
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="flex justify-between items-center w-full py-5 text-left cursor-pointer"
                >
                  <span
                    className="font-display font-semibold text-[#0A0A0A]"
                    style={{ fontSize: '16px' }}
                  >
                    {faq.question}
                  </span>
                  <span
                    style={{
                      color: '#1B4ED8',
                      fontSize: '16px',
                      flexShrink: 0,
                      marginLeft: '16px',
                      lineHeight: 1,
                    }}
                  >
                    {isOpen ? '×' : '+'}
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out${
                    isOpen ? ' grid-rows-[1fr] opacity-100' : ' grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p
                      className="font-body pb-5"
                      style={{ fontSize: '14px', color: '#6B7280', lineHeight: 1.7 }}
                    >
                      {isOpen ? displayedText : ''}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
