import photo1 from 'public/images/photo-1.jpg';
import Image from 'next/image';

export const metadata = {
  title: 'On-demand Image File Optimization',
};

export default function Optimization() {
  return (
    <div>
      <h1 className='text-3xl font-bold'>On-demand Image File Optimization</h1>
      <section>
        <h2 className='font-bold'>
          <code>{'<img>'}</code> tag
        </h2>
        <img
          src={photo1.src}
          alt='a person standing in the middle of a body of water'
          width={411}
          height={231}
        />
      </section>
      <hr />
      <section>
        <h2 className='font-bold'>
          <code>next/image</code>
        </h2>
        <Image
          src={photo1.src}
          alt='a person standing in the middle of a body of water'
          width={411}
          height={231}
        />
        <h3>Explanation</h3>
        <p>
          The actual <code>{'<img>.src'}</code> becomes: <br />
          <code>
            {
              '/_next/image?url=/_next/static/media/photo-1.[hash].jpg&w=640&q=75'
            }
          </code>
          .
        </p>
        <p>
          This is kinda like an API endpoint. Whenever the request reaches the
          server, the Node server optimizes the image on-demand.
        </p>
        <p>To break down the URL:</p>
        <ul>
          <li>
            <code>/_next/image</code>: The Node server endpoint for Next.js
            image optimization
          </li>
          <li>
            <code>url=/_next/static/media/photo-1.[hash].jpg</code>: The source
            URL of the image to optimize
          </li>
          <li>
            <code>w=640</code>: The target width to optimize the image to
          </li>
          <li>
            <code>q=75</code>: The quality to optimize the image
          </li>
        </ul>
      </section>
    </div>
  );
}
