'use client';
import Image, { ImageLoader } from 'next/image';
import { FC } from 'react';

// See https://unsplash.com/documentation#dynamically-resizable-images
const unsplashLoader: ImageLoader = ({ src, width, quality }) => {
  const url = new URL(src);
  const source = url.origin + url.pathname;
  const searchParams = new URLSearchParams({
    w: width.toString(),
    q: quality ? quality.toString() : '75',
    fm: 'webp',
  });
  return `${source}?${searchParams.toString()}`;
};

export const LoadersPageContent: FC = () => {
  return (
    <div>
      <h1>Loaders</h1>
      <section>
        <h2>Default loader</h2>
        <Image
          src='https://images.unsplash.com/photo-1684755343416-f402793a7d23'
          alt='a person standing in the middle of a body of water'
          width={411}
          height={231}
        />
      </section>
      <p>Let Next.js optimizes the image on its Node server.</p>
      <hr />
      <section>
        <h2>Custom loader</h2>
        <Image
          src='https://images.unsplash.com/photo-1684755343416-f402793a7d23'
          alt='a person standing in the middle of a body of water'
          width={411}
          height={231}
          loader={unsplashLoader}
        />
        <p>Opt-out Next.js optimization. Use Unsplash{"'"}s CDN.</p>
      </section>
    </div>
  );
};
