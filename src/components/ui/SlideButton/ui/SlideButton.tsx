'use client';

import { useSwiper } from 'swiper/react';
import { arrowLeft, arrowRight } from './data';

interface SlideButtonProps {
  variantButton: 'prev' | 'next';
}

const SlideButton = ({ variantButton }: SlideButtonProps) => {
  const swiper = useSwiper();

  return (
    <button
      onClick={() => (variantButton === 'prev' ? swiper.slidePrev() : swiper.slideNext())}
      className="
      cursor-pointer justify-center items-center text-center px-2.75 py-3.75
      sm:w-16 sm:h-15 xl:w-18 xl:h-17
      font-inter font-medium text-[#1F2122] bg-white border-2 border-[#1F2122]
      hover:bg-gray-300 
      hover:border-gray-700
      active:border-white
      active:bg-black
      active:text-white
      transition-all duration-200 ease-in-out "
    >
      <svg
        width="26"
        height="15"
        viewBox="0 0 12 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="stroke-[#1F2122] active:stroke-[#FFF] sm:w-[31px] sm:h-[18px] xl:w-[36px] xl:h-[23px]"
      >
        <path
          d={variantButton === 'prev' ? arrowLeft : arrowRight}
          strokeWidth="0.825"
          strokeLinecap="square"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export default SlideButton;
