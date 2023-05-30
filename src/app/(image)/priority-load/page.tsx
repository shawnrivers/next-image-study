import photo1 from 'public/images/photo-1.jpg';
import photo2 from 'public/images/photo-2.jpg';
import Image from 'next/image';

export const metadata = {
  title: 'Priority Load',
};

export default function Priority() {
  return (
    <div>
      <h1>Priority Loading</h1>
      <div className='mt-4 flex flex-wrap justify-center gap-4'>
        <div className='flex flex-col gap-2'>
          <div className='font-bold'>
            <code>priority: false</code>
          </div>
          <Image
            src={photo1.src}
            alt='a person standing in the middle of a body of water'
            width={340}
            height={192}
            priority={false}
          />
        </div>
        <div className='flex flex-col gap-2'>
          <div className='font-bold'>
            <code>priority: true</code>
          </div>
          <Image
            src={photo2.src}
            alt='a person standing in the middle of a body of water'
            width={340}
            height={192}
            priority={true} // default to false
          />
        </div>
      </div>
    </div>
  );
}
