import Image from 'next/image';
import React from 'react';

const Hero = () => {
  // trigger refresh
  return (
    <div className='w-full flex flex-col md:flex-row md:justify-around items-center gap-20 mt-8'>
      <div className='space-y-10 text-center w-full'>
        <h1>Hi, I'm Azure</h1>
        <span>
          I am a nurse and quiet observer of life’s tender moments. By day, I
          care for others; in quieter hours, I write. I gather thoughts,
          stories, and reflections that speak softly to the heart. Ichang Works
          is my little corner of the world—a space to share stories, ideas, and
          creations that invite reflection, foster connection, and leave room
          for a bit of wonder along the way.
        </span>
      </div>
      <div className='h-auto w-full'>
        <Image
          className='mx-auto'
          height={500}
          width={500}
          src={'/portrait.jpg'}
          alt='portrait'
        />
      </div>
    </div>
  );
};

export default Hero;
