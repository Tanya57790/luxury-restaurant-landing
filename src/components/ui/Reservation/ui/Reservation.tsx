'use client';

import { ButtonLink } from '../../ButtonLink';

const Reservation = () => {
  return (
    <div className="text-center m-[0_auto] w-[258px] md:w-[310px] lg:w-[380px] xl:w-[580px] 2xl:w-[970px] py-10 md:py-13 lg:py-15 xl:py-16 2xl:py-17">
      <h2 className="font-inter text-medium text-[#1F2122] text-[20px] md:text-[24px] lg:text-[30px] 2xl:text-[50px] leading-[125%]">
        Where Every Plate Tells a Tale, Every Sip is an Adventure. Your Epicurean Journey Begins
        Here
      </h2>
      <ButtonLink
        href="#reservation"
        className="
          w-32 h-11.5 px-2.5 py-2 lg:px-4 lg:py-4.5 mt-3 md:mt-5 lg:mt-7 xl:mt-8 2xl:mt-9  
          sm:h-16 md:w-35 md:h-16 lg:w-38
          xl:w-42 xl:h-18 xl:px-5 xl:py-5.5
          2xl:w-45 2xl:h-20 2xl:p-6 2xl:py-6.5"
      >
        Reservation
      </ButtonLink>
    </div>
  );
};

export default Reservation;
