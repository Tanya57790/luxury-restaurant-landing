'use client';

import dynamic from 'next/dynamic';

const Header = dynamic(() => import('@/components/ui/Header').then((mod) => mod.Header), {
  ssr: true,
});
const Hero = dynamic(() => import('@/components/ui/Hero').then((mod) => mod.Hero), {
  ssr: true,
});
const About = dynamic(() => import('@/components/ui/About').then((mod) => mod.About), {
  ssr: true,
});
const OurCafe = dynamic(() => import('@/components/ui/OurCafe').then((mod) => mod.OurCafe), {
  ssr: true,
});
const Reservation = dynamic(
  () => import('@/components/ui/Reservation').then((mod) => mod.Reservation),
  {
    ssr: false,
  },
);
const CafeMenu = dynamic(() => import('@/components/ui/CafeMenu').then((mod) => mod.CafeMenu), {
  ssr: false,
});
const Gallery = dynamic(() => import('@/components/ui/Gallery').then((mod) => mod.Gallery), {
  ssr: false,
});
const Footer = dynamic(() => import('@/components/ui/Footer').then((mod) => mod.Footer), {
  ssr: false,
});

const Sections = () => {
  return (
    <div className="px-6 md:px-8 xl:px-11 relative">
      <Header />
      <main>
        <Hero />
        <About />
        <OurCafe />
        <Reservation />
        <CafeMenu />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
};

export default Sections;
