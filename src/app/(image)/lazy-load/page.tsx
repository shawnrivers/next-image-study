import photo1 from 'public/images/photo-1.jpg';
import Image from 'next/image';

export const metadata = {
  title: 'Lazy Loading',
};

export default function LazyLoading() {
  return (
    <div>
      <h1>Lazy Loading</h1>
      <div className='h-[2000px] bg-gray-400' />
      <section className='mt-4 flex flex-wrap justify-center gap-4'>
        <div className='flex flex-col gap-2'>
          <div className='font-bold'>
            <code>{'<img>'}</code> tag
          </div>
          <img
            src={photo1.src}
            alt='a person standing in the middle of a body of water'
            width={340}
            height={192}
          />
        </div>
        <div className='flex flex-col gap-2'>
          <div className='font-bold'>
            <code>{'next/image'}</code>
          </div>
          <Image
            src={photo1.src}
            alt='a person standing in the middle of a body of water'
            width={340}
            height={192}
            loading='lazy' // default to 'lazy'
          />
        </div>
      </section>
    </div>
  );
}
