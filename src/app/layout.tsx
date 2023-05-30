import './globals.css';

export const metadata = {
  title: 'Next Image',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <div className='min-h-screen p-8 max-w-4xl mx-auto'>
          {children}
        </div>
      </body>
    </html>
  );
}
