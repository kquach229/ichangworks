import { Instagram, Mail } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { Separator } from './ui/separator';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className='w-full flex space-y-5 flex-col items-center justify-center h-48'>
      <Separator className='mt-10' />

      <div className='inline-flex space-x-5  mt-5 mx-auto'>
        <Link href={'https://www.instagram.com/ichangworks/'} target='_blank'>
          <Instagram />
        </Link>
      </div>
      <div>&#169; {year} IChang Works. All Rights Reserved</div>
      <div />
    </footer>
  );
};

export default Footer;
