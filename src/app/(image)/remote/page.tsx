import photo1 from 'public/images/photo-1.jpg';
import Image from 'next/image';

export const metadata = {
  title: 'Remote Images',
};

export default function Remote() {
  return (
    <div>
      <h1>Static Import and Remote Images</h1>
      <section>
        <h2>Static import image</h2>
        <Image
          src={photo1.src}
          alt='a person standing in the middle of a body of water'
          width={411}
          height={231}
        />
        <p>
          The <code>cache-control</code> header is automatically configured by
          Next.js so that the file is cached forever (kinda) because the file
          name is hashed.
        </p>
      </section>
      <hr />
      <section>
        <h2>Remote image (same-origin)</h2>
        <Image
          src='/images/photo-1.jpg'
          alt='a person standing in the middle of a body of water'
          width={411}
          height={231}
        />
        <p>No cache automatically configured.</p>
      </section>
      <hr />
      <section>
        <h2>Remote image (cross-origin)</h2>
        <Image
          src='https://images.unsplash.com/photo-1684755343416-f402793a7d23'
          alt='a person standing in the middle of a body of water'
          width={411}
          height={231}
        />
        <p>No cache automatically configured.</p>
        <p>
          To allow Next.js to optimize cross-origin images, we need to add
          the image{"'"}s domain in the <code>next.config.js</code> file{' '}
          <code>images.remotePatterns</code> array.
        </p>
      </section>
    </div>
  );
}
