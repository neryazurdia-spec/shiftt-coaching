import React from 'react';

const navLinks = [
  { label: 'Plan SHIFTT', href: '#plan' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Contacto', href: '#contacto' },
] as const;

const contactItems = [
  { label: 'nery.azurdia@mait.incae.edu', href: 'mailto:nery.azurdia@mait.incae.edu' },
  { label: 'rodri.azurdia1018@gmail.com', href: 'mailto:rodri.azurdia1018@gmail.com' },
  { label: 'linkedin.com/in/rodrigo-azurdia-ortiz-nrao', href: 'https://linkedin.com/in/rodrigo-azurdia-ortiz-nrao' },
] as const;

/**
 * Footer — pie de página de SHIFTT Coaching.
 * Grid de 3 columnas: marca, navegación y contacto. Barra inferior con copyright.
 */
export function Footer() {
  return (
    <footer style={{ backgroundColor: '#0A0A0A', padding: '64px 24px 32px' }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Columna 1 — Marca */}
          <div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-white" style={{ fontSize: '20px', lineHeight: 1 }}>
                SH<span style={{ color: '#1B4ED8' }}>/</span>FTT
              </span>
              <span
                className="font-body uppercase"
                style={{ fontSize: '9px', letterSpacing: '5px', color: '#6B7280', marginTop: '3px' }}
              >
                COACHING
              </span>
            </div>
            <p
              className="font-body font-normal"
              style={{ fontSize: '11px', color: '#374151', lineHeight: 2, marginTop: '12px' }}
            >
              Metodología INCAE Business School
            </p>
          </div>

          {/* Columna 2 — Navegación */}
          <div>
            <p
              className="font-body font-semibold uppercase"
              style={{ fontSize: '11px', letterSpacing: '2px', color: '#6B7280' }}
            >
              Navegación
            </p>
            <div className="flex flex-col" style={{ marginTop: '16px', gap: '10px' }}>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-body font-normal transition-colors duration-150 hover:text-white"
                  style={{ fontSize: '13px', color: '#9CA3AF' }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Columna 3 — Contacto */}
          <div id="contacto">
            <p
              className="font-body font-semibold uppercase"
              style={{ fontSize: '11px', letterSpacing: '2px', color: '#6B7280' }}
            >
              Contacto
            </p>
            <div className="flex flex-col" style={{ marginTop: '16px', gap: '10px' }}>
              {contactItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="font-body font-normal transition-colors duration-150 hover:text-white break-all"
                  style={{ fontSize: '12px', color: '#9CA3AF' }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2"
          style={{ borderTop: '1px solid #141414', marginTop: '48px', paddingTop: '24px' }}
        >
          <p className="font-body font-normal" style={{ fontSize: '11px', color: '#374151' }}>
            © 2026 SHIFTT Coaching. Guatemala, C.A.
          </p>
          <p className="font-body font-normal" style={{ fontSize: '11px', color: '#374151' }}>
            Hecho con metodología INCAE Business School
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
