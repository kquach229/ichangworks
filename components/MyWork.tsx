import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';
import Image from 'next/image';
import { Button } from './ui/button';
import { works } from '@/data/data';
import Link from 'next/link';

const MyWork = () => {
  return (
    <div>
      <h4 className='mb-5'>My Works</h4>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8'>
        {works &&
          works.map((work) => (
            <Card key={work.id} className='max-w-[200]'>
              <CardHeader>
                <span className='text-gray-500 text-md text-center'>
                  {work.title}
                </span>
              </CardHeader>
              <CardContent>
                <Image
                  className='rounded-sm w-full'
                  src={work.img}
                  height={200}
                  width={200}
                  alt='barry the bunny'
                />
              </CardContent>
              <CardFooter>
                <Link href={`/work-details/${work.id}`}>
                  <Button>View</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
      </div>
    </div>
  );
};

export default MyWork;
