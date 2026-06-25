import React from 'react';

export type GlowPosition = 'top-right' | 'top-left' | 'center';

export interface DotTextureProps {
  children: React.ReactNode;
  className?: string;
  glowPosition?: GlowPosition;
}

/** Coordenadas del gradiente azul principal según la posición del glow. */
const GLOW_COORDS: Record<GlowPosition, string> = {
  'top-right': '78% 18%',
  'top-left':  '22% 18%',
  'center':    '50% 50%',
};

function buildBackground(position: string): string {
  return [
    `radial-gradient(ellipse at ${position}, rgba(27,78,237,0.22) 0%, transparent 52%)`,
    'radial-gradient(ellipse at 12% 80%, rgba(200,210,255,0.06) 0%, transparent 44%)',
    'radial-gradient(circle at center, rgba(255,255,255,0.058) 0.65px, transparent 0.65px)',
    '#0A0A0A',
  ].join(', ');
}

/**
 * DotTexture — contenedor de fondo oscuro con textura de puntos y glow azul.
 * `glowPosition` controla dónde aparece el acento luminoso azul.
 */
export function DotTexture({
  children,
  className = '',
  glowPosition = 'top-right',
}: DotTextureProps) {
  const coords = GLOW_COORDS[glowPosition];

  return (
    <div
      className={['relative', className].filter(Boolean).join(' ')}
      style={{
        background: buildBackground(coords),
        backgroundSize: '100% 100%, 100% 100%, 7px 7px',
      }}
    >
      {children}
    </div>
  );
}

export default DotTexture;
