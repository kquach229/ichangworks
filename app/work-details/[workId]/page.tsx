// app/work/[workId]/page.tsx or page.jsx
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { works } from '@/data/data';
import { cn } from '@/lib/utils';
import { Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const WorkDetailsPage = async ({ params }) => {
  const { workId } = await params;
  const work = works.find((work) => work.id == workId);

  // const stars = Array.from({ length: 5 }, (_, i) => (
  //   <Star
  //     key={i}
  //     className={cn(
  //       'h-4 w-4',
  //       i < work?.reviews ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
  //     )}
  //   />
  // ));

  return (
    <div className='mx-auto p-6 min-h-screen mt-8'>
      <div className='flex flex-col lg:flex-row items-center justify-around gap-16'>
        <Card className='w-full sm:w-[500px]'>
          <div className='mx-auto w-[90%] h-auto sm:w-[350px] sm:h-[620px] flex justify-center items-center'>
            <Image
              className='mb-5 mt-5 rounded-sm'
              src={work?.img}
              height={400}
              width={400}
              alt='work iamge'
            />
          </div>
        </Card>

        <div className='place-self-center space-y-10 w-full lg:w-1/2'>
          <h1 className='text-3xl font-bold mb-2'>{work?.title}</h1>
          <h2 className='text-xl mb-4 text-gray-500'>by {work?.author}</h2>
          <p className='mb-4'>{work?.description}</p>
          <p className='text-sm text-gray-400'>
            Published in {work?.publishedYear}
          </p>
          <Link className='mt-5' href={work?.purchaseLink} target='_blank'>
            <Button className='cursor-pointer'>Purchase</Button>
          </Link>

          {/* <div className='w-[80%] mx-auto mt-20'>
            <Carousel>
              <CarouselContent>
                <CarouselItem className='basis-1/3'>
                  <Image
                    src={'/barry_and_the_wisdom_of_the_meadow.jpg'}
                    width={100}
                    height={100}
                    alt='work'
                  />
                </CarouselItem>
                <CarouselItem className='basis-1/3'>
                  <Image
                    src={'/barry_and_the_wisdom_of_the_meadow.jpg'}
                    width={100}
                    height={100}
                    alt='work'
                  />
                </CarouselItem>
                <CarouselItem className='basis-1/3'>
                  <Image
                    src={'/barry_and_the_wisdom_of_the_meadow.jpg'}
                    width={100}
                    height={100}
                    alt='work'
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default WorkDetailsPage;
