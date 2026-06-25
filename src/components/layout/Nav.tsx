'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui';

const NAV_LINKS = [
  { label: 'Plan SHIFTT', href: '#plan' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Contacto', href: '#contacto' },
] as const;

/**
 * Nav — barra de navegación fija de SHIFTT Coaching.
 * Añade backdrop-blur cuando el scroll supera 20px.
 * En viewports < 768px muestra hamburguesa con menú vertical desplegable.
 */
export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={['fixed top-0 left-0 right-0 z-50 h-16', scrolled ? 'backdrop-blur-md' : ''].join(' ')}
      style={{ backgroundColor: 'rgba(10,10,10,0.95)' }}
    >
      <div className="flex items-center justify-between h-full max-w-[1200px] mx-auto px-6">
        {/* Logo */}
        <div className="flex flex-col">
          <span className="font-display font-bold text-[22px] leading-none text-white">
            SH<span style={{ color: '#1B4ED8' }}>/</span>FTT
          </span>
          <span
            className="font-body uppercase"
            style={{ fontSize: '9px', letterSpacing: '5px', color: '#6B7280', marginTop: '3px' }}
          >
            COACHING
          </span>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex">
          <Button
            variant="primary"
            href="https://calendar.app.google/4Be7DMWFuFzKJqDv7"
            target="_blank"
          >
            Agendar call
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
        >
          <span className="block w-6 h-[2px] bg-white" />
          <span className="block w-6 h-[2px] bg-white" />
          <span className="block w-6 h-[2px] bg-white" />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden absolute top-16 left-0 right-0 flex flex-col gap-6 px-6 py-8"
          style={{ backgroundColor: 'rgba(10,10,10,0.98)' }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-display font-medium text-[18px] text-white"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Nav;
