'use client';

import Link from 'next/link';

interface ButtonLinkProps {
  href: string;
  children: React.ReactNode;
  className: string;
}

const ButtonLink = ({ href, children, className }: ButtonLinkProps) => {
  return (
    <Link
      href={href}
      className={`
        inline-flex justify-center items-center text-center
        font-inter font-medium text-[#1F2122] bg-white border-2 border-[#1F2122]
        hover:bg-gray-300 
        hover:border-gray-700
        active:border-white
        active:bg-black
        active:text-white
        transition-all duration-200 ease-in-out 
        ${className}
      `}
    >
      {children}
    </Link>
  );
};

export default ButtonLink;
