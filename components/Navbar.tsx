import React from 'react';
import { ThemeToggler } from '@/components/ThemeToggler';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='flex flex-col justify-center w-full h-32'>
      <div className='text-center'>
        <h3>IChangWorks</h3>
      </div>
      <div className='mx-auto space-x-10 mt-5'>
        <Link href={'/wellness'}>WELLNESS</Link>
        <Link href={'/beauty'}>BEAUTY</Link>
        <Link href={'/fitness'}>FITNESS</Link>
        <Link href={'/shop'}>SHOP</Link>
      </div>
    </div>
  );
};

export default Navbar;
