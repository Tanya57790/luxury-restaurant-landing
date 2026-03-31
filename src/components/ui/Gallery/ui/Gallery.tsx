'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y } from 'swiper/modules';
import { SlideButton } from '../../SlideButton';
import { ButtonLink } from '../../ButtonLink';
import { slides } from './data';

import 'swiper/css';
import 'swiper/css/pagination';

const Gallery = () => {
  return (
    <div id="gallery">
      <div className="flex flex-wrap xs:justify-between xs:items-center">
        <h2 className="font-display text-[#1F2122] leading-[100%] text-[30px] lg:text-[40px] 2xl:text-[50px]">
          Latest from El Guling
        </h2>
        <ButtonLink
          href="#"
          className="mt-3 lg:mt-5 2xl:mt-7 w-35 h-11.5 px-2.5 py-2 sm:w-45 sm:h-14 sm:px-3 sm:py-2.5
          md:w-55 md:h-16 lg:px-4 lg:py-4.5 xl:w-57 xl:h-18 xl:px-5 xl:py-5.5 2xl:w-60 2xl:h-20 2xl:p-6 2xl:py-6.5"
        >
          Discover news
        </ButtonLink>
      </div>
      <div className="swiper-container px-6 md:px-8 xl:px-11 -mx-6 md:-mx-8 xl:-mx-11 overflow-hidden">
        <Swiper
          modules={[Pagination, A11y]}
          slidesPerView="auto"
          centeredSlides={false}
          pagination={{ clickable: true }}
          className="relative flex w-full max-w-full mt-3 lg:mt-5 2xl:mt-7"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id} className="cursor-pointer">
              <div
                className="relative w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] md:w-[450px] md:h-[450px] 
                xl:w-[500px] xl:h-[500px] 2xl:w-[600px] 2xl:h-[600px] flex items-center justify-center overflow-hidden"
              >
                <Image
                  src={`/assets/images/${slide.desktop}`}
                  fill
                  sizes="(max-width: 639px) 240px, (max-width: 1023px) 280px, (max-width: 1279px) 450px, (max-width: 1535px) 500px, 600px"
                  alt={slide.alt}
                  className="object-cover"
                />
              </div>
              <p className="font-inter text-[#1F2122] pt-3">{slide.text}</p>
            </SwiperSlide>
          ))}
          <div className="flex justify-between sm:w-37 xl:w-40 mt-6.5 sm:mt-7.5 w-33">
            <SlideButton variantButton="prev" />
            <SlideButton variantButton="next" />
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Gallery;
