import { Instagram, Mail } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className='w-full flex items-center justify-between h-40'>
      <div className='inline-flex space-x-5 mx-auto'>
        <Link href={'https://www.instagram.com/charmtsoi/'} target='_blank'>
          <Instagram />
        </Link>
        <Mail />
      </div>
      <div />
    </footer>
  );
};

export default Footer;
