'use client';

import Image from 'next/image';
import { ButtonLink } from '../../ButtonLink';

const OurCafe = () => {
  return (
    <div className="flex justify-center m-[0_auto] w-auto -mx-6 md:-mx-8 xl:-mx-11">
      <div className="flex flex-col md:flex-row xs:w-[480px] md:w-[768px] lg:w-[1024px] 2xl:w-[1536px]">
        <div className="md:w-[384px] lg:w-[512px] 2xl:w-[768px]">
          <picture>
            <source media="(max-width: 767px)" srcSet="/assets/images/cafe-out-mobile.webp" />
            <source media="(min-width: 768px)" srcSet="/assets/images/cafe-out-md.webp" />
            <source media="(min-width: 1024px)" srcSet="/assets/images/cafe-out-lg.webp" />
            <source media="(min-width: 1536px)" srcSet="/assets/images/cafe-out-xl.webp" />
            <Image
              src="/assets/images/cafe-out-mobile.webp"
              width={320}
              height={229}
              alt="cafe out image"
              className="w-full h-auto md:w-[384px] lg:w-[512px] 2xl:w-[768px]"
            />
          </picture>
          <section className="px-6 py-10 md:py-0 md:pt-10 lg:pt-17 xl:pt-19 2xl:pt-21 md:px-8 xl:px-11">
            <h2 className="font-display text-[#1F2122] text-[30px] lg:text-[40px] 2xl:text-[50px] leading-5">
              Our Cafe
            </h2>
            <p className="font-inter text-[#393E46] w-auto py-3 md:pr-3 lg:pr-5 md:py-4 lg:py-8 xl:py-9">
              Immerse yourself in the warm embrace of our indoor oasis, savor al-fresco moments on
              our charming outdoor terrace, or unwind at the stylish bar where crafted libations
              await. Discover a trifecta of atmospheres that elevate your dining journey
            </p>
            <ButtonLink
              href="#"
              className="
                w-45 h-11.5 px-2.5 py-2                
                sm:w-57.5 sm:h-16.25 sm:px-3 sm:py-2.5
                md:w-55 md:h-16 lg:px-4 lg:py-4.5
                xl:w-57 xl:h-18 xl:px-5 xl:py-5.5
                2xl:w-68 2xl:h-20 2xl:p-6 2xl:py-6.5"
            >
              Discover our location
            </ButtonLink>
          </section>
        </div>
        <picture>
          <source media="(max-width: 767px)" srcSet="/assets/images/cafe-in-mobile.webp" />
          <source media="(min-width: 768px)" srcSet="/assets/images/cafe-in-md.webp" />
          <source media="(min-width: 1024px)" srcSet="/assets/images/cafe-in-lg.webp" />
          <source media="(min-width: 1536px)" srcSet="/assets/images/cafe-in-xl.webp" />
          <Image
            src="/assets/images/cafe-in-mobile.webp"
            width={320}
            height={229}
            alt="cafe inside image"
            className="w-full h-auto md:w-[384px] lg:w-[512px] 2xl:w-[768px]"
          />
        </picture>
      </div>
    </div>
  );
};

export default OurCafe;
