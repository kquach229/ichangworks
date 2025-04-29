import { Instagram, Mail } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { Separator } from './ui/separator';

const Footer = () => {
  return (
    <footer className='w-full flex flex-col items-center justify-between h-40'>
      <Separator className='mt-20' />

      <div className='inline-flex space-x-5 mx-auto'>
        <Link href={'https://www.instagram.com/charmtsoi/'} target='_blank'>
          <Instagram />
        </Link>
      </div>
      <div />
    </footer>
  );
};

export default Footer;
