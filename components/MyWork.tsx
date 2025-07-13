import React from 'react';
import { works } from '@/data/data';
import WorkGrid from './WorkGrid';

const MyWork = () => {
  const books = works.filter((work) => work.type === 'book');
  const nursingBooks = works.filter((workd) => workd.type === 'nursing');
  const journals = works.filter((workd) => workd.type === 'journal');
  return (
    <>
      <WorkGrid title={'Books'} items={books} />
      <WorkGrid title={'Nursing Notebooks'} items={nursingBooks} />
      <WorkGrid title={'Journals'} items={journals} />
    </>
  );
};

export default MyWork;
