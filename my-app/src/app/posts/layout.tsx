'use client';

import { useRouter } from 'next/navigation';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();

  const hanglePost = () => {
    console.log('hello');
    router.push('/');
  };

  return (
    <html lang='en'>
      <body>
        <h1>This is Header</h1>
        {children}

        <button onClick={hanglePost}>Post was added</button>
      </body>
    </html>
  );
}
