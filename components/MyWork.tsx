import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';
import Image from 'next/image';
import { Button } from './ui/button';

const works = [
  {
    id: 1,
    title: 'Barry the Bunny',
    link: 'www.nba.com',
    img: '/barry_and_the_wisdom_of_the_meadow_formatted.jpg',
  },
];

const MyWork = () => {
  return (
    <div>
      <h3 className='mb-5'>My Work</h3>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
        {works &&
          works.map((work) => (
            <Card key={work.id}>
              <CardHeader>
                <h5>{work.title}</h5>
              </CardHeader>
              <CardContent>
                <Image
                  className='rounded-sm'
                  src={work.img}
                  height={500}
                  width={500}
                  alt='barry the bunny'
                />
              </CardContent>
              <CardFooter>
                <Button>Purchase</Button>
              </CardFooter>
            </Card>
          ))}
      </div>
    </div>
  );
};

export default MyWork;
