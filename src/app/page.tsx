import { Hero } from '@/components/ui/Hero';
import { About } from '@/components/ui/About';
import { OurCafe } from '@/components/ui/OurCafe';
import { Reservation } from '@/components/ui/Reservation';
import { CafeMenu } from '@/components/ui/CafeMenu';
import { Gallery } from '@/components/ui/Gallery';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <OurCafe />
      <Reservation />
      <CafeMenu />
      <Gallery />
    </main>
  );
}
