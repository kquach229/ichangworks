import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import { IItem } from './MyWork';

const WorkGrid = ({ title, items }: { title: string; items: IItem[] }) => {
  return (
    <div className='mt-30 mx-auto'>
      <h4 className='mb-5 text-center sm:text-left'>{title}</h4>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10 mt-8 place-items-center sm:place-items-start'>
        {items &&
          items.map((item: IItem) => (
            <Card
              key={item.id}
              className='w-[330px] flex flex-col justify-between'>
              <CardHeader>
                <span className='text-center text-foreground text-md h-10 font-semibold'>
                  {item.title}
                </span>
              </CardHeader>
              <CardContent>
                <Image
                  className='rounded-sm object-cover mx-auto w-full h-[400px]'
                  src={item.img}
                  height={400}
                  width={200}
                  alt={item.title}
                />
              </CardContent>
              <CardFooter className='w-full'>
                <Link
                  className='mx-auto w-full'
                  href={`/work-details/${item.id}`}>
                  <Button className='cursor-pointer w-full'>View</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
      </div>
    </div>
  );
};

export default WorkGrid;
