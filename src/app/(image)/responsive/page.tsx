import photo1 from 'public/images/photo-1.jpg';
import photo2 from 'public/images/photo-2.jpg';
import Image from 'next/image';

export const metadata = {
  title: 'Responsive Image',
};

export default function Responsive() {
  return (
    <div>
      <h1>Responsive Image and Resolution Switch</h1>
      <section>
        <h2>
          <code>fill</code> prop (automatic resolution switch)
        </h2>
        <div className='w-full aspect-[5760/3240] relative'>
          <Image
            src={photo1.src}
            fill
            alt='a person standing in the middle of a body of water'
          />
        </div>
        <p>
          The <code>srcset</code> string is auto-generated by Next.js based on{' '}
          <code>next.config.js</code>
          {"'"}s <code>deviceSizes</code> and <code>imageSizes</code> arrays.
        </p>
      </section>
      <hr />
      <section>
        <h2>
          <code>fill</code> + <code>sizes</code> props (more fine-tuned
          resolution switch)
        </h2>
        <div className='w-full aspect-[5760/3240] relative'>
          <Image
            src={photo2.src}
            fill
            alt='a person standing in the middle of a body of water'
            sizes='(max-width: 832px) 100vw, 832px'
          />
        </div>
        <p>
          <code>srcset</code> and <code>sizes</code>:
        </p>
        <ul>
          <li>
            <code>srcset</code>: source files and their inherent sizes
          </li>
          <li>
            <code>sizes</code>: the size of the rendered image in the layout
            sizes
          </li>
        </ul>
      </section>
    </div>
  );
}
