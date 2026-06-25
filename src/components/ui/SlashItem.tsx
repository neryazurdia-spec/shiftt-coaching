import React from 'react';

export interface SlashItemProps {
  title: string;
  description?: string;
  accentColor?: string;
  titleColor?: string;
}

/**
 * SlashItem — ítem con "/" decorativo al inicio, seguido de un título y descripción opcional.
 * Usado para listas de servicios, beneficios o características de SHIFTT Coaching.
 */
export function SlashItem({
  title,
  description,
  accentColor = '#1B4ED8',
  titleColor = '#0A0A0A',
}: SlashItemProps) {
  if (!title) {
    throw new Error('[SlashItem] La prop "title" es requerida y no puede estar vacía.');
  }

  return (
    <div className="flex gap-4" style={{ alignItems: 'flex-start' }}>
      <span
        className="font-display font-bold text-lg leading-none select-none"
        style={{ color: accentColor, flexShrink: 0 }}
        aria-hidden="true"
      >
        /
      </span>
      <div className="flex flex-col gap-1">
        <span className="font-body font-medium text-base" style={{ color: titleColor }}>
          {title}
        </span>
        {description && (
          <span className="font-body font-normal text-[14px]" style={{ color: '#9CA3AF' }}>
            {description}
          </span>
        )}
      </div>
    </div>
  );
}

export default SlashItem;
