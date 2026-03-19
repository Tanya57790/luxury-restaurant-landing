'use client';

import Image from 'next/image';
import Link from 'next/link';

const CafeMenu = () => {
  return (
    <div
      id="menu"
      className="m-[0_auto] w-auto xs:w-[438px] md:w-full py-13.25 sm:py-16 md:py-18 lg:py-22 xl:py-25 2xl:py-27"
    >
      <h2 className="font-display text-[#1F2122] text-[30px] lg:text-[40px] 2xl:text-[50px] leading-5 pb-5 md:pb-8 lg:pb-10 xl:pb-12 2xl:pb-14">
        Menu
      </h2>
      <div className="-mx-6 xs:mx-0 md:flex md:h-[350px] lg:h-full">
        <div className="relative cursor-pointer">
          <div className="absolute inset-0 transition-all duration-200 ease-in-out bg-black/45 hover:bg-black/60 z-10" />
          <div className="absolute inset-0 w-max h-max m-auto z-20 text-center pointer-events-none">
            <h3 className="font-inter text-medium md:leading-9 2xl:leading-13 text-[#F7FFFF] text-[18px] lg:text-[24px] 2xl:text-[28px]">
              Breakfast
            </h3>
            <p className="font-inter text-[#BABABA] w-[150px] 2xl:w-[220px] text-[14px] lg:text-[16px] 2xl:text-[20px]">
              30 Food variant for filled your day
            </p>
            <Link
              href="#"
              className="inline-flex justify-center items-center text-center pointer-events-auto font-inter font-medium text-[#F7FFFF] bg-transparenr 
              border-2 border-[#F7FFFF] mt-3 lg:mt-5 2xl:mt-7 hover:scale-[1.1] active:scale-[1] transition-all duration-200 ease-in-out w-32 h-10 px-2.5 py-2
              sm:w-35 sm:h-14 sm:px-3 sm:py-2.5 md:w-38 md:h-16 lg:px-4 lg:py-4.5 xl:w-40 xl:h-18 xl:px-5 xl:py-5.5 2xl:w-42 2xl:h-20 2xl:p-6 2xl:py-6.5"
            >
              View menu
            </Link>
          </div>
          <picture>
            <source media="(max-width: 767px)" srcSet="/assets/images/breakfast-mobile.webp" />
            <source media="(min-width: 768px)" srcSet="/assets/images/breakfast-md.webp" />
            <source media="(min-width: 1536px)" srcSet="/assets/images/breakfast-xl.webp" />
            <Image
              src="/assets/images/breakfast-mobile.webp"
              width={320}
              height={480}
              alt="breakfast image"
              className="w-full object-cover h-[350px] md:h-full md:w-[600px]"
            />
          </picture>
        </div>
        <div className="md:flex md:w-fit">
          <div className="relative cursor-pointer">
            <div className="absolute inset-0 transition-all duration-200 ease-in-out bg-black/45 hover:bg-black/60 z-10" />
            <div className="absolute inset-0 w-max h-max m-auto z-20 text-center pointer-events-none">
              <h3 className="font-inter text-medium text-[#F7FFFF] text-[18px] lg:text-[24px] 2xl:text-[28px]">
                Lunch
              </h3>
            </div>
            <picture>
              <source media="(max-width: 767px)" srcSet="/assets/images/lunch-mobile.webp" />
              <source media="(min-width: 768px)" srcSet="/assets/images/lunch-md.webp" />
              <source media="(min-width: 1024px)" srcSet="/assets/images/lunch-lg.webp" />
              <source media="(min-width: 1536px)" srcSet="/assets/images/lunch-xl.webp" />
              <Image
                src="/assets/images/lunch-mobile.webp"
                width={320}
                height={480}
                alt="lunch image"
                className="w-full h-[120px] object-cover md:h-full md:w-[500px] lg:w-[600px]"
              />
            </picture>
          </div>
          <div className="relative cursor-pointer">
            <div className="absolute inset-0 transition-all duration-200 ease-in-out bg-black/45 hover:bg-black/60 z-10" />
            <div className="absolute inset-0 w-max h-max m-auto z-20 text-center pointer-events-none">
              <h3 className="font-inter text-medium text-[#F7FFFF] text-[18px] lg:text-[24px] 2xl:text-[28px]">
                Dinner
              </h3>
            </div>
            <picture>
              <source media="(max-width: 767px)" srcSet="/assets/images/dinner-mobile.webp" />
              <source media="(min-width: 768px)" srcSet="/assets/images/dinner-md.webp" />
              <source media="(min-width: 1024px)" srcSet="/assets/images/dinner-lg.webp" />
              <source media="(min-width: 1536px)" srcSet="/assets/images/dinner-xl.webp" />
              <Image
                src="/assets/images/dinner-mobile.webp"
                width={320}
                height={480}
                alt="dinner image"
                className="w-full h-[120px] object-cover md:h-[100%] md:w-[500px] lg:w-[600px]"
              />
            </picture>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CafeMenu;
