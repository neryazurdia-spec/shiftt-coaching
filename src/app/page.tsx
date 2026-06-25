import { Nav } from '@/components/layout/Nav';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { PainPoints } from '@/components/sections/PainPoints';
import { PlanShiftt } from '@/components/sections/PlanShiftt';
import { Complementarios } from '@/components/sections/Complementarios';
import { Beneficios } from '@/components/sections/Beneficios';
import { CTAFinal } from '@/components/sections/CTAFinal';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <PainPoints />
        <PlanShiftt />
        <Complementarios />
        <Beneficios />
        <CTAFinal />
      </main>
      <Footer />
    </>
  );
}
