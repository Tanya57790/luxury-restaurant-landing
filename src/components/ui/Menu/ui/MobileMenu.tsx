'use client';

import Link from 'next/link';
import { navLinks, reservationLink } from './data';

type MobileMenuProps = {
  handler: () => void;
  isOpen: boolean;
};

const MobileMenu = ({ handler, isOpen }: MobileMenuProps) => {
  return (
    <>
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={handler}
      />
      <div
        className={`fixed top-0 right-0 h-screen w-60 bg-gray-600/80 z-50 p-5 shadow-lg transform transition-all duration-300 ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}
      >
        <button name="close" className="absolute text-white right-6" onClick={handler}>
          X
        </button>
        <ul className="flex flex-col w-full pt-18 pl-10.5">
          {navLinks.map((link) => (
            <li key={link.id} className="font-inter text-white hover:text-emerald-500 pb-3.75">
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
          <li>
            <Link href={reservationLink.href} className={reservationLink.className}>
              {reservationLink.name}
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MobileMenu;
