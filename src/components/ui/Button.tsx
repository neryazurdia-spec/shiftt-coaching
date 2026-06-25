'use client';

import React from 'react';
import { twMerge } from 'tailwind-merge';

export interface ButtonProps {
  variant: 'primary' | 'secondary';
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  rel?: string;
}

const BASE =
  'inline-flex items-center justify-center px-6 py-3 font-body font-medium text-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2';

const VARIANTS: Record<ButtonProps['variant'], string> = {
  primary:
    'bg-accent text-white hover:bg-[#1542C0] disabled:opacity-50 disabled:cursor-not-allowed',
  secondary:
    'bg-transparent text-accent hover:bg-[#EFF6FF] disabled:opacity-50 disabled:cursor-not-allowed',
};

const SECONDARY_BORDER = { border: '1.5px solid #1B4ED8' } as const;

/**
 * Botón principal de SHIFTT Coaching.
 * Renderiza como `<a>` si recibe `href`, o como `<button>` en caso contrario.
 * La variante 'primary' usa fondo sólido azul; 'secondary' usa borde + fondo transparente.
 * Acepta `className` para sobreescribir tamaño, padding u otras utilidades via twMerge.
 */
export function Button({
  variant,
  children,
  href,
  onClick,
  disabled = false,
  className = '',
  target,
  rel,
}: ButtonProps) {
  if (!variant) {
    throw new Error('[Button] La prop "variant" es requerida. Usa "primary" o "secondary".');
  }

  const resolvedRel = target === '_blank' ? (rel ?? 'noopener noreferrer') : rel;
  const classes = twMerge(BASE, VARIANTS[variant], className);
  const secondaryStyle = variant === 'secondary' ? SECONDARY_BORDER : undefined;

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={resolvedRel}
        onClick={!disabled ? onClick : undefined}
        className={twMerge(classes, disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : '')}
        aria-disabled={disabled}
        style={secondaryStyle}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={classes}
      style={secondaryStyle}
    >
      {children}
    </button>
  );
}

export default Button;
