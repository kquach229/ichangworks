import Image from 'next/image';
import React from 'react';

const Hero = () => {
  // trigger refresh
  return (
    <div className='w-full flex flex-col md:flex-row justify-around items-center gap-20'>
      <div className='space-y-10 text-center'>
        <h1>Hi, I'm Azure</h1>
        <span>Nurse by hear | Storyteller by soul</span>
      </div>
      <div className='h-auto w-[full]'>
        <Image height={500} width={500} src={'/portrait.jpg'} alt='portrait' />
      </div>
    </div>
  );
};

export default Hero;
