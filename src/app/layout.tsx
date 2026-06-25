import type { Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";
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
      <body className={`${dmSans.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
