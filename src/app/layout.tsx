import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '@/styles/global.css';

const yesevaOne = localFont({
  src: '../../public/assets/fonts/yeseva-one/yeseva-one-regular.woff2',
  weight: '400',
  style: 'normal',
  display: 'swap',
  variable: '--font-yeseva-one',
});

const inter = localFont({
  src: [
    {
      path: '../../public/assets/fonts/inter/inter-regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/assets/fonts/inter/inter-medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/assets/fonts/inter/inter-semi-bold.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'El Guling Cafe',
  description:
    'Immerse yourself in a symphony of exquisite flavors, surrounded by refined decor and unparalleled service in luxury restaraunt.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" sizes="192x192" href="/favicon/favicon-192x192.png" type="image/png" />
        <link rel="icon" sizes="96x96" href="/favicon/favicon-96x96.png" type="image/png" />
        <link rel="icon" sizes="48x48" href="/favicon/favicon-48x48.png" type="image/png" />
        <link rel="icon" sizes="32x32" href="/favicon/favicon-32x32.png" type="image/png" />
      </head>
      <body className={`${yesevaOne.variable} ${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
