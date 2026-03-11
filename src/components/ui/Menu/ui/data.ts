export interface NavLink {
  id: number;
  name: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { id: 1, name: 'About', href: '#about' },
  { id: 2, name: 'Menu', href: '#menu' },
  { id: 3, name: 'Gallery', href: '#gallery' },
];

export const reservationLink = {
  name: 'Reservation',
  href: '#reservation',
  className: `
    font-inter text-white w-29.75 h-11.5 p-2.5 
    lg:w-32.75 lg:h-13.5 lg:p-4 
    xl:w-41.75 xl:h-15.5 xl:p-5 
    2xl:w-44.75 2xl:h-18.5 bg-black border-0
    hover:bg-gray-800 
    active:bg-gray-900 
    focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-black
    transition-all duration-200 ease-in-out
  `,
};
