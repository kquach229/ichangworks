import Image from 'next/image';
import React from 'react';

const Hero = () => {
  // trigger refresh
  return (
    <div className='w-full flex justify-around items-center gap-20'>
      <div className='space-y-10'>
        <h1>Hi, I'm Aichang</h1>
        <h6>I am nurse by day, author by night</h6>
      </div>
      <div className='h-auto w-[full]'>
        <Image height={500} width={500} src={'/portrait.jpg'} alt='portrait' />
      </div>
    </div>
  );
};

export default Hero;
