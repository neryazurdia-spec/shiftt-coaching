import React from 'react';

export interface SectionLabelProps {
  children: React.ReactNode;
  light?: boolean;
  className?: string;
}

/** Color para fondo oscuro (light=true): ligeramente más claro que mid para contraste inverso. */
const COLOR_LIGHT = '#4B5563';
const COLOR_DEFAULT = '#6B7280';

/**
 * SectionLabel — etiqueta de sección en mayúsculas con tracking amplio.
 * Usar `light` cuando el componente se coloca sobre fondos oscuros.
 */
export function SectionLabel({
  children,
  light = false,
  className = '',
}: SectionLabelProps) {
  return (
    <span
      className={['font-body font-semibold uppercase', className].filter(Boolean).join(' ')}
      style={{
        fontSize: '10px',
        letterSpacing: '4px',
        color: light ? COLOR_LIGHT : COLOR_DEFAULT,
      }}
    >
      {children}
    </span>
  );
}

export default SectionLabel;
