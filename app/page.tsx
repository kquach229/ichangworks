import Hero from '@/components/Hero';
import MyWork from '@/components/MyWork';

export default function Home() {
  return (
    <div>
      <Hero />
      <div className='mt-20'>
        <MyWork />
      </div>
    </div>
  );
}
