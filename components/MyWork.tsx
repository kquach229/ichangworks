import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';
import Image from 'next/image';
import { Button } from './ui/button';
import { works } from '@/data/data';
import Link from 'next/link';

const MyWork = () => {
  return (
    <div>
      <h3 className='mb-5'>My Work</h3>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5'>
        {works &&
          works.map((work) => (
            <Card key={work.id} className='max-w-[200]'>
              <CardHeader>
                <h5>{work.title}</h5>
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
                <Link href={`/work-detail/${work.id}`}>
                  <Button>Purchase</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
      </div>
    </div>
  );
};

export default MyWork;
