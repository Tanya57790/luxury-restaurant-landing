'use client';

import { useEffect, useState } from 'react';
import { Menu, MobileMenu } from '@/components/ui/Menu';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handler = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', isOpen);
    return () => document.body.classList.remove('overflow-hidden');
  }, [isOpen]);

  return (
    <header className="absolute inset-x-0 pt-5.5 md:pt-6.75 lg:pt-7 xl:pt-8 w-full z-30">
      <nav className="flex items-center justify-between px-6 md:px-8 xl:px-11 mx-auto max-w-none w-full">
        <Menu handler={handler} />
        <MobileMenu handler={handler} isOpen={isOpen} />
      </nav>
    </header>
  );
};

export default Header;
