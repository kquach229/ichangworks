// app/work/[workId]/page.tsx or page.jsx
import { works } from '@/data/data';
import { cn } from '@/lib/utils';
import { Star } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const WorkDetailsPage = async ({ params }) => {
  const { workId } = await params;
  const work = works.find((work) => work.id == workId);

  const stars = Array.from({ length: 5 }, (_, i) => (
    <Star
      key={i}
      className={cn(
        'h-4 w-4',
        i < work?.reviews ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
      )}
    />
  ));

  return (
    <div className='mx-auto p-6 min-h-screen'>
      <div className='flex items-center justify-between'>
        <Image
          className='mb-5 mt-5'
          src={work?.img}
          height={500}
          width={500}
          alt='work iamge'
        />
        <div className='place-self-center w-full'>
          <div className='flex'>{stars}</div>
          <div>{work.rating}</div>
        </div>
      </div>
      <h1 className='text-3xl font-bold mb-2'>{work?.title}</h1>
      <h2 className='text-xl text-gray-600 mb-4'>by {work?.author}</h2>
      <p className='mb-4 text-gray-800'>{work?.description}</p>
      <p className='text-sm text-gray-500'>
        Published in {work?.publishedYear}
      </p>
    </div>
  );
};

export default WorkDetailsPage;
