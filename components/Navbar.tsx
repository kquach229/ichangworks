import React from 'react';
import { ThemeToggler } from '@/components/ThemeToggler';
import Link from 'next/link';
import { Separator } from './ui/separator';

const Navbar = () => {
  return (
    <div className='flex flex-col justify-center w-full h-32 space-y-5'>
      <div className='text-center flex justify-between'>
        <div />
        <Link href='/'>
          <h3>IChang Works</h3>
        </Link>

        <div>
          <ThemeToggler />
        </div>
      </div>
      <div className='mx-auto space-x-10 mt-5'>
        <Link href={'https://ichangworks.gumroad.com/'}>Products</Link>
      </div>
      <Separator />
    </div>
  );
};

export default Navbar;
