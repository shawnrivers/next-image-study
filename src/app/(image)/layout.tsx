import Link from 'next/link';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <header>
        <Link href='/' className='text-indigo-600'>
          ← Home
        </Link>
      </header>
      <main className='mt-4 prose prose-img:m-0 max-w-none'>{children}</main>
    </div>
  );
}
