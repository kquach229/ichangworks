import React from 'react';
import { works } from '@/data/data';
import WorkGrid from './WorkGrid';

export interface IItem {
  id: number;
  title: string;
  img: string;
  description: string;
  publishedYear: number;
  amazonPurchaseLink?: string;
  carouselImages?: String[];
  features?: String[];
  author: String;
  type: string;
}

const MyWork = () => {
  const books = works.filter((work) => work.type === 'book');
  const nursingBooks = works.filter((workd) => workd.type === 'nursing');
  const journals = works.filter((workd) => workd.type === 'journal');

  console.log(books);
  return (
    <>
      <WorkGrid title={'Books'} items={books} />
      <WorkGrid title={'Nursing Notebooks'} items={nursingBooks} />
      <WorkGrid title={'Journals'} items={journals} />
    </>
  );
};

export default MyWork;
