'use client';

import Image from 'next/image';
import Link from 'next/link';

const About = () => {
  return (
    <div
      id="about"
      className="relative m-[0_auto] py-13.25 
      sm:py-16 md:py-18 lg:py-22 xl:py-25 2xl:py-27
      md:w-[712px] lg:w-[968px] 2xl:w-[1280px] "
    >
      <div className="flex items-center justify-between">
        <picture className="hidden md:block">
          <source media="(min-width: 768px)" srcSet="/assets/images/cook-mobile.webp" />
          <source media="(min-width: 1024px)" srcSet="/assets/images/cook-lg.webp" />
          <Image
            src="/assets/images/cook-mobile.webp"
            width={400}
            height={380}
            alt="hero background"
            className="md:w-auto md:h-auto lg:w-[400px] lg:h-[380px]"
          />
        </picture>
        <p className="font-inter text-[#393E46] w-auto xs:w-116 sm:w-160 md:w-130 lg:w-150 2xl:w-220">
          Our story is one of passion and refinement, where each dish is a carefully curated
          masterpiece. Elegance graces every detail, inviting you into a world where exquisite
          flavors and sophisticated ambiance harmonize, creating an unforgettable dining experience.
          Welcome to the epitome of gastronomic delight.
        </p>
      </div>
      <div className="flex items-center pt-5">
        <hr className="w-full border-[#1F2122] border" />
        <Link
          href="#"
          className="
            flex justify-center items-center text-center ml-6.5 
            font-inter text-[#393E46] w-35 h-11.5 px-2.5 py-2 
            sm:w-45 sm:h-14 sm:px-3 sm:py-2.5 sm:ml-13
            md:w-55 md:h-16 lg:px-4 lg:py-4.5
            xl:w-57 xl:h-18 xl:px-5 xl:py-5.5
            2xl:w-60 2xl:h-20 2xl:p-6 2xl:py-6.5 
            bg-white border-2 border-[#1F2122] 
            hover:bg-gray-300 
            hover:border-gray-700
            active:border-white
            active:bg-black
            active:text-white
            transition-all duration-200 ease-in-out"
        >
          About us
        </Link>
      </div>
    </div>
  );
};

export default About;
