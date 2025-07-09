import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';
import Image from 'next/image';
import { Button } from './ui/button';
import { works } from '@/data/data';
import Link from 'next/link';

const MyWork = () => {
  const books = works.filter((work) => work.type === 'book');
  const journals = works.filter((workd) => workd.type === 'journal');
  return (
    <div>
      <h4 className='mb-5'>Books</h4>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8'>
        {books &&
          books.map((book) => (
            <Card
              key={book.id}
              className='w-[320px] flex flex-col justify-around'>
              <CardHeader>
                <span className='text-gray-500 text-md text-center'>
                  {book.title}
                </span>
              </CardHeader>
              <CardContent>
                <Image
                  className='rounded-sm w-full'
                  src={book.img}
                  height={200}
                  width={200}
                  alt='barry the bunny'
                />
              </CardContent>
              <CardFooter>
                <Link href={`/work-details/${book.id}`}>
                  <Button className='cursor-pointer'>View</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
      </div>

      <div className='mt-30'>
        <h4 className='mb-5'>Journals</h4>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8'>
          {journals &&
            journals.map((journal) => (
              <Card
                key={journal.id}
                className='w-[320px] flex flex-col justify-between'>
                <CardHeader>
                  <span className='text-gray-500 text-md text-center'>
                    {journal.title}
                  </span>
                </CardHeader>
                <CardContent>
                  <Image
                    className='rounded-sm w-full'
                    src={journal.img}
                    height={200}
                    width={200}
                    alt='the way back to calm'
                  />
                </CardContent>
                <CardFooter className='w-full'>
                  <Link
                    className='mx-auto w-full'
                    href={`/work-details/${journal.id}`}>
                    <Button className='cursor-pointer w-full'>View</Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MyWork;
