'use client';

import Image from 'next/image';

const Hero = () => {
  return (
    <div className="relative">
      <div className="relative -mx-6 md:-mx-8 xl:-mx-11">
        <div className="absolute inset-0 bg-black/25 shadow-md z-10" />
        <picture>
          <source media="(max-width: 320px)" srcSet="/assets/images/hero-bg-mobile.webp" />
          <source media="(min-width: 321px)" srcSet="/assets/images/hero-bg-lg.webp" />
          <source media="(min-width: 1536px)" srcSet="/assets/images/hero-bg-xl.webp" />
          <Image
            src="/assets/images/hero-bg-desktop.webp"
            width={1920}
            height={1249}
            alt="hero background"
            className="w-full object-cover h-[686px] xs:h-[500px] md:h-auto z-20"
            priority
          />
        </picture>
      </div>
      <div className="absolute top-38 sm:inset-0 grid md:grid-cols-[1fr_24px] items-center sm:justify-items-center md:justify-center w-full z-10">
        <section id="guling-cafe" className="w-auto">
          <h1 className="font-display text-white leading-[100%] text-[70px] xs:w-100 sm:w-auto md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-10xl">
            El Guling Cafe
          </h1>
          <p className="hidden md:block font-inter text-white  ">
            Authentic Western food and served with love
          </p>
        </section>
        <div className="relative hidden md:flex items-center justify-between transform rotate-270 w-max z-50">
          <hr className="w-34.5 lg:w-48 xl:w-70 2xl:w-82 border-white border" />
          <span className="font-inter text-white pl-6.25">0361 9002440</span>
        </div>
      </div>
      <div className="absolute md:grid md:grid-cols-[24px_1fr] 2xl:grid-cols-[34px_1fr] bottom-14.25 md:bottom-12 lg:bottom-20 z-50">
        <hr className="hidden md:block h-full w-0 border-white border-2" />
        <p className="font-inter text-white pt-1.25 pr-4.5 xs:w-125 2xl:w-180">
          Where culinary artistry meets elegance. Immerse yourself in a symphony of exquisite
          flavors, surrounded by refined decor and unparalleled service. Elevate your dining
          experience to a new standard of luxury.
        </p>
      </div>
    </div>
  );
};

export default Hero;
