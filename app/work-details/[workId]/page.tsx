// app/work/[workId]/page.tsx or page.jsx
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { FaAmazon } from 'react-icons/fa';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { works } from '@/data/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const WorkDetailsPage = async ({
  params,
}: {
  params: Promise<{ workId: string }>;
}) => {
  const { workId } = await params;
  const work = works.find((work) => work.id == workId);

  return (
    <div className='mx-auto p-6 min-h-screen mt-8'>
      <div className='flex flex-col lg:flex-row items-center justify-around gap-16'>
        <Card className='w-full sm:w-[500px]'>
          <div className='mx-auto w-[90%] h-auto sm:w-[350px] sm:h-[620px] flex justify-center items-center'>
            {work?.img && (
              <Image
                className='mb-5 mt-5 rounded-sm'
                src={work?.img}
                height={400}
                width={400}
                alt='work iamge'
              />
            )}
          </div>
        </Card>

        <div className='place-self-center space-y-10 w-full lg:w-1/2'>
          <h1 className='text-3xl font-bold mb-2'>{work?.title}</h1>
          <h2 className='text-xl mb-4 text-gray-500'>by {work?.author}</h2>
          <div
            dangerouslySetInnerHTML={{ __html: work?.description! }}
            className='mb-4'
          />
          <p className='text-sm text-gray-400'>
            Published in {work?.publishedYear}
          </p>

          <div className='space-x-5'>
            {work?.gumroadPurchaseLink && (
              <Link
                className='mt-5'
                href={work?.gumroadPurchaseLink || ''}
                target='_blank'>
                <Button className='cursor-pointer text-background'>
                  Purchase E-Book
                </Button>
              </Link>
            )}

            {work?.amazonPurchaseLink && (
              <Link
                className='mt-5'
                href={work?.amazonPurchaseLink || ''}
                target='_blank'>
                <Button className='cursor-pointer text-background bg-[#ffd813] hover:bg-amber-200'>
                  Purchase Paperback
                  <FaAmazon />
                </Button>
              </Link>
            )}
          </div>

          {work?.features && (
            <ul>
              {work.features.map((feature) => (
                <li className='list-disc' key={feature}>
                  {feature}
                </li>
              ))}
            </ul>
          )}

          {work?.carouselImages && (
            <div className='w-[80%] mx-auto mt-20'>
              <Carousel>
                <CarouselContent className='flex items-center'>
                  {work.carouselImages.map((item) => (
                    <CarouselItem key={item} className='basis-1/3'>
                      <Image
                        className='w-full h-[250px] object-contain'
                        src={item}
                        width={200}
                        height={200}
                        alt='work'
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkDetailsPage;
