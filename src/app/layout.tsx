import type { Metadata } from "next";
import localFont from 'next/font/local';

const yesevaOne = localFont({
  src: '../../public/assets/fonts/yeseva-one/yeseva-one-regular.woff2',
  weight: '400',
  style: 'normal',
  display: 'block',
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
  display: 'block',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'El Guling Cafe',
  description:
    "Immerse yourself in a symphony of exquisite flavors, surrounded by refined decor and unparalleled service in luxury restaraunt.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${yesevaOne.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
