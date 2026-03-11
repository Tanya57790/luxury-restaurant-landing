'use client';

import Link from 'next/link';
import { navLinks, reservationLink } from './data';

type Handler = {
  handler: () => void;
};

const Menu = ({ handler }: Handler) => {
  return (
    <>
      <div>
        <div className="font-display text-white hidden md:block text-[16px] lg:text-[20px]">
          El Guling Cafe
        </div>
        <div className="font-display text-white block md:hidden text-[14px]">El</div>
      </div>
      <div className="hidden md:flex items-center justify-between md:w-[45%] lg:w-[35%] 2xl:w-[30%]">
        <ul className="flex justify-between w-full pr-12.5 lg:pr-17.5 xl:pr-25.5">
          {navLinks.map((link) => (
            <li key={link.id} className="font-inter text-white hover:text-emerald-500">
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>
        <Link href={reservationLink.href} className={reservationLink.className}>
          {reservationLink.name}
        </Link>
      </div>
      <button className="block md:hidden" onClick={handler}>
        <svg
          width="25"
          height="25"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.54688 2.78442L8.35313 2.78442M1.54688 4.95005L8.35313 4.95005M1.54688 7.11567L8.35313 7.11567"
            stroke="#F7F7F7"
            strokeWidth="0.825"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </>
  );
};

export default Menu;
