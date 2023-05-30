import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1 className='text-3xl font-bold'>Next Image</h1>
      <nav className='mt-4'>
        <ul className='flex flex-col justify-center gap-2'>
          <li>
            <Link href='/optimization'>
              → On-demand Image File Optimization
            </Link>
          </li>
          <li>
            <Link href='/lazy-load'>→ Lazy Loading</Link>
          </li>
          <li>
            <Link href='/priority-load'>→ Priority Loading</Link>
          </li>
          <li>
            <Link href='/responsive'>→ Responsive Image</Link>
          </li>
          <li>
            <Link href='/remote'>→ Static Import and Remote Images</Link>
          </li>
          <li>
            <Link href='/loaders'>→ Loaders</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
