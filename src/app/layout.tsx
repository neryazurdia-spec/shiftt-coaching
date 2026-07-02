import type { Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SHIFTT Coaching | Coaching de carrera y marca personal en Guatemala",
  description:
    "Coaching de carrera y posicionamiento de marca personal con metodología INCAE Business School. CV formato ATS, LinkedIn SSI y plan de acción de 3 meses.",
  keywords: [
    "coaching carrera Guatemala",
    "LinkedIn Guatemala",
    "CV ATS Guatemala",
    "empleabilidad Guatemala",
    "INCAE coaching",
  ],
  openGraph: {
    title: "SHIFTT Coaching | Coaching de carrera y marca personal en Guatemala",
    description:
      "Coaching de carrera y posicionamiento de marca personal con metodología INCAE Business School. CV formato ATS, LinkedIn SSI y plan de acción de 3 meses.",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;
f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-P28SDPXM');`,
        }}
      />
      <body className={`${dmSans.variable} ${inter.variable} antialiased`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P28SDPXM"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
