'use client';

import Link from 'next/link';
import { contacts } from './data';
import { Form } from '../../Form';

const Footer = () => {
  return (
    <footer className="relative mt-[40px]">
      <div className="absolute w-[stretch] h-full -z-10 bg-[#1F2122] -mx-6 md:-mx-8 xl:-mx-11" />
      <div className="pt-20 pb-10 sm:pt-30 sm:pb-20 2xl:pt-30 2xl:pb-20">
        <h2 className="font-display text-[#F7F7F7] pb-6 sm:pb-18 2xl:pb-23 leading-[100%] text-[30px] lg:text-[40px] 2xl:text-[50px]">
          Contact Us
        </h2>
        <div className="lg:flex lg:justify-between">
          <Form />
          <ul className="pt-8">
            {contacts.map((contact) => (
              <li key={contact.id} className="grid lg:grid-cols-[170px_1fr] py-4">
                <span className="text-[#F7F7F7] font-inter medium pb-2">{contact.name}</span>
                <div className="flex flex-col">
                  <span className="text-[#F7F7F7] font-inter medium">{contact.info.primary}</span>
                  <span className="text-[#F7F7F7] font-inter medium">{contact.info.secondary}</span>
                </div>
              </li>
            ))}
            <li className="grid lg:grid-cols-[170px_1fr] py-4">
              <span className="text-[#F7F7F7] font-inter medium pb-2">Social</span>
              <div className="flex flex-col">
                <Link
                  href="#instagram"
                  className="text-[#F7F7F7] font-inter medium hover:text-gray-400"
                >
                  Instagram
                </Link>
                <Link
                  href="#facebook"
                  className="text-[#F7F7F7] font-inter medium hover:text-gray-400"
                >
                  Facebook
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
